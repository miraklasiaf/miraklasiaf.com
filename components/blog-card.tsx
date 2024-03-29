'use client';

import Link from 'next/link';
import { fetcher } from 'lib/fetcher';
import useSWR from 'swr';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
}

const BlogCard = ({ title, description, slug }: BlogCardProps) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`} className="w-full">
      <div className="mb-8 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
            {`${views ? new Number(views).toLocaleString() : '–––'} views`}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
