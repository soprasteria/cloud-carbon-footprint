(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8],{124:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(56),c=t.n(o),i=t(206),l=t(125),s=t(122);a.a=function(){var e=Object(l.a)();return r.a.createElement("section",{id:"have-a-question"},r.a.createElement("div",{className:c.a.footerImageContainer},r.a.createElement("div",null,r.a.createElement("h2",{className:c.a.footerImageTitle},"Have a Question?"),r.a.createElement(s.a,{to:"https://groups.google.com/g/cloud-carbon-footprint"},r.a.createElement(i.a,{variant:"contained",classes:{root:e.paddingHigh}},"JOIN OUR DISCUSSION FORUM")))))}},125:function(e,a,t){"use strict";var n=t(202),r={background:"#146133",color:"white",fontFamily:"Helvetica",fontSize:"12pt",fontWeight:"700",letterSpacing:"1px","&:hover":{color:"#ffffff",backgroundColor:"#067A3E",textDecoration:"none"}},o=Object(n.a)((function(e){var a,t;return{paddingLow:Object.assign({},r,(a={padding:"14px 40px"},a[e.breakpoints.down("xs")]={padding:"10px 40px"},a)),paddingHigh:Object.assign({},r,(t={padding:"14px 90px"},t[e.breakpoints.down("xs")]={padding:"10px 40px"},t))}}));a.a=o},131:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(124),c=t(57),i=t.n(c);function l(e){var a=e.link,t=e.text;return r.a.createElement("a",{className:i.a.footerLicenseLink,target:"_blank",href:a},t)}a.a=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null),r.a.createElement("div",{className:i.a.footerLicenseContainer},r.a.createElement("p",null,"Cloud Carbon Footprint is an open-source project, sponsored by ThoughtWorks Inc. under the\xa0",r.a.createElement(l,{link:"http://www.apache.org/licenses/LICENSE-2.0",text:"Apache License, Version 2.0"})),r.a.createElement("p",null,r.a.createElement(l,{link:"https://www.thoughtworks.com/privacy-policy",text:"PRIVACY POLICY"}))))}},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(130),c=t(145),i=t(122),l=t(138);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,s=a.allTagsPath,m=a.name,p=a.count;return r.a.createElement(o.a,{title:'Posts tagged "'+m+'"',description:'Blog | Tagged "'+m+'"',wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(l.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,p," ",function(e,a){return e>1?a+"s":a}(p,"post"),' tagged with "',m,'"'),r.a.createElement(i.a,{href:s},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}}}]);