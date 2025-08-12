import {createAuthorSchema} from '../base/author'
import {createCategorySchema} from '../base/category'
import {createPostSchema} from '../base/post'
import blockContent from '../blockContent'
import {createBrandFields} from '../shared/fields'

// Brand C uses shared SEO and social media fields
export const brandCFields = createBrandFields({
  seo: true,
  socialMedia: true,
})

export const brandCSchemas = [
  createAuthorSchema(brandCFields.author),
  createCategorySchema(brandCFields.category),
  createPostSchema(brandCFields.post),
  blockContent,
]