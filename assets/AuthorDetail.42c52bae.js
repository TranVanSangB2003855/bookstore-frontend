import{A as d}from"./author.service.b9c208d3.js";import{_ as l,o as r,c as a,a as e,h as _,t as i,F as m,i as p,p as g,g as f}from"./index.5a314419.js";const v={data(){return{author:[],books:[],category:""}},computed:{numPageCurrent(){return this.$route.hash?this.$route.hash:""},showPageCurrent(){return this.numPageCurrent?parseInt(this.numPageCurrent.substr(5)):(this.$route.hash="#page1",1)},numPageOfBooks(){let t=[];const c=this.books.length;for(let o=0;o<c;o++)t.push(o+1);return t}},methods:{async retrieveBooks(){try{this.author=await d.getAnAuthor(this.$route.query.id),this.books=this.author.books}catch(t){console.log(t)}},formatter(t){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(t)},goDetailItem(t){this.$router.push({name:"book.detail",params:{id:t}})},async filterBooks(){await this.$router.push({name:"book.list",query:{category:this.category}}),this.books=await BookService.getData(this.$route.fullPath.slice(9))}},mounted(){this.retrieveBooks()}},y=t=>(g("data-v-7fd46d9a"),t=t(),f(),t),b={class:"container-fluid"},k={class:"box bg-white tieude radius"},w={class:"bg-white"},C={class:"name-author"},I={class:"row row-cols-1 row-cols-md-4"},$=["onClick"],A={class:"img-box"},B=["src"],N={class:"thumb-content"},x=["title"],D={class:"item-price"},P=y(()=>e("a",{href:"#",class:"btn btn-primary"},"Add to Cart",-1));function S(t,c,o,V,h,n){return r(),a("div",b,[e("div",k,[e("h3",w,[_(" NH\u1EEENG CU\u1ED0N S\xC1CH C\u1EE6A T\xC1C GI\u1EA2 "),e("span",C,i(this.author.full_name),1)])]),e("div",I,[(r(!0),a(m,null,p(h.books,(s,u)=>(r(),a("div",{class:"col mb-4",key:u},[e("div",{class:"thumb-wrapper",onClick:F=>n.goDetailItem(s._id)},[e("div",A,[e("img",{src:s.image[0],class:"img-fluid"},null,8,B)]),e("div",N,[e("h4",{title:s.title},i(s.title),9,x),e("p",D,i(n.formatter(s.price)),1),P])],8,$)]))),128))])])}const H=l(v,[["render",S],["__scopeId","data-v-7fd46d9a"]]);export{H as default};
