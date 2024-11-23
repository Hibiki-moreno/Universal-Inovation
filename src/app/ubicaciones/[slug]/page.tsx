// app/blog/[slug]/page.tsx
import { getPost } from "@/data/blog"; // Asegúrate de que esta función esté bien implementada
import { notFound } from "next/navigation";

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound(); // Lanza una página 404 si el post no existe
  }

  return (
    <section id="blog">
      <h1 className="title font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4">
        {new Date(post.metadata.publishedAt).toLocaleDateString()}
      </p>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
    </section>
  );
}
