

export default{


    breakpoints: ['1024px'],

    colors: {
        darkGrey: '#131112',
        red: '#F54936',
        lightRed: '#FDCCC4',
        // background: '#F6F7EB',
        white: '#F6F7EB',
        orange: '#FF725C',
        highlight: '#fff'
    },

    fonts:{
        prophecy: 'signifier, serif',
    },

    fontWeights: {
        light: 300,
        medium: 500

    },


    text: {

        bodyLarge: {
            fontFamily: 'prophecy',
            fontWeight: 'light',
            fontSize: [21,24],
            lineHeight: 'body'

        },

        bodySmall: {
            fontFamily: 'prophecy',
            fontWeight: 'light',
            fontSize: [16,18],
            lineHeight: 'body'
        },

        italic: {
            fontStyle: 'italic'
        },

        bold: {
            fontWeight: 'medium',
        },

        awardDescription: {
            fontFamily: 'prophecy',
            fontWeight: 'light',
            fontSize: [21,24],
            lineHeight: 'body',
            fontStyle: 'italic'
        },

        contactHeading: {
            fontFamily: 'prophecy',
            fontWeight: 'light',
            fontStyle: 'italic',
            fontSize: [32,40],
            lineHeight: 'heading',
        }

    },


    lineHeights: {
        body: 1.4,
		heading: 1.125,
    },


    images:{
        logo: {
            height: 32,
            width: 'auto',
            alignSelf: 'flex-start',
            position: 'absolute',
            top: 48,
            marginBottom: 48
        },

        clientLogo: {
            width: '15vw',
            height: 'auto',
            maxWidth: '160px',
            minWidth: '120px',

        }
    },


    space: [0, 4, 8, 16, 32, 64, 72, 80, 96, 128, 160, 200, 256, 512, 1440],
	sizes: [4, 8, 16, 20, 24, 32, 40, 48, 56, 64, 72],

    forms: {
		input: {
			height: 40,
			padding: 1,
			flexGrow: '2',
            width: '20vw',
			minWidth: '300px',
            maxWidth: '360px',
			border: 'none',
			backgroundColor: 'rgba(0,0,0,0)',
			marginLeft: 2,
            height: 48
            

		},

		contactForm: {
			borderRadius: '0px',
			backgroundColor: 'rgba(0,0,0,0.08)',
			position: 'relative',
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

			transition: '0.3s',

			'&:hover': {
				backgroundImage: 'url("/arrow-black.svg")',
				backgroundColor: 'white',
			},
		},
	},

    layouts:{

        animatedSpan: {
            display: 'inline-block'
        },

        fullContainer: {
            width: '100%',
            paddingTop: 120,
            paddingBottom: 120,


        },
        
        mainContainer: {
            width: '90vw',
            maxWidth: 1440,
            margin: '0 auto',

            '@media screen and (max-width: 1024px)': {
                maxWidth: '768px'
            },
        },

        rightContent: {
            width: '50%',
            marginRight: '0px',
            marginLeft: 'auto',

            '@media screen and (max-width: 1024px)': {
                width: '100%',
                margin: '0 auto'
            },
        },

        leftContent: {
            width: '50%',
            marginRight: 'auto',
            marginLeft: '0',
            minWidth: '300px',

            '@media screen and (max-width: 1024px)': {
                width: '100%',
                margin: '0 auto'
            },
        },

        navbar: {
            position: 'fixed',
            color: 'darkGrey',
            textDecoration: 'none',
            right: 32,
            top: 48,
            display: 'flex',
            flexDirection: 'column'

        },

        link: {
    
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'darkGrey',
            // display: 'block',
            width: 'fit-content',
            transition: '0.2s',
            fontFamily: 'prophecy',
            fontSize: 16,
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
                }
            }
        },


        canvas: {
            width: '100vw',
            height: '100vh',
            display: 'block',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '-9999',
            backgroundColor: 'red'
        },

        responsiveFlex: {
            flexDirection: 'row',

            '@media screen and (max-width: 1024px)': {
                flexDirection: 'column'
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



            '@media screen and (max-width: 1024px)': {
                gridTemplateColumns: '1fr 1fr',
                width: '100%',
                gridGap: 48,
                marginLeft: '0',
                minWidth: '0px',
                paddingTop: 80
            },


        },

        awardsGrid: {
            color: 'white', 
            width: '40%', 
            marginRight: '10%', 
            textAlign: 'center',
            gridGap: 48,
            justifyContent: 'start',

            '@media screen and (max-width: 1024px)': {
                gridTemplateColumns: '1fr 1fr',
                width: '100%',
                gridGap: 48,
                minWidth: '0px',
                paddingTop: 80,
                margin: '0 auto'
            },

        },

        awardsGridItem: {
            flexDirection: 'column', 
            alignItems: 'center', 
            minWidth: '160px',

            '@media screen and (max-width: 1024px)': {
                minWidth: '0px',
            },
    
        },


        newsGrid: {
            gridTemplateColumns: '1fr 1fr',
            gridGap: 48,
            marginLeft: 'auto',

            '@media screen and (max-width: 1024px)': {
                gridTemplateColumns: '1fr',
                width: '100%',
                gridGap: 48,
                minWidth: '0px',
                margin: '0 auto'
            },  
        },


        newsGridItem: {
        maxWidth: '360px',
        gridGap: 48
        },


        flexLeft: {
            flex: 'wrap',
            maxWidth: '320px',
            wordBreak: 'break-word',
            lineHeight: 'body',

            '@media screen and (max-width: 1024px)': {
                width: '100%',
                margin: '0 auto',
                maxWidth: '100%'
            },
    
        },

        line: { 
            height: '80vh',
            padding: '64px 48px',
            flex: '1',

            '@media screen and (max-width: 1024px)': {
                width: '100%',
                margin: '0 auto',
                height: '30vh',
                padding: '48px 120px',
            },
        },


        flexRight: { 
            alignSelf: 'flex-end',

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

            '@media screen and (max-width: 1024px)': {
                width: '100%',
                margin: '0 auto',
                height: '30vh',
                padding: '16px 24px'
            },
        },
},

    styles:{

        a:{
            paddingBottom: 16,
            textDecoration: 'none',
            color: 'darkGrey',
			// display: 'block',
			width: 'fit-content',
			transition: '0.2s',
            fontFamily: 'prophecy',
            fontSize: 16,
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
				}
            }

        },

        h1: {
            fontFamily: 'prophecy',
            fontWeight: 'light',
            fontSize: [40, 56],
            lineHeight: 'heading',

        },

        h2: {
            fontFamily: 'prophecy',
            fontWeight: 'light',
            fontSize: [32, 40],
            lineHeight: 'heading',
            marginBottom: 160
        },

        h3: {
            fontFamily: 'prophecy',
            fontWeight: 'medium',
            fontSize: [21,24],
            lineHeight: 'heading',

          
        },

        p: {

                fontFamily: 'prophecy',
                fontSize: 16,
                lineHeight: 'body'
        }
    }, 



}