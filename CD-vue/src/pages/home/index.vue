<template>
    <div class="container">
        <div class="header">
            <span class="kefu">联系客服[张三]</span>
        </div>
        <!-- 侧边栏 -->
        <div class="subtabbar">
            <ul>
                <a href="javascript:;">
                     <img src="" alt="" >
                </a>
                <li>订单</li>
                <li>商品</li>
                <li>库存</li>
                <li>评价</li>
                <li>报表</li>
            </ul>
        </div>
      
        <div class="menu">
            <!-- 二级菜单 -->
            <div class="erji">
                <ul class="menu1">
                <h3>常用</h3>
                <li>订单</li>
                <li>历史订单</li>
                <li>快速登记</li>
                <li>售后(退货退款)</li>
                <li>售后扫描登记</li>
            </ul>
            <span>展开</span>
            </div>
            
            <!-- 三级菜单 -->
            <div class="sanji">
                
                <ul class="menu1">
                    <h3>全部操作</h3>
                    <li>订单</li>
                    <li>历史订单</li>
                    <li>快速登记</li>
                    <li>售后(退货退款)</li>
                    <li>售后扫描登记</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
    .container{
        .header{
            width:100%;
            height:60px;
            background-color:skyblue;
            position:fixed;
            .kefu{
                float:right;
                text-align: center;
                line-height:60px;
                font-size:24px;
            }
        }
        .subtabbar{
            position:fixed;
            height:100%;
            width:60px;
            background-color: pink;
            z-index: 99;
            a img{
                width:60px;
                height: 60px;
                background-color: yellow;
            }
            ul{
                height:100%;
                li{
                width:60px;
                height: 60px;
                background-color:pink;
                text-align: center;
                line-height: 60px;
                cursor: pointer;
                color:#fff;
                &:nth-of-type(1){
                    margin-top:40px;
                }
                }
            }
         
        }
        .menu{
            position:fixed;
            width:300px;
            height:100%;
            border-right:1px solid #ccc;
            background-color: #fff;
            left:60px;
            z-index: 80;
            .menu1{
                padding-left:30px;
                padding-top:40px;
                height:100%;
                width:100%;
                background-color: #fff;
               
            }
            .erji{
            position:absolute;
             border-right:1px solid #ddd;
            width:150px;
            height:100%;
            background-color: red;
            
            
            }
            .sanji{
            position:absolute;
            margin-left:152px;
            width:150px;
            height:100%;
            background-color: yellow;
            
            }
        
        }
        
    }
</style>

