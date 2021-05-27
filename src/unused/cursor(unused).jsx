import React, { useState, useEffect, useRef } from 'react';
import { Triangle } from 'three';

class Cursor extends React.Component {

  constructor() {
    super();

    this.state = {
      mouseX: 0,
      mouseY: 0,
      hidden: false,
      trailingX: 0,
      trailingY: 0,
      click: false,
      linkHover: false,
    };

    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [hidden, setHidden] = useState(false);
  // const [click, setClick] = useState(false);
  // const [linkHover, setLinkHover] = useState(false);
  // const [trailing, setTrailing] = useState({x: 0, y: 0});

  }

  componentDidMount() {
    document.addEventListener('mousemove',this.mMove);
    document.addEventListener('mouseenter', this.mEnter);
    document.addEventListener('mouseleave', this.mLeave);
    document.addEventListener('mousedown', this.mDown);
    document.addEventListener('mouseup', this.mUp);

    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => this.setState({linkHover: true}));
      el.addEventListener('mouseout', () => this.setState({linkHover: false}));
  });

    this.moveCursor();
  }

  componentWillUnmount(){
    document.removeEventListener('mousemove', this.mMove);
    document.removeEventListener('mouseenter', this.mEnter);
    document.removeEventListener('mouseleave', this.mLeave);
    document.removeEventListener('mousedown', this.mDown);
    document.removeEventListener('mouseup', this.mUp);
  }


     mMove = (el) => {
      let { clientX, clientY } = el;
      this.setState({
        mouseX: clientX,
        mouseY: clientY,
      });
    };

     mLeave = () => {
      // this.setState({
      //  hidden: true,
      // });
    };
  
     mEnter = () => {
      // this.setState({
      //   hidden: false,
      // })
    };

     mDown = () => {
      this.setState({
        click: true
      });
      };
  
     mUp = () => {
      this.setState({
       click: false
      });
      };

     moveCursor = () => {
        const mouseX = this.state.mouseX; 
        const mouseY = this.state.mouseY;
        const trailingX = this.state.trailingX;
        const trailingY = this.state.trailingY;

        const diffX = mouseX - trailingX;
        const diffY = mouseY - trailingY;
      
        //  Number in expression is coeficient of the delay. 10 for example. You can play with it. 
        this.setState({
          trailingX: trailingX + diffX / 10,
          trailingY: trailingY + diffY / 10,
        },() => {
          // Using refs and transform for better performance.
            let x = this.state.trailingX-40;
            let y = this.state.trailingY-40;
            this.cursorTrailing.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            this.animationFrame = requestAnimationFrame(this.moveCursor);
            console.log(this.state.trailingX, this.state.mouseX)
          });
    }

      // moveCursor();
    // animationFrame = requestAnimationFrame(moveCursor);
  
  render = () => {

    return (
      <div ref={this.cursorTrailing}
        className={
          'cursor'+
        (this.state.hidden ? 'c--hidden ' : ' ') + 
        (this.state.click ? 'c--clicked' : ' ') +
        (this.state.linkHover ? 'c--hover ' : ' ')
      }
        
        // style={{
        //   left: `${position.x}px`,
        //   top: `${position.y}px`,
        // }}
      />
    )};
};

export default Cursor;