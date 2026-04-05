# Noria Arabic ERP

An Arabic-language Enterprise Resource Planning (ERP) system - a static web application served via Node.js.

## Project Structure

```
server.js               # Node.js HTTP static file server (port 5000, host 0.0.0.0)
package.json            # Node.js project config with start script
stitch_frontend/        # All static HTML pages (Arabic RTL UI)
  index.html            # Landing/navigation page
  dashboard_updated/    # Dashboard with KPIs
  create_invoice_updated/    # Invoice creation
  products_inventory_updated/ # Inventory management
  customer_management_updated/ # Customer CRM
  analytics_reports_updated/  # Analytics & reports
  settings_updated_with_logo_currency/ # Settings page
  noria_arabic_erp/     # Design system documentation
stitch/                 # Original extracted zip content (not served)
stitch.zip              # Original project archive
```

## Tech Stack

- **Frontend**: Static HTML with Tailwind CSS (CDN) + Google Fonts (IBM Plex Sans Arabic, Manrope)
- **Server**: Node.js built-in `http` module (no framework)
- **Language Direction**: Arabic RTL (`dir="rtl"`)

## Running the App

```bash
node server.js
```

Serves `stitch_frontend/` on port 5000 at host 0.0.0.0.

## Design System

Navy/teal color palette (#00647c primary, #011d35 sidebar), IBM Plex Sans Arabic typography, RTL-first layout.
