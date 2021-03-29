<template>
    <div>
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
    <!-- <div class="nav-box">
        <ul class="nav-left-box">
            <li>
                <a href="#">首页</a>
            </li>
            <li>
                <a href="#">分类</a>
            </li>
            <li>
                <a href="#">实验室</a>
            </li>
            <li>
                <a href="#">赞赏</a>
            </li>
            <li>
                <a href="#">伙伴</a>
            </li>
            <li>
                <a href="#">留言板</a>
            </li>
            <li>
                <a href="#">关于</a>
            </li>
        </ul>
        <ul class="nav-right-box">
            <li>
                <a href="#">登录</a>
            </li>
            <li>
                <a href="#">注册</a>
            </li>
            <li>
                <a href="#"></a>
            </li>
        </ul>
    </div> -->
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
    .nav-box{

    }
    .nav-box .nav-left-box{
        background-color: skyblue;
    }
    .nav-box .nav-right-box{
        bakckground-color: red;
    }
</style>

<style>
  .el-col {
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
  }
</style>
