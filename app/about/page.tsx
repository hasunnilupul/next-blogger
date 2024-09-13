import Header from '@/components/header';
import Image from 'next/image';
import React from 'react'
import OwnerAvatar from "@/app/images/owner-avatar.jpg";

const About = () => {
    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <Header title="About" />
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                <div className="flex flex-col items-center space-x-2 pt-8">
                    <Image alt="avatar" loading="lazy"
                        decoding="async" data-nimg="1" className="h-48 w-48 rounded-full object-center"
                        src={OwnerAvatar} style={{ color: "transparent" }} />
                    <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Nilupul Perera</h3>
                    <div className="text-gray-500 dark:text-gray-400">Software Engineer</div>
                    <div className="text-gray-500 dark:text-gray-400">Virtusa</div>
                    <div className="flex space-x-3 pt-6">
                        {/* Email Address */}
                        {process.env.EMAIL_ADDRESS && (
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={`mailto:${process.env.EMAIL_ADDRESS}`}>
                                <span className="sr-only">mail</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                                    <title>Mail</title>
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>
                        )}
                        {/* Github Link */}
                        {process.env.GITHUB_USERNAME && (
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={`https://github.com/${process.env.GITHUB_USERNAME}`}>
                                <span className="sr-only">github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                                    <title>GitHub</title>
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                                    </path>
                                </svg>
                            </a>
                        )}
                        {/* Linkedin Link */}
                        {process.env.LINKEDIN_USERNAME && (
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${process.env.LINKEDIN_USERNAME}`}>
                                <span className="sr-only">linkedin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                                    <title>Linkedin</title>
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                                    </path>
                                </svg>
                            </a>
                        )}
                        {/* Twitter Link */}
                        {process.env.TWITTER_USERNAME && (
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}>
                                <span className="sr-only">x</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                                    <title>X</title>
                                    <path
                                        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z">
                                    </path>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
                <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
                    <p>
                        Nilupul Perera is a a passionate Software Engineer with a knack for web application development.
                        I have 2.5 years hands-on experience with a variety of modern technologies including React.js, Angular 2, Spring Boot, Node.js, Nest.js, Vue.js, and JavaScript.
                    </p>
                    <br></br>
                    <p>
                        Currently, I’m working at Virtusa, where I’ve been involved in rewriting legacy applications, speeding up bug fixes, and enhancing user experience.
                        I hold a Bachelor’s degree in Software Engineering from IIC University of Technology.
                        I’m always eager to learn new technologies and take on coding challenges.
                    </p>
                    <br></br>
                    <p>
                        I’m also an AWS Developer - Associate certified professional, committed to continuous improvement and leveraging my skills to drive success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;