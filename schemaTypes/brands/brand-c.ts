import {defineField} from 'sanity'
import {createAuthorSchema} from '../base/author'
import {createCategorySchema} from '../base/category'
import {createPostSchema} from '../base/post'
import blockContent from '../blockContent'

// Example: Brand C with different field extensions
export const brandCFields = {
  author: [
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'twitter', title: 'Twitter', type: 'url'},
        {name: 'linkedin', title: 'LinkedIn', type: 'url'},
      ],
    }),
  ],
  post: [
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text'},
      ],
    }),
  ],
  category: [],
}

export const brandCSchemas = [
  createAuthorSchema(brandCFields.author),
  createCategorySchema(brandCFields.category),
  createPostSchema(brandCFields.post),
  blockContent,
]