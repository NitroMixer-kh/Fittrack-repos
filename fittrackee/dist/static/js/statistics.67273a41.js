"use strict";(self["webpackChunkfittrackee_client"]=self["webpackChunkfittrackee_client"]||[]).push([[193],{1546:function(e,s,t){t.r(s),t.d(s,{default:function(){return z}});var a=t(6252),l=t(2262),r=t(3577),n=(t(7658),t(2429)),i=t(454),o=t(9963);const c=e=>((0,a.dD)("data-v-361ef577"),e=e(),(0,a.Cn)(),e),d={class:"chart-menu"},u=["disabled"],p=c((()=>(0,a._)("i",{class:"fa fa-chevron-left","aria-hidden":"true"},null,-1))),m=[p],v={class:"time-frames custom-checkboxes-group"},b={class:"time-frames-checkboxes custom-checkboxes"},S=["id","name","checked","onInput","disabled"],k=["id","tabindex","onKeydown"],w=["disabled"],_=c((()=>(0,a._)("i",{class:"fa fa-chevron-right","aria-hidden":"true"},null,-1))),f=[_];var h=(0,a.aZ)({__name:"StatsMenu",props:{isDisabled:{type:Boolean}},emits:["arrowClick","timeFrameUpdate"],setup(e,{emit:s}){const t=e,{isDisabled:n}=(0,l.BK)(t),i=(0,l.iH)("month"),c=["week","month","year"];function p(e){i.value=e,s("timeFrameUpdate",e)}return(0,a.bv)((()=>{if(!n.value){const e=document.getElementById("frame-month");e&&e.focus()}})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("button",{class:"chart-arrow transparent",onClick:t[0]||(t[0]=e=>s("arrowClick",!0)),onKeydown:t[1]||(t[1]=(0,o.D2)((e=>s("arrowClick",!0)),["enter"])),disabled:(0,l.SU)(n)},m,40,u),(0,a._)("div",v,[(0,a._)("div",b,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(c,(s=>(0,a._)("div",{class:"time-frame custom-checkbox",key:s},[(0,a._)("label",null,[(0,a._)("input",{type:"radio",id:s,name:s,checked:i.value===s,onInput:e=>p(s),disabled:(0,l.SU)(n)},null,40,S),(0,a._)("span",{id:`frame-${s}`,tabindex:(0,l.SU)(n)?-1:0,role:"button",onKeydown:(0,o.D2)((e=>p(s)),["enter"])},(0,r.zw)(e.$t(`statistics.TIME_FRAMES.${s}`)),41,k)])]))),64))])]),(0,a._)("button",{class:"chart-arrow transparent",onClick:t[2]||(t[2]=e=>s("arrowClick",!1)),onKeydown:t[3]||(t[3]=(0,o.D2)((e=>s("arrowClick",!1)),["enter"])),disabled:(0,l.SU)(n)},f,40,w)]))}}),U=t(3744);const D=(0,U.Z)(h,[["__scopeId","data-v-361ef577"]]);var y=D,I=t(631);const g={class:"sports-menu"},C=["id","name","checked","onInput"],T={class:"sport-label"};var x=(0,a.aZ)({__name:"StatsSportsMenu",props:{userSports:null,selectedSportIds:{default:()=>[]}},emits:["selectedSportIdsUpdate"],setup(e,{emit:s}){const t=e,{t:i}=(0,n.QT)(),o=(0,a.f3)("sportColors"),{selectedSportIds:c}=(0,l.BK)(t),d=(0,a.Fl)((()=>(0,I.xH)(t.userSports,i)));function u(e){s("selectedSportIdsUpdate",e)}return(e,s)=>{const t=(0,a.up)("SportImage");return(0,a.wg)(),(0,a.iD)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(d),(e=>((0,a.wg)(),(0,a.iD)("label",{type:"checkbox",key:e.id,style:(0,r.j5)({color:e.color?e.color:(0,l.SU)(o)[e.label]})},[(0,a._)("input",{type:"checkbox",id:e.id,name:e.label,checked:(0,l.SU)(c).includes(e.id),onInput:s=>u(e.id)},null,40,C),(0,a.Wm)(t,{"sport-label":e.label,color:e.color},null,8,["sport-label","color"]),(0,a._)("span",T,(0,r.zw)(e.translatedLabel),1)],4)))),128))])}}});const F=x;var Z=F,E=t(9318);const H={key:0,id:"user-statistics"};var K=(0,a.aZ)({__name:"index",props:{sports:null,user:null,isDisabled:{type:Boolean}},setup(e){const s=e,{t:t}=(0,n.QT)(),{sports:r,user:o}=(0,l.BK)(s),c=(0,l.iH)("month"),d=(0,l.iH)(v(c.value)),u=(0,a.Fl)((()=>(0,I.xH)(s.sports,t))),p=(0,l.iH)(S(r.value));function m(e){c.value=e,d.value=v(c.value)}function v(e){return(0,E.aZ)(new Date,e,s.user.weekm)}function b(e){d.value=(0,E.FN)(d.value,e,s.user.weekm)}function S(e){return e.map((e=>e.id))}function k(e){p.value.includes(e)?p.value=p.value.filter((s=>s!==e)):p.value.push(e)}return(0,a.YP)((()=>s.sports),(e=>{p.value=S(e)})),(s,t)=>(0,l.SU)(u)?((0,a.wg)(),(0,a.iD)("div",H,[(0,a.Wm)(y,{onTimeFrameUpdate:m,onArrowClick:b,isDisabled:e.isDisabled},null,8,["isDisabled"]),(0,a.Wm)(i.Z,{sports:(0,l.SU)(r),user:(0,l.SU)(o),chartParams:d.value,"displayed-sport-ids":p.value,fullStats:!0,isDisabled:e.isDisabled},null,8,["sports","user","chartParams","displayed-sport-ids","isDisabled"]),(0,a.Wm)(Z,{"selected-sport-ids":p.value,"user-sports":(0,l.SU)(r),onSelectedSportIdsUpdate:k},null,8,["selected-sport-ids","user-sports"])])):(0,a.kq)("",!0)}});const B=(0,U.Z)(K,[["__scopeId","data-v-742b02d0"]]);var R=B,W=t(5630),P=t(5801),A=t(9917);const M={id:"statistics",class:"view"},Y={key:0,class:"container"};var $=(0,a.aZ)({__name:"StatisticsView",setup(e){const s=(0,A.o)(),t=(0,a.Fl)((()=>s.getters[P.YN.GETTERS.AUTH_USER_PROFILE])),n=(0,a.Fl)((()=>s.getters[P.O8.GETTERS.SPORTS].filter((e=>t.value.sports_list.includes(e.id))))),i=(0,a.Fl)((()=>0===t.value.nb_workouts));return(e,s)=>{const o=(0,a.up)("Card");return(0,a.wg)(),(0,a.iD)("div",M,[(0,l.SU)(t).username?((0,a.wg)(),(0,a.iD)("div",Y,[(0,a.Wm)(o,null,{title:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("statistics.STATISTICS")),1)])),content:(0,a.w5)((()=>[(0,a.Wm)(R,{class:(0,r.C_)({"stats-disabled":(0,l.SU)(i)}),user:(0,l.SU)(t),sports:(0,l.SU)(n),isDisabled:(0,l.SU)(i)},null,8,["class","user","sports","isDisabled"])])),_:1}),0===(0,l.SU)(t).nb_workouts?((0,a.wg)(),(0,a.j4)(W.Z,{key:0})):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])}}});const q=(0,U.Z)($,[["__scopeId","data-v-19ce09a2"]]);var z=q}}]);
//# sourceMappingURL=statistics.67273a41.js.map