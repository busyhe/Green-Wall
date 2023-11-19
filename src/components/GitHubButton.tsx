'use client'

import GitHubStarButton from 'react-github-btn'

import Link from 'next/link'

import { iconGitHub } from './icons'

export function GitHubButton() {
  return (
    <div className="ml-auto">
      <div className="md:inline-block">
        <GitHubStarButton
          aria-label="Star busyhe/Green-Wall on GitHub"
          data-icon="octicon-star"
          data-show-count="true"
          href="https://github.com/busyhe/Green-Wall"
        />
      </div>
      <Link
        passHref
        className="ml-3 inline-block"
        href="https://github.com/busyhe/Green-Wall"
        rel="noreferrer"
        target="_blank"
      >
        <button className="flex items-center rounded-md bg-main-100 px-3 py-2 text-sm font-medium text-main-500 ring-4 ring-white transition-colors duration-300 hover:bg-main-200 md:ring-8">
          {iconGitHub}
          <span className="ml-2">Open Source</span>
        </button>
      </Link>
    </div>
  )
}
