import {createAuthorSchema} from '../base/author'
import {createCategorySchema} from '../base/category'
import {createPostSchema} from '../base/post'
import blockContent from '../blockContent'

// Brand-A uses base schemas only (no additional fields)
export const brandAFields = {
  author: [],
  category: [],
  post: [],
}

export const brandASchemas = [
  createAuthorSchema(brandAFields.author),
  createCategorySchema(brandAFields.category),
  createPostSchema(brandAFields.post),
  blockContent,
] 