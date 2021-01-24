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
		`gatsby-plugin-theme-ui`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
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
