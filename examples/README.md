# Examples

This folder contains example files for Unified JSON Layout (UJL). These examples demonstrate the basic structure and usage of `.ujl` and `.ujlt` files.

## Structure
- **`editor-app/`**: A simple web application that uses the UJL Editor.
- **`layouts/`**: Contains `.ujl` files that define layouts.
    - **hello-world.ujl**: A simple example to get started with UJL.
- **`themes/`**: Contains `.ujlt` files that define themes using CSS variables.
    - **default.ujlt**: A base theme that sets up CSS variables that represent our own Corporate Identity. It is also used as default and fallback configuration for all UJL-based applications.

## Purpose
These examples serve as:
1. References for developers while building and testing UJL-based applications.
2. Demonstrations of how UJL separates content, structure, and design.
3. Illustrations of how a UJL Theme, defined as CSS variables, can configure both the rendered layouts and the UJL Editor's visual appearance.

## Editor Configuration via Theme
The `default.ujlt` file in the `themes/` folder is also used as default configuration for the UJL Editor. By setting an other theme file, developers can style the Editor to match their application's look and feel.

### Example:
- **Primary color**: Set `c-primary` to define the main accent color. This color will be set as `--ujl-c-primary` variable in the Renderer's CSS.
- ... more examples to come.