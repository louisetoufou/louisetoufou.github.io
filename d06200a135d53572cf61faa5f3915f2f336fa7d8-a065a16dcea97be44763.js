(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Wt+":function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n);t.a=function(e){var t=e.children,r=e.isSidebarMenuVisible;return i.a.createElement("div",{className:"font-quicksand bg-light text-dark "+(r?"overflow-hidden":""),id:"body"},t)}},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var i=r("q1tI"),a=n(i),o=n(r("Gytx"));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function d(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var s=i.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){l.push(this),d()},s.componentDidUpdate=function(){d()},s.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},s.render=function(){return a.createElement(n,this.props)},i}(i.Component);return s(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(f,"canUseDOM",u),f}}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("5NKs");t.__esModule=!0,t.default=void 0;var i,a=n(r("v06X")),o=n(r("XEEL")),s=n(r("uDP2")),u=n(r("j8BX")),c=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(m&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return T(t||r).src},T=function(e){if(m&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},E=Object.create({}),h=function(e){var t=d(e),r=p(t);return E[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,S=m&&window.IntersectionObserver,y=new WeakMap;function A(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function b(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function _(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},P=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+c+o+s+r+n+t+a+i+u+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(w,(0,u.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),w=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,T=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:i},T,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));w.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var M=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&S&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||m&&(g||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),E[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,E=e.fluid,h=e.fixed,g=e.backgroundColor,m=e.durationFadeIn,S=e.Tag,y=e.itemProp,b=e.loading,_=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,u.default)({opacity:O?1:0,transition:M?"opacity "+m+"ms":"none"},s),C="boolean"==typeof g?"lightgray":g,N={transitionDelay:m+"ms"},G=(0,u.default)({opacity:this.state.imgLoaded?0:1},M&&N,{},s,{},f),H={title:t,alt:this.state.isVisible?"":r,style:G,className:p,itemProp:y};if(E){var j=E,x=T(E);return c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),C&&c.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&N)}),x.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:x.base64,spreadProps:H,imageVariants:j,generateSources:R}),x.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:x.tracedSVG,spreadProps:H,imageVariants:j,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,A(j),c.default.createElement(w,{alt:r,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:b,draggable:_})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,u.default)({alt:r,title:t,loading:b},x,{imageVariants:j}))}}))}if(h){var k=h,D=T(h),B=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},a);return"inherit"===a.display&&delete B.display,c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},C&&c.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},M&&N)}),D.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:D.base64,spreadProps:H,imageVariants:k,generateSources:R}),D.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:D.tracedSVG,spreadProps:H,imageVariants:k,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,A(k),c.default.createElement(w,{alt:r,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:b,draggable:_})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,u.default)({alt:r,title:t,loading:b},D,{imageVariants:k}))}}))}return null},t}(c.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});M.propTypes={resolutions:L,sizes:C,fixed:l.default.oneOfType([L,l.default.arrayOf(L)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=M;t.default=N},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var c=a[u];if(!s(c))return!1;var l=e[c],d=t[c];if(!1===(i=r?r.call(n,l,d,c):void 0)||void 0===i&&l!==d)return!1}return!0}},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},INYr:function(e,t,r){"use strict";var n=r("XKFU"),i=r("CkkT")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(a)},OGtf:function(e,t,r){var n=r("XKFU"),i=r("eeVq"),a=r("vhPU"),o=/"/g,s=function(e,t,r,n){var i=String(a(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},Oyvg:function(e,t,r){var n=r("dyZX"),i=r("Xbzi"),a=r("hswa").f,o=r("kJMx").f,s=r("quPj"),u=r("C/va"),c=n.RegExp,l=c,d=c.prototype,f=/a/g,p=/a/g,T=new c(f)!==f;if(r("nh4g")&&(!T||r("eeVq")((function(){return p[r("K0xU")("match")]=!1,c(f)!=f||c(p)==p||"/a/i"!=c(f,"i")})))){c=function(e,t){var r=this instanceof c,n=s(e),a=void 0===t;return!r&&n&&e.constructor===c&&a?e:i(T?new l(n&&!a?e.source:e,t):l((n=e instanceof c)?e.source:e,n&&a?u.call(e):t),r?this:d,c)};for(var E=function(e){e in c||a(c,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},h=o(l),g=0;h.length>g;)E(h[g++]);d.constructor=c,c.prototype=d,r("KroJ")(n,"RegExp",c)}r("elZq")("RegExp")},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=d(r("q1tI")),o=d(r("17x9")),s=d(r("8+s/")),u=d(r("bmMU")),c=r("v1p5"),l=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,h,g,m=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),S=(E=m,g=h=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,i=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return n({},i,((t={})[r.type]=[].concat(i[r.type]||[],[n({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,i=e.child,a=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(i.type){case l.TAG_NAMES.TITLE:return n({},a,((t={})[i.type]=s,t.titleAttributes=n({},o),t));case l.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},o)});case l.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},o)})}return n({},a,((r={})[i.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var i;r=n({},r,((i={})[t]=e[t],i))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=f(i,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,a),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),i=n({},r);return t&&(i=this.mapChildrenToProps(t,i)),a.default.createElement(E,i)},i(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(a.default.Component),h.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=E.peek,h.rewind=function(){var e=E.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,u,c,l=n(t),d=n(r);if(l&&d){if((u=t.length)!=r.length)return!1;for(s=u;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,E=r instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==r.toString();var h=i(t);if((u=h.length)!==i(r).length)return!1;for(s=u;0!=s--;)if(!a.call(r,h[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=u;0!=s--;)if(!("_owner"===(c=h[s])&&t.$$typeof||e(t[c],r[c])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},eZ4m:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Sonia Lahcene - Lead Digital Designer in London","description":"Passionate Digital Designer and Design Manager with lots of experience leading and delivering complex creative projects from conceptualisation to completion.","author":"Sonia Lahcene","keywords":["Illustrator","Designer","Design Manager","Digital Designer","Digital","Graphic Design","Illustrator London","Graphic Designer","Visual Designer","Designer London","Sonia Lahcene","Integrated Designer"]}}}}')},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r("q1tI")),o=u(r("MgzW")),s=r("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var c,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),r=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},E=function(e,t,r){var i={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var u=a[o],c=u.toLowerCase();-1===t.indexOf(c)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return i[r]||(i[r]={}),n[r]||(n[r]={}),!i[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(n),u=0;u<a.length;u++){var c=a[u],l=(0,o.default)({},i[c],n[c]);i[c]=l}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},g=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){g(e)}),0)}),m=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;O(s.TAG_NAMES.BODY,n),O(s.TAG_NAMES.HTML,i),_(f,p);var T={baseTag:P(s.TAG_NAMES.BASE,r),linkTags:P(s.TAG_NAMES.LINK,a),metaTags:P(s.TAG_NAMES.META,o),noscriptTags:P(s.TAG_NAMES.NOSCRIPT,u),scriptTags:P(s.TAG_NAMES.SCRIPT,l),styleTags:P(s.TAG_NAMES.STYLE,d)},E={},h={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)})),t&&t(),c(e,E,h)},R=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=R(e)),O(s.TAG_NAMES.TITLE,t)},O=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),u=0;u<o.length;u++){var c=o[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var d=a.indexOf(c);-1!==d&&a.splice(d,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);i.length===a.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},P=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},I=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,i=w(r,n),[a.default.createElement(s.TAG_NAMES.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=I(r),a=R(t);return i?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+i+">"+l(a,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),a.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){b&&y(b),e.defer?b=S((function(){v(e,(function(){b=null}))})):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:M(s.TAG_NAMES.BASE,t,n),bodyAttributes:M(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(s.ATTRIBUTE_NAMES.HTML,i,n),link:M(s.TAG_NAMES.LINK,a,n),meta:M(s.TAG_NAMES.META,o,n),noscript:M(s.TAG_NAMES.NOSCRIPT,u,n),script:M(s.TAG_NAMES.SCRIPT,c,n),style:M(s.TAG_NAMES.STYLE,l,n),title:M(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=A}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("eZ4m"),i=r("q1tI"),a=r.n(i),o=r("TJpk"),s=r.n(o);function u(e){var t=e.description,r=e.lang,i=e.meta,o=e.keywords,u=e.title,c=n.data,l=t||c.site.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:r},meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i),title:u,titleTemplate:"%s | "+c.site.siteMetadata.title})}u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u}}]);
//# sourceMappingURL=d06200a135d53572cf61faa5f3915f2f336fa7d8-a065a16dcea97be44763.js.map