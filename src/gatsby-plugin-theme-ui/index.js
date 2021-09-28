// import { text } from 'cheerio/lib/api/manipulation';
import '../styles/fonts.css';
import '../styles/mdx.css';

export default {
	breakpoints: ['991px', '767px'],

	colors: {
		darkGrey: '#131112',
		red: '#F54936',
		lightRed: '#FDCCC4',
		background: '#131112',
		white: '#F6F7EB',
		white_a10: '#FFFFFF10',
		white_a30: '#FFFFFF16',
		white_a50: '#FFFFFF44',
		white_a70: '#FFFFFF72',
		orange: '#FF725C',
		orange_a70: '#FF725C72',
		highlight: '#fff',
	},

	fonts: {
		prophecy: 'signifier, serif',
	},

	fontWeights: {
		extraLight: 200,
		light: 300,
		medium: 500,
	},

	text: {
		h1: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontSize: [40, 56],
			lineHeight: 'heading',
			// transform: 'translateZ(0)',
		},

		h2: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontSize: [32, 40],
			lineHeight: 'heading',
			marginBottom: 96,
			// transform: 'translateZ(0)',
		},

		h3: {
			fontFamily: 'prophecy',
			fontWeight: 'medium',
			fontSize: [28, 32],
			lineHeight: '32px',
			// transform: 'translateZ(0)',
		},

		h4: {
			fontFamily: 'prophecy',
			fontWeight: 'medium',
			fontSize: [18, 20],
			lineHeight: '32px',
			textTransform: 'uppercase',
			letterSpacing: '2.5px',
			// transform: 'translateZ(0)',
		},

		h5: {
			fontFamily: 'prophecy',
			fontWeight: 'medium',
			fontSize: [16, 18],
			lineHeight: '24px',
			// transform: 'translateZ(0)',
		},

		customHeading: {
			fontFamily: 'prophecy',
			fontWeight: 'medium',
			fontSize: [21, 24],
			lineHeight: 'heading',
			// transform: 'translateZ(0)',
		},

		bodyLarge: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontSize: [21, 24],
			lineHeight: '32px',
			// ':lastChild': {
			// 	marginBottom: 0,
			// },
		},

		bodySmall: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontSize: [16, 18],
			lineHeight: '24px',
			italic: {
				fontStyle: 'italic',
				fontWeight: 'light',
			},
		},

		link: {
			cursor: 'pointer',
			textDecoration: 'none',
			color: 'darkGrey',
			// display: 'block',
			width: 'fit-content',
			transition: '0.2s',
			fontFamily: 'prophecy',
			'&::after': {
				border: '1px solid',
				color: 'darkGrey',
				display: 'block',
				mt: '2px',
				transform: 'scaleX(0)',
				transition: 'transform 240ms ease-out',
				transformOrigin: '0% 0%',
				content: '""',
			},
			'&:hover': {
				color: 'darkGrey',
				'&::after': {
					transform: 'scaleX(1)',
					transformOrigin: '0% 100%',
				},
			},
		},

		italic: {
			fontStyle: 'italic',
			fontWeight: 'light',
		},

		bold: {
			fontWeight: 'medium',
		},

		caption: {
			fontSize: [14, 16],
			fontFamily: 'prophecy',
			fontWeight: 'light',
			lineHeight: 'body',
			width: '20vw',
			minWidth: '300px',
			maxWidth: '360px',
		},

		awardDescription: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontSize: [21, 24],
			lineHeight: 'body',
			fontStyle: 'italic',
		},

		contactHeading: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontStyle: 'italic',
			fontSize: [32, 40],
			lineHeight: 'heading',
		},

		caseStudyTitle: {
			fontFamily: 'prophecy',
			fontWeight: 'light',
			fontSize: [64, 96],
			lineHeight: 'heading',
			padding: ['80px 0', '128px 0'],
		},
	},

	lineHeights: {
		body: 1.4,
		heading: 1.125,
	},

	images: {
		logo: {
			height: 32,
			width: 'auto',
			alignSelf: 'flex-start',
			position: 'absolute',
			top: 48,
			marginBottom: 48,
		},

		clientLogo: {
			width: '15vw',
			height: 'auto',
			maxWidth: '160px',
			minWidth: '120px',
		},
	},

	space: [0, 4, 8, 16, 32, 64, 72, 80, 96, 128, 160, 200, 256, 512, 1440],
	sizes: [4, 8, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72],

	forms: {
		input: {
			variant: 'text.bodyLarge',
			padding: 1,
			// flexGrow: '2',
			width: '20vw',
			minWidth: '300px',
			maxWidth: '360px',
			border: 'none',
			backgroundColor: 'rgba(0,0,0,0)',
			marginLeft: 2,
			height: 48,
		},

		contactForm: {
			variant: 'text.bodyLarge',
			borderRadius: '0px',
			backgroundColor: 'rgba(0,0,0,0.08)',
			position: 'relative',
			width: 'fit-content',
			marginLeft: '-12px',
		},
	},

	buttons: {
		primary: {
			height: 48,
			width: 48,
			backgroundColor: 'darkGrey',

			backgroundImage: 'url("/arrow.svg")',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			cursor: 'pointer',
			backgroundSize: '48px 48px',

			// transition: '0.3s',

			// '&:hover': {
			// 	backgroundImage: 'url("/arrow-black.svg")',
			// 	backgroundColor: 'white',
			// },
		},
	},

	layouts: {
		animatedSpan: {
			display: 'inline-block',
		},

		fullContainer: {
			width: '100%',
			// overflow: 'hidden'
		},

		mainContainer: {
			width: '90vw',
			maxWidth: 1440,
			margin: '0 auto',
			paddingBottom: '15vh',

			'@media screen and (max-width: 1024px)': {
				maxWidth: '768px',
			},
		},

		rightContent: {
			width: '50%',
			marginRight: '0px',
			marginLeft: 'auto',

			'@media screen and (max-width: 1024px)': {
				width: '100%',
				margin: '0 auto',
			},
		},

		leftContent: {
			width: '50%',
			marginRight: 'auto',
			marginLeft: '0',
			minWidth: '300px',

			'@media screen and (max-width: 1024px)': {
				width: '100%',
				margin: '0 auto',
			},
		},

		navbar: {
			position: 'fixed',
			color: 'darkGrey',
			textDecoration: 'none',
			right: 32,
			top: 48,
			display: 'flex',
			flexDirection: 'column',
		},

		fullHeightFlex: {
			height: '100vh',
			alignItems: 'center',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				height: 'auto',
				paddingBottom: '10vh',
			},
		},

		canvas: {
			width: '100vw',
			height: '100vh',
			display: 'block',
			position: 'fixed',
			top: '0',
			left: '0',
			zIndex: '-9999',
			// backgroundColor: 'red',
			transform: 'translateZ(0)',
		},

		responsiveFlex: {
			flexDirection: 'row',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				flexDirection: 'column',
			},
		},

		responsiveGrid: {
			gridTemplateColumns: '1fr 1fr 1fr',
			height: 'fit-content',
			width: 'fit-content',
			gridGap: 56,
			justifyItems: 'center',
			alignItems: 'center',
			marginLeft: 'auto',
			minWidth: '500px',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				gridTemplateColumns: '1fr 1fr',
				width: '100%',
				gridGap: 48,
				marginLeft: '0',
				minWidth: '0px',
				paddingTop: 80,
			},
		},

		awardsGrid: {
			color: 'white',
			width: '40%',
			marginRight: '10%',
			textAlign: 'center',
			gridGap: 48,
			justifyContent: 'start',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				gridTemplateColumns: '1fr 1fr',
				width: '100%',
				gridGap: 48,
				minWidth: '0px',
				paddingTop: 80,
				margin: '0 auto',
			},
		},

		awardsGridItem: {
			flexDirection: 'column',
			alignItems: 'center',
			minWidth: '160px',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				minWidth: '0px',
			},
		},

		newsGrid: {
			gridTemplateColumns: '1fr 1fr',
			gridGap: 72,
			marginLeft: 'auto',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				gridTemplateColumns: '1fr',
				width: '100%',
				gridGap: 48,
				minWidth: '0px',
				margin: '0 auto',
			},
		},

		newsGridItem: {
			maxWidth: '360px',
			gridGap: 48,
			// transform: 'translateZ(0)',
		},

		flexLeft: {
			flex: 'wrap',
			maxWidth: '320px',
			wordBreak: 'break-word',
			lineHeight: 'body',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				width: '100%',
				margin: '0 auto',
				maxWidth: '100%',
			},
		},

		line: {
			height: '80vh',
			padding: '64px 48px',
			flex: '1',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				width: '100%',
				margin: '0 auto',
				height: '30vh',
				padding: '48px 120px',
			},
		},

		flexRight: {
			alignSelf: 'flex-end',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				width: '100%',
				margin: '0 auto',
			},
		},

		contactLine: {
			height: '70vh',
			padding: '64px 48px',
			flex: '1',
			paddingBottom: '30vh',
			// transform: 'translateZ(0)',

			'@media screen and (max-width: 1024px)': {
				width: '100%',
				margin: '0 auto',
				height: '20vh',
				padding: '48px 80px',
			},
		},
	},

	styles: {
		h1: {
			variant: 'text.h1',
			color: 'white',
		},

		h2: {
			variant: 'text.h2',
			color: 'lightRed',
		},

		h3: {
			variant: 'text.h3',
			color: 'orange',
			margin: '192px 0 32px 0',
		},

		h4: {
			variant: 'text.h4',
			color: 'lightRed',
			margin: '96px 0 32px 0',
		},

		h5: {
			variant: 'text.h5',
			color: 'white',
		},

		p: {
			variant: 'text.bodyLarge',
			fontWeight: 'extraLight',
			color: 'white',
			margin: '1em 0',
		},

		a: {
			cursor: 'pointer',
			textDecorationColor: 'orange_a70',
			textDecorationThickness: '0.0625em',
			textUnderlineOffset: '0.2em',
			color: 'white',
			'&:hover': {
				textDecorationColor: 'orange',
			},
		},

		li: {
			variant: 'text.bodyLarge',
			color: 'white',
			listStyleType: 'disc',
			marginBottom: '16px',
		},

		hr: {
			borderTopWidth: '1px',
			borderColor: 'white_a70',
		},

		img: {
			margin: '2em 0',
		},

		spinner: {
			color: 'white',
			position: 'absolute',
			top: '50%',
			left: '50%',
		},
	},
};
