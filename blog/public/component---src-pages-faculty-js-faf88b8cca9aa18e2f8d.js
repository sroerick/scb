(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6HLF":function(e,t,a){e.exports=a.p+"static/pic11-38ff45d158a9d247d9f3f85553be8e8d.jpg"},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),m=function(e){var t=u(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},h,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,O=e.draggable,R=g||m;if(!R)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:V?1:0,transition:j?"opacity "+y+"ms":"none"},d),H="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},_=(0,o.default)({opacity:this.state.imgLoaded?0:1},j&&P,d,f),F={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:S},N=this.state.isHydrated?h(R):R[0];if(g)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&P)}),N.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:F,imageVariants:R,generateSources:L}),N.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:F,imageVariants:R,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(z,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},N,{imageVariants:R}))}}));if(m){var C=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete C.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},j&&P)}),N.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:F,imageVariants:R,generateSources:L}),N.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:F,imageVariants:R,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(z,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},N,{imageVariants:R}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}V.propTypes={resolutions:j,sizes:T,fixed:H(c.default.oneOfType([j,c.default.arrayOf(j)])),fluid:H(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=V;t.default=P},ntFg:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&i(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var d=s(a("q1tI")),o=a("q1tI"),l=function(e){var t=e.cardStyles,a=t.back,i=t.front,n=e.cardZIndex,s=e.containerStyle,l=e.flipDirection,c=e.flipSpeedFrontToBack,u=e.flipSpeedBackToFront,f=e.infinite,p=o.useState(e.isFlipped),h=p[0],g=p[1],m=o.useState(0),b=m[0],y=m[1];o.useEffect((function(){e.isFlipped!==h&&(g(e.isFlipped),y((function(e){return e+180})))}),[e.isFlipped]);var v=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},S="rotateY("+(f?b:h?180:0)+"deg)",E="rotateX("+(f?b:h?180:0)+"deg)",w={back:r({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"relative":"absolute",top:"0",transform:"horizontal"===l?"rotateY("+(f?b+180:h?0:-180)+"deg)":"rotateX("+(f?b+180:h?0:-180)+"deg)",transformStyle:"preserve-3d",transition:c+"s",width:"100%"},a),container:{perspective:"1000px",zIndex:""+n},flipper:{height:"100%",position:"relative",width:"100%"},front:r({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"absolute":"relative",top:"0",transform:"horizontal"===l?S:E,transformStyle:"preserve-3d",transition:u+"s",width:"100%",zIndex:"2"},i)};return d.createElement("div",{className:"react-card-flip",style:r(r({},w.container),s)},d.createElement("div",{className:"react-card-flipper",style:w.flipper},d.createElement("div",{className:"react-card-front",style:w.front},v(0)),d.createElement("div",{className:"react-card-back",style:w.back},v(1))))};l.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=l},"x+ne":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var r=a("TJpk"),i=a.n(r),n=a("9eSz"),s=a.n(n),d=a("Bl7J"),o=a("q1tI"),l=a.n(o);a("ntFg"),a("6HLF");t.default=function(e){var t=e.data;return l.a.createElement(d.a,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Meet Our Staff"),l.a.createElement("meta",{name:"description",content:"Generic Page"})),l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,"Meet Our Staff")),l.a.createElement("div",{class:"employees grid-wrapper"},t.allMarkdownRemark.edges.map((function(e){return l.a.createElement("div",{id:"employee_card",class:"col-6 employee_card"},l.a.createElement(s.a,{fluid:e.node.frontmatter.profile.childImageSharp.fluid,loading:"eager",alt:e.node.frontmatter.title,style:{margin:"1rem",overflow:"hidden",position:"relative",objectFit:"cover",marginLeft:"auto",marginRight:"auto",width:"200px",height:"200px",borderRadius:"20px"},imgStyle:{objectPosition:"50% 15%"}}),l.a.createElement("h3",{class:"faculty-name"},e.node.frontmatter.name),l.a.createElement("h4",null,e.node.frontmatter.title),l.a.createElement("div",{className:"blog-post-content",id:"blog-post-content",dangerouslySetInnerHTML:{__html:e.node.html}}))})))))))};var c="4069034904"}}]);
//# sourceMappingURL=component---src-pages-faculty-js-faf88b8cca9aa18e2f8d.js.map