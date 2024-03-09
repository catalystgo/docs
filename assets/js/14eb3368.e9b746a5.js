"use strict";(self.webpackChunkdocs_docs=self.webpackChunkdocs_docs||[]).push([[6969],{1243:(e,s,t)=>{t.d(s,{A:()=>p});t(6540);var n=t(4164),i=t(7559),a=t(1754),r=t(9169),c=t(8774),o=t(1312),l=t(6025),d=t(4848);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,l.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:s,href:t,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:s}):t?(0,d.jsx)(c.A,{className:i,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:s})}):(0,d.jsx)("span",{className:i,children:s})}function v(e){let{children:s,active:t,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[s,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,a.OF)(),s=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[s&&(0,d.jsx)(h,{}),e.map(((s,t)=>{const n=t===e.length-1,i="category"===s.type&&s.linkUnlisted?void 0:s.href;return(0,d.jsx)(v,{active:n,index:t,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:s.label})},t)}))]})}):null}},4136:(e,s,t)=>{t.r(s),t.d(s,{default:()=>y});t(6540);var n=t(1003),i=t(1754),a=t(6025),r=t(4164),c=t(8774),o=t(6654),l=t(1312),d=t(1107);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(4848);function h(e){let{href:s,children:t}=e;return(0,u.jsx)(c.A,{href:s,className:(0,r.A)("card padding--lg",m.cardContainer),children:t})}function b(e){let{href:s,icon:t,title:n,description:i}=e;return(0,u.jsxs)(h,{href:s,children:[(0,u.jsxs)(d.A,{as:"h2",className:(0,r.A)("text--truncate",m.cardTitle),title:n,children:[t," ",n]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",m.cardDescription),title:i,children:i})]})}function x(e){let{item:s}=e;const t=(0,i.Nr)(s);return t?(0,u.jsx)(b,{href:t,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})}):null}function v(e){let{item:s}=e;const t=(0,o.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(s.docId??void 0);return(0,u.jsx)(b,{href:s.href,icon:t,title:s.label,description:s.description??n?.description})}function p(e){let{item:s}=e;switch(s.type){case"link":return(0,u.jsx)(v,{item:s});case"category":return(0,u.jsx)(x,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function g(e){let{className:s}=e;const t=(0,i.$S)();return(0,u.jsx)(j,{items:t.items,className:s})}function j(e){const{items:s,className:t}=e;if(!s)return(0,u.jsx)(g,{...e});const n=(0,i.d1)(s);return(0,u.jsx)("section",{className:(0,r.A)("row",t),children:n.map(((e,s)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},s)))})}var f=t(7719),A=t(1878),N=t(4267),T=t(1243);const _={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function L(e){let{categoryGeneratedIndex:s}=e;return(0,u.jsx)(n.be,{title:s.title,description:s.description,keywords:s.keywords,image:(0,a.A)(s.image)})}function k(e){let{categoryGeneratedIndex:s}=e;const t=(0,i.$S)();return(0,u.jsxs)("div",{className:_.generatedIndexPage,children:[(0,u.jsx)(A.A,{}),(0,u.jsx)(T.A,{}),(0,u.jsx)(N.A,{}),(0,u.jsxs)("header",{children:[(0,u.jsx)(d.A,{as:"h1",className:_.title,children:s.title}),s.description&&(0,u.jsx)("p",{children:s.description})]}),(0,u.jsx)("article",{className:"margin-top--lg",children:(0,u.jsx)(j,{items:t.items,className:_.list})}),(0,u.jsx)("footer",{className:"margin-top--lg",children:(0,u.jsx)(f.A,{previous:s.navigation.previous,next:s.navigation.next})})]})}function y(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L,{...e}),(0,u.jsx)(k,{...e})]})}},7719:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(1312),i=t(9022),a=t(4848);function r(e){const{previous:s,next:t}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[s&&(0,a.jsx)(i.A,{...s,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,a.jsx)(i.A,{...t,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,s,t)=>{t.d(s,{A:()=>o});t(6540);var n=t(4164),i=t(1312),a=t(7559),r=t(2252),c=t(4848);function o(e){let{className:s}=e;const t=(0,r.r)();return t.badge?(0,c.jsx)("span",{className:(0,n.A)(s,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},1878:(e,s,t)=>{t.d(s,{A:()=>v});t(6540);var n=t(4164),i=t(4586),a=t(8774),r=t(1312),c=t(4070),o=t(7559),l=t(5597),d=t(2252),m=t(4848);const u={unreleased:function(e){let{siteTitle:s,versionMetadata:t}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:s,versionLabel:(0,m.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:s,versionMetadata:t}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:s,versionLabel:(0,m.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const s=u[e.versionMetadata.banner];return(0,m.jsx)(s,{...e})}function b(e){let{versionLabel:s,to:t,onClick:n}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:s,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(a.A,{to:t,onClick:n,children:(0,m.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:s,versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:r}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,l.g1)(r),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,c.HW)(r),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,n.A)(s,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:a,versionMetadata:t})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:s}=e;const t=(0,d.r)();return t.banner?(0,m.jsx)(x,{className:s,versionMetadata:t}):null}},9022:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4164),i=t(8774),a=t(4848);function r(e){const{permalink:s,title:t,subLabel:r,isNext:c}=e;return(0,a.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:s,children:[r&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,a.jsx)("div",{className:"pagination-nav__label",children:t})]})}}}]);