<template>
  <div>
    <router-view/>
    <ul class="footer">
      <router-link tag="li" to="/" exact active-class="red">
       <i class="el-icon-s-home"></i>
       <p>首页</p>
      </router-link>
      <router-link tag="li" to="/classify" active-class="red">
        <i class="el-icon-suitcase-1"></i>
        <p>分类</p>
      </router-link>
      <router-link tag="li" to="/cart" active-class="red">
        <i class="el-icon-shopping-cart-2"></i>
        <p>购物车</p>
      </router-link>
      <router-link tag="li" to="/user" active-class="red">
        <i class="el-icon-user"></i>
        <p>个人</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 1.3rem;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0rem;
  background: #ffffff;
  z-index: 99;
  border-top: 0.01rem solid #f0f0f0;
  li{
    width: 25%;
    text-align: center;
    i{
      font-size: 0.25rem;
    }
  }
}
.red{
  color: red;
}
</style>