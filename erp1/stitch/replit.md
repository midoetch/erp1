# Noria Arabic ERP

A collection of Arabic RTL UI pages for an ERP (Enterprise Resource Planning) system, designed with the "Precision Architect" design philosophy.

## Project Structure

```
stitch/               # All static HTML pages
  index.html          # Landing/navigation page
  dashboard_updated/  # Dashboard with KPIs
  create_invoice_updated/  # Invoice creation
  products_inventory_updated/  # Inventory management
  customer_management_updated/  # Customer CRM
  analytics_reports_updated/   # Analytics & reports
  settings_updated_with_logo_currency/ # Settings page
  noria_arabic_erp/   # Design system documentation
server.js             # Node.js static file server (port 5000)
stitch.zip            # Original project archive
```

## Tech Stack

- **Frontend**: Static HTML with Tailwind CSS (CDN) + Google Fonts (IBM Plex Sans Arabic, Manrope)
- **Server**: Node.js built-in `http` module
- **Language Direction**: Arabic RTL (`dir="rtl"`)

## Running the App

```bash
node server.js
```

Serves files from the `stitch/` directory on port 5000.

## Design System

The design is documented in `stitch/noria_arabic_erp/DESIGN.md`. Key principles:
- Navy/teal color palette (#00647c primary, #011d35 sidebar)
- IBM Plex Sans Arabic + Manrope typography
- RTL-first layout
- Elevation via color shifts (no divider lines)

## Deployment

Configured as `autoscale` deployment running `node server.js`.
