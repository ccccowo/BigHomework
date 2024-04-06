<script setup>
import { ref } from 'vue'
import {Edit,Delete} from '@element-plus/icons-vue'
const activeName = ref('first')

const checkAll = ref(false)
const checkedCities = ref([])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val) => {
  console.log(val);
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>
<template>
  <div>
    <el-tabs  type="card" v-model="activeName" class="demo-tabs" @tab-click="handleClick">

      <el-tab-pane label="未开始" name="first">
        <div class="top">
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
          <span>已选 3</span>
        </div>
        <ul class="bottom">
          <li> 
            <a href="javascript:;">
              <el-checkbox ></el-checkbox>
              <svg class="icon testIcon" aria-hidden="true">
                <use xlink:href="#icon-a-044_shige"></use>
              </svg>
              <!-- <el-button type="primary">考试</el-button> -->
              <div class="content">
                2023年上学期第三次月考
                <el-button class="start" type="primary">录入试卷</el-button>
              </div>
            </a>
          </li>
          <li> 
            <a href="javascript:;">
              <el-checkbox ></el-checkbox>
              <svg class="icon testIcon" aria-hidden="true">
                <use xlink:href="#icon-a-044_shige"></use>
              </svg>
              <!-- <el-button type="primary">测试</el-button> -->
              <div class="content">
                2023年上学期第一次期末考试
                <el-button class="start" type="primary">录入试卷</el-button>
              </div>
            </a>
          </li>
        </ul>

        <div class="test"></div>
      </el-tab-pane>

      <el-tab-pane label="进行中" name="second">
        <div class="top">
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
          <span>已选 3</span>
        </div>

        <ul class="bottom">
          <li> 
            <a href="javascript:;">
              <el-checkbox ></el-checkbox>
              <svg class="icon testIcon" aria-hidden="true">
                <use xlink:href="#icon-a-044_shige"></use>
              </svg>
              <!-- <el-button type="primary">考试</el-button> -->
              <div class="content">
                2023年上学期第二次月考
                <el-button class="start" type="primary">继续录入</el-button>
              </div>
            </a>
          </li>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="已完成" name="three">
        <div class="top">
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
          <span>已选 3</span>
        </div>

        <ul class="bottom">
          <li> 
            <a href="javascript:;">
              <el-checkbox ></el-checkbox>
              <svg class="icon testIcon" aria-hidden="true">
                <use xlink:href="#icon-a-044_shige"></use>
              </svg>
              <!-- <el-button type="primary">考试</el-button> -->
              <div class="content">
                2023年上学期第一次月考
                <!-- <el-button class="delete" type="danger" :icon="Delete" circle />
                <el-button class="edit"  type="primary" :icon="Edit" circle /> -->
              </div>
            </a>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="scss" scoped>
// 图标
.testIcon {
  width: 3rem;
  height: 3rem;
  margin: 0;
  position: absolute;
  top:0;
  bottom :0;
  margin: auto;
  margin-left: 0.5rem;
}
.el-tabs {
  padding: 1rem;
  // 修改字体大小
  ::v-deep .el-tabs__item {
    font-size: 16px;
  }

  .el-tab-pane {
    .top{
      height: 2.5rem;
      line-height: 2.5rem;
      position: relative;
      span{
        position: absolute;
        font-size: 0.7rem;
        left: 1.7rem;

      }
      .add {
        float: right;
      }
    }
    .bottom{
      li{
        height: 4rem;
        line-height: 4rem;
        // 开启相对定位
        position: relative;
        a{
          display: block;
          color: black;
        }
        // 考试图形
        .el-button{
          position: absolute;
          width: 2.5rem;
          height: 2.5rem;
          left: 1.5rem;
          top: 0;
          bottom: 0;
          margin: auto;
          font-size: 0.9rem;
        }
        // 内容部分
        .content{
          width: 90%;
          position: absolute;
          left: 5rem;
          top: 0;
          bottom: 0;
          margin: auto;
          font-size: 0.8rem;
          border-bottom: 1px solid rgba(0,0,0,.1);
          box-sizing: border-box;
          // 开始录入按钮
          .start{
            position: absolute;
            left: 40rem;
            width: 5rem;
            height: 2rem;
            font-size: 0.7rem;
          }
          // 删除和编辑按钮
          .delete{
            position: absolute;
            left: 41rem;
            width: 2rem;
            height: 2rem;
          }
        }
      }
      li:hover{
        background-color: rgb(224, 245, 252);
      }
    }

  }
}
</style>