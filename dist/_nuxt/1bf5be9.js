(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(e,t,l){"use strict";l.r(t);l(30);var n={data:function(){return{name:"",email:"",blog:"",subject:"",message:"",isErrorMessage:[],formRules:[function(e){return!!e||"必ず入力してください。"}],emailRules:[function(e){return!!e||"必ず入力してください。"},function(e){return/.+@.+/.test(e)||"有効なメールアドレスを記入してください。"}]}},watch:{name:function(e){this.validation(e)}},methods:{validation:function(e){this.isErrorMessage=e?[]:["必ず入力してください。"]},post:function(){this.$refs.form.validate(),console.log(this.name,this.email,this.subject)}}},o=l(84),r=l(125),c=l.n(r),m=l(223),f=l(376),v=l(378),d=l(377),_=l(372),x=l(379),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-row",{staticStyle:{"background-color":"#fcf6ef"},attrs:{justify:"center",align:"center"}},[l("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[l("v-form",{ref:"form",staticClass:"formrun mt-5",attrs:{align:"center",action:"https://form.run/api/v1/r/bnyey0qcsd40y5r2jr5162c6",method:"post"},on:{submit:e.post}},[l("v-text-field",{staticClass:"mt-3",attrs:{label:"お名前","error-messages":e.isErrorMessage},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),l("v-text-field",{staticClass:"mt-3",attrs:{label:"メールアドレス",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),l("v-text-field",{staticClass:"mt-3",attrs:{label:"ブログ・サイトURL"},model:{value:e.blog,callback:function(t){e.blog=t},expression:"blog"}}),e._v(" "),l("v-text-field",{staticClass:"mt-3",attrs:{label:"件名",rules:e.formRules},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e._v(" "),l("v-textarea",{staticClass:"mt-3",attrs:{label:"メッセージ本文",rules:e.formRules},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),l("v-btn",{staticClass:"mt-5 font-weight-bold white--text",staticStyle:{"background-color":"#fb8c1a"},attrs:{"x-large":"",type:"submit"}},[e._v("\n          送信する\n        ")])],1),e._v(" "),l("p",[e._v("name: "+e._s(e.name))]),e._v(" "),l("p",[e._v("email: "+e._s(e.email))]),e._v(" "),l("p",[e._v("blog: "+e._s(e.blog))]),e._v(" "),l("p",[e._v("subject: "+e._s(e.subject))]),e._v(" "),l("p",[e._v("message: "+e._s(e.message))])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:m.a,VCol:f.a,VForm:v.a,VRow:d.a,VTextField:_.a,VTextarea:x.a})}}]);