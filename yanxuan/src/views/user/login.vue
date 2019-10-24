<template>
  <div>
    <div class="content">
      <p class="pOne">账号登录</p>
      <div class="phone">
        <input type="text" v-model="phone" placeholder="手机号码">
        <i class="el-icon-phone"></i>
      </div>
      <div class="phone">
        <input type="password" v-model="password" placeholder="密码" ref="password">
        <i class="el-icon-view" @click="text" :class="{blue:isShow}"></i>
      </div>
      <div class="login">
        <p class="pTwo" @click="denglu(phone,password)">登录</p>
      </div>
      <div class="divOne">忘记密码</div>
      <router-link to="/register" tag="div" class="divTwo">还没有注册？立即注册</router-link>
    </div>
  </div>
</template>

<script>
import Shouye from '../../services/shouye-services'
const _shouye= new Shouye()
  export default {
    data() {
      return {
        phone:'',
        password:'',
        isShow:false
      }
    },
    methods: {
      text(){
        if(this.$refs.password.type=="password"){
          this.$refs.password.type="text"
        }else if(this.$refs.password.type=="text"){
          this.$refs.password.type="password"
        }
        this.isShow=!this.isShow
      },
        denglu(phone,password){
          let obj={
            mobile:phone,
            pwd:password
          }
          _shouye.login(obj).then(res=>{
            if(res.data.code==0){
              this.$router.push('/')
            }else{
              alert("手机号错误")
            }
            
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
.content{
  width: 6.68rem;
  margin: 1rem auto;
  height: 7.5rem;
  .pOne{
    font-size: 0.4rem;
    margin-left: 0.6rem;
  }
  .phone{
    width: 5.4rem;
    height: 1rem;
    background: #f5f5f5;
    line-height: 1rem; 
    margin: 0.4rem auto;
    input{
      width: 4.5rem;
      height: 0.5rem;
      outline: none;
      margin-left: 0.2rem;
      font-size: 0.25rem;
      background: #f5f5f5;
      border: none;
    }   
    i{
        font-size: 0.3rem;
      }                                                                            
  }
}
.login{
  width: 100%;
  text-align: center;
  .pTwo{
    width: 4.2rem;
    height: 0.8rem;
    background: #60a5f8;
    color: white;
    line-height: 0.8rem;
    font-size: 0.35rem;
    margin: 0 auto;
    border-radius: 0.1rem;
  }
}
.divOne{
  width: 100%;
  text-align: center;
  margin-top: 0.3rem;
  font-size: 0.25rem;
}
.divTwo{
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
  color: #60a5f8;
  margin-top: 0.3rem;
}
.blue{
  color: #60a5f8;
}
</style>