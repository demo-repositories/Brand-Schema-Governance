import {defineField} from 'sanity'
import {createAuthorSchema} from '../base/author'
import {createCategorySchema} from '../base/category'
import {createPostSchema} from '../base/post'
import blockContent from '../blockContent'

// Brand-B specific fields
export const brandBFields = {
  author: [
    defineField({
      name: 'brandBExtraField',
      title: 'Brand B Extra Field',
      type: 'string',
      description: 'Additional field specific to Brand B authors',
    }),
  ],
  category: [
    defineField({
      name: 'brandBExtraField',
      title: 'Brand B Extra Field',
      type: 'string',
      description: 'Additional field specific to Brand B categories',
    }),
  ],
  post: [], // No additional fields for posts in Brand B
}

export const brandBSchemas = [
  createAuthorSchema(brandBFields.author),
  createCategorySchema(brandBFields.category),
  createPostSchema(brandBFields.post),
  blockContent,
] 