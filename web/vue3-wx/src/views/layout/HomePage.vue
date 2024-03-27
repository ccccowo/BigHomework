<script setup>
import { ref, watch } from 'vue'
import { talkAiAPI, getHistoryAPI } from '@/api/ai.js'
import { useUserStore } from '../../stores/userStore';
const userStore = useUserStore()
import {useActiveStore} from '../../stores/active.js'
const activeStore = useActiveStore()
// 对话区域高度增加
const onAddHeight = () => {
  console.log("我要开始增加高度啦")
  const top = document.querySelector('.toptop')
  top.style.display = 'none'
  const bottom = document.querySelector('.bottombottom')
  bottom.style.height = 84 + 'vh'
  // 修改小三角形的显示隐藏
  const mythree1 = document.querySelector('.three .three1')
  const mythree2 = document.querySelector('.three .three2')
  mythree1.style.display = "none"
  mythree2.style.display = "block"
}
// 对话区域高度减少
const onDecHeight = () => {
  console.log("我要开始减少高度啦")
  const top = document.querySelector('.toptop')
  top.style.display = 'flex'
  const bottom = document.querySelector('.bottombottom')
  bottom.style.height = 21 + 'rem'
  // 修改小三角形的显示隐藏
  const mythree1 = document.querySelector('.three .three1')
  const mythree2 = document.querySelector('.three .three2')
  mythree1.style.display = "block"
  mythree2.style.display = "none"
}
// 发送信息
const inputValue = ref('')
// 用来存储用户及ai的信息
const infoList = ref([])
// 点击发送按钮后的逻辑
const onSend = async () => {
  const scrollref = document.querySelector('.bottombottom .content')
  console.log("我要开始发送信息啦")
  console.log(inputValue.value)
  infoList.value.push({ isUser: true, info: inputValue.value })
  scrollref.scrollTop = scrollref.scrollHeight
  const sysId = "57C8F5F7-36A9-769C-26D3-6ED7C76D3602"
  const fresh = 0
  const formData = new FormData()
  formData.append('sysId', sysId)
  formData.append('content', inputValue.value)
  formData.append('fresh', fresh)
  // 清空对话框
  inputValue.value = ''
  const res = await talkAiAPI(formData)
  console.log(res.data)
  infoList.value.push({ isUser: false, info: res.data })
  scrollref.scrollTop = scrollref.scrollHeight
}
// 实现逐字显现效果

// 监视infoList的变化
watch(infoList, () => {
  console.log("infoList发生了变化")
  setTimeout(() => {
    const scrollref = document.querySelector('.bottombottom .content')
    console.log(scrollref.scrollHeight)
    scrollref.scrollTop = scrollref.scrollHeight
  }, 500)

}, {
  deep: true
})

// 5.

</script>
<template>
  <div class="container">
    <div class="toptop">
      <div class="box1">
        <a 
        @click="()=>{
          activeStore.updateActiveWeb('/test')
          $router.push('/test')
          }"
           href="javascript:;">
          <el-icon><EditPen /></el-icon>
          <div>录 入</div>
          
        </a>
      </div>
      <div class="box2">
        <a  @click="()=>{
          activeStore.updateActiveWeb('/read')
          $router.push('/read')
          }"
           href="javascript:;">
          <el-icon><Tickets /></el-icon>
          <div>阅 卷</div>
        </a>
      </div>
      <div class="box3">
        <a @click="()=>{
          activeStore.updateActiveWeb('/fenxi')
          $router.push('/fenxi')
          }" href="javascript:;">
          <el-icon><DataLine /></el-icon>
          <div>分 析</div>
        </a>
      </div>
    </div>
    <div class="bottombottom">
      <a class="three" href="javascript:;">
        <div @click="onAddHeight" class="three1"></div>
        <div @click="onDecHeight" class="three2"></div>
      </a>
      <div class="content">
        <div class="dialogbox" v-if="!infoList[0]?.info">
          <div class="left">
            <el-avatar :size="25" />
          </div>
          <div class="right">
            <div class="name">AI</div>
            <div class="res">需要做一些什么？</div>
          </div>
        </div>
        <div class="dialogbox" v-for="info of infoList" :key="info.info">
          <div class="left">
            <el-avatar v-if="info.isUser == true" :size="25" :src="userStore.userInfo.avatar"/>
            <el-avatar v-if="info.isUser == false" :size="25"/>
          </div>
          <div class="right">
            <div class="name">{{ info.isUser == true ? '你' : 'AI' }}</div>
            <div class="res">{{ info.info }}</div>
          </div>
        </div>
      </div>

      <div class="input">
        <el-input v-model="inputValue" size="large"></el-input>
        <el-button @click="onSend" type="primary" size="large">发送</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

// 上部三个大方块
.toptop {
  display: flex;
  width: 85%;
  margin: 3rem auto;
  justify-content: space-between;

  .box1,
  .box2,
  .box3 {
    width: 13rem;
    height: 10rem;
    text-align: center;
    border-radius: 10px;
    font-size: 2rem;
    .el-icon{
      margin-top: 1.5rem;
      font-size: 3.5rem;
    }
    div{
      margin-top: 1rem;
    }

    a {
      display: block;
      text-decoration: none;
      color: white
    }
  }

  .box1 {
    background-color: rgb(24, 172, 209);
  }

  .box2 {
    background-color: rgb(54, 115, 189);
  }

  .box3 {
    background-color: rgb(35, 174, 209);
  }
}

// 下部AI助手
.bottombottom {
  margin-top: 2rem;
  width: 100%;
  height: 40vh;
  background-color: rgb(236, 236, 236);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: relative;

  // 三角形区域
  .three {
    width: 4rem;
    height: 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgb(219, 246, 255);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    top: -1.5rem
  }

  .three1 {
    border-style: solid;
    border: 1rem solid rgb(26, 82, 138);
    border-color: transparent transparent rgb(98, 132, 167);
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    display: block;
  }

  .three2 {
    border-style: solid;
    border: 1rem solid rgb(26, 82, 138);
    border-color: rgb(98, 132, 167) transparent transparent transparent;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    display: none;
  }

  // 对话内容区
  .content {
    background-color: rgb(219, 246, 255);
    // color: white;
    box-sizing: border-box;
    height: 82%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 1rem;
    overflow-y: auto;

    // 一个对话
    .dialogbox {
      width: 70%;
      margin: 0 auto;
      display: flex;
      margin-bottom: 2rem;

      // 右边内容区域
      .right {
        margin-top: 0.2rem;
        margin-left: 0.3rem;

        .name {
          font-weight: bold;
          font-size: 0.8rem;
        }

        .res {
          font-size: 0.8rem;
          margin-top: 0.3rem;
          line-height: 1.2rem;
        }
      }
    }
  }

  // 输入区
  .input {
    width: 77%;
    height: 4rem;
    line-height: 4rem;
    position: fixed;
    z-index: 9;
    bottom: 2rem;
    text-align: center;

    .el-input {
      width: 30rem;
      margin: 0 auto;
    }

    .el-button {
      margin-left: 2rem;
    }
  }
}</style>
