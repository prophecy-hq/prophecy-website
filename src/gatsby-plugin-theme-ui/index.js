export default {
	colors: {
		primary: '#141414',
		lightGrey: 'rgba(0, 0, 0, 0.5)',
		background: '#f54936',
		highlight: '#fff',
	},
	fonts: {
		body: 'DM Sans, system-ui, sans-serif',
		heading: 'Staatliches, system-ui, sans-serif',
	},

	text: {
		bodySmall: {
			fontFamily: 'body',
			fontWeight: 400,
			fontSize: 18
		},
		
		caption: {
			fontFamily: 'body',
			color: 'lightGrey',
			fontSize: 14,
			mt: 2,
			lineHeight: 'body'
		},
	},

	buttons: {
		copyIcon: {
			height: 24,
			width: 24,
		}
	},

	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.4,
		heading: 1.125,
	},
	fontSizes: [12, 14, 16, 18, 21, 24, 28, 32, 48, 64, 72],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1440],
	sizes: [4, 8, 16, 20, 24, 32, 40, 48, 56, 64, 72],

	
	buttons: {
		primary: {
			height: 40,
			width: 40,
			borderRadius: '12px'
		}
	},
	
	forms: {
		input: {
			height: 40,
			padding: 1,
			flexGrow: '2',
			width: '100%',
			border: 'none',
			backgroundColor: 'rgba(0,0,0,0)',
			marginLeft: 2,

		},

		mainForm: {
			borderRadius: '12px',
			padding: '4px',
			backgroundColor: 'rgba(0,0,0,0.08)',
			position: 'relative',
			marginLeft: '-12px',

		},
	},

	images:{
		logo: {
			height: 56,
			mb: 72, 
			mt: 64
		}
	},

	layouts: {
		mainContainer: {
			width: '80vw',
			maxWidth: 1440,
		},

		leftContent: {
			width: '60%',
			flexDirection: 'column',
    		alignItems: 'flex-start',
		},

		empty: {
			width: '10%'
		},

		rightContent: {
			width: '30%',
			flexDirection: 'column',
    		alignItems: 'flex-start',
		},

		statbox: {
			mb: 48,
			width: '100%',
		},

	},
	
	styles: {
	
		h1: {
			fontSize: 64,
			color: 'primary',
			marginBottom: 48,
			width: '60%',
			fontFamily: 'heading',
			fontWeight: '400'
		},

		h2: {
			fontSize: 18,
			fontWeight: 700,
			marginBottom: '8px',
			fontFamily: 'body'
		},

		p:{
			fontSize: 28,
			marginBottom: 32,
			lineHeight: 'body',
			fontFamily: 'body',
			fontWeight: 400

		},

		a: {
			mb: 2,
			textDecoration: 'none',
			fontSize: 18,
			color: 'primary',
			display: 'block',
			width: 'fit-content',
			transition: '0.2s',
			'&::after': {
				border: '1px solid white',
				display: 'block',
				mt: '2px',
				transform: 'scaleX(0)',
				transition: 'transform 240ms ease-out',		
				transformOrigin: '0% 0%',
				content: '""',
			},
			'&:hover': {
				color: 'white',
				'&::after': {
					transform: 'scaleX(1)',
					transformOrigin: '0% 100%',
				}
			}

		}
	}
};
