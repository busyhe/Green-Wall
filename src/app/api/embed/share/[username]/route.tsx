/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

import { ContributionLevel } from '~/enums'
import { fetchContributionsCollection, fetchGitHubUser } from '~/services'

export const runtime = 'edge'

const IMAGE_WIDTH = 1100
const IMAGE_HEIGHT = 180

const levelColors = {
  [ContributionLevel.Null]: 'transparent',
  [ContributionLevel.NONE]: '#ebedf0',
  [ContributionLevel.FIRST_QUARTILE]: '#9be9a8',
  [ContributionLevel.SECOND_QUARTILE]: '#40c463',
  [ContributionLevel.THIRD_QUARTILE]: '#30a14e',
  [ContributionLevel.FOURTH_QUARTILE]: '#216e39',
}

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  const { username } = params

  const { searchParams } = new URL(request.url)
  const year = searchParams.get('year')
  const width = searchParams.get('width')
  const height = searchParams.get('height')

  const user = await fetchGitHubUser(username)
  const latestYear = user.contributionYears[0]
  const targetYear = year ? Number(year) : latestYear

  const contribution = await fetchContributionsCollection(username, targetYear)

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-white p-8 text-3xl text-black">
        <div tw="flex">
          {contribution.weeks.map(({ days }, widx) => (
            <div key={widx} tw="flex flex-col">
              {days.map(({ level }, didx) => (
                <div
                  key={didx}
                  style={{ backgroundColor: levelColors[level] }}
                  tw="m-0.5 h-4 w-4 rounded"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: width ? Number(width) : IMAGE_WIDTH,
      height: height ? Number(height) : IMAGE_HEIGHT,
    }
  )
}
