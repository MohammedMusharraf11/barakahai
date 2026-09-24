import { test, expect } from '@playwright/test'
import path from 'path'

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
]

const sectionSelectors = [
  { name: 'hero', selector: '#top' },
  { name: 'intro', selector: '.intro' },
  { name: 'demo', selector: '#demo' },
  { name: 'solutions', selector: '#solutions' },
  { name: 'approach', selector: '#approach' },
  { name: 'proof', selector: '.proof' },
  { name: 'faq', selector: '#faq' },
  { name: 'contact', selector: '#contact' },
  { name: 'footer', selector: '.site-footer' },
]

test.describe('BarakahAI Visual and Layout QA', () => {
  for (const vp of viewports) {
    test(`Visual test at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height })
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })

      // 1. Assert no horizontal overflow (scrollWidth <= innerWidth)
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth
      })
      expect(hasHorizontalOverflow, `Horizontal overflow detected at ${vp.width}px`).toBe(false)

      // 2. Assert no rendered text matching /\[[A-Z_0-9]+\]/
      const renderedText = await page.evaluate(() => document.body.innerText)
      const placeholderMatch = renderedText.match(/\[[A-Z_0-9]+\]/)
      expect(placeholderMatch, `Found placeholder ${placeholderMatch?.[0]} in rendered text`).toBeNull()

      // 3. Capture screenshot of each section
      for (const section of sectionSelectors) {
        const el = page.locator(section.selector)
        if (await el.count() > 0) {
          await el.scrollIntoViewIfNeeded()
          await page.waitForTimeout(200)
          await el.screenshot({
            path: path.join(process.cwd(), 'screenshots', `${vp.name}-${section.name}.png`),
          })
        }
      }
    })
  }
})
