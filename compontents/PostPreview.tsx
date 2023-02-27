import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

// the border div & h2 styles are not functioning properly here, neither is the "text-sm" command for date
const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
      bg-white"
    >
      <p className="text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-violet-600 hover:border-dotted font-bold mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.description}</p>
    </div>
  );
};

export default PostPreview;
