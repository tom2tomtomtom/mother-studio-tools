# /accessibility-audit

Audit a design or interface for WCAG 2.1 compliance.

## What this does
Evaluates a design against WCAG 2.1 AA standards, identifies compliance gaps, and provides specific fixes with priority levels.

## When to use
- Before development handoff
- Responding to accessibility complaints
- Want to meet compliance requirements
- Improving usability for all users

## How to use
Share:
- The design or interface to audit (describe or screenshot)
- Target compliance level (AA or AAA)
- Key user flows to evaluate
- Any known accessibility concerns

## Example
```
/accessibility-audit

E-commerce checkout flow, 3 steps:
1. Cart review - product cards with images, quantity selector, remove button
2. Shipping form - name, address, phone fields with inline validation
3. Payment - credit card form with "Place Order" button

Target: WCAG 2.1 AA
Concern: Our error messages might not be accessible to screen readers
```

## What you'll get
1. **Compliance summary** - Pass/fail against WCAG criteria
2. **Critical issues** - Must-fix problems that block access
3. **Major issues** - Significant barriers for some users
4. **Minor issues** - Improvements for better experience
5. **Remediation guide** - Specific fixes with code/design examples
