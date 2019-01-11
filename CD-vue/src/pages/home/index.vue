<template>
  <div class="index">
    <div class="line"></div>
    
    <!-- 头部栏 -->
    <div class="header">
      <span>斐丽生物科技[小安]</span>
      <span>联系客服</span>
    </div>
    <!-- 侧导航栏 -->
    <div class="tabbar">
      <ul>
        <!-- logo -->
        <a href="javascript:;">
            <img src="" alt="">
        </a>
        <!-- 导航菜单 -->
        <li @mouseenter="showMenu(0)">订单</li>
        <li @mouseenter="showMenu(1)">商品</li>
        <li @mouseenter="showMenu(2)">库存</li>
        <li @mouseenter="showMenu(3)">评价</li>
        <li @mouseenter="showMenu(4)">报表</li>
      </ul>
    </div>
    <!-- 导航常用菜单栏 -->
    <div class="menu" v-show="showMenuList" @mouseleave= "showMenuList = false,showChildren = false">
      <!-- 导航二级菜单 -->
      <ul class="menuUl">
        <h3>常用</h3>
        <li v-for="( item , index ) in menuListRender" :key="index" class="menuItem">
          <router-link :to="{ path : item.path }"> {{ item.name }} </router-link>
        </li>
      </ul>
      <!-- 展开三级菜单按钮 -->
      <span @click="showChildren1" class="development">展开</span>
    <!-- 导航三级级菜单 -->
      <div class="menuChildren" v-if="showChildren">
        <ul class="menuUl">
          <h3>全部操作</h3>
          <li v-for="( item , index ) in menuListRender" :key="index" class="menuItem">
           <router-link :to="{ path : item.path }"> {{ item.name }} </router-link>
        </li>
        </ul>
      </div>
    </div>
    
   
    <!-- 子路由 -->
    <div class="child">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
          showMenuList: false,
          showChildren: false,
          // 二级导航循环数组
          menuList: [
            [
              {name: '订单',path : '/indexUser'},
              {name: '历史订单',path: ''},
              {name: '快递登记', path: ''},
              {name: '售后(退货退款)', path: ''},
              {name: '售后扫描登记', path: ''},
            ],
            [
              {name: '订单2',path : '123'},
              {name: '历史订单2',path: ''},
              {name: '快递登记2', path: ''},
              {name: '售后(退货退款)2', path: ''},
              {name: '售后扫描登记2', path: ''},
            ],
            [
              {name: '订单3',path : '123'},
              {name: '历史订单3',path: ''},
              {name: '快递登记3', path: ''},
              {name: '售后(退货退款)3', path: ''},
              {name: '售后扫描登记3', path: ''},
            ],
            [
              {name: '订单4',path : '123'},
              {name: '历史订单4',path: ''},
              {name: '快递登记4', path: ''},
              {name: '售后(退货退款)4', path: ''},
              {name: '售后扫描登记4', path: ''},
            ],
            [
              {name: '订单5', path: '123'},
              {name: '历史订单5', path: ''},
              {name: '快递登记5', path: ''},
              {name: '售后(退货退款)5', path: ''},
              {name: '售后扫描登记5', path: ''},
            ],

          ],
          menuListRender: [],//二级菜单循环数据
          menuListRender1 :[],//三级菜单渲染数据
      }
    },
    methods: {
      showMenu( id ){
        
        this.showMenuList=true
        this.menuListRender=this.menuList[id]
      },  
      showChildren1( id ){
        console.log(id)
        this.showChildren = true
      },
    },
    
};
</script>

<style lang='scss'>
html,body{
  background-color: #ECEFF3;
}
.index {
  .tabbar{
    width: 60px;
    height: 100%;
    position: fixed;
    z-index: 99;
    ul {
      height: 100%;
      display: block;
      background-color: #0086F1;
      li{
        line-height: 60px;
        text-align: center;
        color: white;
        cursor: pointer;
        transition: all 0.5s ease 0s;
        &:nth-of-type(1){
          padding-top: 40px;
        }
        &:hover{
          background-color: #259CFC;
        }
      }
      a {
            img {
                background-color: red;
                height: 60px;
                width: 60px;
                display: inline-block;
            }
        }
    }
  }
  .header {
    background-color: #F3F3F3;
    height: 38px;
    position: fixed;
    width: 100%;
    line-height: 38px;
    span {
      float: right;
    }
  }
  .menu {
    position: fixed;
    width: 240px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #d6c8c8;
    padding-left: 60px;
    z-index: 80;
    .menuItem {
      float: left;
      width: 100%;
    }
    .development {
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      color: #11a4ec;
      display: block;
      border: 1px solid #d6c8c8;
      background-color: #fff;
      width: 20px;
      height: 60px;
      border-radius: 0 5px 5px 0;
      font-size: 12px;
      text-align: center;
      padding-top: 10px;
      cursor: pointer;
    }
  }
  .menuChildren {
    position: fixed;
    z-index: 100;
    left: 301px;
    height: 100%;
    background-color: #fff;
    width: 240px;
  }
  .child {
    padding: 60px 80px 20px;
    
  } 
  .menuUl {
    position: absolute;
    padding: 50px 0 0 20px;
    box-sizing: border-box;
    h3 {
      float: left;
      font-size: 22px;
      width: 100%;
    }
    li {
      padding-left: 20px;
      line-height: 40px;
      font-size: 14px;
      box-sizing: border-box;
      &:hover {
        background-color: #F5F7FD;
      }
      a {
        display: block;
        width: 100%;
        text-decoration: none;
        color: #32353a;
      }
    }
  }
}
</style>