<script setup>
//輸入註冊資料
import axios from 'axios'
import { ref } from 'vue'

const signUpData = ref({
  email: '',
  password: '',
  nickname: ''
})

const passwordAgain = ref('')

const signUp = async () => {
  if (signUpData.value.email === '') {
    alert('請輸入email')
  } else if (signUpData.value.nickname === '') {
    alert('請輸入暱稱')
  } else if (signUpData.value.password !== passwordAgain.value) {
    alert('密碼不相同')
    signUpData.value.password = ''
    passwordAgain.value = ''
  } else {
    try {
      const res = await axios.post(
        'https://todolist-api.hexschool.io/users/sign_up',
        signUpData.value
      )
      console.log(res)
      alert('註冊成功')
      setInterval(() => {
        router.push('/')
      }, 1000)
    } catch (err) {
      alert(err.response.data.message)
      signUpData.value.email = ''
      signUpData.value.nickname = ''
      signUpData.value.password = ''
      passwordAgain.value = ''
      console.log(err)
    }
  }
}

//切換至登入畫面
import { useRouter } from 'vue-router'

const router = useRouter()
function goLogIn() {
  router.push('/')
}
</script>

<template>
  <!-- sign up -->
  <div id="signUpPage" class="bg-yellow">
    <div class="conatiner signUpPage vhContainer">
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
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="signUpData.email"
          />
          <label class="formControls_label" for="name">您的暱稱</label>
          <input
            class="formControls_input"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            required
            v-model="signUpData.nickname"
          />
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="signUpData.password"
          />
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請再次輸入密碼"
            required
            v-model="passwordAgain"
          />
          <!-- <input
            class="formControls_btnSubmit"
            type="button"
            onclick="javascript:location.href='#todoListPage'"
            value="註冊帳號"
          /> -->
          <input class="formControls_btnSubmit" type="button" value="註冊帳號" @click="signUp" />
          <!-- <a class="formControls_btnLink" href="#loginPage">登入</a> -->
          <button type="button" class="formControls_btnLink" @click="goLogIn">登入</button>
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
