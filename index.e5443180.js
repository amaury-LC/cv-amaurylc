!function(){function t(t){return t&&t.__esModule?t.default:t}var e;e=JSON.parse('[{"command":"help","responseType":"list","value":["<code>a-propos</code> : Affiche les informations me concernant","<code>clear</code> : Nettoie le terminal","<code>experiences</code> : Affiche la liste de mes expériences","<code>get cv</code> : Télécharge le CV","<code>help</code> : Affiche l\'aide","<code>projets-perso</code> : Affiche la liste de mes projets personnels","<code>dark/light</code> : Change le thème de la page","<em>Vous pouvez utiliser la touche TAB afin de compléter une commande</em>","<em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas.</em>"]},{"command":"a-propos","responseType":"code","value":["{","   \\"nom\\" : \\"Amaury LE CHAFFOTEC\\",","   \\"poste\\" : \\"Développeur Fullstack\\",","   \\"experience\\" : \\"2 ans\\",","   \\"ville\\" : \\"Pommerit-Le-Vicomte, France\\"","}"]},{"command":"experiences","responseType":"table","headers":["Date","Projet","Description","Tech"],"rows":[["2020","<em>HOALI</em>","Bloc d\'information pour le site Ouest-France","Java<br/>Spring Boot<br/>Mysql"],["2020","<em>Application mobile</em>","création d\'une application mobile de pêche à pied","Cordova<br/>SQLite<br/>Jquery mobile"],["2020","Application mobile","création d\'une application mobile de recette de cuisine","Flutter<br/>tensorflow"],["2020","Site de tourisme","création d\'un site de tourisme","Symfony 3.4<br/>"]]},{"command":"hobby","responseType":"list","value":[]},{"command":"projets-perso","responseType":"table","headers":["Date","Projet","Description","Tech"],"rows":[["2020","<em>Application mobile</em>","création d\'une application mobile de pêche à pied","Cordova<br/>SQLite<br/>Jquery mobile"," "],["2020","Application mobile","création d\'une application mobile de recette de cuisine","Flutter<br/>tensorflow"," "],["2020","Site de tourisme","création d\'un site de tourisme","Symfony 3.4<br/>"," "]]}]');var n={};!function t(e,n,i,r){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function a(){}function s(t){var i=n.exports.Promise,r=void 0!==i?i:e.Promise;return"function"==typeof r?new r(t):(t(a,a),null)}var c,h,u,l,d,f,m,p,v,y=(u=Math.floor(1e3/60),l={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return l[e]=requestAnimationFrame((function n(i){d===i||d+u-1<i?(d=i,delete l[e],t()):l[e]=requestAnimationFrame(n)})),e},h=function(t){l[t]&&cancelAnimationFrame(l[t])}):(c=function(t){return setTimeout(t,u)},h=function(t){return clearTimeout(t)}),{frame:c,cancel:h}),g=(p={},function(){if(f)return f;if(!i&&o){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{f=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(n,i,r){if(m)return e(n,null),m;var o=Math.random().toString(36).slice(2);return m=s((function(i){function a(e){e.data.callback===o&&(delete p[o],t.removeEventListener("message",a),m=null,r(),i())}t.addEventListener("message",a),e(n,o),p[o]=a.bind(null,{data:{callback:o}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),p)p[e](),delete p[e]}}(f)}return f}),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:_[e],n)}function x(t){return t<0?0:Math.floor(t)}function w(t){return parseInt(t,16)}function k(t){return t.map(M)}function M(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:w(e.substring(0,2)),g:w(e.substring(2,4)),b:w(e.substring(4,6))}}function L(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function E(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function T(t,e,n,o,a){var c,h,u=e.slice(),l=t.getContext("2d"),d=s((function(e){function s(){c=h=null,l.clearRect(0,0,o.width,o.height),a(),e()}c=y.frame((function e(){!i||o.width===r.width&&o.height===r.height||(o.width=t.width=r.width,o.height=t.height=r.height),o.width||o.height||(n(t),o.width=t.width,o.height=t.height),l.clearRect(0,0,o.width,o.height),u=u.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,i=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,a=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-i)*e.ovalScalar,Math.abs(a-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,i,r,o,a,s,c){t.save(),t.translate(e,n),t.rotate(o),t.scale(i,r),t.arc(0,0,1,a,s,c),t.restore()}(t,e.x,e.y,Math.abs(o-i)*e.ovalScalar,Math.abs(a-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(o),Math.floor(a)),t.lineTo(Math.floor(i),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(l,t)})),u.length?c=y.frame(e):s()})),h=s}));return{addFettis:function(t){return u=u.concat(t),d},canvas:t,promise:d,reset:function(){c&&y.cancel(c),h&&h()}}}function C(t,n){var i,r=!t,a=!!b(n||{},"resize"),c=b(n,"disableForReducedMotion",Boolean),h=o&&!!b(n||{},"useWorker")?g():null,u=r?L:E,l=!(!t||!h)&&!!t.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(e,n,r){for(var o,a,s,c,h,l=b(e,"particleCount",x),d=b(e,"angle",Number),f=b(e,"spread",Number),m=b(e,"startVelocity",Number),p=b(e,"decay",Number),v=b(e,"gravity",Number),y=b(e,"drift",Number),g=b(e,"colors",k),_=b(e,"ticks",Number),w=b(e,"shapes"),M=b(e,"scalar"),L=function(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}(e),E=l,C=[],S=t.width*L.x,O=t.height*L.y;E--;)C.push((o={x:S,y:O,angle:d,spread:f,startVelocity:m,color:g[E%g.length],shape:w[(c=0,h=w.length,Math.floor(Math.random()*(h-c))+c)],ticks:_,decay:p,gravity:v,drift:y,scalar:M},a=void 0,s=void 0,a=o.angle*(Math.PI/180),s=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-a+(.5*s-Math.random()*s),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar}));return i?i.addFettis(C):(i=T(t,C,u,n,r)).promise}function m(n){var o=c||b(n,"disableForReducedMotion",Boolean),m=b(n,"zIndex",Number);if(o&&d)return s((function(t){t()}));r&&i?t=i.canvas:r&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(m),document.body.appendChild(t)),a&&!l&&u(t);var p={width:t.width,height:t.height};function v(){if(h){var e={getBoundingClientRect:function(){if(!r)return t.getBoundingClientRect()}};return u(e),void h.postMessage({resize:{width:e.width,height:e.height}})}p.width=p.height=null}function y(){i=null,a&&e.removeEventListener("resize",v),r&&t&&(document.body.removeChild(t),t=null,l=!1)}return h&&!l&&h.init(t),l=!0,h&&(t.__confetti_initialized=!0),a&&e.addEventListener("resize",v,!1),h?h.fire(n,p,y):f(n,p,y)}return m.reset=function(){h&&h.reset(),i&&i.reset()},m}function S(){return v||(v=C(null,{useWorker:!0,resize:!0})),v}n.exports=function(){return S().apply(this,arguments)},n.exports.reset=function(){S().reset()},n.exports.create=C}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),n,!1);var i=n.exports,r=(n.exports.create,{});function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h={},u=function(t){var e,n=Object.prototype,i=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function h(t,e,n,i){var r=e&&e.prototype instanceof v?e:v,o=Object.create(r.prototype),a=new C(i||[]);return o._invoke=function(t,e,n){var i=l;return function(r,o){if(i===f)throw new Error("Generator is already running");if(i===m){if("throw"===r)throw o;return O()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===l)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?m:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=m,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var l="suspendedStart",d="suspendedYield",f="executing",m="completed",p={};function v(){}function y(){}function g(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==n&&i.call(x,o)&&(_=x);var w=g.prototype=v.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(r,o,a,s){var c=u(t[r],t,o);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==typeof l&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var r;this._invoke=function(t,i){function o(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(o,o):o()}}function L(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=u(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=g,c(w,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(M.prototype),c(M.prototype,a,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new M(h(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),h=i.call(a,"finallyLoc");if(c&&h){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:S(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(h);try{regeneratorRuntime=u}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}
/*!
 * fireworks-js 1.3.5 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */function l(t){t?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}!function(t,e){if("object"==typeof r)r=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof r?r:t)[i]=n[i]}}(void 0,(function(){return function(){var e={511:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Explosion=void 0;var i=n(909);e.Explosion=function(){"use strict";function t(e){o(this,t);var n=e.x,r=e.y,a=e.ctx,s=e.hue,c=e.exp,h=e.gravity,u=e.friction,l=e.brightness,d=e.explosionLength;for(this._coordinates=[],this._alpha=1,this._x=n,this._y=r,this._exp=c,this._ctx=a,this._gravity=h,this._friction=u,this._explosionLength=d;this._explosionLength--;)this._coordinates.push([n,r]);this._angle=(0,i.randomFloat)(0,2*Math.PI),this._speed=(0,i.randomInt)(1,10),this._hue=(0,i.randomInt)(s-20,s+20),this._brightness=(0,i.randomInt)(l.min,l.max),this._decay=(0,i.randomFloat)(l.decay.min,l.decay.max)}return s(t,[{key:"update",value:function(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&t()}},{key:"draw",value:function(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._exp&&(this._ctx.arc(this._x,this._y,(0,i.randomFloat)(.5,1.5),0,2*Math.PI),this._ctx.fill()),this._ctx.fillStyle=(0,i.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,i.hsla)(this._hue,this._brightness,this._alpha),this._ctx.stroke()}}]),t}()},909:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.hsla=e.getDistance=e.randomInt=e.randomFloat=void 0,e.randomFloat=function(t,e){return Math.random()*(e-t)+t},e.randomInt=function(t,e){return Math.floor(t+Math.random()*(e+1-t))},e.getDistance=function(t,e,n,i){var r=Math.pow;return Math.sqrt(r(t-n,2)+r(e-i,2))},e.hsla=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return"hsla(".concat(t,", 100%, ").concat(e,"%, ").concat(n,")")}},449:function(e,n,i){var r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.Sound=void 0;var a=i(909);n.Sound=function(){"use strict";function e(t){o(this,e),this._buffer=[],this.onInit=!0,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},t),this.init()}return s(e,[{key:"init",value:function(){this.onInit&&this.options.enabled&&(this.onInit=!1,this.load())}},{key:"load",value:function(){return r(this,void 0,void 0,t(h).mark((function e(){var n,i,r,o,a,s,c,u;return t(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!0,i=!1,r=void 0,t.prev=1,o=this.options.files[Symbol.iterator]();case 3:if(n=(a=o.next()).done){t.next=15;break}return s=a.value,c=this,t.next=8,fetch(s);case 8:return t.next=10,t.sent.arrayBuffer();case 10:u=t.sent,this._audioContext.decodeAudioData(u).then((function(t){c._buffer.push(t)})).catch((function(t){throw t}));case 12:n=!0,t.next=3;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(1),i=!0,r=t.t0;case 21:t.prev=21,t.prev=22,n||null==o.return||o.return();case 24:if(t.prev=24,!i){t.next=27;break}throw r;case 27:return t.finish(24);case 28:return t.finish(21);case 29:case"end":return t.stop()}}),e,this,[[1,17,21,29],[22,,24,28]])})))}},{key:"play",value:function(){if(this.options.enabled&&this._buffer.length){var t=this._audioContext.createBufferSource(),e=this._buffer[(0,a.randomInt)(0,this._buffer.length-1)],n=this._audioContext.createGain();t.buffer=e,n.gain.value=(0,a.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),n.connect(this._audioContext.destination),t.connect(n),t.start(0)}else this.init()}}]),e}()},668:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Trace=void 0;var i=n(909);e.Trace=function(){"use strict";function t(e){o(this,t);var n=e.x,r=e.y,a=e.dx,s=e.dy,c=e.ctx,h=e.hue,u=e.speed,l=e.traceLength,d=e.acceleration;for(this._coordinates=[],this._currentDistance=0,this._x=n,this._y=r,this._sx=n,this._sy=r,this._dx=a,this._dy=s,this._ctx=c,this._hue=h,this._speed=u,this._traceLength=l,this._acceleration=d,this._totalDistance=(0,i.getDistance)(n,r,a,s);this._traceLength--;)this._coordinates.push([n,r]);this._angle=Math.atan2(s-r,a-n),this._brightness=(0,i.randomInt)(50,70)}return s(t,[{key:"update",value:function(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var e=Math.cos(this._angle)*this._speed,n=Math.sin(this._angle)*this._speed;this._currentDistance=(0,i.getDistance)(this._sx,this._sy,this._x+e,this._y+n),this._currentDistance>=this._totalDistance?t(this._dx,this._dy,this._hue):(this._x+=e,this._y+=n)}},{key:"draw",value:function(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,i.hsla)(this._hue,this._brightness),this._ctx.stroke()}}]),t}()}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,i),o.exports}var r={};return function(){var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.Fireworks=void 0;var e=i(668),n=i(449),a=i(511),h=i(909);t.Fireworks=function(){"use strict";function t(e){var i=this;o(this,t);var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.autoresize,s=void 0===a||a,c=r.boundaries,h=r.brightness,u=r.delay,l=r.hue,d=r.mouse,f=r.sound,m=r.trace,p=void 0===m?3:m,v=r.speed,y=void 0===v?2:v,g=r.explosion,_=void 0===g?5:g,b=r.gravity,x=void 0===b?1.5:b,w=r.opacity,k=void 0===w?.5:w,M=r.particles,L=void 0===M?50:M,E=r.friction,T=void 0===E?.95:E,C=r.rocketsPoint,S=void 0===C?50:C,O=r.acceleration,j=void 0===O?1.05:O;this._tick=0,this._version="1.3.5",this._running=!1,this._randomRocketsPoint=!1,this._experimentals=!1,this._m=!1,this._container=e,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this._sound=new n.Sound(f),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},c)),this.autoresize=s,this.trace=p,this.speed=y,this.explosion=_,this.gravity=x,this.opacity=k,this.particles=L,this.friction=T,this.rocketsPoint=S,this.acceleration=j,this.hue=Object.assign({min:0,max:360},l),this.mouse=Object.assign({click:!1,move:!1,max:1},d),this.delay=Object.assign({min:15,max:30},u),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},h),this.autoresize&&window.addEventListener("resize",(function(){return i.windowResize()})),this._canvas.addEventListener("mousedown",(function(t){return i.mouseDown(t)})),this._canvas.addEventListener("mouseup",(function(t){return i.mouseUp(t)})),this._canvas.addEventListener("mousemove",(function(t){return i.mouseMove(t)}))}return s(t,[{key:"isRunning",get:function(){return this._running}},{key:"version",get:function(){return this._version}},{key:"start",value:function(){this._running||(this._running=!0,this.clear(),this.render())}},{key:"stop",value:function(){this._running&&(this._running=!1,this.clear())}},{key:"unmount",value:function(){window.removeEventListener("resize",this.windowResize),this._canvas.addEventListener("mousedown",this.mouseDown),this._canvas.addEventListener("mouseup",this.mouseUp),this._canvas.addEventListener("mousemove",this.mouseMove)}},{key:"pause",value:function(){this._running=!this._running}},{key:"clear",value:function(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}},{key:"setOptions",value:function(t){var e=!0,n=!1,i=void 0;try{for(var r,o=Object.entries(t)[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var a=c(r.value),s=a[0],h=a[1],u=Object.prototype.hasOwnProperty.call(this,s);if("function"==typeof this[s])throw new Error("You cannot change the methods of the class!");u&&("object"==typeof this[s]?Object.assign(this[s],h):this[s]=h),"sound"===s&&Object.assign(this._sound.options,h)}}catch(t){n=!0,i=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}}},{key:"setSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?this._container.clientWidth:e,i=t.height,r=void 0===i?this._container.clientHeight:i;this._width=n,this._height=r,this._canvas.width=n,this._canvas.height=r,this.setBoundaries({width:n,height:r})}},{key:"setBoundaries",value:function(t){this.boundaries=Object.assign(Object.assign({},this.boundaries),t)}},{key:"useMouse",value:function(t,e){(this.mouse.click||this.mouse.move)&&(this._mx=t.pageX-this._canvas.offsetLeft,this._my=t.pageY-this._canvas.offsetTop,this._m=e)}},{key:"windowResize",value:function(){this.setSize()}},{key:"mouseDown",value:function(t){this.useMouse(t,this.mouse.click)}},{key:"mouseUp",value:function(t){this.useMouse(t,!1)}},{key:"mouseMove",value:function(t){this.useMouse(t,this._m)}},{key:"render",value:function(){var t=this;this._ctx&&this._running&&(requestAnimationFrame((function(){return t.render()})),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}},{key:"drawBoundaries",value:function(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}},{key:"initTrace",value:function(){this._ds=(0,h.randomInt)(this.delay.min,this.delay.max),(2*this._ds<this._tick||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new e.Trace({x:this._width*(this._randomRocketsPoint?(0,h.randomInt)(0,100):this.rocketsPoint)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,h.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,h.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,h.randomInt)(this.hue.min,this.hue.max),speed:this.speed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}},{key:"drawTrace",value:function(){for(var t=this,e=function(e){t._traces[e].draw(),t._traces[e].update((function(t,i,r){n.initExplosion(t,i,r),n._sound.play(),n._traces.splice(e,1)}))},n=this,i=this._traces.length;i--;)e(i)}},{key:"initExplosion",value:function(t,e,n){for(var i=this.particles;i--;)this._explosions.push(new a.Explosion({x:t,y:e,ctx:this._ctx,hue:n,friction:this.friction,gravity:this.gravity,explosionLength:this.explosion,brightness:this.brightness,exp:this._experimentals}))}},{key:"drawExplosion",value:function(){for(var t=this,e=function(e){t._explosions[e].draw(),t._explosions[e].update((function(){n._explosions.splice(e,1)}))},n=this,i=this._explosions.length;i--;)e(i)}}]),t}()}(),r}()}));var d=[];t(e).forEach((function(t){d.push(t.command)}));var f=["clear","dark","light","get cv"];d=d.concat(f);var m=["pif","rm -rf /"];window.innerWidth>1024&&function(t){var e=0,n=0,i=0,r=0,o=document.querySelector(".terminal__header");function a(t){(t=t||window.event).preventDefault(),i=t.clientX,r=t.clientY,document.onmouseup=c,document.onmousemove=s}function s(o){(o=o||window.event).preventDefault(),e=i-o.clientX,n=r-o.clientY,i=o.clientX,r=o.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-e+"px"}function c(){document.onmouseup=null,document.onmousemove=null}o?o.onmousedown=a:t.onmousedown=a}(document.querySelector(".terminal"));var p=[],v=!1,y=-1,g=document.querySelector(".terminal__body");if(w(),11===(new Date).getMonth()){for(var _="",b=0;b<6;b++)_+='<div class="snowflake">❅</div><div class="snowflake">❆</div>';var x='<div class="snowflakes" aria-hidden="true">'.concat(_,"</div>");document.body.append(function(t){return document.createRange().createContextualFragment(t)}(x))}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=Math.random().toString(36).replace("0.",""),n=document.createElement("div");n.classList.add("terminal__line");var i=document.createElement("div");i.classList.add("terminal__response"),i.id="response-".concat(e);var r=document.createElement("input");if(r.type="text",r.id="input-".concat(e),r.autocapitalize="off",r.dataset.uid=e,r.dataset.active="1",r.addEventListener("keydown",k),n.appendChild(r),t){var o=document.getElementById(t);o&&(o.setAttribute("disabled","true"),o.removeEventListener("keydown",k),delete o.dataset.active)}document.getElementById("terminal").appendChild(n),document.getElementById("terminal").appendChild(i),r.focus()}function k(n){var o=n.target.value.trim().toLowerCase();if(13===n.keyCode){if(""!==o){v=!1;var a,s="response-".concat(n.target.dataset.uid),c=document.getElementById(s);a=m.includes(o)||f.includes(o)?function(t){switch(t){case"pif":return function(){var t={origin:{y:.7}};function e(e,n){i(Object.assign({},t,n,{particleCount:Math.floor(200*e)}))}e(.25,{spread:26,startVelocity:55}),e(.2,{spread:60}),e(.35,{spread:100,decay:.91,scalar:.8}),e(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),e(.1,{spread:120,startVelocity:45})}(),"C'est la fête !";case"light":return 0===document.body.classList.length?"Vous êtes déjà en mode clair":(l(!1),"Vous êtes maintenant en mode clair.");case"dark":return 1===document.body.classList.length?"Vous êtes déjà en mode sombre":(l(!0),"Vous êtes maintenant en mode sombre.");case"get cv":return(e=document.createElement("a")).href="resources/cv_amaury_le_chaffotec.pdf",e.setAttribute("download","cv_amaury_le_chaffotec.pdf"),e.click(),"Le CV va être téléchargé.";case"rm -rf /":return l(!0),document.body.classList.add("firework"),new r.Fireworks(document.body,{mouse:{click:!0,move:!1,max:7}}).start(),"w4dhIHZhIFDDiVRFUiAh";case"clear":return void(g.innerHTML='<div id="terminal"></div>')}var e}(o):function(n){var i=t(e).find((function(t){return t.command===n})),r="";if(void 0===i)r="'".concat(n.split(" ")[0],"' n’est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.");else if("list"===i.responseType&&Array.isArray(i.value))r="<ul>",r+=i.value.map((function(t){return"<li>".concat(t,"</li>")})).join(""),r+="</ul>";else if("text"===i.responseType)r=i.value;else if("table"===i.responseType){var o=i.headers,a=i.rows,s=o.map((function(t){return"<th>".concat(t,"</th>")})).join(""),c=a.map((function(t){return"<tr>".concat(t.map((function(t){return"<td>".concat(t,"</td>")})).join(""),"</tr>")})).join("");r="<table><thead><tr>".concat(s,"</tr></thead><tbody>").concat(c,"</tbody></table>")}else"code"===i.responseType&&(r="<pre>".concat(i.value.join("\n"),"</pre>"));return r}(o),c&&(c.innerHTML=a,p.push(o),w(n.target.id))}}else if(9===n.keyCode){if(n.preventDefault(),""===o)this.value="help";else{var h=d.find((function(t){return t.startsWith(o)}));h&&(this.value=h)}v=!1}else 38!==n.keyCode&&40!==n.keyCode||(p.length>0&&(!1===v?y=p.length-1:38===n.keyCode&&0!==y?y--:40===n.keyCode&&y!==p.length-1&&y++,this.value=p[y]),v=!0)}document.body.addEventListener("click",(function(t){"INPUT"!==t.target.tagName&&document.querySelector("input[data-active]").focus()})),document.querySelector(".fake-close").addEventListener("click",(function(t){var e=document.querySelector(".terminal");e.parentElement.removeChild(e)}))}();
//# sourceMappingURL=index.e5443180.js.map
