import React from 'react'

const Header = ({
  title,
  summary
}: Readonly<{
  title: String;
  summary?: String;
}>) => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl py-6">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        {summary &&
          (<p className="mt-2 text-base font-normal tracking-tight text-gray-400">
            {summary}
          </p>)
        }
      </div>
    </header>
  )
}

export default Header