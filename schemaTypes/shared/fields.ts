import {defineField} from 'sanity'

// Shared SEO field definition that can be reused across multiple brands
export const seoField = defineField({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    {name: 'metaTitle', title: 'Meta Title', type: 'string'},
    {name: 'metaDescription', title: 'Meta Description', type: 'text'},
    {name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]},
    {name: 'ogImage', title: 'Open Graph Image', type: 'image'},
    {name: 'canonicalUrl', title: 'Canonical URL', type: 'url'},
  ],
})

// Shared social media field definition
export const socialMediaField = defineField({
  name: 'socialMedia',
  title: 'Social Media Links',
  type: 'object',
  fields: [
    {name: 'twitter', title: 'Twitter', type: 'url'},
    {name: 'linkedin', title: 'LinkedIn', type: 'url'},
    {name: 'facebook', title: 'Facebook', type: 'url'},
    {name: 'instagram', title: 'Instagram', type: 'url'},
  ],
})

// Helper function to create brand-specific field arrays
export const createBrandFields = (options: {
  seo?: boolean
  socialMedia?: boolean
  additionalAuthorFields?: any[]
  additionalPostFields?: any[]
  additionalCategoryFields?: any[]
} = {}) => {
  const {
    seo = false,
    socialMedia = false,
    additionalAuthorFields = [],
    additionalPostFields = [],
    additionalCategoryFields = [],
  } = options

  return {
    author: [
      ...(socialMedia ? [socialMediaField] : []),
      ...additionalAuthorFields,
    ],
    post: [
      ...(seo ? [seoField] : []),
      ...additionalPostFields,
    ],
    category: [
      ...(seo ? [seoField] : []),
      ...additionalCategoryFields,
    ],
  }
}
