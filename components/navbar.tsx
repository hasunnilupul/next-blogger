"use client";

import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Button } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from "@/lib/utils";
import ThemeToggler from "@/components/theme-toggler";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Tags', href: '/tags' },
  { name: 'Projects', href: '#' },
  { name: 'About', href: '/about' },
]

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Register', href: '#' },
    { name: 'Sign in', href: '#' },
    { name: 'Sign out', href: '#' },
]

const Navbar = () => {
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="w-full bg-white dark:bg-gray-950 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link className="break-words" aria-label="TailwindBlog" href="/">
                                <div className="flex items-center justify-between">
                                    <div className="mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="53.87" height="43.61" viewBox="344.564 330.278 111.737 91.218">
                                            <defs>
                                                <linearGradient id="logo_svg__b" x1="420.97" x2="420.97" y1="331.28" y2="418.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }}></stop>
                                                    <stop offset="100%" style={{ stopColor: "#67e8f9", stopOpacity: 1 }}></stop>
                                                </linearGradient>
                                                <linearGradient id="logo_svg__d" x1="377.89" x2="377.89" y1="331.28" y2="418.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }}></stop>
                                                    <stop offset="100%" style={{ stopColor: "#67e8f9", stopOpacity: 1 }}></stop>
                                                </linearGradient>
                                                <path id="logo_svg__a" d="M453.3 331.28v28.57l-64.66 58.65v-30.08z"></path>
                                                <path id="logo_svg__c" d="M410.23 331.28v28.57l-64.67 58.65v-30.08z"></path>
                                            </defs>
                                            <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)"></use>
                                            <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)"></use>
                                        </svg>
                                    </div>
                                    <div className="hidden sm:block h-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">TailwindBlog</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Desktop view */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="flex space-x-4">
                                {/* Navigation Links */}
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            aria-current={pathname === item.href ? 'page' : undefined}
                                            className={classNames(
                                                pathname === item.href ? 'text-primary-500' : 'text-gray-900  hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400',
                                                'block font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Search button */}
                                <Button
                                    type="button"
                                    className="relative block font-medium text-gray-900  hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                                </Button>

                                {/* Theme toggle button */}
                                <ThemeToggler />
                            </div>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-6">
                                <div>
                                    <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:text-white data-[focus]:bg-primary-400"
                                            >
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                    {/* Mobile view */}
                    <div className="flex md:hidden space-x-2">
                        {/* Mobile search button */}
                        <Button
                            type="button"
                            className="relative block font-medium text-gray-900  hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                        </Button>

                        {/* Mobile theme toggle button */}
                        <ThemeToggler />

                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-950 text-black dark:text-white hover:text-primary-500 focus:outline-none">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-8 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={pathname === item.href ? 'page' : undefined}
                            className={classNames(
                                pathname === item.href ? 'text-primary-500' : 'text-gray-900  hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400',
                                'block font-medium px-3 py-2 text-base',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-black dark:text-white">{user.name}</div>
                            <div className="text-sm font-medium leading-none text-gray-500">{user.email}</div>
                        </div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-primary-400 hover:text-white"
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Navbar;