import {defineField} from 'sanity'
import {createAuthorSchema} from '../base/author'
import {createCategorySchema} from '../base/category'
import {createPostSchema} from '../base/post'
import blockContent from '../blockContent'
import {createBrandFields} from '../shared/fields'

// Brand-B specific fields
const brandBSpecificAuthorField = defineField({
  name: 'brandBExtraField',
  title: 'Brand B Extra Field',
  type: 'string',
  description: 'Additional field specific to Brand B authors',
})

const brandBSpecificCategoryField = defineField({
  name: 'brandBExtraField',
  title: 'Brand B Extra Field',
  type: 'string',
  description: 'Additional field specific to Brand B categories',
})

// Brand-B uses shared SEO fields plus brand-specific fields
export const brandBFields = createBrandFields({
  seo: true,
  additionalAuthorFields: [brandBSpecificAuthorField],
  additionalCategoryFields: [brandBSpecificCategoryField],
})

export const brandBSchemas = [
  createAuthorSchema(brandBFields.author),
  createCategorySchema(brandBFields.category),
  createPostSchema(brandBFields.post),
  blockContent,
] 