const categories = [
  {
    id: 1,
    name: 'test1'
  },
  {
    id: 2,
    name: 'test2'
  },
]

export const getCategories = () => {
  return categories
}

export const getCategoryById = (category_id) => {

  return categories.filter(category => {
    return category.id === category_id
  })
}
