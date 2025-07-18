/* eslint-disable react/prop-types */
const Post = ({ post, children }) => {
  return (
    <div className="mb-6">

      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-lg text-teal-600 first-letter:uppercase">{post.title}</h2>
          <p className="text-[10px] text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>

        <div>{children}</div>
      </div>

        <p className="text-sm mt-4">{post.body}</p>

    <div className="h-px w-full bg-gradient-to-r from-teal-50 via-teal-500/70 to-teal-50 mt-6"></div>
    </div>
  );
};

export default Post;
