/** @type {import('next').NextConfig} */

const rewrites = async () => [
  {
    source: '/bee.js',
    destination: 'https://cdn.splitbee.io/sb.js',
  },
  {
    source: '/_hive/:slug',
    destination: 'https://hive.splitbee.io/:slug',
  },
]

module.exports = {
  reactStrictMode: true,
  rewrites,
}
