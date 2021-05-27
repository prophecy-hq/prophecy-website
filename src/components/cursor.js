import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";

export default function Cursor (){

  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [hidden, setHidden] = useState(false);

  const ref = useRef(null);

    // gsap.set('.cursor',{xPercent:-50,yPercent:-50});

    useEffect(() => {
        var cursor = document.querySelector('.cursor');
        
        window.addEventListener('mousemove',e => {
            gsap.to(cursor,0.1,{x:e.clientX,y:e.clientY});
        });

        const addEventListeners = () => {
          document.addEventListener('mousedown', mDown);
          document.addEventListener('mouseup', mUp);
        };

        const mDown = () => {
          gsap.to(cursor,0.1,{scale: 0.8});
        };
    
        const mUp = () => {
          gsap.to(cursor,0.1,{scale: 1});
        };

        const addLinkEvents = () => {
          document.querySelectorAll('a').forEach((el) => {
              el.addEventListener('mouseover', () => {
                gsap.to(cursor, 0.1, {scale: 1.2});
                setLinkHover(true)});

              el.addEventListener('mouseout', () => {
                gsap.to(cursor, 0.1, {scale: 1});
                setLinkHover(false)});
          });

          document.querySelectorAll('button').forEach((el) => {
            el.addEventListener('mouseover', () => {
              gsap.to(cursor, 0.1, {scale: 1.2});
              setLinkHover(true)});

            el.addEventListener('mouseout', () => {
              gsap.to(cursor, 0.1, {scale: 1});
              setLinkHover(false)});
        });


          };
      
          addEventListeners();
          addLinkEvents();
            
    },[]);


  return (
<div ref = {ref}
      className={
        'cursor'+
      (hidden ? 'c--hidden ' : ' ') + 
      (linkHover ? 'c--hover ' : ' ')
    }
    />
  );
};
