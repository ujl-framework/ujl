# Contributing

Thank you for your interest in contributing to the UJL Framework! This project is still in its early stages, and contribution guidelines will evolve as we progress.

## How You Can Help

Here are some ways you can help us shape this new language:
- **Feedback**: Share your thoughts on the project and its goals.
- **Ideas**: Propose new features, improvements, or use cases.
- **Connections**: Introduce us to potential partners or collaborators.
- **Stay tuned**: Follow our progress and spread the word.

## Development Workflow

### Current Focus: `develop`
During the initial phase of the project, **all work will be done in the `develop` branch**. This helps us iterate quickly and keep the `main` branch clean for later releases. Once the project stabilizes, `main` will become the branch for production-ready code.

### Branching Strategy
We use the following branching strategy to keep our repository clean and organized:

- **`develop`**: The active branch where all work is currently happening.  
  **Important:** For now, please create all feature and bugfix branches from `develop`.
- **`main`**: Reserved for stable, production-ready releases.  
  **Currently inactive during the initialization phase.**
- **`feat/<feature-name>`**: Feature-specific branches derived from `develop`.
- **`fix/<bug-name>`**: Bugfix-specific branches derived from `develop`.

In later phases, additional branches such as `hotfix/…` or `release/…` may be introduced.

### Branch Naming Conventions
When creating branches, please adhere to the following naming conventions:
- **Features**: `feat/<feature-name>` (e.g., `feat/user-authentication`)
- **Bugfixes**: `fix/<bug-name>` (e.g., `fix/login-error`)

This ensures consistency across the repository and helps the team quickly identify the purpose of each branch.

## Pull Requests
When submitting a pull request:
1. **Ensure your branch is up to date** with `develop`.
2. **Follow the branch naming conventions** outlined above.
3. Provide a clear description of the changes and their purpose.
4. Link related issues (if any) using GitHub's issue referencing syntax.

## Code Reviews
All pull requests require at least one approval before merging into `develop`. The goal is to:
- Maintain high code quality.
- Encourage collaboration and knowledge sharing.
- Ensure consistency with project goals and architecture.

## To Be Defined
As the project grows, we will expand these guidelines to include:
- Code style standards.
- Testing requirements.
- CI/CD workflows.