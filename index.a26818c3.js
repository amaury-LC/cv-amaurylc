function e(e){return e&&e.__esModule?e.default:e}var t;t=JSON.parse('[{"command":"help","responseType":"list","value":["<code>a-propos</code> : Affiche les informations me concernant","<code>clear</code> : Nettoie le terminal","<code>experiences</code> : Affiche la liste de mes expériences","<code>get cv</code> : Télécharge le CV","<code>help</code> : Affiche l\'aide","<code>projets-perso</code> : Affiche la liste de mes projets personnels","<code>dark/light</code> : Change le thème de la page","<em>Vous pouvez utiliser la touche TAB afin de compléter une commande</em>","<em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas.</em>"]},{"command":"a-propos","responseType":"code","value":["{","   \\"nom\\" : \\"Amaury LE CHAFFOTEC\\",","   \\"poste\\" : \\"Développeur Fullstack\\",","   \\"experience\\" : \\"2 ans\\",","   \\"ville\\" : \\"Pommerit-Le-Vicomte, France\\"","}"]},{"command":"experiences","responseType":"table","headers":["Date","Projet","Description","Tech"],"rows":[["2020","<em>HOALI</em>","Bloc d\'information pour le site Ouest-France","Java<br/>Spring Boot<br/>Mysql"],["2020","<em>Application mobile</em>","création d\'une application mobile de pêche à pied","Cordova<br/>SQLite<br/>Jquery mobile"],["2020","Application mobile","création d\'une application mobile de recette de cuisine","Flutter<br/>tensorflow"],["2020","Site de tourisme","création d\'un site de tourisme","Symfony 3.4<br/>"]]},{"command":"hobby","responseType":"list","value":[]},{"command":"projets-perso","responseType":"table","headers":["Date","Projet","Description","Tech"],"rows":[["2020","<em>Application mobile</em>","création d\'une application mobile de pêche à pied","Cordova<br/>SQLite<br/>Jquery mobile"," "],["2020","Application mobile","création d\'une application mobile de recette de cuisine","Flutter<br/>tensorflow"," "],["2020","Site de tourisme","création d\'un site de tourisme","Symfony 3.4<br/>"," "]]}]');var i={};!function e(t,i,n,s){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function a(){}function r(e){var n=i.exports.Promise,s=void 0!==n?n:t.Promise;return"function"==typeof s?new s(e):(e(a,a),null)}var c,h,l,d,u,m,f,p,_,v=(l=Math.floor(1e3/60),d={},u=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return d[t]=requestAnimationFrame((function i(n){u===n||u+l-1<n?(u=n,delete d[t],e()):d[t]=requestAnimationFrame(i)})),t},h=function(e){d[e]&&cancelAnimationFrame(d[e])}):(c=function(e){return setTimeout(e,l)},h=function(e){return clearTimeout(e)}),{frame:c,cancel:h}),g=(p={},function(){if(m)return m;if(!n&&o){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,i){e.postMessage({options:t||{},callback:i})}e.init=function(t){var i=t.transferControlToOffscreen();e.postMessage({canvas:i},[i])},e.fire=function(i,n,s){if(f)return t(i,null),f;var o=Math.random().toString(36).slice(2);return f=r((function(n){function a(t){t.data.callback===o&&(delete p[o],e.removeEventListener("message",a),f=null,s(),n())}e.addEventListener("message",a),t(i,o),p[o]=a.bind(null,{data:{callback:o}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),p)p[t](),delete p[t]}}(m)}return m}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(e,t,i){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:y[t],i)}function x(e){return e<0?0:Math.floor(e)}function w(e){return parseInt(e,16)}function M(e){return e.map(k)}function k(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:w(t.substring(0,2)),g:w(t.substring(2,4)),b:w(t.substring(4,6))}}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e,t,i,o,a){var c,h,l=t.slice(),d=e.getContext("2d"),u=r((function(t){function r(){c=h=null,d.clearRect(0,0,o.width,o.height),a(),t()}c=v.frame((function t(){!n||o.width===s.width&&o.height===s.height||(o.width=e.width=s.width,o.height=e.height=s.height),o.width||o.height||(i(e),o.width=e.width,o.height=e.height),d.clearRect(0,0,o.width,o.height),l=l.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var i=t.tick++/t.totalTicks,n=t.x+t.random*t.tiltCos,s=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,a=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-i)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(o-n)*t.ovalScalar,Math.abs(a-s)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,i,n,s,o,a,r,c){e.save(),e.translate(t,i),e.rotate(o),e.scale(n,s),e.arc(0,0,1,a,r,c),e.restore()}(e,t.x,t.y,Math.abs(o-n)*t.ovalScalar,Math.abs(a-s)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(s)),e.lineTo(Math.floor(o),Math.floor(a)),e.lineTo(Math.floor(n),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)})),l.length?c=v.frame(t):r()})),h=r}));return{addFettis:function(e){return l=l.concat(e),u},canvas:e,promise:u,reset:function(){c&&v.cancel(c),h&&h()}}}function L(e,i){var n,s=!e,a=!!b(i||{},"resize"),c=b(i,"disableForReducedMotion",Boolean),h=o&&!!b(i||{},"useWorker")?g():null,l=s?C:E,d=!(!e||!h)&&!!e.__confetti_initialized,u="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(t,i,s){for(var o,a,r,c,h,d=b(t,"particleCount",x),u=b(t,"angle",Number),m=b(t,"spread",Number),f=b(t,"startVelocity",Number),p=b(t,"decay",Number),_=b(t,"gravity",Number),v=b(t,"drift",Number),g=b(t,"colors",M),y=b(t,"ticks",Number),w=b(t,"shapes"),k=b(t,"scalar"),C=function(e){var t=b(e,"origin",Object);return t.x=b(t,"x",Number),t.y=b(t,"y",Number),t}(t),E=d,L=[],S=e.width*C.x,I=e.height*C.y;E--;)L.push((o={x:S,y:I,angle:u,spread:m,startVelocity:f,color:g[E%g.length],shape:w[(c=0,h=w.length,Math.floor(Math.random()*(h-c))+c)],ticks:y,decay:p,gravity:_,drift:v,scalar:k},a=void 0,r=void 0,a=o.angle*(Math.PI/180),r=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-a+(.5*r-Math.random()*r),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar}));return n?n.addFettis(L):(n=T(e,L,l,i,s)).promise}function f(i){var o=c||b(i,"disableForReducedMotion",Boolean),f=b(i,"zIndex",Number);if(o&&u)return r((function(e){e()}));s&&n?e=n.canvas:s&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(f),document.body.appendChild(e)),a&&!d&&l(e);var p={width:e.width,height:e.height};function _(){if(h){var t={getBoundingClientRect:function(){if(!s)return e.getBoundingClientRect()}};return l(t),void h.postMessage({resize:{width:t.width,height:t.height}})}p.width=p.height=null}function v(){n=null,a&&t.removeEventListener("resize",_),s&&e&&(document.body.removeChild(e),e=null,d=!1)}return h&&!d&&h.init(e),d=!0,h&&(e.__confetti_initialized=!0),a&&t.addEventListener("resize",_,!1),h?h.fire(i,p,v):m(i,p,v)}return f.reset=function(){h&&h.reset(),n&&n.reset()},f}function S(){return _||(_=L(null,{useWorker:!0,resize:!0})),_}i.exports=function(){return S().apply(this,arguments)},i.exports.reset=function(){S().reset()},i.exports.create=L}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),i,!1);var n=i.exports,s=(i.exports.create,{});function o(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}!function(e,t){if("object"==typeof s)s=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof s?s:e)[n]=i[n]}}(s,(function(){return(()=>{var e={511:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Explosion=void 0;var n=i(909);t.Explosion=class{update(e){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&e()}draw(){var e=this._coordinates.length-1;this._ctx.beginPath(),this._exp&&(this._ctx.arc(this._x,this._y,(0,n.randomFloat)(.5,1.5),0,2*Math.PI),this._ctx.fill()),this._ctx.fillStyle=(0,n.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[e][0],this._coordinates[e][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,n.hsla)(this._hue,this._brightness,this._alpha),this._ctx.stroke()}constructor(e){var{x:t,y:i,ctx:s,hue:o,exp:a,gravity:r,friction:c,brightness:h,explosionLength:l}=e;for(this._coordinates=[],this._alpha=1,this._x=t,this._y=i,this._exp=a,this._ctx=s,this._gravity=r,this._friction=c,this._explosionLength=l;this._explosionLength--;)this._coordinates.push([t,i]);this._angle=(0,n.randomFloat)(0,2*Math.PI),this._speed=(0,n.randomInt)(1,10),this._hue=(0,n.randomInt)(o-20,o+20),this._brightness=(0,n.randomInt)(h.min,h.max),this._decay=(0,n.randomFloat)(h.decay.min,h.decay.max)}}},909:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hsla=t.getDistance=t.randomInt=t.randomFloat=void 0,t.randomFloat=function(e,t){return Math.random()*(t-e)+e},t.randomInt=function(e,t){return Math.floor(e+Math.random()*(t+1-e))},t.getDistance=function(e,t,i,n){var s=Math.pow;return Math.sqrt(s(e-i,2)+s(t-n,2))},t.hsla=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return"hsla(".concat(e,", 100%, ").concat(t,"%, ").concat(i,")")}},449:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,r)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Sound=void 0;var s=i(909);t.Sound=class{init(){this.onInit&&this.options.enabled&&(this.onInit=!1,this.load())}load(){return n(this,void 0,void 0,(function*(){for(var e of this.options.files){var t=yield(yield fetch(e)).arrayBuffer();this._audioContext.decodeAudioData(t).then((e=>{this._buffer.push(e)})).catch((e=>{throw e}))}}))}play(){if(this.options.enabled&&this._buffer.length){var e=this._audioContext.createBufferSource(),t=this._buffer[(0,s.randomInt)(0,this._buffer.length-1)],i=this._audioContext.createGain();e.buffer=t,i.gain.value=(0,s.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),i.connect(this._audioContext.destination),e.connect(i),e.start(0)}else this.init()}constructor(e){this._buffer=[],this.onInit=!0,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},e),this.init()}}},668:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Trace=void 0;var n=i(909);t.Trace=class{update(e){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var t=Math.cos(this._angle)*this._speed,i=Math.sin(this._angle)*this._speed;this._currentDistance=(0,n.getDistance)(this._sx,this._sy,this._x+t,this._y+i),this._currentDistance>=this._totalDistance?e(this._dx,this._dy,this._hue):(this._x+=t,this._y+=i)}draw(){var e=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[e][0],this._coordinates[e][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,n.hsla)(this._hue,this._brightness),this._ctx.stroke()}constructor(e){var{x:t,y:i,dx:s,dy:o,ctx:a,hue:r,speed:c,traceLength:h,acceleration:l}=e;for(this._coordinates=[],this._currentDistance=0,this._x=t,this._y=i,this._sx=t,this._sy=i,this._dx=s,this._dy=o,this._ctx=a,this._hue=r,this._speed=c,this._traceLength=h,this._acceleration=l,this._totalDistance=(0,n.getDistance)(t,i,s,o);this._traceLength--;)this._coordinates.push([t,i]);this._angle=Math.atan2(o-i,s-t),this._brightness=(0,n.randomInt)(50,70)}}}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.Fireworks=void 0;var t=i(668),s=i(449),o=i(511),a=i(909);e.Fireworks=class{get isRunning(){return this._running}get version(){return this._version}start(){this._running||(this._running=!0,this.clear(),this.render())}stop(){this._running&&(this._running=!1,this.clear())}unmount(){window.removeEventListener("resize",this.windowResize),this._canvas.addEventListener("mousedown",this.mouseDown),this._canvas.addEventListener("mouseup",this.mouseUp),this._canvas.addEventListener("mousemove",this.mouseMove)}pause(){this._running=!this._running}clear(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}setOptions(e){for(var[t,i]of Object.entries(e)){var n=Object.prototype.hasOwnProperty.call(this,t);if("function"==typeof this[t])throw new Error("You cannot change the methods of the class!");n&&("object"==typeof this[t]?Object.assign(this[t],i):this[t]=i),"sound"===t&&Object.assign(this._sound.options,i)}}setSize(){var{width:e=this._container.clientWidth,height:t=this._container.clientHeight}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._width=e,this._height=t,this._canvas.width=e,this._canvas.height=t,this.setBoundaries({width:e,height:t})}setBoundaries(e){this.boundaries=Object.assign(Object.assign({},this.boundaries),e)}useMouse(e,t){(this.mouse.click||this.mouse.move)&&(this._mx=e.pageX-this._canvas.offsetLeft,this._my=e.pageY-this._canvas.offsetTop,this._m=t)}windowResize(){this.setSize()}mouseDown(e){this.useMouse(e,this.mouse.click)}mouseUp(e){this.useMouse(e,!1)}mouseMove(e){this.useMouse(e,this._m)}render(){this._ctx&&this._running&&(requestAnimationFrame((()=>this.render())),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}drawBoundaries(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}initTrace(){this._ds=(0,a.randomInt)(this.delay.min,this.delay.max),(2*this._ds<this._tick||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new t.Trace({x:this._width*(this._randomRocketsPoint?(0,a.randomInt)(0,100):this.rocketsPoint)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,a.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,a.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,a.randomInt)(this.hue.min,this.hue.max),speed:this.speed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}drawTrace(){for(var e=this._traces.length;e--;)this._traces[e].draw(),this._traces[e].update(((t,i,n)=>{this.initExplosion(t,i,n),this._sound.play(),this._traces.splice(e,1)}))}initExplosion(e,t,i){for(var n=this.particles;n--;)this._explosions.push(new o.Explosion({x:e,y:t,ctx:this._ctx,hue:i,friction:this.friction,gravity:this.gravity,explosionLength:this.explosion,brightness:this.brightness,exp:this._experimentals}))}drawExplosion(){for(var e=this._explosions.length;e--;)this._explosions[e].draw(),this._explosions[e].update((()=>{this._explosions.splice(e,1)}))}constructor(e){var{autoresize:t=!0,boundaries:i,brightness:n,delay:o,hue:a,mouse:r,sound:c,trace:h=3,speed:l=2,explosion:d=5,gravity:u=1.5,opacity:m=.5,particles:f=50,friction:p=.95,rocketsPoint:_=50,acceleration:v=1.05}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._tick=0,this._version="1.3.5",this._running=!1,this._randomRocketsPoint=!1,this._experimentals=!1,this._m=!1,this._container=e,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this._sound=new s.Sound(c),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},i)),this.autoresize=t,this.trace=h,this.speed=l,this.explosion=d,this.gravity=u,this.opacity=m,this.particles=f,this.friction=p,this.rocketsPoint=_,this.acceleration=v,this.hue=Object.assign({min:0,max:360},a),this.mouse=Object.assign({click:!1,move:!1,max:1},r),this.delay=Object.assign({min:15,max:30},o),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},n),this.autoresize&&window.addEventListener("resize",(()=>this.windowResize())),this._canvas.addEventListener("mousedown",(e=>this.mouseDown(e))),this._canvas.addEventListener("mouseup",(e=>this.mouseUp(e))),this._canvas.addEventListener("mousemove",(e=>this.mouseMove(e)))}}})(),n})()}));let a=[];e(t).forEach((e=>{a.push(e.command)}));const r=["clear","dark","light","get cv"];a=a.concat(r);const c=["pif","rm -rf /"];window.innerWidth>1024&&function(e){var t=0,i=0,n=0,s=0;const o=document.querySelector(".terminal__header");function a(e){(e=e||window.event).preventDefault(),n=e.clientX,s=e.clientY,document.onmouseup=c,document.onmousemove=r}function r(o){(o=o||window.event).preventDefault(),t=n-o.clientX,i=s-o.clientY,n=o.clientX,s=o.clientY,e.style.top=e.offsetTop-i+"px",e.style.left=e.offsetLeft-t+"px"}function c(){document.onmouseup=null,document.onmousemove=null}o?o.onmousedown=a:e.onmousedown=a}(document.querySelector(".terminal"));const h=[];let l=!1,d=-1;const u=document.querySelector(".terminal__body");m();if(11===(new Date).getMonth()){let e="";for(let t=0;t<6;t++)e+='<div class="snowflake">❅</div><div class="snowflake">❆</div>';const t=`<div class="snowflakes" aria-hidden="true">${e}</div>`;document.body.append(function(e){return document.createRange().createContextualFragment(e)}(t))}function m(e=null){const t=Math.random().toString(36).replace("0.",""),i=document.createElement("div");i.classList.add("terminal__line");const n=document.createElement("div");n.classList.add("terminal__response"),n.id=`response-${t}`;const s=document.createElement("input");if(s.type="text",s.id=`input-${t}`,s.autocapitalize="off",s.dataset.uid=t,s.dataset.active="1",s.addEventListener("keydown",f),i.appendChild(s),e){const t=document.getElementById(e);t&&(t.setAttribute("disabled","true"),t.removeEventListener("keydown",f),delete t.dataset.active)}document.getElementById("terminal").appendChild(i),document.getElementById("terminal").appendChild(n),s.focus()}function f(i){const f=i.target.value.trim().toLowerCase();if(13===i.keyCode){if(""!==f){l=!1;const a=`response-${i.target.dataset.uid}`,d=document.getElementById(a);let p;p=c.includes(f)||r.includes(f)?function(e){switch(e){case"pif":return function(){const e={origin:{y:.7}};function t(t,i){n(Object.assign({},e,i,{particleCount:Math.floor(200*t)}))}t(.25,{spread:26,startVelocity:55}),t(.2,{spread:60}),t(.35,{spread:100,decay:.91,scalar:.8}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),t(.1,{spread:120,startVelocity:45})}(),"C'est la fête !";case"light":return 0===document.body.classList.length?"Vous êtes déjà en mode clair":(o(!1),"Vous êtes maintenant en mode clair.");case"dark":return 1===document.body.classList.length?"Vous êtes déjà en mode sombre":(o(!0),"Vous êtes maintenant en mode sombre.");case"get cv":return function(){const e=document.createElement("a");e.href="resources/cv_amaury_le_chaffotec.pdf",e.setAttribute("download","cv_amaury_le_chaffotec.pdf"),e.click()}(),"Le CV va être téléchargé.";case"rm -rf /":return o(!0),document.body.classList.add("firework"),new s.Fireworks(document.body,{mouse:{click:!0,move:!1,max:7}}).start(),"w4dhIHZhIFDDiVRFUiAh";case"clear":return void(u.innerHTML='<div id="terminal"></div>')}}(f):function(i){const n=e(t).find((e=>e.command===i));let s="";if(void 0===n)s=`'${i.split(" ")[0]}' n’est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.`;else if("list"===n.responseType&&Array.isArray(n.value))s="<ul>",s+=n.value.map((e=>`<li>${e}</li>`)).join(""),s+="</ul>";else if("text"===n.responseType)s=n.value;else if("table"===n.responseType){const e=n.headers,t=n.rows;s=`<table><thead><tr>${e.map((e=>`<th>${e}</th>`)).join("")}</tr></thead><tbody>${t.map((e=>`<tr>${e.map((e=>`<td>${e}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`}else"code"===n.responseType&&(s=`<pre>${n.value.join("\n")}</pre>`);return s}(f),d&&(d.innerHTML=p,h.push(f),m(i.target.id))}}else if(9===i.keyCode){if(i.preventDefault(),""===f)this.value="help";else{const e=a.find((e=>e.startsWith(f)));e&&(this.value=e)}l=!1}else 38!==i.keyCode&&40!==i.keyCode||(h.length>0&&(!1===l?d=h.length-1:38===i.keyCode&&0!==d?d--:40===i.keyCode&&d!==h.length-1&&d++,this.value=h[d]),l=!0)}document.body.addEventListener("click",(function(e){if("INPUT"!==e.target.tagName){document.querySelector("input[data-active]").focus()}})),document.querySelector(".fake-close").addEventListener("click",(function(e){const t=document.querySelector(".terminal");t.parentElement.removeChild(t)}));
//# sourceMappingURL=index.a26818c3.js.map
