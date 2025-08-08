import {defineField, defineType} from 'sanity'

export const baseCategoryFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
  }),
]

export const createCategorySchema = (brandFields: any[] = []) => defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [...baseCategoryFields, ...brandFields],
}) 