(this["webpackJsonpfirebase-budget"]=this["webpackJsonpfirebase-budget"]||[]).push([[4],{56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LinkContainer",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(57))&&r.__esModule?r:{default:r}},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(58)),a=n(23),c=["children","onClick","replace","to","state","activeClassName","className","activeStyle","style","isActive"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=function(e){var t=e.children,n=e.onClick,o=e.replace,l=e.to,i=e.state,s=e.activeClassName,d=e.className,y=e.activeStyle,b=e.style,m=e.isActive,O=p(e,c),v="object"===f(l)?l.pathname||"":l,j=(0,a.useNavigate)(),h=(0,a.useHref)("string"===typeof l?{pathname:l}:l),g=(0,a.useMatch)(v),P=(0,a.useLocation)(),C=r.default.Children.only(t),S=!!(m?"function"===typeof m?m(g,P):m:g);return r.default.cloneElement(C,u(u({},O),{},{className:[d,C.props.className,S?s:null].join(" ").trim(),style:S?u(u({},b),y):b,href:h,onClick:function(e){t.props.onClick&&t.props.onClick(e),n&&n(e),e.defaultPrevented||0!==e.button||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),j(l,{replace:o,state:i}))}}))};d.propTypes={children:o.default.element.isRequired,onClick:o.default.func,replace:o.default.bool,to:o.default.oneOfType([o.default.string,o.default.object]).isRequired,state:o.default.object,className:o.default.string,activeClassName:o.default.string,style:o.default.objectOf(o.default.oneOfType([o.default.string,o.default.number])),activeStyle:o.default.objectOf(o.default.oneOfType([o.default.string,o.default.number])),isActive:o.default.oneOfType([o.default.func,o.default.bool])},d.defaultProps={replace:!1,activeClassName:"active",onClick:null,className:null,style:null,activeStyle:null,isActive:null};var y=d;t.default=y},58:function(e,t,n){e.exports=n(67)()},67:function(e,t,n){"use strict";var r=n(68);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,c){if(c!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},68:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},81:function(e,t,n){"use strict";n.r(t);n(0);var r=n(22),o=n(56),a=n(5);t.default=function(){return Object(a.jsxs)("div",{className:"Home-Container",children:[Object(a.jsx)("div",{className:"Home-Title",children:"Welcome to the Budget App"}),Object(a.jsx)("div",{className:"Home-Subtitle",children:"Manage your budget with us"}),Object(a.jsx)("div",{className:"Home-Text",children:"Login to continue"}),Object(a.jsx)("div",{className:"Home-Login-Button",children:Object(a.jsx)(o.LinkContainer,{to:"/login",children:Object(a.jsx)(r.a,{color:"secondary",children:"Login"})})})]})}}}]);
//# sourceMappingURL=4.2e96d28c.chunk.js.map