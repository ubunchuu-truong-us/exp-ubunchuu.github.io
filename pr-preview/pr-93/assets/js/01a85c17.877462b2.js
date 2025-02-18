"use strict";(self.webpackChunkubunchuu_truong_us_github_io=self.webpackChunkubunchuu_truong_us_github_io||[]).push([[8209],{3750:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>y,Ki:()=>k,kJ:()=>b,x:()=>l,e7:()=>u,J_:()=>f,Gx:()=>A});var s=a(6540),n=a(6849),i=a(9062),r=a(4848);function l(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function u(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var m=a(9030),d=a(797);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function b(e){const{siteConfig:t}=(0,d.A)(),{withBaseUrl:a}=(0,m.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,u=s.image??n.image,m=n.keywords??[],d=`${t.url}${i.permalink}`,b=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:l,name:l,description:o,datePublished:r,...b?{dateModified:b}:{},...h(i.authors),...p(u,a,l),...m?{keywords:m}:{}}}(e.content,t,a)))}}function f(){const e=l(),{assets:t,metadata:a}=u(),{siteConfig:s}=(0,d.A)(),{withBaseUrl:n}=(0,m.hH)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:b}=a,f=t.image??c.image,x=c.keywords??[],j=b?g(b):void 0,N=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:r,name:r,description:o,datePublished:i,...j?{dateModified:j}:{},...h(a.authors),...p(f,n,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var N=a(6347),v=a(6289),C=a(1861),_=a(214);function A(e){const{pathname:t}=(0,N.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,_.ys)(e.permalink,t))}(e,t)))),[e,t])}function k(e){const t=(0,C.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function y(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(v.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},569:(e,t,a)=>{a.d(t,{A:()=>U});var s=a(6540),n=a(4164),i=a(5641),r=a(6682),l=a(539),o=a(3750),c=a(3115),u=a(9303),m=a(4848);function d(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(u.A,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,m.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(s,{items:n})},t)}))})}return(0,m.jsx)(s,{items:t})}const h=(0,s.memo)(g),p="sidebar_re4s",b="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",x="sidebarItem__DBe",j="sidebarItemLink_mo7H",N="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",C=e=>{let{items:t}=e;return(0,m.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(f,"clean-list"),liClassName:x,linkClassName:j,linkActiveClassName:N})};function _(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,n.A)(b,"margin-bottom--md"),children:t.title}),(0,m.jsx)(h,{items:a,ListComponent:C,yearGroupHeadingClassName:v})]})})}const A=(0,s.memo)(_);var k=a(3065);const y="yearGroupHeading_QT03",P=e=>{let{items:t}=e;return(0,m.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,m.jsx)(h,{items:a,ListComponent:P,yearGroupHeadingClassName:y})}function B(e){return(0,m.jsx)(k.GX,{component:w,props:e})}const G=(0,s.memo)(B);function O(e){let{sidebar:t}=e;const a=(0,r.l)();return t?.items.length?"mobile"===a?(0,m.jsx)(G,{sidebar:t}):(0,m.jsx)(A,{sidebar:t}):null}function U(e){const{sidebar:t,toc:a,children:s,...r}=e,l=t&&t.items.length>0;return(0,m.jsx)(i.A,{...r,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(O,{sidebar:t}),(0,m.jsx)("main",{className:(0,n.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,m.jsx)("div",{className:"col col--2",children:a})]})})})}},9171:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(6540);var s=a(4164),n=a(3523),i=a(1082),r=a(204),l=a(569),o=a(1807),c=a(7220),u=a(9303),m=a(4848);function d(e){let{tags:t,sidebar:a}=e;const d=(0,n.b)();return(0,m.jsxs)(i.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagsListPage),children:[(0,m.jsx)(i.be,{title:d}),(0,m.jsx)(c.A,{tag:"blog_tags_list"}),(0,m.jsxs)(l.A,{sidebar:a,children:[(0,m.jsx)(u.A,{as:"h1",children:d}),(0,m.jsx)(o.A,{tags:t})]})]})}},3953:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(6289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},1807:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var s=a(3523),n=a(3953),i=a(9303);const r={tag:"tag_Nnez"};var l=a(4848);function o(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(i.A,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(n.A,{...e})},e.permalink)))}),(0,l.jsx)("hr",{})]})}function c(e){let{tags:t}=e;const a=(0,s.Q)(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,l.jsx)(o,{letterEntry:e},e.letter)))})}},3523:(e,t,a)=>{a.d(t,{Q:()=>i,b:()=>n});var s=a(539);const n=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function i(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);