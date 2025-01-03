# UJL – Unified JSON Layout

Unified JSON Layout (UJL) is an emerging open standard that seeks to redefine how content, structure, and design are managed. By separating these layers, UJL aims to create a flexible, modular approach to web development.

The **UJL Framework** is the first open-source implementation of this idea. It provides the tools to process UJL files, render content, and edit layouts and themes intuitively.

__Please note__: This project is still in the early stages of development. We welcome feedback and ideas from the community.

## Why UJL?
We are in the process of developing UJL as a universal language for web content and design. Our goal is to create a format that fosters collaboration and consistency across different disciplines, systems, and tools.

## Features
- **Emerging Standard**: Define content, structure, and design in standardized JSON files.
- **Renderer**: Processes `.ujl` (ujl content) and `.ujlt` (theme configuration) files into visual ContentFrames.
- **Editor**: An intuitive interface for content and design management.
- **Modules**: Atomic and layout components for modular web development.
- **Themes**: Centralized design templates for consistent styling.

## Installation
Clone this repository and get started:
```bash
git clone https://github.com/ujl-framework/ujl.git
cd ujl
pnpm install
```

## Project Structure

- **[examples](examples)**: Demonstrates the usage of UJL and supports the development of the UJL Framework by providing example and default content.
- **[examples/editor-app](examples/editor-app)**: A simple web application that uses the UJL Editor.
- **[packages/core](packages/core)**: Contains the essential logic and tools for the UJL system.
- **[packages/modules](packages/modules)**: Contains UJL-specific **building blocks** that integrate directly with the Renderer and Editor.
- **[packages/components](packages/components)**: Contains reusable **visual elements** for UI design.
- **[packages/crafter](packages/crafter)**: The visual editor for UJL, allowing users to manage content and design.
- **[documentation](documentation)**: Centralized resources for learning, using and contributing to UJL.

## Get Involved
UJL is an open-source project, and we welcome contributions and feedback from the community. Check out [CONTRIBUTING.md](CONTRIBUTING.md) to learn more about how you can help us shape this new language.

## License
- This is the next thing we need to figure out. For now, all rights reserved. 🤷‍♂️ 
- You will find the license information in [LICENSE.md](LICENSE.md).