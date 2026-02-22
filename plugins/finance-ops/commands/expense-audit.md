# /expense-audit

Categorize expenses, detect anomalies, and check policy compliance.

## What this does
Reviews transaction data to categorize expenses, identify unusual patterns, flag policy violations, and surface spending trends. Helps prepare for internal or external audits.

## When to use
- Monthly expense reviews and reconciliation
- Audit preparation (internal or external)
- Expense policy enforcement
- Spend analysis and cost optimization

## How to use
Share:
- Transaction exports (CSV, spreadsheet, or raw data)
- Your expense policy and approval thresholds
- Chart of accounts for categorization
- Any specific areas of concern

## Example
```
/expense-audit

Here are last month's corporate card transactions (142 transactions, $67K total).

Our expense policy:
- Meals: $75/person limit
- Travel: requires pre-approval over $500
- Software: requires IT approval over $100/month
- No personal expenses

Please categorize everything, flag policy violations, and tell me
if anything looks unusual compared to typical monthly spend of ~$55K.
```

## What you'll get
- **Categorized transactions** - Sorted by GL account with subtotals
- **Anomaly flags** - Unusual amounts, vendors, or patterns
- **Policy violations** - Transactions exceeding limits or missing approvals
- **Spending trends** - Category-level analysis and month-over-month changes
