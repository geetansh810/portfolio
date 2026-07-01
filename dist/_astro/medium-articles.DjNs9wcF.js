import{r as i}from"./index.BVOCwoKb.js";var y={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R;function B(){if(R)return u;R=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function a(l,o,n){var c=null;if(n!==void 0&&(c=""+n),o.key!==void 0&&(c=""+o.key),"key"in o){n={};for(var m in o)m!=="key"&&(n[m]=o[m])}else n=o;return o=n.ref,{$$typeof:r,type:l,key:c,ref:o!==void 0?o:null,props:n}}return u.Fragment=s,u.jsx=a,u.jsxs=a,u}var E;function I(){return E||(E=1,y.exports=B()),y.exports}var e=I();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,l)=>l?l.toUpperCase():a.toLowerCase()),_=r=>{const s=P(r);return s.charAt(0).toUpperCase()+s.slice(1)},M=(...r)=>r.filter((s,a,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=i.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:n,iconNode:c,...m},x)=>i.createElement("svg",{ref:x,...G,width:s,height:s,stroke:r,strokeWidth:l?Number(a)*24/Number(s):a,className:M("lucide",o),...m},[...c.map(([h,p])=>i.createElement(h,p)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(r,s)=>{const a=i.forwardRef(({className:l,...o},n)=>i.createElement(Y,{ref:n,iconNode:s,className:M(`lucide-${O(_(r))}`,`lucide-${r}`,l),...o}));return a.displayName=_(r),a};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],W=w("arrow-up-right",Z);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Q=w("calendar",H);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],X=w("clock",V);function re(){const[r,s]=i.useState([]),[a,l]=i.useState([]),[o,n]=i.useState("All"),[c,m]=i.useState(!0),[x,h]=i.useState(null);i.useEffect(()=>{async function t(){try{const b=await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent("https://medium.com/feed/@geetansh810")}`);if(!b.ok)throw new Error("Failed to fetch articles from Medium");const f=await b.json();if(f.status!=="ok")throw new Error(f.message||"Failed to load feed");const j=(f.items||[]).map((d,T)=>{const v=d.content||d.description||"",N=v.match(/<img[^>]+src="([^">]+)"/)||v.match(/<img[^>]+src='([^'>]+)'/),S=N?N[1]:null,k=v.replace(/<[^>]*>/g," "),L=k.trim().split(/\s+/).filter(Boolean).length,D=Math.max(1,Math.ceil(L/200)),F=new Date(d.pubDate.replace(/-/g,"/")),U=new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"numeric"}).format(F),C=d.categories.map(J=>J.toLowerCase())||[],q=C[0]||"general",A=k.replace(/\s+/g," ").trim(),z=A.substring(0,140)+(A.length>140?"...":"");return{id:d.guid||`medium-${T}`,title:d.title,link:d.link,date:d.pubDate,formattedDate:U,category:q,tags:C,description:z,image:S,readingTime:`${D} min read`}});s(j);const $=["All",...new Set(j.map(d=>d.category))];l($)}catch(g){console.error(g),h(g.message||"An error occurred while loading articles.")}finally{m(!1)}}t()},[]);const p=o==="All"?r:r.filter(t=>t.category===o);return c?e.jsxs("div",{className:"space-y-8 py-4 animate-pulse",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:[1,2,3,4].map(t=>e.jsx("div",{className:"h-8 w-20 bg-muted rounded-full"},t))}),e.jsx("div",{className:"space-y-6",children:[1,2,3].map(t=>e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 border border-border/50 rounded-xl p-4 bg-muted/10",children:[e.jsx("div",{className:"w-full h-36 sm:w-24 sm:h-20 md:w-32 md:h-24 bg-muted rounded-lg shrink-0"}),e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx("div",{className:"h-4 bg-muted rounded w-1/4"}),e.jsx("div",{className:"h-6 bg-muted rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]},t))})]}):x?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center",children:[e.jsx("p",{className:"text-destructive font-semibold mb-2",children:"Oops! Couldn't load articles."}),e.jsx("p",{className:"text-muted-foreground text-sm max-w-md",children:x}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 border rounded-md text-sm hover:bg-muted duration-150",children:"Try Again"})]}):e.jsxs("div",{className:"space-y-8 py-4",children:[a.length>1&&e.jsx("div",{className:"flex flex-wrap gap-2 mb-6","aria-label":"Category filters",children:a.map(t=>e.jsx("button",{onClick:()=>n(t),className:`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 capitalize select-none cursor-pointer ${o===t?"bg-primary text-primary-foreground border-primary shadow-sm scale-105":"bg-muted/10 text-muted-foreground border-border/80 hover:border-muted-foreground hover:bg-muted/20"}`,children:t.replace(/-/g," ")},t))}),e.jsx("div",{className:"space-y-6",children:p.length===0?e.jsx("p",{className:"text-muted-foreground text-center py-8",children:"No articles found in this category."}):p.map(t=>e.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch sm:items-center p-4 border border-border/50 hover:border-border rounded-xl bg-card/25 hover:bg-muted/15 shadow-sm hover:shadow transition-all duration-300 cursor-pointer overflow-hidden",children:[e.jsx("div",{className:"w-full h-36 sm:w-24 sm:h-20 md:w-32 md:h-24 rounded-lg overflow-hidden shrink-0 border border-border/30 bg-muted/10 relative",children:t.image?e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-muted-foreground/30 text-2xl font-bold uppercase select-none",children:t.category.substring(0,2)})}),e.jsxs("div",{className:"flex-1 min-w-0 flex flex-col justify-between py-0.5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5 flex-wrap",children:[e.jsx("span",{className:"text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded",children:t.category.replace(/-/g," ")}),e.jsxs("span",{className:"text-xs text-muted-foreground flex items-center gap-1",children:[e.jsx(Q,{className:"size-3"}),t.formattedDate]}),e.jsx("span",{className:"text-muted-foreground/30 text-[10px]",children:"•"}),e.jsxs("span",{className:"text-xs text-muted-foreground flex items-center gap-1",children:[e.jsx(X,{className:"size-3"}),t.readingTime]})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2 pr-4",children:t.title})]}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-2",children:t.description})]}),e.jsx("div",{className:"self-end sm:self-auto shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors duration-200 pl-2 mt-2 sm:mt-0",children:e.jsx(W,{className:"size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})})]},t.id))})]})}export{re as default};
