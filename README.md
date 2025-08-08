# Multi-Brand Sanity Content Studio

A Sanity Content Studio implementation featuring a multi-brand workspace setup with schema governance. This project demonstrates how to manage multiple brands (Brand A, Brand B, and Brand C) within a single Sanity Studio using workspace dropdowns and brand-specific schema extensions.

## 🏗️ Architecture

### Multi-Brand Workspace Setup
- **Three Workspaces**: Brand A, Brand B, and Brand C
- **Workspace Dropdown**: Built-in Sanity workspace switching
- **Schema Governance**: Clear separation between shared and brand-specific fields

### Schema Organization
- **Base Schemas** (`schemaTypes/base/`) - Fields shared across all brands
- **Brand Extensions** (`schemaTypes/brands/`) - Brand-specific field additions
- **Spread Operator Pattern** - Combines base and brand-specific fields

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```

## 📁 Project Structure

```
schemaTypes/
├── base/                    # Base schemas (shared across brands)
│   ├── author.ts           # Base author fields
│   ├── category.ts         # Base category fields
│   ├── post.ts            # Base post fields
│   └── index.ts           # Base exports
├── brands/                 # Brand-specific extensions
│   ├── brand-a.ts         # Brand A (base only)
│   ├── brand-b.ts         # Brand B (with extra fields)
│   ├── brand-c.ts         # Brand C (with extra fields)
│   └── index.ts           # Brand exports
├── blockContent.ts         # Shared block content schema
└── index.ts               # Conditional schema loader
```

## 🎯 Features

### Brand-Specific Field Extensions
- **Brand A**: Uses base schemas only
- **Brand B**: Extends with `brandBExtraField` on Author and Category
- **Brand C**: Extends with Social Media fields on Author and SEO fields on Post

### Workspace Management
- **URL-Based Navigation**: Each workspace has its own URL path
- **Built-in Dropdown**: Switch between brands using Sanity's workspace selector
- **Independent Datasets**: Each brand can have its own dataset

## 📚 Documentation

- [Multi-Brand Setup Guide](MULTI_BRAND_SETUP.md) - Detailed implementation guide
- [Implementation Summary](IMPLEMENTATION_SUMMARY.md) - Overview of what was implemented

## 🔧 Adding New Brands

1. Create a new brand file in `schemaTypes/brands/`
2. Define brand-specific fields using the spread operator pattern
3. Add the brand to `getSchemaTypes` function in `schemaTypes/index.ts`
4. Add brand configuration to `sanity.config.ts`

## 🛠️ Development

### Adding Fields to All Brands
Edit base schema files in `schemaTypes/base/`:
- `author.ts` - Add to `baseAuthorFields`
- `category.ts` - Add to `baseCategoryFields`
- `post.ts` - Add to `basePostFields`

### Adding Brand-Specific Fields
Edit brand-specific files in `schemaTypes/brands/`:
- `brand-a.ts` - Add to `brandAFields`
- `brand-b.ts` - Add to `brandBFields`
- `brand-c.ts` - Add to `brandCFields`

## 📖 Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community/join)
- [Extending Sanity Studio](https://www.sanity.io/docs/content-studio/extending)
