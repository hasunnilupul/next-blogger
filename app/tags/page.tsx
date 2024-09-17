import TagItem from '@/components/tags/tag-item';
import { TagWithPostsCount } from '@/types/Tag';
import React from 'react'

const Tags = () => {
  const postsOfTags:TagWithPostsCount[] = [
    { id: "4511", label: "next-js", slug: "next-js", count: 6 },
    { id: "4512", label: "laravel", slug: "laravel", count: 10 },
    { id: "4513", label: "angular", slug: "angular", count: 3 },
    { id: "4514", label: "vue-js", slug: "vue-js", count: 14 },
    { id: "4515", label: "react-js", slug: "react-js", count: 20 },
  ]
  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">Tags</h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {
          postsOfTags.map((tag) => (
            <TagItem key={tag.id} {...tag} />
          ))
        }
      </div>
    </div>
  )
}

export default Tags;