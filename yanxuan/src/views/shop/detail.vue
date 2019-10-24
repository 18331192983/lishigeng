<template>
  <div class="box">
      <router-link class="pOne" tag="p" to="/"><i tag="i"  class="el-icon-arrow-left"></i></router-link>
    <div class="block Block">
      <el-carousel height="7.5rem">
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <img :src="item.pic" alt="" class="small">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <p class="pTwo">{{list.basicInfo.characteristic}}</p>
      <p class="pThree">{{list.basicInfo.name}}</p>
      <div class="divOne">
        <p>
          <span class="spanOne">底价¥{{list.basicInfo.minPrice}}</span>
          <span class="spanTwo">原价{{list.basicInfo.originalPrice}}</span>
        </p>
        <p class="pFor">库存{{list.basicInfo.stores}}</p>
      </div>
    </div>
    <div class="color"></div>
    <div class="shop">
      <ul>
        <li>商品介绍</li>
        <li>商品评价</li>
      </ul>
      <div v-html="list.content">

      </div>
    </div>
    <div class="footer">
      <ul>
        <li class="liOne">
          <i class="el-icon-service"></i>
        </li>
        <li class="liOne">
          <i class="el-icon-shopping-cart-2"></i>
        </li>
        <li class="liOne">
          <i class="el-icon-star-off"></i>
        </li>
        <li class="liTwo">立即购买</li>
        <li class="liThree">加入购物车</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Shop from '../../services/shop-services'
const _shop = new Shop()
  export default {
    data() {
      return {
        list:[],
        pics:[]
      }
    },
    created() {
      let { id } = this.$route.query
      _shop.detail(id).then(res=>{
        this.list=res.data.data
        this.pics=res.data.data.pics
        console.log(res.data.data)
      })
    },
  }
</script>

<style lang="scss" scoped>
.Block{
  width: 100%;
  height: 7.5rem;
  img{
    width: 100%;
    height: 7.5rem;
  }
}
.box{
  .pOne{
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 100%;
    background: #f0f0f0;
    z-index: 100;
    i{
      font-size: 0.3rem;
      color: black;
    }
  }
}
.content{
  width: 7rem;
  height: 2.8rem;
  margin: 0 auto;
  .pTwo{
    font-size: 0.3rem;
    padding-top: 0.4rem;
  }
  .pThree{
    margin-top: 0.4rem;
    font-size: 0.2rem;
    color: gray;
  }
  .divOne{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.4rem;
    .spanOne{
      color: red;
      display: inline-block;
      width: 1.3rem;
      font-size: 0.25rem;
    }
    .spanTwo,.pFor{
      color: gray;
      font-size: 0.25rem;
    }
  }
}
.color{
  width: 100%;
  height: 0.2rem;
  background: #f0f0f0;
}
.shop{
  width: 100%;
  ul{
    width: 100%;
    display: flex;
    li{
      width: 50%;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
    }
  }
}
.footer{
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 1rem;
  background: #ffffff;
  border-top: 0.01rem solid #f0f0f0;
  ul{
    width: 100%;
    height: 1rem;
    display: flex;
    box-sizing: border-box;
    .liOne{
      width: 1rem;
      border-right: 0.01rem solid #f0f0f0;
      text-align: center;
      line-height: 1rem;
      i{
        font-size: 0.3rem;
      }
    }
    .liTwo{
      width: 2.25rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.25rem;
    }
    .liThree{
      width: 2.25rem;
      line-height: 1rem;
      text-align: center;
      background: red;
      color: white;
      font-size: 0.25rem;
    }
  }
}
</style>