"use client";
import React, { useRef, useEffect, MutableRefObject } from 'react'
import { throttle } from 'lodash';

const ViewPost = ({ params }: { params: { slug: string } }) => {
    const scrollContainerRef: MutableRefObject<any> = useRef(null);

    const scrollListener = () => {
        if (window.scrollY > 150) {
            scrollContainerRef.current.classList.replace("md:hidden", "md:flex");
        } else {
            scrollContainerRef.current.classList.replace("md:flex", "md:hidden");
        }
    };

    const throttledScrollListener = throttle(scrollListener, 100); // Adjust the time as needed

    // init
    useEffect(() => {
        window.addEventListener('scroll', throttledScrollListener);

        return () => {
            window.removeEventListener('scroll', throttledScrollListener);
        };
    }, []);

    return (
        <section className="mx-auto max-w-3xl xl:max-w-5xl">
            <div ref={scrollContainerRef} className="fixed bottom-8 right-8 hidden flex-col gap-3 md:hidden">
                {/* Scroll to Comment */}
                <button aria-label="Scroll To Comment" className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                {/* Scroll to Top */}
                <button aria-label="Scroll To Top" className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

            <article>
                <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                    {/* Post header */}
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time dateTime="2023-08-05T00:00:00.000Z">Saturday, August 5, 2023</time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">Release of Tailwind Nextjs Starter Blog v2.0</h1>
                            </div>
                        </div>
                    </header>

                    <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
                        {/* Author */}
                        <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"><dt className="sr-only">Authors</dt><dd><ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"><li className="flex items-center space-x-2">
                            <img alt="avatar" loading="lazy" width="38" height="38" decoding="async" data-nimg="1" className="h-10 w-10 rounded-full" style={{ color: "transparent" }} srcSet="https://tailwind-nextjs-starter-blog.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=48&q=75" src="https://tailwind-nextjs-starter-blog.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=48&q=75" />
                            <dl className="whitespace-nowrap text-sm font-medium leading-5"><dt className="sr-only">Name</dt><dd className="text-gray-900 dark:text-gray-100">Tails Azimuth</dd><dt className="sr-only">Twitter</dt><dd><a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Twitter">@Twitter</a></dd></dl></li></ul></dd></dl>

                        {/* Body */}
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                            {/* Content */}
                            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                                Post content goes here
                            </div>

                            {/* Share */}
                            <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300"><a className="break-words" target="_blank" rel="nofollow" href="https://mobile.twitter.com/search?q=https%3A%2F%2Ftailwind-nextjs-starter-blog.vercel.app%2Fblog%2Frelease-of-tailwind-nextjs-starter-blog-v2.0">Discuss on Twitter</a> • <a className="break-words" target="_blank" rel="noopener noreferrer" href="https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/data/blog/release-of-tailwind-nextjs-starter-blog-v2.0.mdx">View on GitHub</a></div>

                            {/* Load Comments */}
                            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                                <button type="button">Load Comments</button>
                            </div>
                        </div>

                        {/* Footer */}
                        <footer><div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"><div className="py-4 xl:py-8"><h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags</h2><div className="flex flex-wrap"><a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">next-js</a><a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/tailwind">tailwind</a><a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/guide">guide</a><a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/feature">feature</a></div></div><div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"><div><h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Previous Article</h2><div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"><a className="break-words" href="/blog/new-features-in-v1">New features in v1</a></div></div></div></div><div className="pt-4 xl:pt-8"><a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Back to the blog" href="/blog">← Back to the blog</a></div></footer>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ViewPost;