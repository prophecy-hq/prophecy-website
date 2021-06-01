  
import React,{ useRef, useEffect, useState } from "react";
import * as THREE from 'three';
import "./seedrandom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextureLoader } from "three";


export default function Art () {
 
const mount = useRef(null);
gsap.registerPlugin(ScrollTrigger);

    // ======= SHADERS ========

    useEffect(() => {

    const vertexShader = 
    `void main() { 
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;
    }`;
    const fragmentShader = 
    `uniform vec3 vertColor; 
    uniform float alpha;
    
    float rand(vec2 co){
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }
    
    void main() {
        vec4 color = vec4(vertColor, 1.0);
        color.w = (0.01+pow(rand(gl_FragCoord.xy*0.001), alpha));
        gl_FragColor = color;
    }`;

    var item = mount.current;

    let paused = false;

    var fps = 30;
    var interval = 1000/fps;
    var deltaSum = 0;


    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector("#team"),
            start: "top 90%",
            duration: 1,
            toggleActions: "play none none reverse",
            onEnter: () => {
                paused = true;
                            },
                            
            onLeaveBack: () => {
                paused = false;
                start();
            },
        }
    })

    // === CONSTANT DECLARATIONS ===

    var delta = 0; let clock;
    let camera, controls, group, scene, renderer, composer, material, arcMaterial;
    let lines;
    let linesStore;

  
    // var width = window.innerWidth;
    // var height = window.innerHeight;

    var width = mount.current.clientWidth;
    var height = mount.current.clientHeight;
    let frameId;

    // var colors = [0x27007F, 0x00A6FF, 0xFF216E, 0xFFB7E3, 0xFFFFFF];
    var color = 0xFFFFFF;
    var allLines = [];
    var startingPoints = []; var targetPoints = [];

    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(width / 2, height / 2);
    
    var flagArray = [];
    var directionIsReverse = [];
    var alphaIsIncreasing = [];

    let geometry = new THREE.BufferGeometry();
    var points = [];

    // var points = new Float32Array();


    // ===== FUNCTIONS =====

    Math.seedrandom(Math.random(99999).toString());

    function mapRange(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }


    function returnUniforms() {
        var uniforms = {
            // vertColor: { type: 'vec3', value: new THREE.Color(colors[Math.trunc(Math.random() * colors.length)]) },
            vertColor: { type: 'vec3', value: new THREE.Color(color) },
            alpha: { type: 'float', value: Math.random() * 6 },
        }

        return uniforms;
    }

    function returnColor() {
        // return new THREE.Color(colors[Math.trunc(Math.random() * colors.length)]);
        return color;
    }


    //========= LINE CLASS ==========

    var Line = function (x1, y1, x2, y2) {
        this.x1 = x1 || 0;
        this.y1 = y1 || 0;
        this.x2 = x2 || 0;
        this.y2 = y2 || 0;
    }

    Line.prototype = {
        constructor: Line,

        getLine: function () {
            var cx = (this.x1 + this.x2) * 0.5;
            var cy = (this.y1 + this.y2) * 0.5;

            var a = this.x1 - this.x2;
            var b = this.y1 - this.y2;

            var c = Math.sqrt(a * a + b * b);

            var h = c * 0.5;
            var ang = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
            var des = Math.sqrt(h * h * (4 / 3)) * 0.5;

            return new Line(cx + Math.cos(ang + Math.PI / 2) * des, cy + Math.sin(ang + Math.PI / 2) * des, cx + Math.cos(ang - Math.PI / 2) * des, cy + Math.sin(ang - Math.PI / 2) * des);
        },

        drawLine: function () {
        
            // First set of lines
            var targetXDistance = this.x2 - this.x1;
            var targetYDistance = this.y2 - this.y1;
            var targetTotalDistance = Math.sqrt(Math.pow(targetXDistance, 2) + Math.pow(targetYDistance, 2));
            var angle = Math.atan(targetYDistance / targetXDistance);
            var startingDistance = targetTotalDistance * Math.random();
            var startingX2 = this.x1 + startingDistance * Math.cos(angle);
            var startingY2 = this.y1 + startingDistance * Math.sin(angle);

           
            // points.push(new THREE.Vector3(this.x1, this.y1, Math.random()));
            points.push(this.x1); points.push(this.y1); points.push(Math.random());
            // geometry.vertices.push(new THREE.Vector3(this.x1, this.y1, Math.random()));
            // points.push(new THREE.Vector3(startingX2, startingY2, z * Math.random())); // Random progress
            // points.push(new THREE.Vector3(this.x1, this.y1, Math.random())); // Same as starting point
            // points.push(new THREE.Vector3(this.x2, this.y2, 0)); // Target destination
            points.push(this.x1); points.push(this.y1); points.push(Math.random());
            // points.push(this.x1); points.push(this.y2); points.push(Math.random());
            // geometry.vertices.push(new THREE.Vector3(this.x1, this.y2, Math.random()));
            // startingPoints.push(new THREE.Vector3(this.x1, this.y1, Math.random()));
            targetPoints.push(this.x1); targetPoints.push(this.y1);  targetPoints.push(Math.random()); 
            targetPoints.push(this.x2); targetPoints.push(this.y2);  targetPoints.push(Math.random()); 

            // targetPoints.push(new THREE.Vector3(this.x2, this.y2, Math.random()));

            // var geometry = new THREE.BufferGeometry().setFromPoints(points);
    

  
            for(let i=0;i<6;i++){
                directionIsReverse.push(false);
                flagArray.push(false);
                alphaIsIncreasing.push(Math.random() < 0.5);

            }
       
    

            // Second set of lines
            var cx = (this.x1 + this.x2) * 0.5;
            var cy = (this.y1 + this.y2) * 0.5;
            var a = this.x1 - this.x2;
            var b = this.y1 - this.y2;
            var c = Math.sqrt(a * a + b * b);
            var h = c * 0.5;
            var ang = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
            var des = Math.sqrt(h * h * (4 / 3)) * 0.5;
            var startingX1 = cx + Math.cos(ang + Math.PI / 2) * des;
            var startingY1 = cy + Math.sin(ang + Math.PI / 2) * des;
            var targetX2 = cx + Math.cos(ang - Math.PI / 2) * des;
            var targetY2 = cy + Math.sin(ang - Math.PI / 2) * des;
            targetXDistance = targetX2 - startingX1;
            targetYDistance = targetY2 - startingY1;
            targetTotalDistance = Math.sqrt(Math.pow(targetXDistance, 2) + Math.pow(targetYDistance, 2));
            angle = Math.atan(targetYDistance / targetXDistance);
            startingDistance = targetTotalDistance * Math.random();
            startingX2 = startingX1 + startingDistance * Math.cos(angle);
            startingY2 = startingY1 + startingDistance * Math.sin(angle);

  
            // points.push(new THREE.Vector3(cx + Math.cos(ang + Math.PI / 2) * des, cy + Math.sin(ang + Math.PI / 2) * des, Math.random() ));
            points.push(cx + Math.cos(ang + Math.PI / 2) * des); points.push(cy + Math.sin(ang + Math.PI / 2) * des); points.push(Math.random());
            targetPoints.push(cx + Math.cos(ang + Math.PI / 2) * des); targetPoints.push(cy + Math.sin(ang + Math.PI / 2) * des); targetPoints.push(Math.random());
            // geometry.vertices.push(new THREE.Vector3(cx + Math.cos(ang + Math.PI / 2) * des, cy + Math.sin(ang + Math.PI / 2) * des, Math.random() ));
            // points.push(new THREE.Vector3(startingX2, startingY2, z * Math.random())); //Random Progress
            // points.push(new THREE.Vector3(cx + Math.cos(ang + Math.PI / 2) * des, cy + Math.sin(ang + Math.PI / 2) * des, Math.random())); // Same as starting point
            // points.push(new THREE.Vector3((cx + Math.cos(ang - Math.PI / 2) * des), (cy + Math.sin(ang - Math.PI / 2) * des), 0)); // Target destination
            points.push(cx + Math.cos(ang + Math.PI / 2) * des); points.push(cy + Math.sin(ang + Math.PI / 2) * des); points.push(Math.random());
            // points.push((cx + Math.cos(ang - Math.PI / 2) * des)); points.push((cy + Math.sin(ang - Math.PI / 2) * des)); points.push(Math.random());
            targetPoints.push((cx + Math.cos(ang - Math.PI / 2) * des)); targetPoints.push((cy + Math.sin(ang - Math.PI / 2) * des)); targetPoints.push(Math.random());
            // geometry.vertices.push(new THREE.Vector3(new THREE.Vector3((cx + Math.cos(ang - Math.PI / 2) * des), (cy + Math.sin(ang - Math.PI / 2) * des), 0)));
            // startingPoints.push(new THREE.Vector3(cx + Math.cos(ang + Math.PI / 2) * des, cy + Math.sin(ang + Math.PI / 2) * des, Math.random()));
            // targetPoints.push(new THREE.Vector3(cx + Math.cos(ang - Math.PI / 2) * des, cy + Math.sin(ang - Math.PI / 2) * des, Math.random()));



            for(let i=0;i<6;i++){
                directionIsReverse.push(false);
                flagArray.push(false);
                alphaIsIncreasing.push(Math.random() < 0.5);
            }
            
 
        },


        drawAngles: function () {

            var a = this.x1 - this.x2;
            var b = this.y1 - this.y2;
            var c = Math.sqrt(a * a + b * b);
            var h = c * 2;
            var ang = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
            var col1 = returnColor();
            var col2 = returnColor();
            var da = Math.PI / 6;

            var amp1 = Math.random() * (0.4 - 0.25) + 0.25;
            //float amp1 = 0.2;
            var amp2 = amp1 * Math.random() * (0.9 - 0.2) + 0.2;
            //float amp2 = amp1*0.5;
            var alp1 = Math.random() * 240 * Math.random();
            //float alp1 = 180;
            var alp2 = (Math.random() * (250 - 80) + 80) * Math.random();

            arc2(this.x1, this.y1, 0, h * 0.5, ang - da, ang + da, col1, alp1, 0);
            arc2(this.x1, this.y1, h * amp2, h * amp1, ang - da, ang + da, col2, 0, alp2);
            arc2(this.x2, this.y2, 0, h * 0.5, ang - da + Math.PI, ang + da + Math.PI, col1, alp1, 0);
            arc2(this.x2, this.y2, h * amp2, h * amp1, ang - da + Math.PI, ang + da + Math.PI, col2, 0, alp2);
        }


    }


    function arc2(x, y, s1, s2, a1, a2, col, alp1, alp2) {

        var r1 = s1 * 0.6;
        // console.log(r1);
        var r2 = s2 * 0.3;
        var amp = (a2 - a1);
        var ma = mapRange(amp, 0, 6.283185307179586, 0, 1);
        // console.log(ma);
        var cc = Math.max(2, Math.trunc(Math.max(r1, r2) * Math.PI * ma));
        var da = amp / cc;


        for (let i = 0; i < cc; i++) {

            var ang = a1 + da * i;
            var arcPoints = [];
            arcPoints.push(new THREE.Vector3(x + Math.cos(ang) * r1, y + Math.sin(ang) * r1, 0));
            arcPoints.push(new THREE.Vector3(x + Math.cos(ang + da) * r1, y + Math.sin(ang + da) * r1, 0));
            arcPoints.push(new THREE.Vector3(x + Math.cos(ang + da) * r2, y + Math.sin(ang + da) * r2, 0));
            arcPoints.push(new THREE.Vector3(x + Math.cos(ang) * r2, y + Math.sin(ang) * r2, 0));

            var arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);

            
            arcMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    vertColor: { type: 'vec3', value: new THREE.Color(col), },
                    alpha: { type: 'float', value: 3 },
                },
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                transparent: true
            });

           


            var arc = new THREE.Mesh(arcGeometry, arcMaterial);
            group.add(arc);

    }
}






  function startingAnimation(i){
    
    /* OPTIONS */
                
    var currentPositions = lines.geometry.attributes.position.array;
    

    var currentX = targetPoints[i] - currentPositions[i+3];
    var currentY = targetPoints[i+1] - currentPositions[i+4];
    var currentDistance = Math.sqrt(Math.pow(currentY, 2) + Math.pow(currentX, 2));
    // console.log(currentDistance);

    var targetX = targetPoints[i+3] - targetPoints[i];
    var targetY = targetPoints[i+4] - targetPoints[i+1];
    var targetDistance = Math.sqrt(Math.pow(targetY, 2) + Math.pow(targetX, 2));

    var angle = Math.atan(targetY / targetX);

    var speed = 150*delta;


    var angleIsPositive;
    if (angle < 0) {
        angleIsPositive = false;
    }
    if (angle > 0) {
        angleIsPositive = true;
    }


    /* ANIMATIONS */

      if (angleIsPositive) {
        currentPositions[i+3] +=  Math.cos(angle) * speed ;
        currentPositions[i+4] +=  Math.sin(angle) * speed ;
      }

     if (!angleIsPositive) {
         currentPositions[i+4] -=  Math.sin(angle) * speed ;
         currentPositions[i+3] -=  Math.cos(angle) * speed ;
      }        

      
      if(currentDistance / targetDistance > 1){
          
        flagArray[i]=true;
        linesStore = lines;

      } 

     
    }


