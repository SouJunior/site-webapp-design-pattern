# Design Patterns Component Library – React + TypeScript + Vite

A reusable component library following design patterns with a focus on accessibility, clean code (MVC structure), Jest unit tests, and Storybook documentation.

## 🧱 Stack

- Vite
- React + TypeScript
- Styled Components
- Jest + Testing Library + Snapshots
- Storybook
- ESLint + Prettier

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the Vite dev server
npm run dev

# Run unit tests
npm run test:unit

# Update snapshots
npm run test:unit -- -u

# Launch Storybook
npm run storybook

tests/
├── setupTests.ts
└── __mocks__/fileMock.js
🧪 Testing
Framework: Jest

Matchers: @testing-library/jest-dom

Snapshot testing enabled

Static file imports (like .png) are mocked using fileMock.js

npm run test:unit       # Run all unit tests
npm run test:unit -- -u # Update snapshots
📚 Storybook

npm run storybook
All reusable components are documented

Stories live alongside each component in .stories.tsx files

🔧 TypeScript Paths

"paths": {
  "@components/*": ["src/components/*"],
  "@assets/*": ["src/assets/*"],
  "@hooks/*": ["src/hooks/*"],
  "@models/*": ["src/models/*"],
  "@utils/*": ["src/utils/*"]
}
📏 ESLint Type-Aware Setup (Optional)

export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
🔍 React-Specific Lint Plugins

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
