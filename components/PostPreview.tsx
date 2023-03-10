import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border-2 border-violet-300 p-4 rounded-md drop-shadow-xl
      bg-violet-200"
    >
      <p className="text-sm text-slate-500">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-violet-600 m-1 hover:underline text-lg font-bold mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.description}</p>
    </div>
  );
};

export default PostPreview;