function mainAnimation(i){

    
    var minLengthProgress = 0.001;
    var maxLengthProgress = 1.1;

    /* ANIMATE LINES */
    var currentPositions = lines.geometry.attributes.position.array;

    var currentX = targetPoints[i] - currentPositions[i+3];
    var currentY = targetPoints[i+1] - currentPositions[i+4];
    var currentDistance = Math.sqrt(Math.pow(currentY, 2) + Math.pow(currentX, 2));

    var targetX = targetPoints[i+3] - targetPoints[i];
    var targetY = targetPoints[i+4] - targetPoints[i+1];
    var targetDistance = Math.sqrt(Math.pow(targetY, 2) + Math.pow(targetX, 2));

    var angle = Math.atan(targetY / targetX);

    var lengthSpeed = 15*delta;
    if(targetDistance < 200)
    lengthSpeed/=5;
    if(targetDistance < 50)
    lengthSpeed /= 10;
    if(targetDistance < 10)
    lengthSpeed /= 10;

    


    var angleIsPositive;
    if (angle < 0) {
        angleIsPositive = false;
    }
    if (angle > 0) {
        angleIsPositive = true;
    }


    if (currentDistance / targetDistance < minLengthProgress) { directionIsReverse[i] = false; }
    if (currentDistance / targetDistance > maxLengthProgress) { directionIsReverse[i] = true; }

    if (!directionIsReverse[i]) {
        if (angleIsPositive) {
            currentPositions[i+3] += Math.cos(angle) * lengthSpeed;
            currentPositions[i+4] += Math.sin(angle) * lengthSpeed ;
        }
        if (!angleIsPositive) {
            currentPositions[i+3] -= Math.cos(angle) * lengthSpeed ;
            currentPositions[i+4] -= Math.sin(angle) * lengthSpeed ;
        }
    }


    if (directionIsReverse[i]) {
        if (angleIsPositive) {
            currentPositions[i+3] -= Math.cos(angle) * lengthSpeed ;
            currentPositions[i+4] -= Math.sin(angle) * lengthSpeed ;
        }
        if (!angleIsPositive) {
            currentPositions[i+3] += Math.cos(angle) * lengthSpeed ;
            currentPositions[i+4] += Math.sin(angle) * lengthSpeed ;
         }
         }
}   


