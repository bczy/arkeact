(this.webpackJsonparkareact=this.webpackJsonparkareact||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"a":{"red":{"color":"#354056","fillColor":"#737E96","bonusProbability":0,"strength":2,"scoreValue":500,"isTile":true},"pink":{"color":"#F12C71","fillColor":"#F2417F","bonusProbability":0,"strength":1,"scoreValue":250,"isTile":true},"blue":{"color":"#36abb5","fillColor":"#36abb5","bonusProbability":0,"strength":2,"size":2,"scoreValue":1000,"isTile":true},"yellow":{"color":"#5b5203","fillColor":"#efd807","bonusProbability":0,"strength":2,"scoreValue":500,"isTile":true}},"b":{"side":{"color":"#0b0f17"},"ground":{"color":"#0b0f17"},"roof":{"isRoof":true,"color":"rgba(0,0,0,0)"},"corner":{"color":"#F12C71","isCorner":true}}}')},37:function(e){e.exports=JSON.parse('{"a":[{"layers":[[{"position":[0,0,-10],"userDataType":"pink"},{"position":[0,-5,-10],"userDataType":"pink"},{"position":[0,5,-10],"userDataType":"pink"}]]},{"layers":[[{"position":[0,10,-10],"userDataType":"blue"},{"position":[0,-10,-10],"userDataType":"blue"},{"position":[10,-10,-10],"userDataType":"blue"},{"position":[10,10,-10],"userDataType":"blue"}],[{"position":[2.5,-1.25,-5],"userDataType":"red"}]]},{"layers":[[{"position":[0,2.5,-10],"userDataType":"blue"},{"position":[-5,0,-10],"userDataType":"yellow"},{"position":[0,0,-10],"userDataType":"yellow"},{"position":[5,0,-10],"userDataType":"yellow"},{"position":[0,-2.5,-10],"userDataType":"blue"}],[{"position":[-2.5,1.25,-5],"userDataType":"pink"},{"position":[2.5,1.25,-5],"userDataType":"pink"},{"position":[-2.5,-1.25,-5],"userDataType":"red"},{"position":[2.5,-1.25,-5],"userDataType":"red"}]]}]}')},44:function(e,t,n){e.exports=n.p+"static/media/underline.765dc17d.png"},47:function(e,t,n){e.exports=n.p+"static/media/game_title.62e617f5.png"},49:function(e,t,n){e.exports=n.p+"static/media/brick.eed03f13.mp3"},50:function(e,t,n){e.exports=n.p+"static/media/wall.4c0964a4.mp3"},55:function(e,t,n){e.exports=n.p+"static/media/cross.00397b42.jpg"},65:function(e,t,n){e.exports=n(76)},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return tt}));var a=n(3),r=n(0),i=n.n(r),o=n(14),c=n.n(o),s=n(9),l=n(79),u=n(59),f=n(10),m=n(19),d=n(37),h=function(){function e(){var t=this;Object(s.a)(this,e),this.buildLevel=function(e){t.tiles.next(d.a[e].layers.flat())},e.instance||(e.instance=this,this.tiles=new l.a([]))}return Object(m.a)(e,[{key:"getLockedLevels",value:function(e){var t=d.a;return Object(f.a)(t).splice(e.length,t.length-1)}}]),e}(),b=new h;Object.freeze(h);var v=new function e(){var t=this;return Object(s.a)(this,e),this.addHighscoreValue=function(){var e=Object(f.a)(t.bestscoreValues.value);e[j.currentLevel.value]=j.scoreValue.value,e[j.currentLevel.value+1]=0,t.bestscoreValues.next(e)},e.instance||(e.instance=this,this.bestscoreValues=new l.a([0]),this.achievements=new l.a([])),e.instance};Object.freeze(v);var p=0,y=1,g=2,E=3,x=4,O=5,j=new function e(){var t=this;return Object(s.a)(this,e),this.setGameState=function(e){t.gameState.next(e)},this.launchLevel=function(e){t.currentLevel.next(e),t.gameState.next(g)},this.increaseLevelNumber=function(){t.currentLevel.next(t.currentLevel.value+1)},this.launchGame=function(){t.resetGame(),t.inGame.next(!0)},this.launchBall=function(){t.ballLaunched.next(!0)},this.resetBall=function(){t.balls.value>0?(t.balls.next(t.balls.value-1),t.ballLaunched.next(!1)):t.gameState.next(E)},this.resetGame=function(){t.balls.next(3),t.nbBrickDestroyed.next(0),t.scoreValue.next(0),t.inGame.next(!1),t.ballLaunched.next(!1)},this.setBall2dPosition=function(e){return t.ball2dPosition.next(e)},this.setGlitching=function(e){return t.glitching.next(e)},this.increaseScoreValue=function(e){t.scoreValue.next(t.scoreValue.value+e),t.nbBrickDestroyed.value+1===b.tiles.value.length&&(v.addHighscoreValue(),t.gameState.next(E)),t.nbBrickDestroyed.next(t.nbBrickDestroyed.value+1)},e.instance||(e.instance=this,this.gameState=new l.a(p),this.nbBrickDestroyed=new l.a(0),this.ball2dPosition=new l.a({x:0,y:0}),this.balls=new l.a(3),this.scoreValue=new l.a(0),this.inGame=new u.a(!1),this.ballLaunched=new u.a(!1),this.currentLevel=new l.a(1),this.glitching=new u.a(!0)),e.instance};Object.freeze(j);var w=n(6),S=n(7),D=n(24),k=n(28),L={display:"flex",justifyContent:"center"},T=n(44),z=n.n(T);function M(){var e=Object(w.a)(["\n\topacity: 0.5;\n\ttop: 1.25em;\n\t","\n}\n"]);return M=function(){return e},e}function P(){var e=Object(w.a)(["\n\tcursor: pointer;\n\tbackground: transparent;\n\tletter-spacing: 0.1rem;\n\tcolor: ",";\n\tborder-style: none;\n\ttransition: 0.5s all ease-out;\n\topacity: 0.75;\n\tfont-size: 2em;\n\talign-items: center;\n\tflex-direction: column;\n\t","\n\t","\n\t","\n"]);return P=function(){return e},e}var G=S.a.button(P(),(function(e){return e.enabled?"#e6007e":"#dec99e"}),L,(function(e){return e.enabled&&"&:hover { text-shadow: 2px 2px #dec99f; opacity: 1 }"}),(function(e){return e.enabled&&"&:hover img {filter: drop-shadow(0 0 30px rgba(255,255,255,1)); opacity: 1 }"})),C=S.a.img(M(),(function(e){return"width: ".concat(.9*e.textLength,"em;")}));function F(e){var t=e.callback,n=e.text,o=e.enabled,c=void 0===o||o,s=e.style,l=void 0===s?{}:s,u=Object(r.useState)(!1),f=Object(a.a)(u,1)[0];return Object(D.b)(f,null,{from:Object(k.a)({opacity:0},L),enter:{opacity:1},leave:{opacity:0},config:{duration:1500}}).map((function(e){var a=e.key,r=e.props;return i.a.createElement(D.a.div,{key:a,style:r},i.a.createElement(G,{enabled:c,onClick:function(){c&&t()},style:Object(k.a)({},l)},n,c&&i.a.createElement(C,{src:z.a,textLength:n.length,alt:""})))}))}var _={height:"5%",width:"15rem",border:"none",transform:"rotate(-3deg)",fontSize:"3rem","align-items":"center"},V=function(e){var t=e.text,n=e.style,a=e.callback;return i.a.createElement(F,{callback:a,text:t,style:Object(k.a)(Object(k.a)({},n),{},{buttonStyle:_})})},I=n(47),B=n.n(I);function R(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(r.useLayoutEffect)((function(){function a(){n&&window.innerHeight>window.innerWidth||!n&&window.innerHeight<window.innerWidth?(t.setSize(window.width),e.current.style.width="".concat(window.innerWidth,"px"),e.current.style.height="".concat(window.innerWidth,"px")):(e.current.style.width="".concat(window.innerHeight,"px"),e.current.style.height="".concat(window.innerHeight,"px"),t.setSize(window.innerHeight))}return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}}),[n,e,t]),t}function U(){var e=Object(w.a)(["\n\tmargin-top: 2.5em;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\twidth: 100%;\n"]);return U=function(){return e},e}function N(){var e=Object(w.a)(["\n\tbackground: url(",") no-repeat center center fixed;\n\tbackground-size: cover;\n\t","\n\tposition: absolute;\n\tflex-direction: column;\n\talign-items: center; \n"]);return N=function(){return e},e}var H=S.a.div(N(),B.a,L),A=S.a.div(U());function W(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),s=Object(a.a)(c,1)[0],l=Object(r.useRef)(null);return R(l,{size:n,setSize:o},!1),Object(D.b)(s,null,{from:{opacity:0,display:"flex",flexDirection:"column",alignItems:"center",marginTop:"25%"},enter:{opacity:1},leave:{opacity:0},config:{duration:2e3}}).map((function(e){var t=e.key,n=e.props;return i.a.createElement(H,{ref:l},i.a.createElement(D.a.div,{key:t,style:n},i.a.createElement(V,{style:{marginTop:"25%",fontSize:"3.5em"},text:"PLAY",callback:function(){return j.setGameState(y)}}),i.a.createElement(A,null,i.a.createElement(V,{text:"SETTINGS",callback:function(){j.setGameState(x)}}),i.a.createElement(V,{text:"ABOUT",callback:function(){return j.setGameState(O)}}))))}))}var q=n(12),J=n(77),Q=n(1),K=n(48),X=n.n(K),Y=n(49),Z=n.n(Y),$=n(50),ee=n.n($);function te(e){var t=e.position,n=e.size,o=void 0===n?[2,2,2]:n,c=e.userData,s=e.id,l=c.strength,u=c.color,f=c.fillColor,m=c.cornerData,d=c.isRoof,h=c.isTile,b=c.scoreValue,v=Object(r.useState)(3),p=Object(a.a)(v,2),y=p[0],g=p[1];Object(r.useLayoutEffect)((function(){var e=j.balls.subscribe(g);return function(){return e.unsubscribe()}}),[]);var E=isNaN(l),x=isNaN(m),O=Object(r.useState)(),w=Object(a.a)(O,2),S=w[0],D=w[1];function k(){var e=function(e){return new Q.PointsMaterial({color:e,size:.9,transparent:!0,depthTest:!1,sizeAttenuation:!0,opacity:.9})}(u),t=function(e,t){for(var n=new Q.Geometry,a=0;a<e;a++){var r=2.5*Math.random()-1.25+t.current.position.x,i=2.5*Math.random()-1.25+t.current.position.y,o=2.5*Math.random()-1.25+t.current.position.z,c=new Q.Vector3(r,i,o);n.vertices.push(c)}return n}(25,G),n=new Q.Points(t,e);return n.customRotation=2*Math.random()-1,z.add(n),n}var L=null;E||x?L=ee.a:(d||h)&&(L=Z.a);var T=new X.a(L),z=Object(q.e)().scene,M=Object(J.c)((function(){return{type:x?"Static":"Kinematic",args:o.map((function(e){return e/2})),position:t,userData:c,onCollide:function(e){T.play(),d?(j.resetBall(),j.setGlitching(!0),setTimeout((function(){j.setGlitching(!1),g(y-1)}),300)):E||(c.strength--,c.strength<=0?(C.position.set(-1e3,-1e3,-100),D(k()),j.increaseScoreValue(b)):D(k()))}}})),P=Object(a.a)(M,2),G=P[0],C=P[1];return Object(q.c)((function(){S&&S.material.opacity>0&&(S.material.opacity-=.0075,S.scale.x+=.01,S.scale.y+=.01,S.rotation.y+=S.customRotation/50)})),d?i.a.createElement("mesh",{key:s,ref:G,userData:c}):i.a.createElement(i.a.Fragment,null,h?i.a.createElement("mesh",{key:s,ref:G,userData:c},i.a.createElement("boxGeometry",{attach:"geometry",args:o}),i.a.createElement("meshStandardMaterial",{attach:"material",wireframe:!0,color:u}),i.a.createElement("mesh",{receiveShadow:!0,userData:c},i.a.createElement("boxGeometry",{attach:"geometry",args:o.map((function(e){return.99*e}))}),i.a.createElement("meshStandardMaterial",{attach:"material",color:f}))):i.a.createElement("mesh",{key:s,ref:G,receiveShadow:!0,userData:c},i.a.createElement("boxGeometry",{attach:"geometry",args:o,receiveShadow:!0}),i.a.createElement("meshStandardMaterial",{attach:"material",receiveShadow:!0,color:u})))}var ne=n(13);function ae(e){var t=e.position,n=e.userData,a=e.id;return i.a.createElement(te,{id:a,position:t,userData:n})}function re(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(j.currentLevel.value),s=Object(a.a)(c,2),l=s[0],u=s[1];return Object(r.useEffect)((function(){var e=j.currentLevel.subscribe(u);return e.add(b.tiles.subscribe(o)),b.buildLevel(l),function(){return e.unsubscribe()}}),[l]),n.map((function(e,t){return i.a.createElement(ae,{key:t,id:t,position:e.position,userData:ne.a[e.userDataType]})}))}function ie(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(te,{position:[-12.5,0,0],userData:ne.b.side,size:[1,25,130]}),i.a.createElement(te,{position:[12.5,0,0],userData:ne.b.side,size:[1,25,130]}),i.a.createElement(te,{position:[0,12.5,0],userData:ne.b.side,size:[25,1,130]}),i.a.createElement(te,{position:[0,-12.5,0],userData:ne.b.side,size:[25,1,130]}),i.a.createElement(te,{position:[0,0,-12.5],userData:ne.b.ground,size:[25,25,1],rotation:Math.PI/2}),i.a.createElement(te,{position:[-12,-12,-12.5],userData:ne.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(te,{position:[-12,12,-12.5],userData:ne.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(te,{position:[12,12,-12.5],userData:ne.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(te,{position:[12,-12,-12.5],userData:ne.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(te,{position:[0,12,-12],userData:ne.b.corner,size:[130,.25,.25],rotation:Math.PI/2}),i.a.createElement(te,{position:[0,-12,-12],userData:ne.b.corner,size:[130,.25,.25],rotation:Math.PI/2}),i.a.createElement(te,{position:[12,0,-12],userData:ne.b.corner,size:[.25,120,.25],rotation:Math.PI}),i.a.createElement(te,{position:[-12,0,-12],userData:ne.b.corner,size:[.25,120,.25],rotation:Math.PI}),i.a.createElement(te,{position:[0,0,45],userData:ne.b.roof,size:[24,24,.001],rotation:Math.PI/2}))}var oe=n(55),ce=n.n(oe);function se(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){var e=j.ballLaunched.subscribe(o);return function(){return e.unsubscribe()}}),[]);var c=Object(q.d)(Q.TextureLoader,ce.a),s=Object(J.e)((function(){return{mass:1,args:1,position:[0,0,0],onCollide:function(e){}}})),l=Object(a.a)(s,2),u=l[0],f=l[1];return Object(q.c)((function(e){n||(f.position.set(10*e.mouse.x,10*e.mouse.y,17.6),f.velocity.set(0,0,0,1)),j.setBall2dPosition({x:u.current.position.x,y:u.current.position.y})})),i.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,ref:u},i.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.5,64,64]}),i.a.createElement("meshStandardMaterial",{map:c,attach:"material"}))}function le(){var e=Object(J.e)((function(){return{args:1.3,scale:[1,1,.01],position:[0,0,10],sleepSpeedLimit:4,onCollide:function(e){}}})),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("#fff"),s=Object(a.a)(c,2),l=s[0],u=s[1],f=Object(r.useState)({x:0,y:0}),m=Object(a.a)(f,2),d=m[0],h=m[1];function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.5,n=e<0;return n?e<-t?-t:e:e>t?t:e}return Object(r.useEffect)((function(){j.ball2dPosition.subscribe(h)}),[]),Object(q.c)((function(e){var t=10*e.mouse.x,a=10*e.mouse.y,r=t-n.current.position.x,i=a-n.current.position.y;(n.current.position.x>=d.x&&n.current.position.x-d.x<2.5||n.current.position.x<d.x&&d.x-n.current.position.x<2.5)&&(n.current.position.y>=d.y&&n.current.position.y-d.y<2.5||n.current.position.y<d.y&&d.y<n.current.position.y<2.5)?u("#fff"):u("#F00"),o.position.set(n.current.position.x+b(r),n.current.position.y+b(i),18)})),i.a.createElement(i.a.Fragment,null,i.a.createElement("mesh",{ref:n,castShadow:!0},i.a.createElement("boxGeometry",{attach:"geometry",args:[5,5,1]}),i.a.createElement("meshBasicMaterial",{attach:"material",wireframe:!0,color:l})))}function ue(){var e=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){e.current.shadow.camera=new Q.OrthographicCamera(-100,100,100,-100,.5,100),e.current.shadow.mapSize.width=2048,e.current.shadow.mapSize.height=2048}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("ambientLight",{intensity:.75}),i.a.createElement("directionalLight",{ref:e,position:[0,0,25],"shadow-camera-near":.1,"shadow-camera-far":1500,castShadow:!0}))}var fe=n(60),me=n(56),de=n(61),he=n(8),be=n(40),ve=function(e,t,n,a){he.a.call(this),void 0===be.a&&console.error("FilmPass relies on FilmShader");var r=be.a;this.uniforms=Q.UniformsUtils.clone(r.uniforms),this.material=new Q.ShaderMaterial({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),void 0!==a&&(this.uniforms.grayscale.value=a),void 0!==t&&(this.uniforms.sIntensity.value=t),void 0!==n&&(this.uniforms.sCount.value=n),this.uniforms.nIntensity.value=.1,this.fsQuad=new he.a.FullScreenQuad(this.material)};ve.prototype=Object.assign(Object.create(he.a.prototype),{constructor:ve,render:function(e,t,n,a){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=a,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}});var pe={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:"varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"uniform int byp; //should we apply the glitch\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tDisp;\n    uniform float amount;\n    uniform float angle;\n    uniform float seed;\n    uniform float seed_x;\n    uniform float seed_y;\n    uniform float distortion_x;\n    uniform float distortion_y;\n    uniform float col_s;\n    varying vec2 vUv;\n    float rand(vec2 co){\n      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n    void main() {\n      if(byp<1) {\n        vec2 p = vUv;\n        float xs = floor(gl_FragCoord.x / 0.5);\n        float ys = floor(gl_FragCoord.y / 0.5);\n        //based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch\n        vec4 normal = texture2D (tDisp, p*seed*seed);\n        if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {\n          if(seed_x>0.){\n            p.y = 1. - (p.y + distortion_y);\n          }\n          else {\n            p.y = distortion_y;\n          }\n        }\n        p.x+=normal.x*seed_x*(seed/5.);\n        p.y+=normal.y*seed_y*(seed/5.);\n        //base from RGB shift shader\n        vec2 offset = amount * vec2( cos(angle), sin(angle));\n        vec4 cr = texture2D(tDiffuse, p + offset);\n        vec4 cga = texture2D(tDiffuse, p);\n        vec4 cb = texture2D(tDiffuse, p - offset);\n        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        //add noise\n        vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.05);\n        gl_FragColor = gl_FragColor+ snow;\n      }\n      else {\n        gl_FragColor=texture2D (tDiffuse, vUv);\n      }\n    }"},ye=function(e){he.a.call(this),void 0===pe&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=pe;this.uniforms=Q.UniformsUtils.clone(t.uniforms),void 0===e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new Q.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new Q.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new Q.Scene,this.quad=new Q.Mesh(new Q.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.factor=0};function ge(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(r.useLayoutEffect)((function(){var e=j.glitching.subscribe(o);return function(){return e.unsubscribe()}}),[]);var c=Object(r.useRef)(),s=Object(q.e)(),l=s.scene,u=s.gl,f=s.size,m=s.camera,d=Object(r.useMemo)((function(){return new Q.Vector2(f.width,f.height)}),[f]);return Object(r.useEffect)((function(){c.current.setSize(f.width,f.height)}),[f]),Object(q.c)((function(){c.current.render()}),1),i.a.createElement("effectComposer",{ref:c,args:[u]},i.a.createElement("renderPass",{attachArray:"passes",scene:l,camera:m}),i.a.createElement("unrealBloomPass",{attachArray:"passes",args:[d,.25,.2,0]}),i.a.createElement("filmPass",{attachArray:"passes",noiseIntensity:0,args:[.35,.6,1500,!1]}),i.a.createElement("glitchPass",{attachArray:"passes",factor:n?1:0}))}function Ee(){var e=Object(w.a)(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 44%;\n\tpadding: 0.5em;\n\theight: 24%;\n\twidth: 12%;\n\ttransform: scale3d(1, 1, 2) rotate3d(1, 0, 0, 60deg);\n}"]);return Ee=function(){return e},e}ye.prototype=Object.assign(Object.create(he.a.prototype),{constructor:ye,render:function(e,t,n,a,r){var i=Math.max(0,this.factor);this.uniforms.tDiffuse.value=n.texture,this.uniforms.seed.value=Math.random()*i,this.uniforms.byp.value=0,i?(this.uniforms.amount.value=Math.random()/90*i,this.uniforms.angle.value=Q.Math.randFloat(-Math.PI,Math.PI)*i,this.uniforms.distortion_x.value=Q.Math.randFloat(0,1)*i,this.uniforms.distortion_y.value=Q.Math.randFloat(0,1)*i,this.uniforms.seed_x.value=Q.Math.randFloat(-.3,.3)*i,this.uniforms.seed_y.value=Q.Math.randFloat(-.3,.3)*i):this.uniforms.byp.value=1,this.quad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),e.render(this.scene,this.camera)):(e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera))},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),n=e*e,a=0;a<n;a++){var r=Q.Math.randFloat(0,1);t[3*a+0]=r,t[3*a+1]=r,t[3*a+2]=r}var i=new Q.DataTexture(t,e,e,Q.RGBFormat,Q.FloatType);return i.needsUpdate=!0,i}}),Object(q.b)({EffectComposer:fe.a,RenderPass:me.a,UnrealBloomPass:de.a,FilmPass:ve,GlitchPass:ye});var xe=S.a.div(Ee());function Oe(){var e=Object(r.useState)(3),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(0),s=Object(a.a)(c,2),l=s[0],u=s[1];return Object(r.useLayoutEffect)((function(){var e=j.balls.subscribe(o);return e.add(j.scoreValue.subscribe(u)),function(){return e.unsubscribe()}}),[]),i.a.createElement(xe,null,i.a.createElement("p",null,"Balls: ",n),i.a.createElement("p",null,"Score: ",l),i.a.createElement("div",null,i.a.createElement(F,{callback:function(){j.resetGame(),j.setGameState(y)},text:"Back",enabled:!0})))}function je(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),o=n[0],c=n[1],s=Object(r.useRef)(),l=Object(q.e)().setDefaultCamera;return Object(r.useEffect)((function(){var e=j.glitching.subscribe(c);return setTimeout((function(){j.setGlitching(!1)}),1e3),l(s.current),function(){return e.unsubscribe()}}),[l]),Object(q.c)((function(){!o&&s.current.position.z>45&&(s.current.position.z,s.current.position.z-=.75),s.current.updateMatrixWorld()})),i.a.createElement("perspectiveCamera",Object.assign({ref:s,position:[0,0,85]},e,{fov:45,far:157}))}function we(){var e=Object(r.useState)(3),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),s=Object(a.a)(c,2),l=s[0],u=s[1],f=Object(r.useState)(0),m=Object(a.a)(f,2),d=m[0],h=m[1],b=Object(r.useRef)(null);return R(b,{size:d,setSize:h}),Object(r.useLayoutEffect)((function(){var e=j.balls.subscribe(o);return e.add(j.ballLaunched.subscribe(u)),function(){return e.unsubscribe()}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"game",onClick:function(){n<0?j.resetGame():l?o(n-1):j.launchBall()}},i.a.createElement("div",{ref:b},i.a.createElement(q.a,{style:{width:"100%",height:"100%"},shadowMap:!0},i.a.createElement(je,null),i.a.createElement(ue,null),i.a.createElement(J.a,{iterations:20,tolerance:1e-4,defaultContactMaterial:{friction:0,restitution:1},gravity:[0,0,0],allowSleep:!1},i.a.createElement(ie,null),i.a.createElement(re,null),i.a.createElement(le,null),i.a.createElement(se,null),i.a.createElement(ge,null))),i.a.createElement(Oe,null))))}function Se(){var e=Object(w.a)(["\n\th1 {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont-size: 4em;\n\t}\n"]);return Se=function(){return e},e}var De=S.a.div(Se());function ke(e){var t=e.text;return i.a.createElement(De,null,i.a.createElement("h1",null,t))}function Le(){var e=Object(w.a)(["\n\tjustify-content: space-evenly;\n\tgrid-row: 1;\n\tdisplay: flex;\n\talign-self: center;\n"]);return Le=function(){return e},e}function Te(){var e=Object(w.a)(["\n\tjustify-content: space-evenly;\n\tgrid-row: 1;\n\tdisplay: flex;\n"]);return Te=function(){return e},e}var ze=S.a.div(Te()),Me=S.a.div(Le()),Pe=function(e){var t=e.levelId,n=e.unlocked,a=e.highscoreValue;return i.a.createElement(ze,null,i.a.createElement("div",null,i.a.createElement("h2",null,"Level ",t+1),n&&i.a.createElement("h3",null,"Highscore: ",a)),n?i.a.createElement(V,{text:"Play",callback:function(){return j.launchLevel(t)}}):i.a.createElement(Me,null,i.a.createElement("div",null,"FINISH LEVEL ",t+1," TO UNLOCK")))};function Ge(){var e=Object(w.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: #5a55ff;\n"]);return Ge=function(){return e},e}var Ce=S.a.div(Ge()),Fe=function(e){var t=e.title,n=e.children;return i.a.createElement(Ce,null,i.a.createElement(ke,{text:t}),n,i.a.createElement(V,{callback:function(){j.setGameState(p)},text:"Back"}))};function _e(){var e=Object(w.a)(["\n\ttext-align: center;\n\theight: 65%;\n\twidth: 100%;\n"]);return _e=function(){return e},e}var Ve=S.a.div(_e()),Ie=function(){var e=Object(r.useState)([0]),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(r.useLayoutEffect)((function(){var e=v.bestscoreValues.subscribe(o);return function(){return e.unsubscribe()}}),[]),i.a.createElement(Fe,null,i.a.createElement(ke,{text:"LEVELS"}),i.a.createElement(Ve,null,n.map((function(e,t){return i.a.createElement(Pe,{key:t,levelId:t,highscoreValue:n[t],unlocked:!0})})),b.getLockedLevels(n).map((function(e,t){return i.a.createElement(Pe,{key:t,levelId:t+n.length-1,highscoreValue:0,unlocked:!1})}))))};function Be(){var e=j.nbBrickDestroyed.value+1===b.tiles.value.length,t=e?"Next Level":"Play again";return i.a.createElement("div",{style:{margin:"auto"}},i.a.createElement("h2",null,"Level ",e?"Cleared":"Failed"),i.a.createElement("h3",null,"Score: ",j.scoreValue.value),i.a.createElement(F,{callback:function(){e?(j.resetGame(),j.increaseLevelNumber(),j.setGameState(g)):(j.resetGame(),j.setGameState(y))},text:t}))}var Re=n(58);n(74);function Ue(){var e=Object(w.a)(["\n    ",";\n    align-items:center;\n    flex-direction: column;\n    width: 70%;\n    margin: auto;\n"]);return Ue=function(){return e},e}function Ne(){var e=Object(w.a)(["\n    ",";\n    align-items:center;\n    width: 100%;\n"]);return Ne=function(){return e},e}function He(){var e=Object(w.a)([""]);return He=function(){return e},e}var Ae=S.a.div(He()),We=function(e){var t=e.title;return i.a.createElement("h2",null,t)},qe=S.a.div(Ne(),L),Je=function(e){var t=e.label;return i.a.createElement(qe,null,i.a.createElement("h3",null,t),i.a.createElement(Re.a,{style:{marginLeft:"1em"}}))},Qe=S.a.div(Ue(),L),Ke=function(e){var t=e.title,n=e.children;return i.a.createElement(Qe,null,i.a.createElement(We,{title:t}),n)},Xe=function(){return i.a.createElement(Fe,{title:"SETTINGS"},i.a.createElement(Ae,null,i.a.createElement(Ke,{title:"AUDIO"},i.a.createElement(Je,{label:"MUSIC"}),i.a.createElement(Je,{label:"VFX"}))))};function Ye(){var e=Object(w.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column; \n    font-size: 1.5em;\n"]);return Ye=function(){return e},e}var Ze=S.a.div(Ye()),$e=function(){return i.a.createElement(Fe,{title:"ABOUT"},i.a.createElement(Ze,null,i.a.createElement("p",null,"This game is a side project started during my confinment."),i.a.createElement("p",null,"Made with react-three-fiber, canonjs, ."),i.a.createElement("p",null,"A special thanks to ",i.a.createElement("a",{href:"/#"},"Mat'")," for the graphic assets and visual advices!")))},et=(n(75),function(e){switch(e.gameState){case p:return i.a.createElement(W,null);case y:return i.a.createElement(Ie,null);case g:return i.a.createElement(we,null);case E:return i.a.createElement(Be,null);case x:return i.a.createElement(Xe,null);case O:return i.a.createElement($e,null);default:return i.a.createElement(W,null)}});function tt(){var e=Object(r.useState)(p),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){var e=j.gameState.subscribe(o);return function(){return e.unsubscribe()}}),[]),i.a.createElement("div",{className:"main"},i.a.createElement(et,{gameState:n}))}c.a.render(i.a.createElement(tt,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.12504a37.chunk.js.map