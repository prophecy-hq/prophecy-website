module.exports = {
	siteMetadata: {
		title: `Prophecy`,
		description: `Innovation, strategy and design consultancy for bold organisations building digital products.`,
		url: 'https://prophecy.one',
		author: `Akshay Verma`,
		twitterUsername: '@prophecy_hq',
	},
	plugins: [
		`three`,
		`react-dom`,
		`react-device-detect`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/prophecyLogo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `caseStudies`,
				path: `${__dirname}/src/content/caseStudies`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-theme-ui`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				// defaultLayouts: {
				// 	caseStudies: require.resolve('./src/components/caseStudy/layout.jsx'),
				// 	default: require.resolve('./src/components/caseStudy/layout.jsx'),
				// },
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-embed-video',
						options: {
							width: '1280',
							// ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
							// height: '100%', // Optional: Overrides optional.ratio
							related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
							noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
							// loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
							containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
							// iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1280,
						},
					},
				],
			},
		},
		`gatsby-plugin-anchor-links`,
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://akshayverma.us3.list-manage.com/subscribe/post?u=fcc4a008c60b4fc7c9b3cb9fb&amp;id=9bf6a178a3',
				timeout: '10000',
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
	],
};
