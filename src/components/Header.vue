<template>
    <div class="head-black">
        <el-row class="container">
            <el-col :span="24">
                <div class="head-box">
                    <el-menu class="el-menu-demo" mode="horizontal" text-color="white">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">分类</template>
                            <el-menu-item index="2-1">分类1</el-menu-item>
                            <el-menu-item index="2-2">分类2</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">实验室</template>
                            <el-menu-item index="3-1">实验室1</el-menu-item>
                            <el-menu-item index="3-2">实验室2</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="4">赞赏</el-menu-item>
                        <el-menu-item index="5">伙伴</el-menu-item>
                        <el-menu-item index="6">留言板</el-menu-item>
                        <el-menu-item index="7">关于</el-menu-item>
                        <div class="search-box" index="">
                            🔍
                        </div>
                        <div class="userinfo" index="">
                            <div class="no-login-box">
                                <a href="javascript:void(0);">登录</a>|<a href="javascript:void(0);">注册</a>
                            </div>
                        </div>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default{
  data () {
    return {

    }
  }
}
</script>

<style type="less">
    .head-black{
        width: 100%;
        background: rgba(40, 42, 44, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
    .container{
        width: 80%;
        margin: 0 auto;
        padding: 0 10px;
    }
    .head-box .el-menu{
        border: none !important;
        color: white !important;
    }
    .search-box{
        height: 60px;
        line-height: 60px;
        float: right;

    }
    .no-login-box{
        height: 60px;
        line-height: 60px;
        float: right;
    }
</style>

<style>
  /* .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } */
</style>
