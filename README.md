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
- **Shared Fields** (`schemaTypes/shared/`) - Reusable field structures (SEO, Social Media, etc.)
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
├── shared/                 # Reusable field structures
│   ├── fields.ts          # Shared field definitions (SEO, Social Media)
│   └── index.ts           # Shared exports
├── blockContent.ts         # Shared block content schema
└── index.ts               # Conditional schema loader
```

## 🎯 Features

### Brand-Specific Field Extensions
- **Brand A**: Uses base schemas only
- **Brand B**: Extends with `brandBExtraField` on Author and Category, plus shared SEO fields
- **Brand C**: Extends with shared Social Media fields on Author and shared SEO fields on Post

### Shared Field Structures
The project includes reusable field definitions that can be shared across multiple brands:

#### SEO Field (`seoField`)
A comprehensive SEO object that includes:
- Meta Title
- Meta Description  
- Keywords (array of strings)
- Open Graph Image
- Canonical URL

#### Social Media Field (`socialMediaField`)
A social media links object that includes:
- Twitter
- LinkedIn
- Facebook
- Instagram

#### Usage Examples
```typescript
import {createBrandFields} from '../shared/fields'

// Brand with SEO only
export const brandFields = createBrandFields({
  seo: true,
})

// Brand with both SEO and social media
export const brandFields = createBrandFields({
  seo: true,
  socialMedia: true,
})

// Brand with shared fields plus custom fields
export const brandFields = createBrandFields({
  seo: true,
  additionalAuthorFields: [customField],
})
```

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

### Using Shared Fields
To add shared SEO or social media fields to a brand:
```typescript
import {createBrandFields} from '../shared/fields'

export const brandFields = createBrandFields({
  seo: true,           // Adds SEO fields to posts and categories
  socialMedia: true,   // Adds social media fields to authors
})
```

### Adding New Shared Fields
To create new shared field structures:
1. Add field definitions to `schemaTypes/shared/fields.ts`
2. Update the `createBrandFields` function to include the new options
3. Update this README with usage examples

## 📖 Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community/join)
- [Extending Sanity Studio](https://www.sanity.io/docs/content-studio/extending)
