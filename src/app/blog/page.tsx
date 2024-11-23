import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export const metadata = {
  title: "Arrendadores",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    // aqui va todo el codigo para mostrar la tabla y todo lo que se muestra en la inter
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">hola</h1>
      
      </BlurFade>
      
    </section>
  );
}
