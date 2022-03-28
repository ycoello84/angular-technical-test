"use strict";(self.webpackChunktest_level=self.webpackChunktest_level||[]).push([[848],{9848:(Z,a,l)=>{l.r(a),l.d(a,{VehiclesModule:()=>v});var o=l(6019),c=l(9333),e=l(3019),h=l(2518);function u(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr",5),e.NdJ("click",function(){const A=e.CHM(t).$implicit;return e.oxw(2).selectRow(A)}),e.TgZ(2,"th",6),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.qZA(),e.BQk()}if(2&i){const t=s.$implicit,n=s.index;e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.hij("",t.model," "),e.xp6(2),e.hij("",t.manufacturer," ")}}function p(i,s){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"table",2),e.TgZ(2,"thead"),e.TgZ(3,"tr"),e.TgZ(4,"th",3),e._uU(5,"#"),e.qZA(),e.TgZ(6,"th",3),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th",3),e._uU(9,"Model"),e.qZA(),e.TgZ(10,"th",3),e._uU(11,"Manufacturer"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"tbody"),e.YNc(13,u,10,4,"ng-container",4),e.qZA(),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(13),e.Q6J("ngForOf",t.dataElement)}}function m(i,s){1&i&&(e.TgZ(0,"div",9),e._uU(1," Loading vehicles...! "),e._UZ(2,"i",10),e.TgZ(3,"span",11),e._uU(4,"Loading..."),e.qZA(),e.qZA())}function f(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",9),e._uU(1," No data to show...! "),e.qZA(),e.TgZ(2,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).chargeAllData()}),e._UZ(3,"i",13),e._uU(4," Charge All Data "),e.qZA()}}function g(i,s){if(1&i&&(e.YNc(0,m,5,0,"div",7),e.YNc(1,f,5,0,"ng-template",null,8,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw();e.Q6J("ngIf",0==n.filterActive)("ngIfElse",t)}}const _=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-container-vehicles"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},directives:[c.lC],styles:[""]}),i})(),children:[{path:"",component:(()=>{class i{constructor(t,n){this.serviceApi=t,this.router=n,this._dataSubscription=[],this.dataElement=[],this.dataElementOriginal=[],this.rutaActive="",this.filterActive=!1,this.lastFilter=null}ngOnInit(){let t=this.router.url.split("/");this.serviceApi.changeRouteActiveSelected(t[t.length-1]),this.rutaActive=t[t.length-1],this._dataSubscription.push(this.serviceApi.getDataApi("vehicles").subscribe({next:n=>{this.dataElement=n.results,this.dataElementOriginal=n.results,1==this.filterActive&&this.filterData(this.lastFilter.word)}})),this._dataSubscription.push(this.serviceApi.currentDataFilter.subscribe({next:n=>{this.lastFilter=n,null!=n&&n.rute==this.rutaActive&&this.filterData(n.word)}}))}filterData(t){""==t?(this.filterActive=!1,this.chargeAllData()):(this.filterActive=!0,this.dataElement=this.dataElementOriginal.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())))}chargeAllData(){this.dataElement=this.dataElementOriginal}selectRow(t){this.serviceApi.changeDataVehiclesSelected(t),this.router.navigate(["/","vehicles","view"])}ngOnDestroy(){this._dataSubscription.forEach(t=>{t.unsubscribe()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.k),e.Y36(c.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-vehicles"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["existElements",""],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[3,"click"],["scope","row"],["class","alert alert-primary","role","alert",4,"ngIf","ngIfElse"],["existElementsFilters",""],["role","alert",1,"alert","alert-primary"],[1,"fa","fa-refresh","fa-spin","fa-fw"],[1,"sr-only"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fa","fa-reply-all"]],template:function(t,n){if(1&t&&(e.YNc(0,p,14,1,"div",0),e.YNc(1,g,3,2,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",n.dataElement.length>0)("ngIfElse",r)}},directives:[o.O5,o.sg],styles:[""]}),i})()},{path:"view",component:(()=>{class i{constructor(t,n){this.serviceApi=t,this.router=n}ngOnInit(){let t=this.router.url.split("/");this.serviceApi.changeRouteActiveSelected(t[t.length-1])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.k),e.Y36(c.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-view-vehicles"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"view-vehicles works!"),e.qZA())},styles:[""]}),i})()}]}];let d=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.Bz.forChild(_)],c.Bz]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[o.ez,d]]}),i})()}}]);