import { Category, CategoryCreatePayload } from "../interfaces/categories"
import {UserCreatePayload} from "../interfaces/users";

const categories:Category[] = [
  {
    id: '1',
    name: 'test1',
    desc: 'desc1',
    parentId: '0'
  },
  {
    id: '2',
    name: 'test2',
    desc: 'desc2',
    parentId: '1'
  },
  {
    id: '3',
    name: 'test3',
    desc: 'desc3',
    parentId: '1'
  },
  {
    id: '4',
    name: 'test4',
    desc: 'desc5',
    parentId: '2'
  },
]

export const getCategories = () => {
  return Promise.resolve(categories)
}

export const getCategoryById = (id: string) => {
  return Promise.resolve(categories.find(c => c.id === id))
}

export const createCategory = (categoryPayload: CategoryCreatePayload) => {
  const category = {
    id: Date.now().toString(),
    ...categoryPayload
  }
  categories.push(category)

  return Promise.resolve(category)
}

export const getCategoriesByParent = (parentId: string) => {
  return Promise.resolve(categories.filter(c => c.parentId === parentId))
}

export const updateCategoryById = (data) => {
  const index = categories.findIndex(c => c.id === data.id)

  if (categories[index]) {
    categories[index] = {...categories[index], ...data}
    return categories[index];
  } else {
    return false;
  }
}
