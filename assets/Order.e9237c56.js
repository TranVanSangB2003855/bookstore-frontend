import{_ as w,u as l,J as b,r as S,o as u,c as h,a as t,F as C,i as O,k as p,v,t as c,b as f,w as g,h as y,p as k,g as x}from"./index.f87bff00.js";import{O as T}from"./order.service.334fff97.js";const q={data(){const e=l().order.products,o=l().order,n=l();return{books:e,order:o,userStore:n}},watch:{books(e,o){console.log(this.order),this.order.totalPriceOrderComputer()}},methods:{async addOrder(){var e=new Date,o=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),n=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),_=o+" "+n;await T.addOrder({address:this.order.address,products:this.order.products,totalPrice:this.userStore.totalPriceOrderComputer,time:_,status:!1,user:this.userStore.user.id}),alert("\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng! Xem chi ti\u1EBFt \u0111\u01A1n h\xE0ng \u0111\xE3 \u0111\u1EB7t trong T\xE0i Kho\u1EA3n -> L\u1ECBch s\u1EED mua h\xE0ng."),this.order.products.forEach(i=>{this.userStore.removeCart(i.book_id)}),this.userStore.setUserInfo(await b.verifyToken()),this.$router.push({name:"homepage"})},goDetailItem(e){this.$router.push({name:"book.detail",params:{id:e}})},showCart(){this.order.totalPrice||this.$router.push({name:"cart"})},removeOrder(e){l().removeOrder(e)},formatter(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},mounted(){this.showCart()}},r=e=>(k("data-v-4d01eaf3"),e=e(),x(),e),V={id:"bg-white",class:"bg-white article cach radius"},N={id:"flex-donhang"},I={id:"chitiet"},P=r(()=>t("h1",null,"\u0110\u1EB6T H\xC0NG",-1)),D={id:"details-order"},H=r(()=>t("thead",null,[t("tr",null,[t("td",null,[t("b",null,"H\xECnh SP")]),t("td",null,[t("b",null,"T\xEAn SP")]),t("td",null,[t("b",null,"S\u1ED1 L\u01B0\u1EE3ng")]),t("td",null,[t("b",null,"Gi\xE1")]),t("td",null,[t("b",null,"Th\xE0nh Ti\u1EC1n")]),t("td")])],-1)),U={id:"details-order-body"},F=["src"],L={style:{"text-align":"left"}},$={class:"quantity-product"},B=["onClick"],M=r(()=>t("button",null,[t("i",{class:"fa-solid fa-minus"})],-1)),A=[M],E=["onUpdate:modelValue"],G=["onClick"],J=r(()=>t("button",null,[t("i",{class:"fa-solid fa-plus"})],-1)),K=[J],X=["onClick"],Y={id:"hoadon",class:"radius"},j=r(()=>t("h1",{class:"radius bg-white"},"H\xD3A \u0110\u01A0N",-1)),z={class:"row"},Q=r(()=>t("div",{class:"col-3"}," \u0110\u1ECBa ch\u1EC9 nh\u1EADn: ",-1)),R={class:"col-9"},W={class:"row"},Z=r(()=>t("div",{class:"col-3"}," T\u1ED5ng gi\xE1 tr\u1ECB: ",-1)),tt={class:"col-9"},et={class:"row"},st=r(()=>t("br",null,null,-1)),ot=r(()=>t("div",{class:"row"},[t("h5",null,[t("u",null,[t("b",null,"L\u01B0u \xFD:")]),y(" Thanh to\xE1n b\u1EB1ng ti\u1EC1n m\u1EB7t v\xE0 t\u1EF1 thanh to\xE1n ph\xED ship khi nh\u1EADn h\xE0ng.")])],-1));function rt(e,o,n,_,i,d){const m=S("router-link");return u(),h("div",V,[t("div",N,[t("div",I,[P,t("table",D,[H,t("tbody",U,[(u(!0),h(C,null,O(i.books,(s,dt)=>(u(),h("tr",null,[t("td",null,[f(m,{to:{name:"book.detail",params:{id:s.book_id}}},{default:g(()=>[t("img",{src:s.image,class:"round-figure"},null,8,F)]),_:2},1032,["to"])]),t("td",L,[f(m,{style:{color:"#000"},to:{name:"book.detail",params:{id:s.book_id}}},{default:g(()=>[y(c(s.title),1)]),_:2},1032,["to"])]),t("td",null,[t("div",$,[t("div",{class:"quantity-product-form",onClick:a=>s.quantity>1?s.quantity--:""},A,8,B),p(t("input",{type:"text",class:"quantity","onUpdate:modelValue":a=>s.quantity=a},null,8,E),[[v,s.quantity]]),t("div",{class:"quantity-product-form",onClick:a=>s.quantity++},K,8,G)])]),t("td",null,c(d.formatter(s.price)),1),t("td",null,c(d.formatter(s.quantity*s.price)),1),t("td",null,[t("i",{onClick:a=>d.removeOrder(s.book_id),class:"fa-solid fa-trash-can"},null,8,X)])]))),256))])])]),t("div",Y,[j,t("div",z,[Q,t("div",R,[p(t("textarea",{"onUpdate:modelValue":o[0]||(o[0]=s=>this.order.address=s),cols:"44",rows:"2"},null,512),[[v,this.order.address]])])]),t("div",W,[Z,t("div",tt,c(d.formatter(i.userStore.totalPriceOrderComputer)),1)]),t("div",et,[t("input",{id:"sm-donhang",onClick:o[1]||(o[1]=s=>d.addOrder()),class:"radius",type:"submit",value:"\u0110\u1EB7t H\xE0ng"})]),st,ot])])])}const at=w(q,[["render",rt],["__scopeId","data-v-4d01eaf3"]]);export{at as default};
