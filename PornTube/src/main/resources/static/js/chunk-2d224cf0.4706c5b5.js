(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224cf0"],{e25b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("div",{attrs:{id:"top"}}),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("v-btn",{attrs:{block:"",color:"secondary"},on:{click:t.create}},[t._v("生成邀请码")])],1)],1),a("v-divider"),a("v-row",{attrs:{justify:"center"}},[a("div",{attrs:{id:"top"}}),a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.invitationList,"hide-default-footer":"","items-per-page":t.size,page:t.page},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"item.createUser",fn:function(e){var n=e.item;return[a("a",{attrs:{href:"/user/"+n.createUser,target:"_blank"}},[t._v(" "+t._s(n.createUser)+" ")])]}},{key:"item.createTime",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.TimeUtil.renderTime(a.createTime))+" ")]}},{key:"item.useTime",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.TimeUtil.renderTime(a.useTime))+" ")]}},{key:"item.useStatus",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.getStatus(a.useStatus))+" ")]}},{key:"item.useUser",fn:function(e){var n=e.item;return[a("a",{attrs:{href:"/user/"+n.useUser,target:"_blank"}},[t._v(" "+t._s(n.useUser)+" ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.getList}},[t._v("重新加载")])]},proxy:!0}])})],1)],1),a("v-row",{staticStyle:{"padding-top":"12px","padding-bottom":"24px"},attrs:{justify:"center"}},[a("v-pagination",{attrs:{length:t.length},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{top:!0,timeout:3e3},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.showMessage=!1}}},"v-btn",n,!1),[t._v(" 关闭 ")])]}}]),model:{value:t.showMessage,callback:function(e){t.showMessage=e},expression:"showMessage"}},[t._v(" "+t._s(t.message)+" ")])],1)},s=[],i=(a("d3b7"),a("99af"),a("9878")),r={name:"Invitation",data:function(){return{showMessage:!1,message:"",TimeUtil:i["a"],invitationList:[],headers:[{text:"id",sortable:!1,value:"id"},{text:"创建时间",sortable:!1,value:"createTime"},{text:"生成人",sortable:!1,value:"createUser"},{text:"邀请码",sortable:!1,value:"code"},{text:"是否使用",sortable:!1,value:"useStatus"},{text:"使用人",sortable:!1,value:"useUser"},{text:"使用时间",sortable:!1,value:"useTime"}],page:1,size:20,length:1}},created:function(){this.getList()},methods:{getStatus:function(t){return 1===t?"可用":"不可用"},getList:function(){var t=this;fetch("/api/admin/invitation/list?page=".concat(this.page,"&limit=").concat(this.size),{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(e){t.invitationList=e.data.list,t.page=e.data.currPage,t.length=e.data.totalPage})).catch((function(t){return null}))},create:function(){var t=this;fetch("/api/admin/invitation/create",{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"POST",credentials:"include"}).then((function(t){return t.json()})).then((function(e){200===e.status?(t.message="生成成功，请到列表查看",t.showMessage=!0,t.getList()):(t.message="生成失败，"+e.message,t.showMessage=!0)})).catch((function(t){return null}))},pageChange:function(t){this.page=t,this.videoList(),document.querySelector("#top").scrollIntoView()}}},o=r,c=a("2877"),u=a("6544"),l=a.n(u),d=a("8336"),v=a("b0af"),g=a("62ad"),f=a("a523"),p=a("8fea"),h=a("ce7e"),m=a("891e"),b=a("0fd9"),k=a("2db4"),T=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=T.exports;l()(T,{VBtn:d["a"],VCard:v["a"],VCol:g["a"],VContainer:f["a"],VDataTable:p["a"],VDivider:h["a"],VPagination:m["a"],VRow:b["a"],VSnackbar:k["a"]})}}]);