function opacityAnimation(i){
		var alphaSpeed = 0.2*delta;
		var minAlpha = 1;
		var maxAlpha = 10;

		/* ANIMATE OPACITY */
		var currentAlpha = lines.material.uniforms.alpha.value;
        // console.log(currentAlpha);

		if (currentAlpha < minAlpha) { alphaIsIncreasing[i] = true; }
		if (currentAlpha > maxAlpha) { alphaIsIncreasing[i] = false; }

		if (alphaIsIncreasing[i]) {
			lines.material.uniforms.alpha.value += (currentAlpha * alphaSpeed + alphaSpeed);
            // arcMaterial.uniforms.alpha.value -= (currentAlpha * alphaSpeed + alphaSpeed);
			// console.log(allLines[30].material.uniforms.alpha.value + " increased " + allLines[30].alphaIsIncreasing);
		}
		if (!alphaIsIncreasing[i]) {
			lines.material.uniforms.alpha.value -= (currentAlpha * alphaSpeed + alphaSpeed);
            // arcMaterial.uniforms.alpha.value += (currentAlpha * alphaSpeed + alphaSpeed);
			// console.log(allLines[30].material.uniforms.alpha.value + " decreased " + allLines[30].alphaIsIncreasing);
		}
    }



    // ================= INIT =================

        //  camera = new THREE.OrthographicCamera( width / - 1, width / 1, height / 1, height / - 1, -1000, 1000 );
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 400;
    camera.position.x = -width / 8;
    camera.position.y = -height / 8;

    group = new THREE.Group();
    scene = new THREE.Scene();

    clock = new THREE.Clock();

    /* SCENE SCALE */
    var ss = width / 10;
    var hh = Math.sqrt(ss * ss * 0.75);
    var cc = Math.trunc(width / hh);
    var ccc = Math.round(cc * 4);

    for (let j = 0; j < ccc; j++) {
        var x = Math.trunc(Math.random() * cc);
        var y = Math.trunc(Math.random() * cc);
        var dy = (y % 2) * 0.5;
        var x1 = (x - cc * 0.5 + dy) * ss;
        var y1 = (y - cc * 0.5) * hh;
        var ang = (Math.trunc(Math.random() * 3) * 120 + 30) * Math.PI / 180;
        var ddd = Math.trunc((Math.random() * cc / 3) + 1) * 2;
        var x2 = x1 + Math.cos(ang) * hh * ddd;
        var y2 = y1 + Math.sin(ang) * hh * ddd;

        var tempLines = [];
        tempLines.push(new Line(x1, y1, x2, y2));

        var subLines = Math.random() * 20;

        for (let i = 0; i < subLines; i++) {
            var l = tempLines[tempLines.length - 1];
            tempLines.push(l.getLine());
        }

        for (let i = 0; i < tempLines.length; i++) {
            var l = tempLines[i];
            l.drawLine();
            if (i % 100 == 5) {
                l.drawAngles();
            }
        }

 
        // var line = new THREE.LineSegments( geometry, material );
        // scene.add(line);

   
    }

    var pointsArray = new Float32Array(points.length);

    for(let i=0;i<points.length;i++){
        
        pointsArray[i] = points[i];
    }

    geometry.setAttribute( 'position', new THREE.BufferAttribute( pointsArray, 3 ) );

    material = new THREE.ShaderMaterial({
        uniforms: returnUniforms(),
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
    });

    lines = new THREE.LineSegments(geometry, material);



    group.add(lines);
    scene.add(group);
    // scene.add(lines);
    group.rotateZ(Math.random() * 360);
    // console.log(arcMaterial);

    geometry.attributes.position.needsUpdate = true;
    geometry.verticesNeedUpdate = true;


    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    renderer.setClearColor (0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.current.appendChild( renderer.domElement );

    // bloom();



// ================= ANIMATE =================


function animate() {

    delta = clock.getDelta();
    // deltaSum += delta;



    if(!paused){

        // console.log(delta);


    


        for (let i = 0; i < points.length; i++) {

            if(i%6==0){

                if(flagArray[i] == false){

                startingAnimation(i);

                }    

                else { 
                    mainAnimation(i);

            

                }
                // console.log(flagArray[i]);

                opacityAnimation(i);

            }

    }

        geometry.attributes.position.needsUpdate = true;
        geometry.verticesNeedUpdate = true; 
        lines.material.uniforms.uniformsNeedUpdate = true;
        // arcMaterial.uniforms.uniformsNeedUpdate = true;
        /* ANIMATE CAMERA */
        camera.rotation.x = -mouse.y*0.00002;
        camera.rotation.y = -mouse.x*0.00002;
        requestAnimationFrame(animate);
        
      
}

else{ stop(); }

    render();


}



// ================= RENDER =================


function render(){
    renderer.render( scene, camera );
    // composer.render();
}


// render();

start();


// ================= EVENT HANDLING =================

function onMouseMove(event) {

    mouse.x = (event.clientX - windowHalf.x);
    mouse.y = (event.clientY - windowHalf.y);

}


function onResize(event) {

    
    // var newWidth = mount.current.clientWidth;
    // var newHeight = mount.current.clientHeight;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);

}

function onMouseWheel(event) {
    // event.preventDefault();
  
    camera.position.y -= event.deltaY / 10;
  
    // prevent scrolling beyond a min/max value
    // camera.position.clampScalar(0, 10);
    
  }

  function start  () {

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', onResize, false);
    window.addEventListener('wheel', onMouseWheel, false);

    if (!frameId) {
      frameId = requestAnimationFrame(animate)
    }
  }

//   start();
  function stop (){
    cancelAnimationFrame(frameId);
    frameId = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('wheel', onMouseWheel);
    console.log('stopped');

    geometry.dispose();
    material.dispose();
    arcGeometry.dispose();
    arcMaterial.dispose();
    return;
  }

  return () => {
    stop();
  }

},[])

// === THREE.JS CODE END ===
      

      return (
        <div ref={mount}
         style={{ width: `100vw`, height: `100vh` }} 
         />
      )
}


//   const rootElement = document.getElementById("canvas");
//   ReactDOM.render(<Art />, rootElement);