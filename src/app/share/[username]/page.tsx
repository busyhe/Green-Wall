import type { Metadata } from 'next'

import { DataProvider } from '~/DataContext'

import { SharePage } from './SharePage'

type GenerateMetadata = (params: { params: { username: string } }) => Metadata

export const generateMetadata: GenerateMetadata = ({ params }) => {
  const username = params.username
  const sharingTitle = `${username}'s GitHub contributions`
  const sharingDescription = `I just made a GitHub contributions graph in review!`
  const sharingURL = `https://github-contributions.busyhe.com//share/${username}`
  const image = `https://github-contributions.busyhe.com//api/og/share/${username}`

  return {
    title: `${username}'s GitHub contributions in review · Green Wall`,
    openGraph: {
      title: sharingTitle,
      description: sharingDescription,
      url: sharingURL,
      images: image,
    },
    twitter: {
      title: sharingTitle,
      description: sharingDescription,
      card: 'summary_large_image',
      images: image,
    },
  }
}

export default function Page() {
  return (
    <DataProvider key="share">
      <SharePage />
    </DataProvider>
  )
}
