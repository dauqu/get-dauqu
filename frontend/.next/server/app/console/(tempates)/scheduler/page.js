(()=>{var e={};e.id=715,e.ids=[715],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},87529:()=>{},50307:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>o,routeModule:()=>x,tree:()=>c}),s(32719),s(79750),s(83646),s(49809),s(77498),s(35866);var r=s(23191),a=s(88716),l=s(37922),n=s.n(l),d=s(95231),i={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>d[e]);s.d(t,i);let c=["",{children:["console",{children:["(tempates)",{children:["scheduler",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,32719)),"C:\\Users\\Harsh singh\\Documents\\daucu\\self-hosted\\daucu\\frontend\\src\\app\\console\\(tempates)\\scheduler\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,79750)),"C:\\Users\\Harsh singh\\Documents\\daucu\\self-hosted\\daucu\\frontend\\src\\app\\console\\(tempates)\\layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,83646)),"C:\\Users\\Harsh singh\\Documents\\daucu\\self-hosted\\daucu\\frontend\\src\\app\\console\\layout.jsx"],loading:[()=>Promise.resolve().then(s.bind(s,49809)),"C:\\Users\\Harsh singh\\Documents\\daucu\\self-hosted\\daucu\\frontend\\src\\app\\console\\loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,77498)),"C:\\Users\\Harsh singh\\Documents\\daucu\\self-hosted\\daucu\\frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["C:\\Users\\Harsh singh\\Documents\\daucu\\self-hosted\\daucu\\frontend\\src\\app\\console\\(tempates)\\scheduler\\page.jsx"],u="/console/(tempates)/scheduler/page",h={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/console/(tempates)/scheduler/page",pathname:"/console/scheduler",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},58479:(e,t,s)=>{Promise.resolve().then(s.bind(s,75328))},35047:(e,t,s)=>{"use strict";var r=s(77389);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}})},75328:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(10326),a=s(17577),l=s(24490),n=s(31190),d=s(35047);function i(e){let t=(0,d.useRouter)(),[s,i]=(0,a.useState)(!1),[c,o]=(0,a.useState)([]);async function u(){i(!0);try{await l.Z.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/scheduler/get-jobs`,{headers:{"Content-Type":"application/json",Authorization:`${localStorage.getItem("token")}`}}).then(e=>{console.log(e.data),o(e.data),i(!1)}).catch(e=>{console.log(e),i(!1),(0,n.Am)(e.response.data.message,{type:"error"})})}catch(e){setTimeout(()=>{i(!1),(0,n.Am)(e.response?.data?.message,{type:"error"})},1e3)}}let[h,x]=(0,a.useState)(!1),[p,b]=(0,a.useState)(""),[m,g]=(0,a.useState)("*/5 * * * *"),[j,k]=(0,a.useState)("dauqu/date"),[f,y]=(0,a.useState)(!1);async function v(){y(!0),await l.Z.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/scheduler/new-job`,{name:p,schedule:"*/5 * * * *",image:j},{headers:{Authorization:`${localStorage.getItem("token")}`}}).then(e=>{y(!1),(0,n.Am)(e.data.message,{type:"success"}),x(!1),u()}).catch(e=>{console.log(e),y(!1),(0,n.Am)(e.response.data.message,{type:"error"}),u()})}let[w,N]=(0,a.useState)(!1),[C,P]=(0,a.useState)(null);async function _(e){await l.Z.delete(`${process.env.NEXT_PUBLIC_API_URL}/v1/scheduler/delete-job/${e}`,{headers:{Authorization:`${localStorage.getItem("token")}`}}).then(e=>{(0,n.Am)(e.data.message,{type:"success"}),u()}).catch(e=>{console.log(e),(0,n.Am)(e.response.data.message,{type:"error"}),u()})}return(0,r.jsxs)("div",{children:[r.jsx("div",{className:"flex w-auto h-full flex-col",children:r.jsx("blockquote",{className:"bg-gray-100 border-l-[5px] border-blue-600 dark:border-gray-500 dark:bg-gray-800",children:(0,r.jsxs)("div",{className:"h-auto dark:bg-slate-900 p-3 space-y-2",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-between items-start",children:[r.jsx("h1",{className:"text-xl font-bold dark:text-gray-400 text-black",children:"Daucu Scheduler"}),r.jsx("span",{className:"text dark:text-gray-400 text-black text-xs",children:"Daucu Scheduler is a powerful task scheduling and automation tool designed to streamline and optimize business processes. With Daucu Scheduler, organizations can efficiently manage their workflows, ensuring tasks are executed at the right time and with precision."})]}),r.jsx("div",{className:"",children:r.jsx("button",{className:"btn btn-sm rounded-sm no-animation dark:btn-info capitalize",onClick:()=>{x(!0)},children:"New Jobs"})}),r.jsx("div",{className:"max-h-[75vh] overflow-y-scroll",children:s?r.jsx("div",{className:"animate-pulse flex space-x-4",children:(0,r.jsxs)("div",{className:"flex-1 space-y-4 py-1",children:[r.jsx("div",{className:"h-4 bg-slate-400 rounded w-3/4"}),(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx("div",{className:"h-4 bg-slate-400 rounded"}),r.jsx("div",{className:"h-4 bg-slate-400 rounded w-5/6"})]})]})}):r.jsx("div",{children:null===c||c?.length===0?r.jsx("div",{className:"h-[20vh] w-full flex justify-center items-center",children:(0,r.jsxs)("p",{className:"text-md font-bold dark:text-gray-400 text-black",children:["No cron jobs found. Create a new cron job to get started."," "]})}):r.jsx("div",{children:r.jsx("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"table table-sm",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{className:"dark:bg-slate-700 dark:text-gray-400 text-black bg-slate-200",children:[r.jsx("th",{}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Images"}),r.jsx("th",{children:"Schedule"}),r.jsx("th",{children:"Created AT"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:c&&null!==c&&c?.map((e,s)=>r.jsxs("tr",{className:"dark:bg-slate-700 dark:text-gray-400 text-black bg-slate-200",children:[r.jsx("th",{children:"1"}),r.jsx("td",{children:e?.name}),r.jsx("td",{children:e?.image}),r.jsxs("td",{children:[e?.schedule,r.jsx("br",{})]}),r.jsx("td",{children:e?.created_at}),r.jsxs("td",{className:"space-x-1",children:[r.jsx("button",{className:"btn btn-xs rounded-none btn-error no-animation",disabled:w===e?.label,onClick:()=>{P(e?.label),_(e?.label)},children:"Delete"}),r.jsx("button",{className:"btn btn-xs rounded-none no-animation",onClick:()=>{t.push(`/console/scheduler/${e?.label}`)},children:"View →"})]})]},s))})]})})})})})]})})}),r.jsx("dialog",{id:"my_modal_4",className:`modal rounded-none ${h?"modal-open":""}`,children:(0,r.jsxs)("form",{method:"dialog",className:"modal-box w-11/12 max-w-5xl rounded-none dark:bg-slate-700 bg-slate-100",children:[r.jsx("h3",{className:"font-bold text-lg dark:text-gray-400 text-black",children:"Daucu Scheduler"}),(0,r.jsxs)("div",{className:"py-4",children:[(0,r.jsxs)("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 dark:text-slate-400 text-sm",children:"Name"}),r.jsx("input",{type:"text",className:"input input-sm input-bordered mt-1 block w-full rounded-none bg-white dark:bg-slate-800 dark:text-white text-black",placeholder:"Job Name",value:p,onChange:e=>b(e.target.value)})]}),(0,r.jsxs)("label",{className:"block mt-2",children:[r.jsx("span",{className:"text-gray-700 dark:text-slate-400 text-sm",children:"Select Time Interval"}),(0,r.jsxs)("ul",{class:"grid w-full gap-2 md:grid-cols-5 mt-1",children:[(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"1-minute",name:"time",value:"*/1 * * * *",class:"hidden peer",required:!0,onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"1-minute",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"1 minute"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"5-minute",name:"time",value:"*/5 * * * *",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"5-minute",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"5 minutes"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"10-minute",name:"time",value:"*/10 * * * *",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"10-minute",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"10 minutes"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"15-minute",name:"time",value:"*/15 * * * *",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"15-minute",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"15 minutes"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"30-minute",name:"time",value:"*/30 * * * *",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"30-minute",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"30 minutes"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"1-hour",name:"time",value:"0 * * * *",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"1-hour",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"1 hour"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"1-day",name:"time",value:"0 0 * * *",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"1-day",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"1 day"})})})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"1-week",name:"time",value:"0 0 * * 0",class:"hidden peer",onChange:e=>{g(e.target.value)}}),r.jsx("label",{for:"1-week",class:"inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 dark:border-slate-800 rounded-none cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:bg-slate-800 dark:text-white",children:r.jsx("div",{class:"block",children:r.jsx("div",{class:"w-full text-base",children:"1 week"})})})]})]})]}),(0,r.jsxs)("label",{className:"block mt-2",children:[r.jsx("span",{className:"text-gray-700 dark:text-slate-400 text-sm",children:"Schedule"}),r.jsx("input",{type:"text",className:"input input-sm input-bordered mt-1 block w-full rounded-none bg-white dark:bg-slate-800 dark:text-white text-black",placeholder:"*/5 * * * *",value:m,onChange:e=>{g(e.target.value)}})]}),(0,r.jsxs)("label",{className:"block mt-5",children:[r.jsx("span",{className:"text-gray-700 dark:text-slate-400 text-sm",children:"Public Image Link"}),r.jsx("input",{type:"text",className:"input input-sm input-bordered mt-1 block w-full rounded-none bg-white dark:bg-slate-800 dark:text-white text-black",placeholder:"https://www.google.com/",value:j,onChange:e=>k(e.target.value)})]})]}),(0,r.jsxs)("div",{className:"modal-action",children:[r.jsx("button",{className:"btn btn-sm rounded-sm capitalize",onClick:()=>x(!1),children:"Close"}),r.jsx("button",{className:"btn btn-sm rounded-sm btn-success capitalize",onClick:()=>{v()},disabled:f,children:f?"Creating Job...":"Create Job"})]})]})})]})}},32719:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>d});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\Harsh singh\Documents\daucu\self-hosted\daucu\frontend\src\app\console\(tempates)\scheduler\page.jsx`),{__esModule:l,$$typeof:n}=a;a.default;let d=(0,r.createProxy)(String.raw`C:\Users\Harsh singh\Documents\daucu\self-hosted\daucu\frontend\src\app\console\(tempates)\scheduler\page.jsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,908,621,434,490,686],()=>s(50307));module.exports=r})();