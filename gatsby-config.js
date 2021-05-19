module.exports = {
	siteMetadata: {
		title: `Gatsby Test`,
		description: `Learning to use Gatsby.`,
		url: 'https://prophecy.one',
		author: `Akshay Verma`,
		twitterUsername: '@prophecy_hq',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-mdx`,
		`gatsby-plugin-theme-ui`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`three`,
		`react-dom`,
		`react-scroll`,
		`gatsby-plugin-anchor-links`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'G-SN41D946N7', // Google Analytics / GA
					// 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
					// 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				// gtagConfig: {
				// 	optimize_id: 'OPT_CONTAINER_ID',
				// 	anonymize_ip: true,
				// 	cookie_expires: 0,
				// },
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					// exclude: ['/preview/**', '/do-not-track/me/too/'],
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
