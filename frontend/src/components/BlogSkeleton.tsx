export const BlogCardSkeleton = () => {
  return (
    <div className="animate-pulse p-4 m-1 mb-2 border-b border-slate-200 pb-4 w-screen max-w-screen-lg items-center ml-4 pl-48">
      <div className="flex items-center">
        <div className="rounded-full bg-gray-300 h-6 w-6"></div>
        <div className="h-4 bg-gray-300 rounded w-24 ml-2"></div>
        <div className="ml-2 h-1 w-1 bg-gray-300 rounded-full"></div>
        <div className="ml-2 h-4 bg-gray-300 rounded w-20"></div>
      </div>
      <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-2/3"></div>
      <div className="mt-4 h-4 bg-gray-300 rounded w-16"></div>
    </div>
  );
};

export default BlogCardSkeleton
