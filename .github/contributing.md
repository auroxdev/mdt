# Contributing

Thank you for taking the time to contribute!

These guidelines will help you help us in the best way possible regardless of your skill level. We ask that you try to read everything related to the way you'd like to contribute and try and use your best judgement for anything not covered.

Make sure to also read our [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).

## Issues

Open a new issue to report a bug or request a new feature or improvement.

Before opening a new issue:

- Search for existing issues; maybe someone else already experienced the same problem that you're having! Duplicate issues will be closed.
- Download the latest release of the resource you are opening the issue for to make sure that it wasn't already fixed. Issues that are already fixed are considered invalid and will be closed.

When opening a new issue, make sure to pick the right type of form and fill it out. The more information you provide, the easier it will be for us to work on your new issue. Issues that are invalid or do not follow the correct form may be ignored or even closed.

## Pull Requests

Open a new pull request to contribute code.

You can use your own editor of choice, but we recommend using [VSCode](https://code.visualstudio.com/) with these extensions:

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Lua Language Server](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [CfxLua IntelliSense](https://marketplace.visualstudio.com/items?itemName=overextended.cfxlua-vscode)

If you want to contribute code unrelated to an existing issue, you should open an issue or pull request to discuss it with our team and ask whether your change is wanted, especially if you are planning on adding new features or large designs.

Before opening a pull request:

- Make sure that your contribution fits our [code conventions](#code-conventions) described below. After opening a pull request your code will be checked according to them.
- Make sure that your pull request is small and focused. Break it into multiple smaller pull requests if not (see [Small Pull Request Manifesto](https://github.com/PlaytikaOSS/small-pull-request-manifesto)).
- It is recommended to test your changes to make sure they work and don't break existing functionality.

When opening a pull request, make sure to follow the template and explain your changes. If you are trying to contribute something related to a GitHub issue, make sure to mention it as well.

## Code Conventions

Below are conventions that you must follow when contributing code.

### Commit Message Conventions

- Keep the first line of your commit message short and descriptive.
- Commit messages and pull request titles must follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
  - Use `fix:` when patching a bug.
  - Use `feat:` when introducing a new feature.
  - Use `refactor:` when altering code without changing functionality.
  - Use `chore:` when your changes don't alter production code.
  - Append a `!` after the type/scope of the feature when you change code and introduce a breaking API change. Optionally add a footer to the bottom of your commit message separated by 2 newlines, starting with `BREAKING CHANGE:`, and explaining the breaking change.

### Lua Conventions

###### *Consider [this guide](https://manason.github.io/effective-fivem-lua/) when working with FiveM Lua*

#### General Style

- Use 4 space indentation for Lua files and 2 space indentation for CSS, JS, TS, or SQL files.
- Prioritize the use of local variables and functions instead of global ones.
- Avoid redundancy by converting repetitive operations into flexible, reusable functions.
- Avoid clumping and compacting code. Keep it readable and maintainable.
- Functions, particularly exports, should be properly annotated (see [LuaLS Annotations](https://luals.github.io/wiki/annotations/)).
- Utilize [ox_lib](https://overextended.dev/ox_lib) wherever and whenever possible.

#### Optimization & Security

- When in doubt, don't trust the client. Especially with transactions.
- Avoid creating unnecessary threads.
- Use guard clauses where applicable instead of nesting conditionals.

#### Naming

- Use `camelCase` for local variables and functions and parameters.
- Use `PascalCase` for global variables and functions.
- Avoid acronyms as they can be confusing and are often context dependent.
- Be descriptive; make it easy for your fellow developers.
- Booleans may be prefixed with `is`, `has`, `are`, etc.
- Arrays should have plural names.

### JavaScript/TypeScript Conventions

Consider following the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) and the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).