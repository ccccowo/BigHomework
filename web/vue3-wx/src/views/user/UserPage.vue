<script setup>
import { ref } from 'vue'
import { updateUserInfoAPI } from '@/api/user.js'
import { uploadImgAPI } from '@/api/imghandle.js'
import { useUserStore } from '../../stores/userStore';

const userStore = useUserStore()
// 本地上传之后回显头像
const imgUrl = ref(userStore.userInfo.avatar)
const file = ref({})
const onShowImg = (f) => {
  imgUrl.value = URL.createObjectURL(f.raw)
  file.value = f
}
// 准备请求参数
const formModel = ref({
  sysId: userStore.userInfo.sysId,
  avatar: userStore.userInfo.avatar,
  roleId: userStore.userInfo.roleId,
  username: userStore.userInfo.username,
  password: userStore.userInfo.password
})
// 取消修改
const onCancel = () => {
  formModel.value = {
    sysId: userStore.userInfo.sysId,
    avatar: userStore.userInfo.avatar,
    roleId: userStore.userInfo.roleId,
    username: userStore.userInfo.username,
    password: userStore.userInfo.password
  }
}
// 确认修改
const onConfirm = async () => {
  // 上传图片
  const filename = file.value.raw.name
  const res = await uploadImgAPI(filename,file.value.raw)
  formModel.value.avatar = res.data
  // 发送请求
  console.log("发送请求")
  console.log(formModel.value)
  const res1 = await updateUserInfoAPI(formModel.value)
  console.log(res1.data)
  // 修改仓库中的和表单中的用户信息
  userStore.updateUserInfo(formModel.value)
  formModel.value = res1.data.data.newInfo
  ElMessage.success("修改成功")
}
</script>
<template>
  <div class="container">
    <div class="info">
      <el-avatar class="left" :src="userStore.userInfo.avatar" />
      <el-descriptions size="large" class="right" :column="2" border>

        <el-descriptions-item>
          <template #label>
            <div>用户名</div>
          </template>
          {{ userStore.userInfo.username}}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div>账号</div>
          </template>
          {{ userStore.userInfo.roleId}}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div>密码</div>
          </template>
          {{ userStore.userInfo.password}}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div>身份</div>
          </template>
          <el-button plain type="primary">教师</el-button>
        </el-descriptions-item>
      </el-descriptions>

    </div>
    <el-divider />
    <div class="update">
      <el-form :model="formModel" label-width="auto">
        <el-form-item class="avatar" label="头像：">
          <el-avatar shape="square" :size="130" :fit="fit" :src="imgUrl" :on-exceed="onExceed" />
          <div class="upload">
            <el-upload v-model:file-list="fileList" :limit="1" :on-change="onShowImg">
              <el-button type="success" plain size="large">上传头像</el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="用户名:">
          <el-input v-model="formModel.username" size="large"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formModel.password" size="large"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button @click="onCancel" size="large" class="btn1">取消</el-button>
          <el-button @click="onConfirm" size="large" type="primary">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-tabs {
  padding: 2rem;

  ::v-deep .el-tabs__item {
    font-size: 0.8rem;
  }

}

.container {
  margin: 3rem;
  display: flex;
  flex-direction: column;
  height: 75vh;
}

// 上部基本信息
.info {
  position: relative;
  display: flex;
  background-color: rgb(216, 252, 241);
  border-radius: 10px;
  height: 8rem;

  .left {
    width: 6rem;
    height: 6rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 2rem;
  }

  .right {
    width: 40%;
    position: absolute;
    margin-left: 10rem;
    top: 1.5rem;
    bottom: 0;

  }
}

// 下部更新部分
.update {
  background-color: rgb(237, 248, 250);
  flex: 1;
  border-radius: 10px;
  position: relative;
  overflow: auto;

  .el-form {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    top: 0;
    bottom: 0;
    left: 2rem;
    margin: auto;

    .el-form-item {
      width: 100%;
      .el-input{
        width: 100%;
      }
    }

    .avatar {
      .upload {
        position: absolute;
        left: 8rem;
      }
    }

    .btn {
      .btn1 {
        margin-left: 12rem;
      }
    }
  }
}
</style>
