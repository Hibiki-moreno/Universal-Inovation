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

export default async function BlogPage({ darkMode }: { darkMode: boolean }) {
  const posts = await getBlogPosts();

  return (
    <BlurFade>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            <th className="px-6 py-3 border-b dark:border-gray-700">Nombre</th>
            <th className="px-6 py-3 border-b dark:border-gray-700">Cargo</th>
            <th className="px-6 py-3 border-b dark:border-gray-700">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-900">
            <td className="px-6 py-4 border-b dark:border-gray-700">Juan Pérez</td>
            <td className="px-6 py-4 border-b dark:border-gray-700">Desarrollador</td>
            <td className="px-6 py-4 border-b dark:border-gray-700">Activo</td>
          </tr>
          <tr className="bg-white dark:bg-gray-900">
            <td className="px-6 py-4 border-b dark:border-gray-700">María López</td>
            <td className="px-6 py-4 border-b dark:border-gray-700">Diseñadora</td>
            <td className="px-6 py-4 border-b dark:border-gray-700">Inactivo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </BlurFade>
  );
}