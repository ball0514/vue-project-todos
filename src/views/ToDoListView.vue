<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'
const token = document.cookie.replace(/(?:(?:^|.*;\s*)cookieName\s*\=\s*([^;]*).*$)|^.*$/, '$1')

//取得token確認身分

const nickname = ref('')

onMounted(async () => {
  if (!token) {
    alert('沒有登入權限')
    router.push('/')
  } else {
    try {
      const res = await axios.get('https://todolist-api.hexschool.io/users/checkout', {
        headers: {
          authorization: token
        }
      })
      nickname.value = res.data.nickname
      console.log(res)
    } catch (err) {
      alert(err.response.data.message)
      setInterval(() => {
        router.push('/')
      }, 3000)
      console.log(err)
    }
  }
})

//新增待辦事項
const content = ref({
  content: ''
})
const addTodo = async () => {
  try {
    const res = await axios.post('https://todolist-api.hexschool.io/todos/', content.value, {
      headers: {
        authorization: token
      }
    })
    getTodo()
    content.value.content = ''
    console.log(res)
  } catch (err) {
    alert(err.response.data.message)
    console.log(err)
  }
}

//取得待辦事項
const todos = ref([])
const prepare = ref([])
const finish = ref([])
onMounted(() => {
  getTodo()
})
const getTodo = async () => {
  try {
    const res = await axios.get('https://todolist-api.hexschool.io/todos/', {
      headers: {
        authorization: token
      }
    })
    todos.value = res.data.data

    //挑出待完成事項
    prepare.value = todos.value.filter((todo) => todo.status === false)
    finish.value = todos.value.filter((todo) => todo.status === true)
    console.log(res)
  } catch (err) {
    alert(err.response.data.message)
    console.log(err)
  }
}

//刪除待辦事項
const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`https://todolist-api.hexschool.io/todos/${id}`, {
      headers: {
        authorization: token
      }
    })
    todos.value = todos.value.filter((todo) => todo.id !== id)
    getTodo()
    console.log(res)
  } catch (err) {
    alert(err.response.data.message)
    console.log(err)
  }
}

//變更待辦事項狀態
const changeStatus = async (id) => {
  try {
    const res = await axios.patch(
      `https://todolist-api.hexschool.io/todos/${id}/toggle`,
      {},
      {
        headers: {
          authorization: token
        }
      }
    )
    getTodo()
    console.log(res)
  } catch (err) {
    alert(err.response.data.message)
    console.log(err)
  }
}

//取得網址切換畫面

const allList = ref(true)
const prepareList = ref(false)
const finishList = ref(false)
function changePage(list) {
  if (list === 'all') {
    allList.value = true
    prepareList.value = false
    finishList.value = false
  } else if (list === 'prepare') {
    allList.value = false
    prepareList.value = true
    finishList.value = false
  } else if (list === 'finish') {
    allList.value = false
    prepareList.value = false
    finishList.value = true
  }
}

//登出，切換至登入頁面
import { useRouter } from 'vue-router'

const router = useRouter()
const logOut = async () => {
  try {
    const res = await axios.post(
      'https://todolist-api.hexschool.io/users/sign_out',
      {},
      {
        headers: {
          authorization: token
        }
      }
    )
    // docCookies.removeItem(cookieName)
    alert('登出成功')
    router.replace('/')
    console.log(res)
  } catch (err) {
    alert(err.response.data.message)
    console.log(err)
  }
}
</script>

