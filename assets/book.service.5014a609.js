import{j as e}from"./index.8fa78d2c.js";class i{constructor(a="/api/books"){this.api=e(a)}async getAll(){return(await this.api.get("/")).data}async getDataHome(){return(await this.api.get("/getdatahome")).data}async getData(a){return(await this.api.get("/getdata"+a)).data}async getDataSuggest(a,t){return(await this.api.get("/getdatasuggest/"+a+"/"+t)).data}async create(a){return(await this.api.post("/",a)).data}async get(a){return(await this.api.get(`/${a}`)).data}async update(a,t){return(await this.api.put(`/${a}`,t)).data}async delete(a){return(await this.api.delete(`/${a}`)).data}}const n=new i;export{n as B};
