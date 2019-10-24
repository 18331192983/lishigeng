<template>
  <div>
    <div class="content">
      <div class="input-text">
        <input type="text" placeholder="手机号" v-model="phone">
        <i class="el-icon-phone"></i>
      </div>
      <div class="input-text">
        <input type="password" v-model="password" placeholder="密码" ref="password">
        <i class="el-icon-view" @click="text" :class="{blue:isShow}"></i>
      </div>
      <div class="input-text">
        <input type="password" v-model="passwords" placeholder="密码" ref="passwords">
        <i class="el-icon-view" @click="texts" :class="{blue:isShows}"></i>
      </div>
      <div class="input-text">
        <input type="text" placeholder="用户名" v-model="user">
        <i class="el-icon-user-solid"></i>
      </div>
      <div class="input-code">
        <input type="text" v-model="picCode">
        <img :src="`https://api.it120.cc/small4/verification/pic/get?key=${this.sj}`" alt="" @click="images">
      </div>
      <select name="" id="">
        <option value="">123</option>
        <option value="">123</option>
        <option value="">123</option>
        <option value="">123</option>
      </select>
      <select name="" id="">
        <option value="">123</option>
        <option value="">123</option>
        <option value="">123</option>
        <option value="">123</option>
      </select>
      <div class="input-number">
        <input type="text" v-model="shuzi">
        <p @click="shouji">获取验证码</p>
      </div>
      <div class="zhuce" @click="zhuce">立即注册</div>
    </div>
  </div>
</template>

<script>
import Shouye from '../../services/shouye-services'
const _shouye= new Shouye()
  export default {
    data() {
      return {
        isShow:false,
        isShows:false,
        password:"",//密码
        phone:'',//手机号
        passwords:'',//确认密码
        user:'',//用户名
        picCode:'',//图形验证那
        codes:'',//获取图形验证码
        shuzi:'',//手机验证码
        sj:new Date().getTime() //毫秒
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
      texts(){
        if(this.$refs.passwords.type=="password"){
          this.$refs.passwords.type="text"
        }else if(this.$refs.passwords.type=="text"){
          this.$refs.passwords.type="password"
        }
        this.isShows=!this.isShows
      },
      images(){
          _shouye.code().then(res=>{
          this.codes=res.config.url
        })
      },
      shouji(){
        let obj={
          mobile:this.phone,
          key:this.sj,
          picCode:this.picCode
        }
        _shouye.shouji(obj).then(res=>{
        console.log(res)

      })
      },
      zhuce(){
        let obj={
          mobile:this.phone,
          pwd:this.password,
          code:this.shuzi
        }
        _shouye.zhuce(obj).then(res=>{
          if(res.data.code==0){
              this.$router.push('/login')
              alert('注册成功')
            }else{
              alert("注册失败")
            }
        })
      }
    },
    created() {
      

    },
  }
</script>

<style lang="scss" scoped>
.content{
  width: 6.68rem;
  margin: 1rem auto;
  height: 10rem;
  .input-text{
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
.blue{
  color: #60a5f8;
}
.input-code{
  width: 5.4rem;
    height: 1rem;
    background: #f5f5f5;
    margin: 0.4rem auto;
    display: flex;
    align-items: center;
    input{
      width: 3rem;
      height: 0.5rem;
      outline: none;
      margin-left: 0.2rem;
      font-size: 0.25rem;
      background: #f5f5f5;
      border: none;
    }
    img{
      width: 2.4rem;
      height: 100%;
    }
}
.input-number{
    width: 5.4rem;
    height: 1rem;
    background: #f5f5f5;
    margin: 0.4rem auto;
    display: flex;
    align-items: center;
    input{
      width: 3rem;
      height: 0.5rem;
      outline: none;
      margin-left: 0.2rem;
      font-size: 0.25rem;
      background: #f5f5f5;
      border: none;
    }
    p{
      width: 2.4rem;
      height: 100%;
      font-size: 0.3rem;
      line-height: 1rem;
      text-align: center;
    }
}
.zhuce{
    width: 4.2rem;
    height: 0.8rem;
    background: #60a5f8;
    color: white;
    line-height: 0.8rem;
    font-size: 0.35rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    text-align: center;
}
</style>