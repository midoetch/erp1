# Design System Document

## 1. Overview & Creative North Star: "The Precision Architect"
This design system is built to transform the traditional, often cluttered ERP landscape into a high-end editorial experience. Our Creative North Star is **"The Precision Architect."** It rejects the "spreadsheet-trapped" aesthetic of legacy business software in favor of a layout that breathes, using intentional asymmetry and tonal depth to guide the user's eye.

The system focuses on a Right-to-Left (RTL) first approach, where information density is balanced by sophisticated "white space" that isn't just empty—it’s a structural element. By utilizing high-contrast typography scales and overlapping surface layers, we create a sense of authoritative calm, ensuring that complex financial and operational data feel manageable and premium.

---

## 2. Colors: Tonal Authority
The palette is anchored by a deep, commanding navy and a vibrant teal primary, providing a "Corporate Couture" feel.

*   **Primary (`#00647c`) & Primary Container (`#007f9d`):** These are reserved for high-intent actions. Use the Primary Container for large surface areas like active state highlights, and the Primary for the most critical CTA.
*   **Secondary/Sidebar (`#011d35` to `#314863`):** The deep navy provides a stable anchor. Use `on_secondary_fixed` for sidebar backgrounds to create a high-contrast boundary against the content area.
*   **Surface Hierarchy:** We utilize the `surface_container` tokens (`lowest` to `highest`) to define importance.
    *   **The "No-Line" Rule:** Explicitly prohibit the use of 1px solid borders for sectioning content. Boundaries must be defined through background shifts. For example, a data entry form should sit on `surface_container_lowest` (#ffffff) while the surrounding page background uses `surface` (#f7f9fb).
    *   **The Glass & Gradient Rule:** For the sidebar or floating headers, use a subtle gradient from `primary` to `primary_container` at a 15-degree angle. This adds "soul" and prevents the UI from looking flat or "templated."

---

## 3. Typography: Editorial Clarity
Typography is the backbone of this design system. We pair **Manrope** (for English/Numerics) with a high-end Arabic sans-serif (such as *IBM Plex Sans Arabic* or *29LT Azat*) to maintain a professional, crisp edge.

*   **Display & Headline (Manrope/Arabic Bold):** Used sparingly for dashboard overviews. The large scale (`display-lg` at 3.5rem) should feel like a magazine header, commanding attention to key KPIs.
*   **Title & Body (Inter/Arabic Regular):** These levels focus on readability. Titles (`title-lg`) guide the user through form sections, while Body (`body-md`) handles the heavy lifting of ERP data entry.
*   **Label (Inter/Arabic Medium):** These are the unsung heroes. Use `label-md` for table headers and input labels, ensuring they are always paired with `on_surface_variant` (#3e484d) to provide a clear distinction from user-generated content.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is a function of color, not just shadow. We move away from structural lines and toward a "Stacked Sheet" philosophy.

*   **The Layering Principle:** To create hierarchy, stack surfaces. Place a `surface_container_lowest` card (the highest elevation) on a `surface_container_low` background. The subtle shift from `#ffffff` to `#f2f4f6` creates a sophisticated lift that feels integrated into the environment.
*   **Ambient Shadows:** When a component must "float" (like a user profile dropdown), use an extra-diffused shadow. 
    *   *Formula:* `0px 8px 24px rgba(25, 28, 30, 0.06)`. This uses the `on_surface` color at a very low opacity to mimic natural light.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline_variant` (#bdc8ce) at 20% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use `surface_container_low` with a 12px backdrop-blur for floating headers. This allows the navy of the sidebar or the teal of a hero section to bleed through, softening the interface.

---

## 5. Components: The Building Blocks
Every component must adhere to the `md` (0.375rem) or `lg` (0.5rem) roundedness scale to feel "crisp yet approachable."

*   **Side Navigation:** Nested items should not use icons. Instead, use a vertical "Active Indicator" line in `primary` on the leading edge (right side for RTL) and a `surface_variant` background for the parent container.
*   **Buttons:**
    *   **Primary:** A solid `primary` fill with `on_primary` text. No border.
    *   **Secondary:** A `surface_container_high` fill. This feels more integrated than an outlined button.
*   **Data Tables:** Forbid the use of horizontal or vertical divider lines. Use `surface_container_low` for the header row and alternating `surface` and `surface_container_lowest` for rows (zebra striping) to create a rhythmic, line-free structure.
*   **Input Fields:** Use a "Soft Inset" style. A `surface_container_highest` background with a 1px `outline_variant` at 10% opacity. When focused, the border transitions to a 2px `primary` stroke.
*   **Status Chips:** Use high-chroma backgrounds with low opacity (e.g., `error_container` at 40% for "Overdue") to create a modern "tinted" look rather than a solid, heavy block of color.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use the Spacing Scale religiously. An ERP feels complex when spacing is inconsistent. Use `spacing-10` (2.25rem) between major sections to let the data breathe.
*   **Do** ensure all icons are "Line Art" style with a consistent 1.5px stroke weight to match the "Precision Architect" theme.
*   **Do** lean into the RTL layout by justifying text to the right and ensuring the primary navigation (Sidebar) stays on the right, providing a natural starting point for the eye.

### Don't:
*   **Don't** use 100% black (#000000). Use `on_surface` (#191c1e) for all primary text to maintain a high-end, soft-contrast feel.
*   **Don't** use default browser shadows. They are too heavy and break the "Glass & Paper" metaphor of the system.
*   **Don't** use "Alert Red" for everything. Use the `error` and `error_container` tokens carefully; an ERP should notify, not alarm.
*   **Don't** use dividers between list items. Use `spacing-4` (0.9rem) of vertical white space to separate thoughts.