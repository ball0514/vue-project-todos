import{r as c,o as g,u as v,a as f,c as w,b as o,w as r,v as i}from"./index-KmRxXMlx.js";import{a as b}from"./axios-BimPEqV4.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={id:"loginPage",class:"bg-yellow"},x={class:"conatiner loginPage vhContainer"},C={class:"formControls",action:"index.html"},I={__name:"LogInView",setup(k){const s=c({email:"",password:""}),u=async()=>{if(s.value.email==="")alert("請輸入帳號");else if(s.value.password==="")alert("請輸入密碼");else try{const l=await b.post("https://todolist-api.hexschool.io/users/sign_in",s.value);console.log(l),document.cookie=`cookieName=${l.data.token}`,m()}catch(l){alert(l.response.data.message),s.value.email="",s.value.password="",console.log(l)}};let e=null;const m=()=>{e=setInterval(()=>{n.push("/ToDoList")},0)},p=()=>{e!==null&&(clearInterval(e),e=null)};g(()=>{p()});const n=v();function d(){n.push("/SignUp")}return(l,t)=>(f(),w("div",h,[o("div",x,[t[6]||(t[6]=o("div",{class:"side"},[o("a",{href:"#"},[o("img",{class:"logoImg",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png",alt:""})]),o("img",{class:"d-m-n",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png",alt:"workImg"})],-1)),o("div",null,[o("form",C,[t[2]||(t[2]=o("h2",{class:"formControls_txt"},"最實用的線上代辦事項服務",-1)),t[3]||(t[3]=o("label",{class:"formControls_label",for:"email"},"Email",-1)),r(o("input",{class:"formControls_input",type:"text",id:"email",name:"email",placeholder:"請輸入 email",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>s.value.email=a)},null,512),[[i,s.value.email]]),t[4]||(t[4]=o("span",null,"此欄位不可留空",-1)),t[5]||(t[5]=o("label",{class:"formControls_label",for:"pwd"},"密碼",-1)),r(o("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>s.value.password=a)},null,512),[[i,s.value.password]]),o("input",{class:"formControls_btnSubmit",type:"button",value:"登入",onClick:u}),o("button",{type:"button",class:"formControls_btnLink",onClick:d},"註冊帳號")])])])]))}},V=_(I,[["__scopeId","data-v-614cb748"]]);export{V as default};
