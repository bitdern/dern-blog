import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "compontents/PostMetadata";

const getPostMetaData = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get gray-matter data from each file
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.description}</p>
      <p>{post.date}</p>
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
