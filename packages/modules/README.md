# UJL Modules

This package contains the atomic and layout modules for the UJL Framework. Modules are directly tied to the UJL system and define how content is structured, rendered, and managed.

## What are Modules?
Modules are **UJL-specific building blocks** that:
- Define their identity and behavior in a UJL document (`.ujl` files).
- Inform the Renderer how to display the module.
- Specify to the Editor which parameters are expected for configuration.

Modules are tightly integrated into the UJL ecosystem and bridge the gap between the JSON structure and the visual output.

## Structure
- **Atomic Modules**: Small, reusable elements (e.g., buttons, text fields).
- **Layout Modules**: Structural components for arranging content (e.g., grids, headers).

## Examples
- A **Button Module** might specify:
    - A `label` parameter for the button text.
    - A `action` parameter to define the button's behavior.
- A **Grid Module** might define:
    - Rows and columns for arranging other modules.

## Note
Modules represent the functional and structural components of UJL. They are built using reusable UI components from the `components` package.