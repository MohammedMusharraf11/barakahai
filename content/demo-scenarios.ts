export interface DemoScenario {
  id: string
  name: string
  incoming: {
    channel: string
    sender: string
    timestamp: string
    title: string
    content: string
    meta?: { label: string; value: string }[]
  }
  steps: {
    id: string
    name: string
    detail: string
  }[]
  outputs: {
    extraction: {
      intent: string
      urgency: "Normal" | "High" | "Urgent"
      keyFields: { label: string; value: string }[]
    }
    draftReply: {
      recipient: string
      subject: string
      body: string
    }
    task: {
      title: string
      assignee: string
      dueDate: string
      status: string
    }
  }
}

export const demoScenarios: Record<string, DemoScenario> = {
  "customer-support": {
    id: "customer-support",
    name: "Customer support",
    incoming: {
      channel: "WhatsApp Business (Illustrative)",
      sender: "Marcus Vance — Operations Lead",
      timestamp: "Today, 10:14 AM",
      title: "Reschedule installation request",
      content:
        "Hi team, our site delivery window was pushed. Can we reschedule our system installation from this Thursday 2 PM to Friday morning 10 AM? Need to ensure engineer access is cleared.",
      meta: [
        { label: "Account", value: "Vance Logistics (#VL-409)" },
        { label: "Priority Tier", value: "Tier 1 Enterprise" },
      ],
    },
    steps: [
      { id: "read", name: "Read incoming message", detail: "Parsed customer query & verified account credentials." },
      { id: "extract", name: "Extract entities & schedule", detail: "Identified requested slot: Friday 10:00 AM." },
      { id: "draft", name: "Draft context-aware response", detail: "Matched technician availability in calendar." },
      { id: "create-task", name: "Create ERP calendar task", detail: "Reserved provisional engineer dispatch slot." },
      { id: "route", name: "Route to human reviewer", detail: "Prepared 1-click confirmation for account manager." },
    ],
    outputs: {
      extraction: {
        intent: "Reschedule Appointment",
        urgency: "High",
        keyFields: [
          { label: "Current Slot", value: "Thursday 2:00 PM" },
          { label: "Requested Slot", value: "Friday 10:00 AM" },
          { label: "Engineer Availability", value: "Verified Open (Lead Tech: K. Patel)" },
          { label: "Access Clearance", value: "Pending gate pass confirmation" },
        ],
      },
      draftReply: {
        recipient: "Marcus Vance (marcus@vancelogistics.mock)",
        subject: "Confirmation: Rescheduled Installation to Friday 10:00 AM",
        body: "Hi Marcus, I've reserved Friday at 10:00 AM for your installation with our lead technician, K. Patel. We have noted the delivery change and dispatched the site security clearance. Please let us know if the gate pass requires any specific vehicle details.",
      },
      task: {
        title: "Confirm engineer dispatch for Vance Logistics",
        assignee: "Account Manager (Review & Dispatch)",
        dueDate: "Today by 2:00 PM",
        status: "Ready for Approval",
      },
    },
  },

  "operations": {
    id: "operations",
    name: "Operations",
    incoming: {
      channel: "Internal Slack / ERP Trigger (Illustrative)",
      sender: "Inventory Ops Monitor",
      timestamp: "Today, 09:30 AM",
      title: "Stock threshold breach & reorder trigger",
      content:
        "Alert: Warehouse 3 buffer stock for Component C-82 dropped to 14 units (threshold: 30 units). Estimated depletion: 48 hours. Supplier reorder contract requires minimum order quantity 100 units.",
      meta: [
        { label: "Facility", value: "Distribution Hub North" },
        { label: "Supplier", value: "AeroTech Components Ltd." },
      ],
    },
    steps: [
      { id: "read", name: "Read telemetry notification", detail: "Detected inventory threshold breach alert." },
      { id: "extract", name: "Extract SKU & consumption rate", detail: "Component C-82, 14 left, burn rate 8/day." },
      { id: "draft", name: "Draft purchase requisition", detail: "Calculated PO for 120 units under contracted pricing." },
      { id: "create-task", name: "Create procurement ticket", detail: "Logged PO-8841 in procurement workflow." },
      { id: "route", name: "Route to human reviewer", detail: "Escalated to Supply Chain Lead for authorization." },
    ],
    outputs: {
      extraction: {
        intent: "Inventory Restock & Requisition",
        urgency: "Urgent",
        keyFields: [
          { label: "SKU", value: "C-82 Precision Servo" },
          { label: "Current Stock", value: "14 units (Safety margin: 30)" },
          { label: "Suggested Reorder", value: "120 units ($4,800.00)" },
          { label: "Vendor SLA", value: "24hr priority dispatch guaranteed" },
        ],
      },
      draftReply: {
        recipient: "procurement@aerotech-mock.com",
        subject: "Purchase Order Requisition: PO-8841 (Component C-82)",
        body: "Hello AeroTech Team, pursuant to Master Services Agreement #MSA-2024, please authorize expedited replenishment of 120 units of C-82 Precision Servos to Distribution Hub North for delivery by tomorrow 4:00 PM.",
      },
      task: {
        title: "Approve expedited PO-8841 ($4,800.00)",
        assignee: "Elena Rostova (Supply Chain Director)",
        dueDate: "Today by 11:30 AM",
        status: "Pending Signature",
      },
    },
  },

  "documents": {
    id: "documents",
    name: "Documents",
    incoming: {
      channel: "Vendor Inbound Invoicing (Illustrative)",
      sender: "Apex Consulting Partners",
      timestamp: "Today, 08:45 AM",
      title: "PDF Invoice: INV-2026-9042",
      content:
        "Attached: Monthly Cloud Infrastructure Services Invoice #INV-2026-9042 for billing period ended 20th Sep. Total Amount Due: $14,250.00 net 30. Bank transfer details attached.",
      meta: [
        { label: "File", value: "invoice_apex_sep2026.pdf (1.2 MB)" },
        { label: "Contract Match", value: "MSA-APX-8803" },
      ],
    },
    steps: [
      { id: "read", name: "Read and OCR document", detail: "Extracted line items, tax ID, and remittance details." },
      { id: "extract", name: "Extract line item breakdown", detail: "Matched 3 project milestones against contract rates." },
      { id: "draft", name: "Draft accounting discrepancy check", detail: "Validated math: subtotal + VAT match exactly." },
      { id: "create-task", name: "Create payment voucher", detail: "Prepared ledger entry with cost centre tagging." },
      { id: "route", name: "Route to human reviewer", detail: "Routed to Finance Controller for dual approval." },
    ],
    outputs: {
      extraction: {
        intent: "Accounts Payable Invoice Processing",
        urgency: "Normal",
        keyFields: [
          { label: "Invoice Number", value: "INV-2026-9042" },
          { label: "Total Amount", value: "$14,250.00 USD" },
          { label: "Payment Terms", value: "Net 30 (Due Oct 24, 2026)" },
          { label: "Cost Allocation", value: "Engineering — Cloud Ops (Dept 410)" },
        ],
      },
      draftReply: {
        recipient: "billing@apexconsulting-mock.com",
        subject: "Invoice Received & Scheduled: INV-2026-9042",
        body: "Hello Apex Accounts Team, your invoice INV-2026-9042 for $14,250.00 has been successfully ingested and reconciled against project milestone deliverables. Payment is scheduled in accordance with standard Net 30 terms.",
      },
      task: {
        title: "Release payment voucher #AP-9042 ($14,250.00)",
        assignee: "Tariq Mansoor (Finance Controller)",
        dueDate: "Friday by 5:00 PM",
        status: "Audit Cleared",
      },
    },
  },
}
