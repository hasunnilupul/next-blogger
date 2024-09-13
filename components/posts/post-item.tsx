import Post from '@/types/Post';
import React from 'react'

const PostItem = ({ datetime, contentShort, slug, tags, title }: Post) => {
  return (
    <article className='grow flex w-full py-7 h-auto'>
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        {/* published datetime */}
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={datetime}>August 5, 2023</time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              {/* title */}
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <a
                  className="text-gray-900 dark:text-gray-100"
                  href={`/blog/${slug}`}>{title}</a>
              </h2>
              {/* tags */}
              <div className="flex flex-wrap">
                {
                  tags.map(tag => (
                    <a key={tag.id} className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href={`/tags/${tag.label}`}>
                      {tag.label}
                    </a>
                  ))
                }
              </div>
            </div>
            {/* content - short */}
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">{contentShort}</div>
          </div>
          <div className="text-base font-medium leading-6">
            <a
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Read more: &quot;Release of Tailwind Nextjs Starter Blog v2.0&quot;"
              href={`/blog/${slug}`}>
              Read more →
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostItem;