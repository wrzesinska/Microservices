import { Category, CategoryCreatePayload } from "../interfaces/categories"
import {UserCreatePayload} from "../interfaces/users";

const categories:Category[] = [
  {
    id: '1',
    name: 'test1',
    desc: 'desc1'
  },
  {
    id: '2',
    name: 'test2',
    desc: 'desc2'
  },
]
// const index = categories.findIndex(c => c.id == id)
// categories[index] = draft

export const getCategories = () => {
  return Promise.resolve(categories)
}

export const getCategoryById = (id: string) => {
  return Promise.resolve(categories.find(c => c.id == id))
}

export const createCategory = (categoryPayload: CategoryCreatePayload) => {
  const category = {
    id: Date.now().toString(),
    ...categoryPayload
  }
  categories.push(category)

  return Promise.resolve(category)
}
