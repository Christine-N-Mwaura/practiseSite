(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[2],{"5WdN":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.shorthandPropType=v
t.default=t.SPACING=t.SIZES=t.BACKGROUNDS=t.BORDER_RADII=t.BORDER_WIDTHS=t.STACKING_TYPES=t.SHADOW_TYPES=void 0
var a=n(r("17x9"))
var o={resting:"resting",above:"above",topmost:"topmost",none:"none"}
t.SHADOW_TYPES=o
var i={deepest:"deepest",below:"below",resting:"resting",above:"above",topmost:"topmost"}
t.STACKING_TYPES=i
var d={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_WIDTHS=d
var l={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_RADII=l
var c={default:"default",inverse:"inverse",transparent:"transparent"}
t.BACKGROUNDS=c
var u={xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large"}
t.SIZES=u
var s={0:"0",none:"none",auto:"auto",xxxSmall:"xxx-small",xxSmall:"xx-small",xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large",xxLarge:"xx-large"}
t.SPACING=s
var f={shadow:a.default.oneOf(Object.values(o)),stacking:a.default.oneOf(Object.values(i)),borderWidth:v(Object.values(d)),borderRadius:v(Object.values(l)),background:a.default.oneOf(Object.values(c)),size:a.default.oneOf(Object.values(u)),spacing:v(Object.values(s))}
t.default=f
function v(e){return function(t,r,n,a){var o=t[r]
if("undefined"===typeof o)return
var i=typeof o
if("string"!==i)return new Error("Invalid ".concat(a," `").concat(r,"` of type `").concat(i,"` supplied to `").concat(n,"`, expected ")+"a string.")
var d=o.split(" ")
var l=d.length
if(!(l>0&&l<5))return new Error("Invalid ".concat(a," `").concat(r,"` `").concat(o,"` supplied to `").concat(n,"`, expected ")+"between one and four of the following valid values: `".concat(e.join(", "),"`."))
for(var c=0;c<l;c++){var u=e.indexOf(d[c])
if(-1===u)return new Error("Invalid ".concat(a," `").concat(r,"` `").concat(d[c],"` supplied to `").concat(n,"`, expected ")+"a one of `".concat(e.join(", "),"`."))}}}},"9Ajg":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){return e?e.charAt(0).toUpperCase()+e.slice(1):e}},"9Okx":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=d
var a=n(r("KB5V"))
var o=n(r("TNGd"))
var i=n(r("8HMx"))
function d(e){var t={}
if(i.default){var r=e&&(0,a.default)(e)
t=r?(0,o.default)(e).getComputedStyle(r):{}}return t}},"G/S0":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("MVZn"))
var o=n(r("k9CA"))
function i(e){var t=e.typography,r=e.colors,n=e.borders,i=e.spacing,d=e.shadows,l=e.stacking,c=e.breakpoints
return(0,a.default)({fontFamily:t.fontFamily,color:r.oxford,background:r.white,borderColor:r.tiara,colorInverse:r.white,backgroundInverse:r.oxford,borderColorInverse:"transparent",debugOutlineColor:r.borderDebug,backgroundLight:r.porcelain,borderStyle:n.style,arrowSize:"0.5rem",xSmallMaxWidth:c.xSmall,smallMaxWidth:c.small,mediumMaxWidth:c.medium,largeMaxWidth:c.large},(0,o.default)("margin",i),(0,o.default)("padding",i),(0,o.default)("shadow",d),(0,o.default)("stacking",l),(0,o.default)("border",n))}},GrBK:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var a=n(r("KB5V"))
function o(e){var t=e&&(0,a.default)(e)
return t&&t.ownerDocument||document}},LqRq:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
Object.defineProperty(t,"DIRECTION",{enumerable:true,get:function(){return f.DIRECTION}})
t.default=void 0
var a=n(r("MVZn"))
var o=n(r("lwsE"))
var i=n(r("W8MJ"))
var d=n(r("a1gu"))
var l=n(r("Nsbk"))
var c=n(r("7W2i"))
var u=n(r("17x9"))
var s=n(r("jcII"))
var f=r("smBl")
var v=n(r("Txdh"))
var b=(0,s.default)(function(e){var t,r
return r=t=function(e){(0,c.default)(t,e)
function t(){var e
var r;(0,o.default)(this,t)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
r=(0,d.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(a)))
r._defaultDirection=(0,v.default)()
return r}(0,i.default)(t,[{key:"dir",get:function(){var e=(0,f.getTextDirectionContext)(this.context)||{}
return e.dir||this.props.dir||this._defaultDirection}},{key:"rtl",get:function(){return this.dir===f.DIRECTION.rtl}},{key:"ltr",get:function(){return this.dir===f.DIRECTION.ltr}}])
return t}(e),t.propTypes=(0,a.default)({},e.propTypes,{dir:u.default.oneOf(Object.values(f.DIRECTION))}),t.contextTypes=(0,a.default)({},e.contextTypes,f.TextDirectionContextTypes),r})
t.default=b},"MP+e":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
r("Y14w")
var a=n(r("xnDy"))
var o=r("SRMa")
function i(e,t,r,n){if("string"!==typeof r||(0,a.default)(t))return
return r.split(" ").map(function(r){if("auto"===r||"0"===r)return r
if("none"===r)return"0"
var a=(0,o.camelize)("".concat(n,"-").concat(r))
var i=t[a]
"[".concat(e,"] '").concat(a,"' is an invalid '").concat(n,"' value.")
return i||"0"}).join(" ").trim()}},PWIC:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.mirrorShorthandEdges=n
t.mirrorShorthandCorners=a
function n(e){if("string"!==typeof e)return
var t=e.split(" ")
if(4===t.length){var r=[t[3],t[1]]
t[1]=r[0]
t[3]=r[1]}return t.join(" ")}function a(e){if("string"!==typeof e)return
var t=e.split(" ")
if(2===t.length){var r=[t[1],t[0]]
t[0]=r[0]
t[1]=r[1]}3===t.length&&t.push(t[1])
if(4===t.length){var n=[t[1],t[0],t[3],t[2]]
t[0]=n[0]
t[1]=n[1]
t[2]=n[2]
t[3]=n[3]}return t.join(" ")}},SRMa:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.camelize=o
t.pascalize=i
var a=n(r("9Ajg"))
function o(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}function i(e){return(0,a.default)(o(e))}},TNGd:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("KB5V"))
var o=n(r("GrBK"))
function i(e){var t=e&&(0,a.default)(e)
var r=(0,o.default)(t)
return r&&(r.defaultView||r.parentWindow)}},Txdh:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("8HMx"))
var o=n(r("9Okx"))
var i
var d=a.default?function(){var e=document.documentElement
var t=e.getAttribute("dir")||(0,o.default)(e).direction
if(!i){i=new MutationObserver(function(){t=e.getAttribute("dir")})
i.observe(e,{attributes:true})}return function(r){if("undefined"===typeof r||r===e)return t
return(0,o.default)(r).direction}}():function(){}
t.default=d},"V/Za":function(e,t,r){var n=r("q1tI")
function a(){var e=""
try{e=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function o(e,t,r){if(!t&&false){var n=a()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var o
for(var i=arguments.length,d=new Array(i>3?i-3:0),l=3;l<i;l++)d[l-3]=arguments[l];(o=console)[e].apply(o,["Warning: ".concat(r)].concat(d,[n]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return o.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return o.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}},XbQQ:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lSNA"))
var d=a(r("lwsE"))
var l=a(r("W8MJ"))
var c=a(r("a1gu"))
var u=a(r("Nsbk"))
var s=a(r("7W2i"))
r("V/Za")
var f=n(r("q1tI"))
var v=a(r("17x9"))
var b=a(r("TSYQ"))
var p=a(r("J2CL"))
var h=a(r("MP+e"))
a(r("9Okx"))
var g=a(r("5WdN"))
var m=r("PWIC")
var x=n(r("LqRq"))
var _=r("IzEL")
var y=a(r("ZJ40"))
var A=a(r("kibL"))
var z=r("2lwo")
var w=a(r("G/S0"))
var X={componentId:"czbXA",template:function(e){return"\n\n.czbXA_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%}\n\n.czbXA_UeJS{display:block}\n\n.czbXA_cuDs{display:inline-block;vertical-align:middle}\n\n.czbXA_desw{display:flex}\n\n.czbXA_cKQL{display:inline-flex;vertical-align:middle}\n\n.czbXA_EMjX{text-align:start}\n\n[dir=ltr] .czbXA_EMjX{text-align:left}\n\n[dir=rtl] .czbXA_EMjX{text-align:right}\n\n.czbXA_ImeN,[dir=ltr] .czbXA_ImeN,[dir=rtl] .czbXA_ImeN{text-align:center}\n\n.czbXA_dBtH{text-align:end}\n\n[dir=ltr] .czbXA_dBtH{text-align:right}\n\n[dir=rtl] .czbXA_dBtH{text-align:left}\n\n.czbXA_bQna{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.czbXA_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit","}\n\n.czbXA_dHtp.czbXA_fzxW{border-color:").concat(e.borderColorInverse||"inherit","}\n\n.czbXA_fZwI{background:").concat(e.background||"inherit",";color:").concat(e.color||"inherit","}\n\n.czbXA_fzxW{background:").concat(e.backgroundInverse||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.czbXA_dUgE{background:").concat(e.backgroundLight||"inherit",";color:").concat(e.color||"inherit","}\n\n.czbXA_dIzR{max-width:").concat(e.xSmallMaxWidth||"inherit","}\n\n.czbXA_VCXp{max-width:").concat(e.smallMaxWidth||"inherit","}\n\n.czbXA_fKcQ{max-width:").concat(e.mediumMaxWidth||"inherit","}\n\n.czbXA_cnhd{max-width:").concat(e.largeMaxWidth||"inherit","}\n\n.czbXA_GJxv{max-width:100vw}\n\n.czbXA_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.czbXA_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.czbXA_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.czbXA_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.czbXA_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.czbXA_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.czbXA_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.czbXA_fhgP{overflow-x:hidden}\n\n.czbXA_dzYG{overflow-x:auto}\n\n.czbXA_divt{overflow-y:hidden}\n\n.czbXA_fKlg{overflow-y:auto}")},root:"czbXA_bGBk","display--block":"czbXA_UeJS","display--inline-block":"czbXA_cuDs","display--flex":"czbXA_desw","display--inline-flex":"czbXA_cKQL","textAlign--start":"czbXA_EMjX","textAlign--center":"czbXA_ImeN","textAlign--end":"czbXA_dBtH",debug:"czbXA_bQna",border:"czbXA_dHtp","background--inverse":"czbXA_fzxW","background--default":"czbXA_fZwI","background--light":"czbXA_dUgE","size--x-small":"czbXA_dIzR","size--small":"czbXA_VCXp","size--medium":"czbXA_fKcQ","size--large":"czbXA_cnhd","size--fullscreen":"czbXA_GJxv","stacking--topmost":"czbXA_fQrx","stacking--above":"czbXA_dtZX","stacking--below":"czbXA_fCiV","stacking--deepest":"czbXA_dJEE","shadow--topmost":"czbXA_fxuY","shadow--resting":"czbXA_bxuL","shadow--above":"czbXA_bIta","overflowX--hidden":"czbXA_fhgP","overflowX--auto":"czbXA_dzYG","overflowY--hidden":"czbXA_divt","overflowY--auto":"czbXA_fKlg"}
var O=function(e){(0,s.default)(t,e)
function t(){var e
var r;(0,d.default)(this,t)
for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o]
r=(0,c.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(a)))
r.handleElementRef=function(e){"function"===typeof r.props.elementRef&&r.props.elementRef(e)
r._element=e}
return r}(0,l.default)(t,[{key:"componentDidMount",value:function(){this._element,this.props.margin}},{key:"render",value:function(){var e
var r=this.props,n=r.children,a=r.textAlign,d=r.background,l=r.display,c=r.debug,u=r.width,s=r.height,v=r.minWidth,p=r.minHeight,h=r.maxWidth,g=r.maxHeight,m=r.overflowX,x=r.overflowY,_=r.stacking,y=r.shadow,w=r.size,O=r.className
var k=(0,A.default)(t,this.props)
return f.default.createElement(k,Object.assign({},(0,z.omitProps)(this.props,t.propTypes),{className:(0,b.default)((e={},(0,i.default)(e,X.root,true),(0,i.default)(e,X.border,this.hasBorder),(0,i.default)(e,X.debug,c),(0,i.default)(e,X["textAlign--".concat(a)],a),(0,i.default)(e,X["background--".concat(d)],d),(0,i.default)(e,X["display--".concat(l)],l&&"auto"!==l),(0,i.default)(e,X["overflowX--".concat(m)],m&&"visible"!==m),(0,i.default)(e,X["overflowY--".concat(x)],x&&"visible"!==x),(0,i.default)(e,X["size--".concat(w)],w&&"auto"!==w),(0,i.default)(e,X["stacking--".concat(_)],_),(0,i.default)(e,X["shadow--".concat(y)],y&&"none"!==y),(0,i.default)(e,O,O),e)),style:(0,o.default)({},this.spacingStyle,this.borderStyle,{width:u,height:s,minWidth:v,minHeight:p,maxWidth:h,maxHeight:g},this.styleProps),ref:this.handleElementRef}),n)}},{key:"hasBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,t=e.borderRadius,r=e.borderWidth
if(this.dir===x.DIRECTION.rtl){t=(0,m.mirrorShorthandCorners)(t)
r=(0,m.mirrorShorthandEdges)(r)}return{borderRadius:(0,h.default)("View",this.theme,t,"borderRadius"),borderWidth:(0,h.default)("View",this.theme,r,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,t=e.margin,r=e.padding
if("rtl"===this.dir){t=(0,m.mirrorShorthandEdges)(t)
r=(0,m.mirrorShorthandEdges)(r)}return{margin:(0,h.default)("View",this.theme,t,"margin"),padding:(0,h.default)("View",this.theme,r,"padding")}}},{key:"styleProps",get:function(){var e=this.props,t=e.cursor,r=e.style
var n=(0,z.pickProps)(r||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage"])
t&&(n.cursor=t)
return n}}])
t.displayName="View"
return t}(f.Component)
O.propTypes={as:v.default.elementType,elementRef:v.default.func,display:v.default.oneOf(["auto","block","inline-block","flex","inline-flex"]),overflowX:v.default.oneOf(["auto","hidden","visible"]),overflowY:v.default.oneOf(["auto","hidden","visible"]),margin:g.default.spacing,padding:g.default.spacing,height:v.default.oneOfType([v.default.string,v.default.number]),width:v.default.oneOfType([v.default.string,v.default.number]),maxHeight:v.default.oneOfType([v.default.string,v.default.number]),maxWidth:v.default.oneOfType([v.default.string,v.default.number]),minHeight:v.default.oneOfType([v.default.string,v.default.number]),minWidth:v.default.oneOfType([v.default.string,v.default.number]),children:v.default.node,textAlign:v.default.oneOf(["start","center","end"]),borderWidth:g.default.borderWidth,borderRadius:g.default.borderWidth,background:v.default.oneOf(["default","inverse","light","transparent"]),shadow:g.default.shadow,stacking:g.default.stacking,cursor:_.cursor,debug:v.default.bool}
O.defaultProps={display:"auto",textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,debug:false,cursor:void 0,borderWidth:void 0,borderRadius:void 0,margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0}
var k=(0,y.default)("5.4.0",{size:"maxWidth"})((0,x.default)()((0,p.default)(w.default,X)(O)))
k.omitViewProps=function(e,t){false
return(0,z.omitProps)(e,k.propTypes)}
var T=k
t.default=T},ZJ40:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.warnDeprecatedComponent=s
t.changedPackageWarning=f
t.deprecatePropValues=t.default=void 0
var a=n(r("lwsE"))
var o=n(r("a1gu"))
var i=n(r("Nsbk"))
var d=n(r("7W2i"))
r("Eo2T")
var l=n(r("jcII"))
var c=(0,l.default)(function(e,t,r,n){var l=function(e){(0,d.default)(t,e)
function t(){(0,a.default)(this,t)
return(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return t}(e)
false
return l})
t.default=c
var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var r=arguments.length>2?arguments[2]:void 0
return function(n,a,o){var i=t.includes(n[a])
"[".concat(o,"] The '").concat(n[a],"' value for the `").concat(a,"` prop is deprecated. ").concat(r||"")
for(var d=arguments.length,l=new Array(d>3?d-3:0),c=3;c<d;c++)l[c-3]=arguments[c]
return i?null:e.apply(void 0,[n,a,o].concat(l))}}
t.deprecatePropValues=u
function s(e,t,r){"[".concat(t,"] was deprecated in version ").concat(e,". ").concat(r||"")}function f(e,t){return"It has been moved from @instructure/".concat(e," to @instructure/").concat(t,".")}},k9CA:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=a
var n=r("SRMa")
function a(e,t){var r={}
Object.keys(t).forEach(function(a){r[(0,n.camelize)("".concat(e,"-").concat(a))]=t[a]})
return r}},smBl:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.makeTextDirectionContext=c
t.getTextDirectionContext=u
t.TextDirectionContextTypes=t.DIRECTION=void 0
var a=n(r("lSNA"))
var o=n(r("17x9"))
var i="@@bidirectional"
var d={ltr:"ltr",rtl:"rtl"}
t.DIRECTION=d
var l=(0,a.default)({},i,o.default.shape({dir:o.default.oneOf(Object.values(d))}))
t.TextDirectionContextTypes=l
function c(e){return(0,a.default)({},i,{dir:e})}function u(e){if(e)return e[i]}}}])

//# sourceMappingURL=2-c-0a0bac5a90.js.map