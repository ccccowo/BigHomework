<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeName = ref('first')
</script>
<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="班级管理" name="first">
                <div class="top">
                    <el-checkbox v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
                    <span>已选 3</span>
                    <el-button class="add" type="primary" size="large">新建班级</el-button>
                </div>

                <ul class="bottom">
                    <li>
                        <a href="javascript:;">
                            <el-checkbox></el-checkbox>
                            <svg class="icon testIcon" aria-hidden="true">
                                <use xlink:href="#icon-a-044_wode"></use>
                            </svg>
                            <!-- <el-button type="primary">班级</el-button> -->
                            <div class="content">
                                22级1班
                                <el-button class="delete" type="danger" :icon="Delete" circle />
                                <el-button class="edit" type="primary" :icon="Edit" circle />
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
    top: 0;
    bottom: 0;
    margin: auto;
    margin-left: 0.5rem;
}

.el-tabs {
    padding: 2rem;

    ::v-deep .el-tabs__item {
        font-size: 1rem;
    }
}

.top {
    height: 2.5rem;
    line-height: 2.5rem;
    position: relative;

    span {
        position: absolute;
        font-size: 0.7rem;
        left: 1.7rem;

    }

    .add {
        float: right;
    }
}

.bottom {
    li {
        height: 4rem;
        line-height: 4rem;
        position: relative;

        a {
            display: block;
            color: black;
        }

        // 图形
        .el-button {
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
        .content {
            width: 90%;
            position: absolute;
            left: 5rem;
            top: 0;
            bottom: 0;
            margin: auto;
            font-size: 0.8rem;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            box-sizing: border-box;

            // 删除和编辑按钮
            .edit {
                position: absolute;
                left: 36rem;
                width: 2rem;
                height: 2rem;
            }

            .delete {
                position: absolute;
                left: 39rem;
                width: 2rem;
                height: 2rem;
            }
        }
    }

    li:hover {
        background-color: rgb(224, 245, 252);
    }
}
</style>