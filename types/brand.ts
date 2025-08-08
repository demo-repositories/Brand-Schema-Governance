import {defineField} from 'sanity'

// Type for brand field extensions
export type BrandFields = {
  author: ReturnType<typeof defineField>[]
  category: ReturnType<typeof defineField>[]
  post: ReturnType<typeof defineField>[]
}

// Type for brand configuration
export type BrandConfig = {
  name: string
  title: string
  description: string
  dataset: string
}

// Type for workspace configuration
export type WorkspaceConfig = {
  [key: string]: BrandConfig
}

// Type for schema creation functions
export type SchemaCreator = (brandFields: ReturnType<typeof defineField>[]) => any

// Type for brand schemas
export type BrandSchemas = {
  [key: string]: any[]
} 