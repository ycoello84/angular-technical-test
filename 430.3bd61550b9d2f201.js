"use strict";(self.webpackChunktest_level=self.webpackChunktest_level||[]).push([[430],{6430:(T,c,s)=>{s.r(c),s.d(c,{StarshipModule:()=>S});var l=s(6019),o=s(9333),t=s(3019),p=s(2518);function h(i,r){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",5),t.NdJ("click",function(){const v=t.CHM(e).$implicit;return t.oxw(2).selectRow(v)}),t.TgZ(2,"th",6),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.qZA(),t.BQk()}if(2&i){const e=r.$implicit,n=r.index,a=t.oxw(2);t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.model," "),t.xp6(2),t.hij("",a.getTypeLength(e.length)," ")}}function u(i,r){if(1&i&&(t.TgZ(0,"div"),t.TgZ(1,"table",2),t.TgZ(2,"thead"),t.TgZ(3,"tr"),t.TgZ(4,"th",3),t._uU(5,"#"),t.qZA(),t.TgZ(6,"th",3),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"th",3),t._uU(9,"Model"),t.qZA(),t.TgZ(10,"th",3),t._uU(11,"Length"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"tbody"),t.YNc(13,h,10,4,"ng-container",4),t.qZA(),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(13),t.Q6J("ngForOf",e.dataElement)}}function g(i,r){1&i&&(t.TgZ(0,"div",9),t._uU(1," Loading starships...! "),t._UZ(2,"i",10),t.TgZ(3,"span",11),t._uU(4,"Loading..."),t.qZA(),t.qZA())}function m(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",9),t._uU(1," No data to show...! "),t.qZA(),t.TgZ(2,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).chargeAllData()}),t._UZ(3,"i",13),t._uU(4," Charge All Data "),t.qZA()}}function _(i,r){if(1&i&&(t.YNc(0,g,5,0,"div",7),t.YNc(1,m,5,0,"ng-template",null,8,t.W1O)),2&i){const e=t.MAs(2),n=t.oxw();t.Q6J("ngIf",0==n.filterActive)("ngIfElse",e)}}let d=(()=>{class i{constructor(e,n){this.serviceApi=e,this.router=n,this._dataSubscription=[],this.dataElement=[],this.dataElementOriginal=[],this.rutaActive="",this.filterActive=!1,this.lastFilter=null}ngOnInit(){let e=this.router.url.split("/");this.serviceApi.changeRouteActiveSelected(e[e.length-1]),this.rutaActive=e[e.length-1],this._dataSubscription.push(this.serviceApi.getDataApi("starships").subscribe({next:n=>{this.dataElement=n.results,this.dataElementOriginal=n.results,1==this.filterActive&&this.filterData(this.lastFilter.word)}})),this._dataSubscription.push(this.serviceApi.currentDataFilter.subscribe({next:n=>{this.lastFilter=n,null!=n&&n.rute==this.rutaActive&&this.filterData(n.word)}}))}filterData(e){""==e?(this.filterActive=!1,this.chargeAllData()):(this.filterActive=!0,this.dataElement=this.dataElementOriginal.filter(n=>n.name.toLowerCase().includes(e.toLowerCase())))}chargeAllData(){this.dataElement=this.dataElementOriginal}selectRow(e){this.serviceApi.changeDataStartshipSelected(e),this.router.navigate(["/","starship","view"])}getTypeLength(e){let n=Number.parseFloat(e);switch(!0){case n>1e3:return"Large";case n<=1e3&&n>=100:return"Normal";default:return"Small"}}ngOnDestroy(){this._dataSubscription.forEach(e=>{e.unsubscribe()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.k),t.Y36(o.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-starship"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["existElements",""],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[3,"click"],["scope","row"],["class","alert alert-primary","role","alert",4,"ngIf","ngIfElse"],["existElementsFilters",""],["role","alert",1,"alert","alert-primary"],[1,"fa","fa-refresh","fa-spin","fa-fw"],[1,"sr-only"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fa","fa-reply-all"]],template:function(e,n){if(1&e&&(t.YNc(0,u,14,1,"div",0),t.YNc(1,_,3,2,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",n.dataElement.length>0)("ngIfElse",a)}},directives:[l.O5,l.sg],styles:[""]}),i})();function f(i,r){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"strong"),t._uU(4,"Name: "),t.qZA(),t._uU(5),t.qZA(),t.TgZ(6,"div",2),t.TgZ(7,"strong"),t._uU(8,"Model: "),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"div",2),t.TgZ(11,"strong"),t._uU(12,"Manufacturer: "),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"div",2),t.TgZ(15,"strong"),t._uU(16,"Crew: "),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"div",2),t.TgZ(19,"strong"),t._uU(20,"Length: "),t.qZA(),t._uU(21),t.qZA(),t.qZA(),t._UZ(22,"br"),t.TgZ(23,"div"),t.TgZ(24,"button",3),t.NdJ("click",function(){return t.CHM(e),t.oxw().goBack()}),t._UZ(25,"i",4),t._uU(26," Back "),t.qZA(),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(5),t.hij(" ",e.dataStarship.name," "),t.xp6(4),t.hij(" ",e.dataStarship.model," "),t.xp6(4),t.hij(" ",e.dataStarship.manufacturer," "),t.xp6(4),t.hij(" ",e.dataStarship.crew," "),t.xp6(4),t.hij(" ",e.getTypeLength(e.dataStarship.length)," ")}}const Z=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-container-starship"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},directives:[o.lC],styles:[""]}),i})(),children:[{path:"",component:d},{path:"view",component:(()=>{class i{constructor(e,n){this.serviceApi=e,this.router=n,this._dataSubscription=[]}ngOnInit(){let e=this.router.url.split("/");this.serviceApi.changeRouteActiveSelected(e[e.length-1]),this._dataSubscription.push(this.serviceApi.currentStartshipSelected.subscribe({next:n=>{console.log("view starship: ",n),this.dataStarship=n,null==this.dataStarship&&this.router.navigate(["/","starship"])}}))}goBack(){this.serviceApi.changeDataStartshipSelected(null)}getTypeLength(e){let n=Number.parseFloat(e);switch(!0){case n>1e3:return"Large";case n<=1e3&&n>=100:return"Normal";default:return"Small"}}ngOnDestroy(){this._dataSubscription.forEach(e=>{e.unsubscribe()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.k),t.Y36(o.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-starship"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"containerInfoDetails"],[1,"itemsDetails"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fa","fa-reply-all"]],template:function(e,n){1&e&&t.YNc(0,f,27,5,"ng-container",0),2&e&&t.Q6J("ngIf",null!=n.dataStarship)},directives:[l.O5],styles:[".containerInfoDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column}.itemsDetails[_ngcontent-%COMP%]{margin-top:15px}"]}),i})()}]}];let A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[o.Bz.forChild(Z)],o.Bz]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,A]]}),i})()}}]);