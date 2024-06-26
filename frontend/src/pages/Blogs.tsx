import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogCardSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const {loading,blogs} = useBlogs()

    if(loading){
        return <div className="flex justify-center">
            <div>
                <br />
                <br />
                <br />
            <BlogCardSkeleton></BlogCardSkeleton>
            <BlogCardSkeleton></BlogCardSkeleton>
            <BlogCardSkeleton></BlogCardSkeleton>
            <BlogCardSkeleton></BlogCardSkeleton>
            </div>
        </div>
    }
    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div className="flex justify-center max-w-xl flex-col">
            {blogs.map(blog => <BlogCard
            id={blog.id}
            authorName={blog.author.name || "U"}
            title={blog.title}
            content={blog.content}
            publishedDate="2nd feb 2024"
            />)}
            </div>
        </div>
  </div> 
}