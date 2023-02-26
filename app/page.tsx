import Link from "next/link";
import getPostMetaData from "compontents/getPostMetadata";
import PostPreview from "compontents/PostPreview";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
