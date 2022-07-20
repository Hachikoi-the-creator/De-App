export default function Post({ post }) {
  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-[#ffffffc5] rounded-xl shadow-md overflow-hidden md:max-w-2xl shadow-md shadow-blue-600 ">
        <div className="md:flex">
          <div className="p-8">
            <p className="mt-2 text-s  whitespace-pre-line">
              {post.metadata.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
