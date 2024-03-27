<script setup>
import { SwitchButton, CaretBottom, User, House } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from '../../stores/userStore.js'
const userStore = useUserStore()
const router = useRouter()
import { useActiveStore } from '../../stores/active.js'
const activeStore = useActiveStore()
// 退出登录
const onEsc = async () => {
  await ElMessageBox.confirm('您确定退出吗', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  router.push('/login')
  ElMessage.success("退出成功")
}

</script>
<template>
  <el-container>
    <el-header>

      <div class="logo">iMark <span>智能阅卷平台</span></div>
      <div class="nav" @click="onClick">
        <div class="username">{{ userStore.userInfo.username }}</div>
        <el-button plain class="shen">身份:教师</el-button>
        <!-- 下拉菜单 -->
        <el-dropdown @command="handleCommand" placement="bottom-end">
          <span class="el-dropdown__box">
            <el-avatar :src="userStore.userInfo.avatar" />
            <el-icon>
              <CaretBottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="user" :icon="User" @click="() => {
                activeStore.updateActiveWeb('/user')
                router.push('/user')
              }">个人中心</el-dropdown-item>
              <el-dropdown-item @click="onEsc" command="esc" :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <el-aside>
        <div class="top">

        </div>
        <div class="bottom">
          <el-menu active-text-color="" background-color="rgb(29, 75, 131)" :default-active=activeStore.activeWeb
            text-color="#fff" router>
            <el-menu-item index="/home" @click="activeStore.updateActiveWeb('/home')">
              <el-icon>
                <House />
              </el-icon>
              <span>首 页</span>
            </el-menu-item>

            <el-menu-item index="/test" @click="activeStore.updateActiveWeb('/test')">
              <el-icon>
                <Camera />
              </el-icon>
              <span>录 入</span>
            </el-menu-item>

            <el-menu-item index="/read" @click="activeStore.updateActiveWeb('/read')">
              <el-icon>
                <Tickets />
              </el-icon>
              <span>阅 卷</span>
            </el-menu-item>

            <el-menu-item index="/fenxi" @click="activeStore.updateActiveWeb('/fenxi')">
              <el-icon>
                <DataLine />
              </el-icon>
              <span>分 析</span>
            </el-menu-item>

            <el-menu-item index="/user" @click="activeStore.updateActiveWeb('/user')">
              <el-icon>
                <User />
              </el-icon>
              <span>我 的</span>
            </el-menu-item>

          </el-menu>
        </div>
      </el-aside>
      <div class="main">
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>
<style scoped lang="scss">
.el-header {
  display: flex;
  height: 8vh;
  background-color: rgb(29, 75, 131);

  .logo {
    width: 20%;
    height: 3.5rem;
    color: white;
    line-height: 3.5rem;
    font-size: 1.8rem;
    padding-left: 2rem;

    span {
      font-size: 1rem;
    }
  }

  .nav {
    position: relative;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    .username{
      position: absolute;
      color: white;
      right: 5rem;
      top: 0rem;
      bottom: 0;
      margin: auto;
      height: 1rem;
      font-size: 0.9rem;
    }

    .shen {
      position: absolute;
      right: 9rem;
      top: 0rem;
      bottom: 0;
      margin: auto;
    }

    //下拉菜单
    .el-dropdown {
      position: absolute;
      right: 1rem;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    .el-dropdown__box {
      display: flex;
      align-items: center;

      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }

    div {
      a {
        text-decoration: none;
        font-size: 0.8rem;
        color: black;
      }

      a:hover {
        color: dodgerblue;
      }

      .router-link-exact-active {
        color: dodgerblue;
      }
    }
  }
}

.el-main {
  display: flex;
  background-color: rgb(243, 244, 246);

  // 侧边栏
  .el-aside {
    width: 15%;
    height: 87vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: rgb(29, 75, 131);

    // 头像姓名部分
    .top {
      height: 10%;
      text-align: center;
      color: white;
      margin-top: 3rem;
    }

    // 导航部分
    .bottom {
      height: 70%;

      .el-menu {
        border-right: none;
      }
    }
  }

  // 内容区
  .main {
    min-height: 80vh;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    margin-left: 2rem;
    // background: red;
  }
}</style>
