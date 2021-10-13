/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useRef, useEffect } from 'react';
import TeamMember from '../components/teamMember.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Work() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	// =========== BACKGROUND & CURSOR ANIMATION ===========

	useEffect(() => {
		var item = document.querySelectorAll('.bgchange');
		var cursor = document.querySelector('.cursor');

		const element = ref.current;
		var text = element.querySelector('.staggerAnimation2');
		var arr = text.querySelectorAll(
			'.staggerAnimation2 .word > .char, .whitespace',
		);

		var navbar = document.querySelectorAll('.navbar-link')

		const timelineSettings = {
			staggerValue: 0.014,
			charsDuration: 0.8,
		};

		const colors = {
			transparent: 'rgba(0,0,0,0)',
			white: '#F6F7EB',
			darkGrey: '#131112',
		};

		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#team'),
					start: 'top 50%',
					duration: 1,
					toggleActions: 'play none none reverse',
					onEnter: () => {
						gsap.to(item, { backgroundColor: colors.white });
						gsap.to(cursor, { borderColor: colors.darkGrey });
						gsap.to(navbar, {color: colors.darkGrey});
					},

					onLeaveBack: () => {
						gsap.to(item, { backgroundColor: colors.transparent });
						gsap.to(cursor, { borderColor: colors.white });
						gsap.to(navbar, {color: colors.white});
					},
				},

				// Title Animation
			})
			.set(arr, {
				y: '80%',
				opacity: 0,
			})
			.to(
				arr,
				{
					duration: timelineSettings.charsDuration,
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					stagger: timelineSettings.staggerValue,
				},
				'<+0.4',
			);
	}, []);

	return (
		<Box ref={ref}>
			<section sx={{ variant: 'layouts.rightContent' }}>
				<h1
					sx={{ marginBottom: '200px', variant: 'text.h1' }}
					className="staggerAnimation2"
					data-splitting=""
				>
					Prophecy is new, but our team isn’t. Here’s some of our past work.
				</h1>
			</section>

			{/* <div className="staggerAnimation2 words chars splitting" sx = {{variant: 'layouts.rightContent'}} ><span className="word" data-word="Prophecy" ><span className="char" data-char="P" >P</span><span className="char" data-char="r" >r</span><span className="char" data-char="o" >o</span><span className="char" data-char="p" >p</span><span className="char" data-char="h" >h</span><span className="char" data-char="e" >e</span><span className="char" data-char="c" >c</span><span className="char" data-char="y" >y</span></span><span className="whitespace" > </span><span className="word" data-word="is" ><span className="char" data-char="i" >i</span><span className="char" data-char="s" >s</span></span><span className="whitespace" > </span><span className="word" data-word="new," ><span className="char" data-char="n" >n</span><span className="char" data-char="e" >e</span><span className="char" data-char="w" >w</span><span className="char" data-char="," >,</span></span><span className="whitespace" > </span><span className="word" data-word="but" ><span className="char" data-char="b" >b</span><span className="char" data-char="u" >u</span><span className="char" data-char="t" >t</span></span><span className="whitespace" > </span><span className="word" data-word="our" ><span className="char" data-char="o" >o</span><span className="char" data-char="u" >u</span><span className="char" data-char="r" >r</span></span><span className="whitespace" > </span><span className="word" data-word="team" ><span className="char" data-char="t" >t</span><span className="char" data-char="e" >e</span><span className="char" data-char="a" >a</span><span className="char" data-char="m" >m</span></span><span className="whitespace" > </span><span className="word" data-word="isn’t." ><span className="char" data-char="i" >i</span><span className="char" data-char="s" >s</span><span className="char" data-char="n" >n</span><span className="char" data-char="’" >’</span><span className="char" data-char="t" >t</span><span className="char" data-char="." >.</span></span><span className="whitespace" > </span><span className="word" data-word="Here’s" ><span className="char" data-char="H" >H</span><span className="char" data-char="e" >e</span><span className="char" data-char="r" >r</span><span className="char" data-char="e" >e</span><span className="char" data-char="’" >’</span><span className="char" data-char="s" >s</span></span><span className="whitespace" > </span><span className="word" data-word="some" ><span className="char" data-char="s" >s</span><span className="char" data-char="o" >o</span><span className="char" data-char="m" >m</span><span className="char" data-char="e" >e</span></span><span className="whitespace" > </span><span className="word" data-word="of" ><span className="char" data-char="o" >o</span><span className="char" data-char="f" >f</span></span><span className="whitespace" > </span><span className="word" data-word="our" ><span className="char" data-char="o" >o</span><span className="char" data-char="u" >u</span><span className="char" data-char="r" >r</span></span><span className="whitespace" > </span><span className="word" data-word="past" ><span className="char" data-char="p" >p</span><span className="char" data-char="a" >a</span><span className="char" data-char="s" >s</span><span className="char" data-char="t" >t</span></span><span className="whitespace" > </span><span className="word" data-word="work." ><span className="char" data-char="w" >w</span><span className="char" data-char="o" >o</span><span className="char" data-char="r" >r</span><span className="char" data-char="k" >k</span><span className="char" data-char="." >.</span></span></div> */}

			<TeamMember
				name="Akshay Verma"
				bio=" has been in design for over 11 years. At the design consultancy, Obvious, he was instrumental in leading projects, setting up processes, and building and training the team. His work spans education, healthcare, fintech and SaaS. Specialising in early stage innovation, he also mentors startup founders for the global venture capital firm, Antler, and teaches product design. He is an alumnus of the National Institute of Design and the Copenhagen Institute of Interaction Design."
				caseStudyName1="Simple"
				caseStudyDescription1="A health record system that is helping improve population-wide hypertension control in India, Bangladesh and Ethiopia."
				caseStudyURL1="/work/simple"
				caseStudyName2="Gradeup"
				caseStudyDescription2="A social, fun exam preparation app that brings good coaching to students living in tier 2 and tier 3 cities."
				caseStudyURL2="/work/gradeup"
				lineId="line1"
				leftId="workFoldLeft1"
				rightId="workFoldRight1"
			/>

			<TeamMember
				name="Sneha Sankar"
				bio=" was the Head of Design of Graphy. Previously Creative Lead at Unacademy, St+art India, Ola, Struckby and Leo Burnett. She is an alumnus of the National Institute of Design."
				caseStudyName1="Unacademy"
				caseStudyDescription1="A cohesive brand experience for Unacademy, built from scratch for scale and success."
				caseStudyURL1="/work/unacademy"
				caseStudyName2="Graphy"
				caseStudyDescription2="An immersive and seamless brand and product experience for Graphy to bring ideas to life."
				caseStudyURL2="/work/graphy"
				lineId="line2"
				leftId="workFoldLeft2"
				rightId="workFoldRight2"
			/>

			<TeamMember
				name="Siddharth Ahuja"
				bio=" is a product designer with a Computer Science background. He helped grow the design team at smallcase and scale the product’s user base up to 200k+ users. He studied at the Copenhagen Institute of Interaction Design."
				caseStudyName1="smallcase"
				caseStudyDescription1="A mobile experience to make investing as easy as booking a cab."
				caseStudyURL1="/work/smallcase"
				caseStudyName2="LEGO Ventures"
				caseStudyDescription2="A playful mindfulness and yoga guide for children."
				caseStudyURL2="/work/lego-ventures"
				lineId="line3"
				leftId="workFoldLeft3"
				rightId="workFoldRight3"
			/>
		</Box>
	);
}