<template>
  <!-- ToDo List -->
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="#"
            ><span>{{ nickname }}的代辦</span></a
          >
        </li>
        <li>
          <!-- <a href="#loginPage">登出</a> -->
          <button type="button" class="noBackgorund" @click="logOut">登出</button>
        </li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <div class="inputBox">
          <input type="text" placeholder="請輸入待辦事項" v-model="content.content" />
          <button type="button" @click="addTodo">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <div v-if="todos.length === 0">
          <p class="empty">目前尚無待辦事項</p>
          <img class="" width="240" src="/empty.png" alt="workImg" />
        </div>
        <div v-else class="todoList_list">
          <ul class="todoList_tab">
            <!-- <li><a href="#" class="active">全部</a></li>
            <li><a href="#">待完成</a></li>
            <li><a href="#">已完成</a></li> -->
            <li>
              <RouterLink to="/ToDoList" :class="allList ? 'active' : ''" @click="changePage('all')"
                >全部</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/ToDoList/prepare"
                :class="prepareList ? 'active' : ''"
                @click="changePage('prepare')"
                >待完成</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/ToDoList/finish"
                :class="finishList ? 'active' : ''"
                @click="changePage('finish')"
                >已完成</RouterLink
              >
            </li>
          </ul>
          <div class="todoList_items">
            <ul v-if="prepareList">
              <li v-for="item in prepare" :key="item.id">
                <label class="todoList_label">
                  <input
                    class="todoList_input"
                    type="checkbox"
                    v-model="item.status"
                    @change="changeStatus(item.id)"
                  />
                  <span>{{ item.content }}</span>
                </label>
                <button type="button" class="noBackgorund" @click="deleteTodo(item.id)">
                  <i class="fa fa-times"></i>
                </button>
              </li>
            </ul>
            <ul v-else-if="finishList">
              <li v-for="item in finish" :key="item.id">
                <label class="todoList_label">
                  <input
                    class="todoList_input"
                    type="checkbox"
                    v-model="item.status"
                    @change="changeStatus(item.id)"
                  />
                  <span>{{ item.content }}</span>
                </label>
                <button type="button" class="noBackgorund" @click="deleteTodo(item.id)">
                  <i class="fa fa-times"></i>
                </button>
              </li>
            </ul>
            <ul v-else class="todoList_item">
              <li v-for="item in todos" :key="item.id">
                <label class="todoList_label">
                  <input
                    class="todoList_input"
                    type="checkbox"
                    v-model="item.status"
                    @change="changeStatus(item.id)"
                  />
                  <span>{{ item.content }}</span>
                </label>
                <!-- <a href="#">
                  <i class="fa fa-times"></i>
                </a> -->
                <button type="button" class="noBackgorund" @click="deleteTodo(item.id)">
                  <i class="fa fa-times"></i>
                </button>
              </li>
              <!-- <li>
                <label class="todoList_label">
                  <input class="todoList_input" type="checkbox" value="true" />
                  <span>把冰箱發霉的檸檬拿去丟</span>
                </label>
                <a href="#">
                  <i class="fa fa-times"></i>
                </a>
              </li>
              <li>
                <label class="todoList_label">
                  <input class="todoList_input" type="checkbox" value="true" />
                  <span>打電話叫媽媽匯款給我</span>
                </label>
                <a href="#">
                  <i class="fa fa-times"></i>
                </a>
              </li>
              <li>
                <label class="todoList_label">
                  <input class="todoList_input" type="checkbox" value="true" />
                  <span>整理電腦資料夾</span>
                </label>
                <a href="#">
                  <i class="fa fa-times"></i>
                </a>
              </li>
              <li>
                <label class="todoList_label">
                  <input class="todoList_input" type="checkbox" value="true" />
                  <span>繳電費水費瓦斯費</span>
                </label>
                <a href="#">
                  <i class="fa fa-times"></i>
                </a>
              </li>
              <li>
                <label class="todoList_label">
                  <input class="todoList_input" type="checkbox" value="true" />
                  <span>約vicky禮拜三泡溫泉</span>
                </label>
                <a href="#">
                  <i class="fa fa-times"></i>
                </a>
              </li>
              <li>
                <label class="todoList_label">
                  <input class="todoList_input" type="checkbox" value="true" />
                  <span>約ada禮拜四吃晚餐</span>
                </label>
                <a href="#">
                  <i class="fa fa-times"></i>
                </a>
              </li> -->
            </ul>
            <div class="todoList_statistics">
              <p v-if="finishList">{{ finish.length }} 個已完成項目</p>
              <p v-else>{{ prepare.length }} 個待完成項目</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.noBackgorund {
  border: 0;
  background: none;
  margin-left: 24px;
  font-size: 1rem;
}
.noBackgorund:hover {
  color: #d87355;
}

.empty {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
