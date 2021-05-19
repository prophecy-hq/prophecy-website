export default{


    breakpoints: ['1024px'],

    colors: {
        darkGrey: '#131112',
        red: '#F54936',
        lightRed: '#FDCCC4',
        background: '#F6F7EB',
        white: '#F6F7EB',
        orange: '#FF725C',
        highlight: '#fff'
    },

    fonts:{
        prophecy: 'serif',

    },


    text: {

        bodyLarge: {
            fontFamily: 'prophecy',
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 'body'

        },

        bodySmall: {
            fontFamily: 'prophecy',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 'body'
        }

    },


    lineHeights: {
        body: 1.4,
		heading: 1.125,
    },

    space: [0, 4, 8, 16, 32, 64, 72, 80, 96, 128, 256, 512, 1440],
	sizes: [4, 8, 16, 20, 24, 32, 40, 48, 56, 64, 72],



   layouts:{

    fullContainer: {
        width: '100%',
        paddingTop: 80,
        paddingBottom: 80
    },
    
    mainContainer: {
        width: '90vw',
        maxWidth: 1440,
            
        '@media screen and (max-width: 1024px)': {
            width: '90vw',
        },
    },

    rightContent: {
        width: '50%',
        marginRight: '0px',
        marginLeft: 'auto',
    },

    leftContent: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: '0',
    },


    canvas: {
        width: '100vw',
        height: '100vh',
        display: 'block',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-9999',
    },


    teamBio: {
        minWidth: '320px',
        width: '25%',
        marginRight: 'auto'
    },

    line: { 
        height: '400px',
        width: '25%',
        paddingTop: 48,
        paddingBottom: 48
    },

    caseStudyBlock: { 
        marginLeft: 'auto', 
        alignSelf: 'flex-end',
    }


    },

    styles:{
        h1: {
            fontFamily: 'prophecy',
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 'heading'
        },

        h2: {
            fontFamily: 'prophecy',
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 'heading',
            marginBottom: 56
        },

        h3: {
            fontFamily: 'prophecy',
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 'heading',
          
        },

        p: {

                fontFamily: 'prophecy',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 'body'
        }
    }, 



}