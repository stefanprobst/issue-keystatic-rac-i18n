import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "@/app/[locale]/reader";

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map((slug) => {
    return { slug };
  });
}

export default async function Post(props: PostProps) {
  const { params } = props;
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <DocumentRenderer document={await post.content()} />
      </div>
    </div>
  );
}
