(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(16),l=a.n(o),n=(a(22),a(10)),r=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"#042743":"white"};return Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h1",{className:"my-3",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",style:t,children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(r.jsx)("strong",{children:"Analyze Your Text"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",style:t,children:"Text-Utils gives you a way to analyze your text quickly and efiiciently. Be it word count, character count or more..."})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(r.jsx)("strong",{children:"Free To Use"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",style:t,children:"Text Utils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(r.jsx)("strong",{children:"Browser Compatible"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",style:t,children:"This word counter softwareworks in any web-browser such as Chrome, FireFox, Safari, Microsoft Edge and Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc."})})]})]})]})}var d=a(8);function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:function(){e.toggleMode(null)},type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{classname:"mb-2",children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("Uppercase was Clicked"+s);var t=s.toUpperCase();o(t),e.showAlert(" Converted to Uppercase","success")},children:"Convert To Uppercase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("Uppercase was Clicked"+s);var t=s.toLowerCase();o(t),e.showAlert(" Converted to Lowercase","success")},children:"Convert To Lowercase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("Uppercase was Clicked"+s);o(""),e.showAlert(" Text Cleared","success")},children:"Clear Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert(" Copied to Clipboard","success")},children:"Copy Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert(" Extra Spaces Removed","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{children:"Your Text Summary"}),Object(r.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!=e.length})).length," words and ",s.length," characters"]}),Object(r.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!=e.length})).length," Minutes read"]}),Object(r.jsx)("h3",{children:"Prewiew"}),Object(r.jsx)("p",{children:s.length>0?s:"Nothing To Prewiew!"})]})]})}b.defaultProps={title:"Set Title Here",aboutText:"About"};var j=function(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg,Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),l=Object(n.a)(o,2),u=l[0],x=l[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{title:"Text-Utils",mode:a,toggleMode:function(e){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p(" Dark Mode Enabled","success")):(s("light"),document.body.style.backgroundColor="white",p(" Light Mode Enabled","success"))}}),Object(r.jsx)(j,{alert:u}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/about",children:Object(r.jsx)(i,{mode:a})}),Object(r.jsx)(m.a,{exact:!0,path:"/",children:Object(r.jsx)(h,{showAlert:p,heading:"Try Text-Utils - Word Counter, Character Counter, Remove Extra Spaces",mode:a})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),o(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.02903cd7.chunk.js.map