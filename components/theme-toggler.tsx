"use client";

import React, { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

const ThemeToggler = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // toggle theme between light/dark
    const toggleTheme = () => {
        let newTheme = '';
        if (isDarkTheme) {
            document.documentElement.classList.remove('dark')
            newTheme = 'light';
        } else {
            document.documentElement.classList.add('dark')
            newTheme = 'dark';
        }
        localStorage.setItem('theme', newTheme);
        setIsDarkTheme(prevState => newTheme === 'dark');
    }

    // init
    useEffect(() => {
        const darkThemeEnabled = localStorage.getItem("theme") === 'dark' || ((localStorage.getItem("theme") === null) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDarkTheme(prevState => darkThemeEnabled);
        if (darkThemeEnabled) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [])

    return (
        <Button
            type="button"
            className="relative block font-medium text-gray-900  hover:text-pink-500 dark:text-gray-100 dark:hover:text-pink-400"
            onClick={toggleTheme}>
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            {isDarkTheme ? (<MoonIcon aria-hidden="true" className="h-6 w-6" />) : (<SunIcon aria-hidden="true" className="h-6 w-6" />)}
        </Button>
    )
}

export default ThemeToggler