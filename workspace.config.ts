// Workspace configuration for multi-brand setup
export const WORKSPACE_CONFIG = {
  'brand-a': {
    name: 'brand-a',
    title: 'Brand A',
    description: 'Brand A workspace with base schemas',
    dataset: 'production',
  },
  'brand-b': {
    name: 'brand-b',
    title: 'Brand B',
    description: 'Brand B workspace with extended schemas',
    dataset: 'production',
  },
} as const

export type BrandType = keyof typeof WORKSPACE_CONFIG

// Helper function to validate brand
export const isValidBrand = (brand: string): brand is BrandType => {
  return brand in WORKSPACE_CONFIG
}

// Helper function to get workspace config
export const getWorkspaceConfig = (brand: string) => {
  if (!isValidBrand(brand)) {
    console.warn(`Invalid brand: ${brand}, falling back to brand-a`)
    return WORKSPACE_CONFIG['brand-a']
  }
  return WORKSPACE_CONFIG[brand]
} 