import fs from 'node:fs'
import path from 'node:path'

const directoriesToCheck = ['app', 'components', 'content']
const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md']
// Match placeholders like [DURATION_1], [TODO], [PLACEHOLDER] in content or string literals
// Avoid matching code array index access like arr[0]
const placeholderPattern = /\[[A-Z][A-Z_0-9]+\]/g

let violations = []

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  lines.forEach((line, idx) => {
    // Skip comments and checker regex definitions
    const trimmed = line.trim()
    if (
      trimmed.startsWith('//') ||
      trimmed.startsWith('/*') ||
      trimmed.startsWith('*') ||
      line.includes('placeholderPattern') ||
      line.includes('check-placeholders') ||
      line.includes('[DONE]') // SSE event stream protocol marker
    ) {
      return
    }

    // Only test if it's inside quotes or JSX text
    const matches = line.match(placeholderPattern)
    if (matches) {
      violations.push({
        file: filePath,
        line: idx + 1,
        content: trimmed,
        matches,
      })
    }
  })
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        scanDir(fullPath)
      }
    } else if (fileExtensions.some((ext) => file.endsWith(ext))) {
      checkFile(fullPath)
    }
  }
}

for (const dir of directoriesToCheck) {
  scanDir(path.resolve(process.cwd(), dir))
}

if (violations.length > 0) {
  console.error('\x1b[31m[ERROR] Bracketed placeholder(s) detected in source content:\x1b[0m')
  violations.forEach((v) => {
    console.error(`  ${v.file}:${v.line} -> ${v.matches.join(', ')} in "${v.content}"`)
  })
  process.exit(1)
} else {
  console.log('\x1b[32m[PASS] No bracketed placeholders found in content.\x1b[0m')
  process.exit(0)
}
