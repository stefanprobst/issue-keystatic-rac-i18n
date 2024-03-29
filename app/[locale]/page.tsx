import Link from "next/link";
import { reader } from "@/app/[locale]/reader";
import "@/app/[locale]/styles.css";
import { Test } from "@/app/[locale]/test";

export default async function IndexPage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
      <Test />
    </div>
  );
}
