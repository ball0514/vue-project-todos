import{r as p,u as d,a as v,c as f,b as o,w as n,v as r}from"./index-B9o19AZb.js";import{a as g}from"./axios-BimPEqV4.js";import{_ as c}from"./plugin-vueexport-helper-DlAUqK2U.js";const w={id:"signUpPage",class:"bg-yellow"},b={class:"conatiner signUpPage vhContainer"},C={class:"formControls",action:"index.html"},x={__name:"SignUpView",setup(k){const e=p({email:"",password:"",nickname:""}),a=p(""),u=async()=>{if(e.value.email==="")alert("請輸入email");else if(e.value.nickname==="")alert("請輸入暱稱");else if(e.value.password!==a.value)alert("密碼不相同"),e.value.password="",a.value="";else try{const t=await g.post("https://todolist-api.hexschool.io/users/sign_up",e.value);console.log(t),alert("註冊成功"),setInterval(()=>{i.push("/")},1e3)}catch(t){alert(t.response.data.message),e.value.email="",e.value.nickname="",e.value.password="",a.value="",console.log(t)}},i=d();function m(){i.push("/")}return(t,l)=>(v(),f("div",w,[o("div",b,[l[9]||(l[9]=o("div",{class:"side"},[o("a",{href:"#"},[o("img",{class:"logoImg",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png",alt:""})]),o("img",{class:"d-m-n",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png",alt:"workImg"})],-1)),o("div",null,[o("form",C,[l[4]||(l[4]=o("h2",{class:"formControls_txt"},"註冊帳號",-1)),l[5]||(l[5]=o("label",{class:"formControls_label",for:"email"},"Email",-1)),n(o("input",{class:"formControls_input",type:"text",id:"email",name:"email",placeholder:"請輸入 email",required:"","onUpdate:modelValue":l[0]||(l[0]=s=>e.value.email=s)},null,512),[[r,e.value.email]]),l[6]||(l[6]=o("label",{class:"formControls_label",for:"name"},"您的暱稱",-1)),n(o("input",{class:"formControls_input",type:"text",name:"name",id:"name",placeholder:"請輸入您的暱稱",required:"","onUpdate:modelValue":l[1]||(l[1]=s=>e.value.nickname=s)},null,512),[[r,e.value.nickname]]),l[7]||(l[7]=o("label",{class:"formControls_label",for:"pwd"},"密碼",-1)),n(o("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":l[2]||(l[2]=s=>e.value.password=s)},null,512),[[r,e.value.password]]),l[8]||(l[8]=o("label",{class:"formControls_label",for:"pwd"},"再次輸入密碼",-1)),n(o("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請再次輸入密碼",required:"","onUpdate:modelValue":l[3]||(l[3]=s=>a.value=s)},null,512),[[r,a.value]]),o("input",{class:"formControls_btnSubmit",type:"button",value:"註冊帳號",onClick:u}),o("button",{type:"button",class:"formControls_btnLink",onClick:m},"登入")])])])]))}},h=c(x,[["__scopeId","data-v-a0c59a19"]]);export{h as default};
