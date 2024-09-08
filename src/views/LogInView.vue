<script setup>
//輸入登入資料
import axios from 'axios'
import { onUnmounted, ref } from 'vue'

const LogInData = ref({
  email: '',
  password: ''
})

const logIn = async () => {
  if (LogInData.value.email === '') {
    alert('請輸入帳號')
  } else if (LogInData.value.password === '') {
    alert('請輸入密碼')
  } else {
    try {
      const res = await axios.post(
        'https://todolist-api.hexschool.io/users/sign_in',
        LogInData.value
      )
      //   console.log(res)
      document.cookie = `cookieName=${res.data.token}`
      interval()
    } catch (err) {
      alert(err.response.data.message)
      LogInData.value.email = ''
      LogInData.value.password = ''
      console.log(err)
    }
  }
}

let intervalId = null
const interval = () => {
  intervalId = setInterval(() => {
    router.push('/ToDoList')
  }, 0)
}

const stopInterval = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onUnmounted(() => {
  stopInterval()
})

//切換至註冊頁面
import { useRouter } from 'vue-router'

const router = useRouter()
function goSignUp() {
  router.push('/SignUp')
}
</script>

<template>
  <!-- login_page -->
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="LogInData.email"
          />
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="LogInData.password"
          />
          <!-- <input
            class="formControls_btnSubmit"
            type="button"
            onclick="javascript:location.href='#todoListPage'"
            value="登入"
          /> -->
          <input class="formControls_btnSubmit" type="button" value="登入" @click="logIn" />
          <!-- <a class="formControls_btnLink" href="#signUpPage">註冊帳號</a> -->
          <button type="button" class="formControls_btnLink" @click="goSignUp">註冊帳號</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.formControls_btnLink {
  border: 0;
  background: none;
}
</style>
