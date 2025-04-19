# GitHub Copilot Instructions

## Development Guidelines

1. **Server Configuration**
   - Use GitHub MCP server for all operations

2. **Package Management**
   - Use `npx` instead of `npm` for running commands and installing packages
   - Example: `npx create-next-app` instead of `npm create next-app`

3. **Version Control**
   - For new features or significant progress:
     - Use the format: `git commit -m "feat: [meaningful commit message]"`
     - Replace [meaningful commit message] with a clear description of the changes
     - Example: `git commit -m "feat: add user authentication system"`

4. **Troubleshooting**
   - If encountering issues, use `git head~2` to revert to a previous stable state
   - This command will help recover from problematic changes

## Best Practices
- Write clear and descriptive commit messages
- Follow conventional commit format for better version control
- Keep commits focused and atomic
- Test changes before committing 