# Multi-Brand Workspace Setup

This project implements a schema governance approach for managing multiple brands (Brand-A and Brand-B) with a workspace dropdown in the Sanity Studio.

## Architecture

### Schema Governance Approach

The schema is organized using a governance approach that separates:

1. **Base Schemas** (`schemaTypes/base/`) - Fields that every brand shares
2. **Brand-Specific Extensions** (`schemaTypes/brands/`) - Fields specific to each brand
3. **Workspace Dropdown** - Built-in Sanity workspace switching

### File Structure

```
schemaTypes/
├── base/                    # Base schemas shared across all brands
│   ├── author.ts           # Base author fields
│   ├── category.ts         # Base category fields
│   ├── post.ts            # Base post fields
│   └── index.ts           # Base exports
├── brands/                 # Brand-specific schema extensions
│   ├── brand-a.ts         # Brand A schemas (base only)
│   ├── brand-b.ts         # Brand B schemas (with extra fields)
│   └── index.ts           # Brand exports
├── blockContent.ts         # Shared block content schema
└── index.ts               # Conditional schema loader
```

## Usage

### Workspace Dropdown

Sanity automatically provides a workspace dropdown in the Studio when multiple workspaces are configured. You can switch between brands by:

1. **Starting the Studio**: `npm run dev`
2. **Using the Dropdown**: Look for the workspace selector in the top navigation
3. **Switching Brands**: Click the dropdown to switch between Brand A and Brand B

### Workspace URLs

Each workspace has its own URL:
- **Brand A**: `http://localhost:3333/brand-a`
- **Brand B**: `http://localhost:3333/brand-b`

### Adding New Fields

#### To Base Schemas (All Brands)
Edit the base schema files in `schemaTypes/base/`:
- `author.ts` - Add to `baseAuthorFields`
- `category.ts` - Add to `baseCategoryFields`
- `post.ts` - Add to `basePostFields`

#### To Brand-Specific Schemas
Edit the brand-specific files in `schemaTypes/brands/`:
- `brand-a.ts` - Add to `brandAFields`
- `brand-b.ts` - Add to `brandBFields`

### Schema Extension Pattern

The schema uses spread operators to combine base and brand-specific fields:

```typescript
// Base schema creation
export const createAuthorSchema = (brandFields: any[] = []) => defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [...baseAuthorFields, ...brandFields], // Spread operator pattern
  // ... rest of schema
})

// Brand-specific usage
export const brandBFields = {
  author: [
    defineField({
      name: 'brandBExtraField',
      title: 'Brand B Extra Field',
      type: 'string',
    }),
  ],
  // ... other document types
}
```

## Current Brand Differences

### Brand A
- Uses base schemas only
- No additional fields
- URL: `/brand-a`

### Brand B
- Extends base schemas with additional fields:
  - **Author**: `brandBExtraField` (string)
  - **Category**: `brandBExtraField` (string)
  - **Post**: No additional fields
- URL: `/brand-b`

## Adding New Brands

1. Create a new brand file in `schemaTypes/brands/` (e.g., `brand-c.ts`)
2. Define brand-specific fields using the same pattern
3. Add the brand to the `getSchemaTypes` function in `schemaTypes/index.ts`
4. Add the brand configuration to `sanity.config.ts`

Example:
```typescript
// In sanity.config.ts
const workspaces = {
  'brand-a': { /* ... */ },
  'brand-b': { /* ... */ },
  'brand-c': {
    name: 'brand-c',
    title: 'Brand C',
    description: 'Brand C workspace',
    dataset: 'production',
  },
}
```

## Benefits

- **Built-in Workspace Switching**: Uses Sanity's native workspace dropdown
- **Schema Governance**: Clear separation between shared and brand-specific fields
- **Maintainability**: Base schemas are shared, reducing duplication
- **Scalability**: Easy to add new brands with their own field extensions
- **Type Safety**: TypeScript support for brand-specific configurations
- **URL-Based Navigation**: Each workspace has its own URL for direct access 