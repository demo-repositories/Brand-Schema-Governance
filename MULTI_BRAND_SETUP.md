# Multi-Brand Workspace Setup

This project implements a schema governance approach for managing multiple brands (Brand-A, Brand-B and Brand-C) with a workspace dropdown in the Sanity Studio.

## Architecture

### 🔧 Schema Governance Approach

The schema is organized using a governance approach that separates:

1. **Base Schemas** (`schemaTypes/base/`) - Fields that every brand shares
2. **Brand-Specific Extensions** (`schemaTypes/brands/`) - Fields specific to each brand
3. **Workspace Dropdown** - Built-in Sanity workspace switching

### 📁 File Structure

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
|   ├── brand-c.ts         # Brand C schemas (with extra fields)
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
- `brand-c.ts` - Add to `brandBFields`
  
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

### Brand C
- Extends base schemas with additional fields:
  - **Author**: `socialMedia` (object)
  - **Post**: `seo` (object)
  - **Category**: No additional fields

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

## Migration from Shared Schema :rocket:

When migrating from a shared schema approach to this brand-specific inheritance pattern, follow these steps:

### Pre-Migration Preparation

1. **Clone Dataset for Testing**: Create a dataset clone without history for safe migration testing:
   ```bash
   sanity dataset export production --output-path ./backup
   sanity dataset create production-migration-test
   sanity dataset import ./backup production-migration-test
   ```

2. **Backup Current Schema**: Export your current schema configuration before making changes.

### Migration Process

1. **Extract Current Schema**: Use the schema extract command to understand your current structure:
   ```bash
   sanity schema extract
   ```

2. **Implement Brand-Specific Pattern**: 
   - Move shared fields to `schemaTypes/base/`
   - Create brand-specific extensions in `schemaTypes/brands/`
   - Update schema loading logic in `schemaTypes/index.ts`

3. **Validate Schema Changes**: Use the documents validate command to catch any schema mismatches:
   ```bash
   sanity documents validate
   ```

4. **Deploy Schema**: Deploy the new schema structure:
   ```bash
   sanity deploy
   ```

### Post-Migration Validation

- **Test Each Brand**: Verify that each brand workspace loads correctly
- **Check Field Inheritance**: Ensure brand-specific fields are properly inherited
- **Validate Documents**: Run document validation to ensure no data conflicts
- **Test Workspace Switching**: Verify the workspace dropdown functions correctly

### CLI Commands for Migration

The following Sanity CLI commands are essential for a successful migration:

- `sanity schema extract` - Extract current schema for analysis
- `sanity documents validate` - Validate documents against schema changes
- `sanity deploy` - Deploy schema changes to production
- `sanity dataset export/import` - For creating test datasets

### Rollback Plan :warning:

If issues arise during migration:
1. Restore from backup dataset
2. Revert schema changes
3. Re-deploy previous schema version

## Benefits

- **Built-in Workspace Switching**: Uses Sanity's native workspace dropdown
- **Schema Governance**: Clear separation between shared and brand-specific fields
- **Maintainability**: Base schemas are shared, reducing duplication
- **Scalability**: Easy to add new brands with their own field extensions
- **Type Safety**: TypeScript support for brand-specific configurations
- **URL-Based Navigation**: Each workspace has its own URL for direct access 