const mdxPrism = require('mdx-prism')
const getReadingTime = require('reading-time')
const withMdxEnhanced = require('next-mdx-enhanced')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const { getEditUrl, addLeadingSlash } = require('@docusaurus/utils')
const path = require('path')

const EDIT_URL = 'https://github.com/miraklasiaf/miraklasiaf.now.sh/edit/master/pages'

function fileToPath(str) {
  return addLeadingSlash(str.replace('.mdx', ''))
}

const defaultConfig = {
  experimental: {
    modern: true
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

const mdxConfig = {
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  usesSrc: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
    require('./src/utils/title-style')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: async (mdxContent, frontmatter) => {
      const { __resourcePath: mdxPath } = frontmatter
      const wordCount = mdxContent.split(/\s+/gu).length
      const readingTime = getReadingTime(mdxContent)
      const slug = fileToPath(mdxPath)
      const editUrl = getEditUrl(path.join(mdxPath), EDIT_URL)

      return {
        slug,
        wordCount,
        readingTime,
        editUrl
      }
    }
  }
}

module.exports = withPlugins([withOffline, withMdxEnhanced(mdxConfig)], defaultConfig)
