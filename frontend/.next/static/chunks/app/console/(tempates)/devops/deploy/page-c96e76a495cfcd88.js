(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1086],{93950:function(e,t,a){Promise.resolve().then(a.bind(a,36365))},57818:function(e,t,a){"use strict";a.d(t,{default:function(){return s.a}});var l=a(50551),s=a.n(l)},16463:function(e,t,a){"use strict";var l=a(71169);a.o(l,"usePathname")&&a.d(t,{usePathname:function(){return l.usePathname}}),a.o(l,"useRouter")&&a.d(t,{useRouter:function(){return l.useRouter}}),a.o(l,"useSearchParams")&&a.d(t,{useSearchParams:function(){return l.useSearchParams}})},50551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let l=a(99920);a(57437),a(2265);let s=l._(a(40148));function n(e,t){var a;let l={loading:e=>{let{error:t,isLoading:a,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let n={...l,...t};return(0,s.default)({...n,modules:null==(a=n.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let l=a(55592);function s(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return a}},40148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let l=a(57437),s=a(2265),n=a(10912),o=a(61481);function r(e){return{default:e&&"default"in e?e.default:e}}let d={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},i=function(e){let t={...d,...e},a=(0,s.lazy)(()=>t.loader().then(r)),i=t.loading;function c(e){let r=i?(0,l.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,d=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(a,{...e})]}):(0,l.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(a,{...e})});return(0,l.jsx)(s.Suspense,{fallback:r,children:d})}return c.displayName="LoadableComponent",c}},61481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let l=a(57437);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let{getExpectedRequestStore:s}=a(58512),n=s(),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},36365:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var l=a(57437),s=a(16463),n=a(42126),o=a(2265),r=a(57818),d=a(95956),i=a(20357);let c=(0,r.default)(()=>Promise.all([a.e(5784),a.e(1262)]).then(a.t.bind(a,73070,23)).then(e=>e.LazyLog),{loadableGenerated:{webpack:()=>[73070]},ssr:!1});function u(){let e=(0,s.useSearchParams)().get("ProjectID");(0,s.useRouter)();let[t,a]=(0,o.useState)("Project Name"),[r,u]=(0,o.useState)(""),[p,m]=(0,o.useState)(80),[x,h]=(0,o.useState)("static"),[v,b]=(0,o.useState)("18.06"),[g,f]=(0,o.useState)(""),[j,k]=(0,o.useState)(""),[y,N]=(0,o.useState)(""),[w,S]=(0,o.useState)(""),[_,P]=(0,o.useState)(""),[C,L]=(0,o.useState)(""),R=parseInt(p),[I,A]=(0,o.useState)([]),[O,z]=(0,o.useState)([]),[B,E]=(0,o.useState)([]),[T,M]=(0,o.useState)([]),[D,U]=(0,o.useState)([]);async function W(){M(!0);try{await n.Z.get("".concat(i.env.NEXT_PUBLIC_API_URL,"/v1/devops/project-details/").concat(e),{headers:{"Content-Type":"application/json",Authorization:"".concat(localStorage.getItem("token"))}}).then(e=>{var t,l,s,n,o,r,i,c,p,x,v;U(e.data),a(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.name),u(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.label),m(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.target_port),h(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.runtime),f(null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.project_version),L(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.icon),k(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.framework),N(null==e?void 0:null===(c=e.data)||void 0===c?void 0:c.install_command),P(null==e?void 0:null===(p=e.data)||void 0===p?void 0:p.build_command),S(null==e?void 0:null===(x=e.data)||void 0===x?void 0:x.start_command),M(!1),(0,d.Am)(null==e?void 0:null===(v=e.data)||void 0===v?void 0:v.message,{type:"success"})}).catch(e=>{var t,a;console.log(e),M(!1),(0,d.Am)(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message,{type:"error"})})}catch(e){setTimeout(()=>{var t,a;M(!1),(0,d.Am)(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message,{type:"error"})},1e3)}}let[X,q]=(0,o.useState)(!1);async function F(){q(!0),await n.Z.post("".concat(i.env.NEXT_PUBLIC_API_URL,"/v1/devops/build-project"),{project_id:e,name:t,label:r,target_port:R,runtime:x,version:v,framework:j,start_command:w,build_command:_,install_command:y,icon:C},{headers:{Authorization:"".concat(localStorage.getItem("token"))}}).then(e=>{var t;q(!1),(0,d.Am)(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message,{type:"success"})}).catch(e=>{var t,a;console.log(e),q(!1),(0,d.Am)(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message,{type:"error"})})}let[G,J]=(0,o.useState)(!1);async function Z(){J(!0),await n.Z.post("".concat(i.env.NEXT_PUBLIC_API_URL,"/v1/devops/rebuild-project"),{project_id:e},{headers:{Authorization:"".concat(localStorage.getItem("token"))}}).then(e=>{var t;J(!1),(0,d.Am)(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message,{type:"success"})}).catch(e=>{var t,a;console.log(e),J(!1),(0,d.Am)(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message,{type:"error"})})}(0,o.useEffect)(()=>{"static"==x?A([]):"php"==x?A(["8.0","7.4"]):"nodejs"==x?A(["16.0","15.0","14.0"]):"deno"==x?A(["1.10","1.9"]):"bun"==x?A(["1.0"]):"python"==x?A(["3.9","3.8"]):"java"==x?A(["16","15","14"]):"c-sharp"==x?A(["5.0"]):"go"==x?A(["1.16","1.15","1.14"]):"rust"==x?A(["1.51","1.50","1.49","1.48","1.47","1.46","1.45","1.44"]):"dart"==x?A(["2.12","2.11","2.10","2.9"]):"kotlin"==x?A(["1.5","1.4"]):"lua"==x?A(["5.4","5.3"]):"perl"==x?A(["5.34","5.32","5.30","5.28"]):"cpp"==x&&A(["17","14","11","10"]),"static"==x?z([]):"php"==x?z(["laravel","symfony","codeigniter","cakephp"]):"nodejs"==x?z(["expressjs","nextjs","nuxtjs","gatsby","svelte","reactjs","vue","angular","ember","meteor","preact","sapper","stencil"]):"deno"==x?z(["oak","abc","deno"]):"bun"==x?z(["bun"]):"python"==x?z(["django","flask","fastapi"]):"java"==x?z(["spring","struts","play"]):"c-sharp"==x?z(["asp.net","blazor","nancy"]):"go"==x?z(["gin","beego","echo"]):"rust"==x?z(["actix","rocket","nickel"]):"dart"==x?z(["aqueduct","angel","shelf"]):"kotlin"==x?z(["ktor","javalin","spark"]):"lua"==x?z(["lapis","sailor","orion"]):"perl"==x?z(["dancer","mojolicious","catalyst"]):"cpp"==x&&z(["poco","cppcms","wt"]),"static"==x?E([]):"php"==x?E(["php index.php"]):"nodejs"==x?E(["node index.js"]):"deno"==x?E(["deno run index.js"]):"bun"==x?E(["bun run"]):"python"==x?E(["python main.py"]):"java"==x?E(["java -jar app.jar"]):"c-sharp"==x?E(["dotnet run"]):"go"==x?E(["go build main.go && ./main"]):"rust"==x?E(["cargo run"]):"dart"==x?E(["dart run"]):"kotlin"==x?E(["kotlin run"]):"lua"==x?E(["lua run"]):"perl"==x?E(["perl run"]):"cpp"==x&&E(["cpp run"])},[x]);let[V,H]=(0,o.useState)([{id:"sqllite",name:"SQL lite",selected:!1},{id:"bash",name:"bash",selected:!1},{id:"nginx",name:"nginx",selected:!1},{id:"docker",name:"docker",selected:!1},{id:"git",name:"git",selected:!1},{id:"vim",name:"vim",selected:!1},{id:"mariadb",name:"mariadb",selected:!1},{id:"ffmpeg",name:"ffmpeg",selected:!1},{id:"openssl",name:"openssl",selected:!1},{id:"zip",name:"zip",selected:!1},{id:"nano",name:"nano",selected:!1}]),K=e=>{if(e>=0&&e<V.length){let t=[...V];t[e].selected=!t[e].selected,H(t)}},[Q,Y]=(0,o.useState)([]),$="wss://api.daucu.com/v1/site/logs-realtime/".concat(r,"/").concat(r);return(0,o.useEffect)(()=>{let e=new WebSocket($);e.onopen=()=>{console.log("WebSocket connection opened")},e.onmessage=e=>{console.log(e.data),Y(t=>[...t,e.data])},e.onclose=()=>{console.log("WebSocket connection closed")}},[r]),(0,o.useEffect)(()=>{W()},[]),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"flex w-auto flex-col h-auto absolute inset-0 p-2 dark:bg-slate-900",children:(0,l.jsx)("blockquote",{className:"bg-white border-l-[5px] border-blue-600 dark:border-gray-500 dark:bg-gray-900 relative h-full",children:(0,l.jsx)("div",{className:"h-full relative dark:bg-slate-900 p-2 flex flex-col justify-between",children:(0,l.jsx)("div",{className:"h-full",children:T?(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"animate-pulse flex space-x-4",children:(0,l.jsxs)("div",{className:"flex-1 space-y-4 py-1",children:[(0,l.jsx)("div",{className:"skeleton h-4 bg-slate-400 rounded w-3/4"}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("div",{className:"skeleton h-4 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"skeleton h-4 bg-slate-400 rounded w-5/6"})]})]})})}):(0,l.jsx)("div",{className:"flex w-auto h-full flex-col",children:(0,l.jsx)("div",{className:"h-full dark:bg-slate-900 inset-x-0 bottom-10",children:(0,l.jsxs)("div",{className:"grid grid-cols-5 gap-4 h-full",children:[(0,l.jsx)("div",{className:"dark:bg-slate-800 border-t-[5px] bg-slate-200 dark:border-gray-500 rounded-none border-blue-600 col-span-1 min-w-[100px] h-auto overflow-y-scroll relative",children:(0,l.jsxs)("ul",{className:"menu rounded-md h-auto relative",children:[(0,l.jsx)("span",{className:"text-xs dark:text-gray-400 text-black mt-2",children:"Name"}),(0,l.jsx)("input",{type:"text",placeholder:"Project Name",value:t,onChange:e=>{a(e.target.value)},className:"input w-full rounded-none input-sm input-bordered mt-1 dark:bg-gray-900 bg-white dark:text-gray-400 text-black"}),(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Runtime"}),(0,l.jsxs)("select",{className:"select select-sm select-bordered w-full rounded-none input-sm active mt-1 bg-white dark:bg-gray-900 dark:text-gray-400 text-black",value:x,onChange:e=>{h(e.target.value)},children:[(0,l.jsx)("option",{value:"static",children:"Static"}),(0,l.jsx)("option",{value:"php",children:"PHP"}),(0,l.jsx)("option",{value:"nodejs",children:"Node JS"}),(0,l.jsx)("option",{value:"deno",children:"Deno"}),(0,l.jsx)("option",{value:"bun",children:"bun JS"}),(0,l.jsx)("option",{value:"python",children:"Python"}),(0,l.jsx)("option",{value:"java",children:"Java"}),(0,l.jsx)("option",{value:"python",children:"Python"}),(0,l.jsx)("option",{value:"c-sharp",children:"C#"}),(0,l.jsx)("option",{value:"go",children:"GO"}),(0,l.jsx)("option",{value:"rust",children:"Rust"}),(0,l.jsx)("option",{value:"dart",children:"Dart"}),(0,l.jsx)("option",{value:"kotlin",children:"Kotlin"}),(0,l.jsx)("option",{value:"lua",children:"Lua"}),(0,l.jsx)("option",{value:"perl",children:"Perl"}),(0,l.jsx)("option",{value:"cpp",children:"C++"})]}),(0,l.jsxs)("div",{className:"flex mt-2 h-auto space-x-2",children:[(0,l.jsxs)("div",{className:"w-[50%]",children:[(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Runtime Version"}),(0,l.jsxs)("select",{className:"select select-sm select-bordered w-full rounded-none input-sm active mt-1 bg-white dark:bg-slate-900 dark:text-gray-400 text-black",onChange:e=>{b(e.target.value)},value:v,children:[(0,l.jsx)("option",{children:"None"}),I.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("div",{className:"w-[50%]",children:[(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Target Port"}),(0,l.jsx)("input",{type:"number",placeholder:"80",value:p,onChange:e=>{m(e.target.value)},className:"input w-full rounded-none input-sm input-bordered mt-1 dark:bg-gray-900 bg-white dark:text-gray-400 text-black"})]})]}),(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Framework"}),(0,l.jsxs)("select",{className:"select select-sm select-bordered w-full rounded-none input-sm active mt-1 bg-white dark:bg-slate-900 dark:text-gray-400 text-black",onChange:e=>{k(e.target.value)},value:j,children:[(0,l.jsx)("option",{children:"None"}),O.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]}),(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Install Command"}),(0,l.jsx)("input",{placeholder:"Install Command",value:y,onChange:e=>{N(e.target.value)},className:"input input-sm w-full rounded-none mt-1 dark:bg-gray-900 bg-white dark:text-gray-400 text-black"}),(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Build Command"}),(0,l.jsx)("input",{placeholder:"Build Command",value:_,onChange:e=>{P(e.target.value)},className:"input input-sm w-full rounded-none mt-1 dark:bg-gray-900 bg-white dark:text-gray-400 text-black"}),(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Start Command"}),(0,l.jsx)("input",{placeholder:"Start Command",value:w,onChange:e=>{S(e.target.value)},className:"input input-sm w-full rounded-none mt-1 dark:bg-gray-900 bg-white dark:text-gray-400 text-black"}),(0,l.jsx)("span",{className:"mt-4 text-xs dark:text-gray-400 text-black",children:"Packages"}),(0,l.jsxs)("div",{id:"dropdownSearch",className:"z-10 bg-white rounded-none h-auto relative overflow-y-scroll w-full dark:bg-gray-700 mt-2",children:[(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsx)("label",{for:"input-group-search",className:"sr-only",children:"Search"}),(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)("input",{type:"text",id:"input-group-search",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input input-sm rounded-none",placeholder:"Search packages"})})]}),(0,l.jsx)("ul",{className:"h-auto relative px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownSearchButton",children:V&&V.map((e,t)=>(0,l.jsxs)("label",{className:"cursor-pointer label justify-start flex space-x-4",children:[(0,l.jsx)("input",{type:"checkbox",checked:e.selected,onChange:()=>K(t),className:"checkbox checkbox-success checkbox-sm rounded-[5px]"}),(0,l.jsx)("span",{className:"label-text text-slate-800 dark:text-slate-200",children:e.name})]}))})]})]})}),(0,l.jsxs)("div",{className:"dark:bg-slate-800 bg-slate-200 border-blue-600 w-full h-auto p-2 rounded-none border-t-[5px] dark:border-gray-500 col-span-4",children:[(0,l.jsxs)("div",{className:"collapse collapse-arrow join-item border dark:border-base-300 border-blue-200 bg-white dark:bg-slate-900 rounded-none",children:[(0,l.jsx)("input",{type:"radio",name:"my-accordion-1",checked:"checked"}),(0,l.jsxs)("div",{className:"collapse-title text-xl font-medium dark:text-gray-400 text-black",children:["Name: ",t]}),(0,l.jsx)("div",{className:"collapse-content flex flex-col dark:text-gray-400 text-black",children:(0,l.jsx)("div",{className:"flex space-x-4 w-full",children:(0,l.jsxs)("div",{className:"flex justify-between w-full",children:[(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("span",{children:["Project Version:"," ",(0,l.jsxs)("span",{className:"text-blue-500 hover:underline cursor-pointer font-bold",children:["#",g]})]})}),(0,l.jsxs)("div",{className:"flex space-x-2",children:[(0,l.jsx)("button",{className:"btn btn-sm disabled:bg-slate-600 disabled:text-slate-200 rounded-md capitalize",disabled:G,onClick:()=>{Z()},children:G?"Redeploying...":"Redeploy"}),(0,l.jsxs)("div",{className:"join",children:[(0,l.jsx)("select",{className:"select join-item select-sm select-success bg-success text-black rounded-md",children:(0,l.jsx)("option",{selected:!0,children:"Daucu Cloud Run"})}),(0,l.jsx)("div",{className:"indicator",children:(0,l.jsx)("button",{className:"btn join-item btn-success btn-sm disabled:bg-slate-600 disabled:text-slate-200 rounded-md capitalize",disabled:X,onClick:()=>{F()},children:X?"Deploying...":"Deploy"})})]})]})]})})})]}),(0,l.jsxs)("div",{className:"collapse collapse-arrow join-item border dark:border-base-300 border-blue-200 bg-white dark:bg-slate-900 rounded-none",children:[(0,l.jsx)("input",{type:"radio",name:"my-accordion-2",checked:"checked"}),(0,l.jsx)("div",{className:"collapse-title text-xl font-medium dark:text-gray-400 text-black",children:"Latest Build Logs"}),(0,l.jsx)("div",{className:"collapse-content flex flex-col dark:text-gray-400 text-black",children:(0,l.jsx)("div",{className:"flex space-x-4 w-full",children:(0,l.jsx)("div",{className:"w-full h-auto min-h-[65vh] mt-2 rounded-none",children:(0,l.jsx)(c,{enableSearch:!0,selectableLines:!0,text:null!=Q?Q:[],follow:!0,style:{overflowY:"hidden",overflowX:"scroll",backgroundColor:"#222222",userSelect:"text"}})})})})]})]})]})})})})})})})})}}},function(e){e.O(0,[147,5956,2971,7023,1744],function(){return e(e.s=93950)}),_N_E=e.O()}]);