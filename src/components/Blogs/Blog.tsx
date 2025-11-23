import BlogCard from './BlogCard'
import { blogs } from '../../lib/data'
import type { BlogProps } from './types'

const Blog = () => {
    const blogsData = blogs;
  return (
   <div className='my-4'>
    <h3 className=' font-medium text-2xl text-primary pb-3'>All Blogs category</h3>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {blogsData.map((blog: BlogProps, index: number) => (
            <BlogCard blog={blog} key={index} />
        ))}
    </div>
   </div>
  )
}

export default Blog
