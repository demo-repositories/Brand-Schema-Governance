import blockContent from './blockContent'
import {brandASchemas} from './brands/brand-a'
import {brandBSchemas} from './brands/brand-b'

// Get brand from environment variable, default to 'brand-a'
const BRAND = process.env.SANITY_BRAND || 'brand-a'

// Conditional schema loading based on brand
const getSchemaTypes = (brand: string) => {
  switch (brand.toLowerCase()) {
    case 'brand-a':
      return brandASchemas
    case 'brand-b':
      return brandBSchemas
    default:
      console.warn(`Unknown brand: ${brand}, falling back to brand-a`)
      return brandASchemas
  }
}

// Export the function for conditional schema loading
export {getSchemaTypes}

// Export default schemas for backward compatibility
export const schemaTypes = getSchemaTypes(BRAND)
