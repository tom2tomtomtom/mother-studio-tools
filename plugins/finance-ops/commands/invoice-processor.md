# /invoice-processor

Extract, validate, and process invoice data with intelligent matching.

## What this does
Extracts data from invoices, validates against purchase orders, and flags discrepancies for review. Handles GL coding suggestions and exception reporting.

## When to use
- Processing vendor invoices
- AP data entry and validation
- Invoice-to-PO matching
- Catching duplicate or incorrect invoices

## How to use
Share:
- Invoice PDFs, images, or data
- Purchase order details or PO list
- Your chart of accounts
- Vendor master list (if available)

## Example
```
/invoice-processor

Here are 5 invoices from our top vendors this month:
- Invoice #4521 from Acme Supply Co - $12,450
- Invoice #4522 from Tech Services Inc - $8,200
- Invoice #4523 from Office Depot - $1,847.50

PO references:
- PO-2024-089 (Acme, $12,000)
- PO-2024-091 (Tech Services, $8,200)

Flag anything that doesn't match and suggest GL codes.
```

## What you'll get
- **Extracted data table** - Vendor, amount, date, line items, tax
- **Validation results** - PO matching with variance flags
- **GL coding suggestions** - Account assignments based on your chart of accounts
- **Exception list** - Discrepancies, missing POs, duplicate detection
