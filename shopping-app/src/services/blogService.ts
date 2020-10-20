import path from "path"

const blog1 = {
	title : 'MyFirstBlog',
	author : "Cris",
	date : 'Today'
  }
  
const blog2 = {
	title : 'MySecondBlog',
	author : "Someone",
	date : 'Yesterday'
  }

let blogs = [blog1, blog2]


export const getAllBlogs = () => {
  
  return blogs
}

export const getBlogByTitle = (title) => {

	return blogs.filter(obj => {
		return obj.title === title
	})
}
