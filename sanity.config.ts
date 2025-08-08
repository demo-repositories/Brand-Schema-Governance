import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {getSchemaTypes} from './schemaTypes'

// Define workspace configurations
const workspaces = {
  'brand-a': {
    name: 'brand-a',
    title: 'Brand A',
    description: 'Brand A workspace with base schemas',
    dataset: 'brand-a',
  },
  'brand-b': {
    name: 'brand-b',
    title: 'Brand B',
    description: 'Brand B workspace with extended schemas',
    dataset: 'brand-b',
  },
  'brand-c': {
    name: 'brand-c',
    title: 'Brand C',
    description: 'Brand C workspace with extended schemas',
    dataset: 'brand-c',
  },
} as const

// Create workspace configurations
const workspaceConfigs = Object.entries(workspaces).map(([key, config]) => ({
  name: key,
  title: config.title,
  description: config.description,
  projectId: 'uiwnrab3',
  dataset: config.dataset,
  basePath: `/${key}`,
  schema: {
    types: getSchemaTypes(key),
  },
  plugins: [structureTool(), visionTool()],
}))

export default defineConfig(workspaceConfigs)
