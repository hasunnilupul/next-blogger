import Tag from '@/types/Tag';
import React from 'react'

type TagWithPostsCountProps = {
    count: number;
} & Tag;

const TagItem = ({ label, slug, count }: TagWithPostsCountProps) => {
    return (
        <div className="mb-2 mr-5 mt-2">
            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href={`/tags/${slug}`}>
                {label}
            </a>
            <a className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300" aria-label={`View posts tagged ${label}`} href={`/tags/${slug}`}>
                ({count})
            </a>
        </div>
    )
}

export default TagItem;