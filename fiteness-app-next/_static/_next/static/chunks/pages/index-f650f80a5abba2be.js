(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},2538:function(e,t,n){"use strict";var c=n(5893),i=n(5005);let a=e=>{let{label:t,gif:n,buttonLabel:a="Read More",onClick:s}=e;return(0,c.jsxs)("div",{className:"p-4 home-container text-center m-0",style:{width:"fit-content"},children:[(0,c.jsx)("h5",{children:t}),(0,c.jsx)("img",{src:n,alt:"...",width:"100%"}),(0,c.jsx)(i.Z,{variant:"outline-light",className:"mt-4",onClick:s,children:a})]})};t.Z=a},4369:function(e,t,n){"use strict";n.r(t);var c=n(5893),i=n(7294),a=n(1664),s=n.n(a),r=n(1163),o=n(2393),l=n(2538);let u=()=>{let[e,t]=(0,i.useState)([]),n=(0,r.useRouter)();return(0,i.useEffect)(()=>{(async function(){try{let e=await (0,o.mB)();t(e.data)}catch(n){console.log(n)}})()},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"row fluid p-4 home-container mt-3 mb-3 m-auto",style:{maxWidth:"70rem"},children:[(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aspernatur ut alias quidem officiis repudiandae unde earum architecto consequuntur ex cupiditate eum omnis rerum sunt nisi aliquam eius, magnam maiores!"}),(0,c.jsx)("p",{children:"Create account and you will be able to add to favorites your exercises and you can create your own collection of exercises as a daily trainning."}),(0,c.jsx)(s(),{href:"/login",children:"Create Account"})]}),(0,c.jsx)("div",{className:"col-md-6 d-flex justify-content-center align-items-center",children:(0,c.jsx)("img",{src:"http://d205bpvrqc9yn1.cloudfront.net/0015.gif",alt:"home exercise",width:"100%"})})]}),(0,c.jsxs)("h4",{className:"text-center",children:["Lots of exercises that can be filtered by"," "]}),(0,c.jsx)("div",{className:"d-flex flex-wrap gap-3 justify-content-center",children:e.map(e=>(0,c.jsx)(l.Z,{label:e.label,gif:e.gif,onClick:()=>n.push("/details/".concat(e.key,"/").concat(e.label))},e.key))})]})};t.default=u},2393:function(e,t,n){"use strict";n.d(t,{VI:function(){return s},mB:function(){return r},zC:function(){return o}});var c=n(196);let i=c.ZP.create({baseURL:"http://localhost:5000",headers:{"content-type":"text/json"}}),a=e=>{let t=Object.keys(e).map(t=>"".concat(t,"=").concat(e[t]));return"?".concat(t.join("&"))},s=e=>{let t=a(e);return i.get("/exercises".concat(t))},r=e=>i.get("/filter-terms?category=".concat(e||"all")),o=e=>(console.log(e),i.get("/".concat(e)))}},function(e){e.O(0,[196,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);