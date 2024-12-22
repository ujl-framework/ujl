# UJL Components

This package contains reusable UI components used across the UJL Framework. Components are visual elements that can be styled and configured but are not tied to the UJL system's structure or logic.

## What are Components?
Components are **purely visual elements** that:
- Provide basic UI functionality (e.g., buttons, modals, input fields).
- Are independent of UJL's JSON structure or Renderer logic.
- Can be freely used by developers to create new Modules or standalone interfaces.
- Can be styled using UJL Themes.

Components are generic and can be styled or configured using UJL Themes (`.ujlt` files).

## Examples
- A **Button Component**:
    - Is a visual representation of a button.
    - Can be reused in different modules or projects.
- A **Modal Component**:
    - Provides a pop-up interface but does not define its behavior in UJL documents.

## Key Difference from Modules
- **Modules** are UJL-specific and tied to the JSON structure and rendering logic.
- **Components** are visual tools that can be used to build Modules but do not interact directly with the UJL system.

## Note
Components are designed for flexibility and reusability across different parts of the UJL Framework and beyond.