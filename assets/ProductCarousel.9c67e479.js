import{_ as y,r as b,o,c as a,a as t,t as r,b as g,w as C,e as _,F as u,i as h,h as x,n as k,p as f,g as S}from"./index.2b10c86f.js";const w={props:{loaiSach:{type:Array,required:!0},title:{type:String},id:{type:String,required:!0}},data(){return{idCarousel:"#myCarousel"+this.id}},methods:{goDetailItem(e){this.$router.push({name:"book.detail",params:{id:e}})},formatter(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}}},i=e=>(f("data-v-8b093989"),e=e(),S(),e),N={class:"box bg-white radius cach"},I={key:0,class:"container-fluid"},V={class:"row"},B={class:"col-lg-12"},D=["id"],P={key:0,class:"xem-them"},T={class:"carousel-inner"},q={class:"row"},F=["onClick"],z={class:"img-box"},A=["src"],E={class:"thumb-content"},L=["title"],X={class:"item-price"},j=["data-bs-target"],G=i(()=>t("span",{class:"carousel-control-prev-icon icon-pre","aria-hidden":"true"},null,-1)),H=i(()=>t("span",{class:"visually-hidden"},"Previous",-1)),J=[G,H],K=["data-bs-target"],M=i(()=>t("span",{class:"carousel-control-next-icon icon-next","aria-hidden":"true"},null,-1)),O=i(()=>t("span",{class:"visually-hidden"},"Next",-1)),Q=[M,O];function R(e,U,s,W,n,l){const m=b("router-link");return o(),a("div",N,[t("h2",null,r(s.title?s.title:s.loaiSach[0][0].category[0]),1),s.loaiSach[0]?(o(),a("div",I,[t("div",V,[t("div",B,[t("div",{id:"myCarousel"+s.id,class:"carousel slide","data-ride":"carousel","data-interval":"0"},[s.title!=="C\xF3 Th\u1EC3 B\u1EA1n C\u0169ng Th\xEDch"?(o(),a("ol",P,[g(m,{to:{name:"book.list",query:{category:s.loaiSach[0][0].category[0]}}},{default:C(()=>[x("Xem Th\xEAm")]),_:1},8,["to"])])):_("",!0),t("div",T,[(o(!0),a(u,null,h(s.loaiSach,(v,d)=>(o(),a("div",{class:k(["item carousel-item",{active:d===0}]),key:d},[t("div",q,[(o(!0),a(u,null,h(v,(c,p)=>(o(),a("div",{class:"col-md-3",key:p},[t("div",{class:"thumb-wrapper",onClick:Y=>l.goDetailItem(c._id)},[t("div",z,[t("img",{src:c.image[0],class:"img-fluid"},null,8,A)]),t("div",E,[t("h4",{title:c.title},r(c.title),9,L),t("p",X,r(l.formatter(c.price)),1)])],8,F)]))),128))])],2))),128))]),t("button",{class:"carousel-control-prev",type:"button","data-bs-target":n.idCarousel,"data-bs-slide":"prev"},J,8,j),t("button",{class:"carousel-control-next",type:"button","data-bs-target":n.idCarousel,"data-bs-slide":"next"},Q,8,K)],8,D)])])])):_("",!0)])}const $=y(w,[["render",R],["__scopeId","data-v-8b093989"]]);export{$ as P};
