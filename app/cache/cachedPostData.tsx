{
  /* import fs from "fs";
import matter from "gray-matter";
import { cachedPostData } from "@lib/utils";
import App from "next/app";

export async function getAllPostsWithFrontMatter(dataType: string) {
  const files = fs.readdirSync(path.join(App, "data,", dataType));
  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(App, "data,", dataType, postSlug),
      "utf-8"
    );
    const { data } = matter(source);
    return [
      {
        frontMatter: data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);
}

export async function cachedPostData(dataType: string) {
  const posts = await getAllPostsWithFrontMatter(dataType);
  return `export const cachedPosts = ${JSON.stringify(posts)}`;
} */
}
