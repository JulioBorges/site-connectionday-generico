require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `Connection Day`,
    siteTitleAlt: `Connection Day - O maior evento de tecnologia do centro-oeste mineiro`,
    siteHeadline: `Connection Day - O maior evento de tecnologia do centro-oeste mineiro`,
    siteUrl: `https://connectionday.com.br`,
    siteDescription: ``,
    siteLanguage: `ptBR`,
    siteImage: `/banner.jpg`,
    author: `@connection_day`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Connection Day - Evento de tecnologia do centro-oeste mineiro`,
        short_name: `Connection`,
        description: `O maior evento de tecnologia do centro-oeste mineiro`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
