/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/riot/:path*',
        destination: 'https://americas.api.riotgames.com/:path*',
      },
      {
        source: '/api/steam/:path*',
        destination: 'https://api.steampowered.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
