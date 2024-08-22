import { getAllPosts, getPostBySlug } from "@/lib/posts";
import React from "react";

// export async function generateStaticParams() {
//   const posts = await getAllPosts()

//   return posts.map(post => ({
//     slug: [post.slug]
//   }))
// }

const Page = async ({ params }) => {
  const { slug } = params;

  const { content, frontmatter } = await getPostBySlug(slug[0]);

  return (
    <section className="py-24">
      <div className="container">
        {/* post formatter */}
        <header className="rounded bg-gray-100 p-8">
          <h1 className="text-3xl">{frontmatter.title}</h1>
          <p className="text-sm font-extralight uppercase leading-snug  tracking-wide">
            {frontmatter.author}
          </p>
        </header>
        {/* post content */}
        <main className="prose mt-12">{content}</main>
      </div>
    </section>
  );
};

export default Page;
