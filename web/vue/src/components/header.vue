<template>
    <div class="header">
       <div>
           <div class="mytop"></div>
           <div>
               <img src="//ossweb-img.qq.com/upload/webplat/info/yxzj/20190717/830511120753857.jpg" />
           </div>
           <div class="my-navigation">
               <div class="myleft"></div>
               <div>
                  <a href="">
                     <h2>官网首页</h2>HOME    
                  </a> 
               </div>
               <div>
                   <a href="">
                     <h2>游戏资料</h2>DATA    
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>内容中心页</h2>CONTENTS    
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>赛事中心</h2>MATCH   
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>百态王者</h2>CULTURE    
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>社区互动</h2>COMMUNTY    
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>玩家支持</h2>PLAYER   
                  </a>
               </div> 
               <div>
                   <a href="">
                     <h2>欢迎登录</h2>HOME    
                   </a>
               </div>
               <div class="myleft"></div>
           </div>
       </div>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
h2{margin: 0;}
  .header>div>div img{
      width: 100%;
      float: left;
  }
  .mytop{
      height: 60px;
  }
  .my-navigation{
      width: 100%;
      height: 105px;
      background-color:rgba(0, 0, 0, 0.85);
      position: relative;
  }
   .my-navigation>div{
      padding: 15px;
      display:inline-flex;
  }
  .my-navigation .myleft{
      width: 10%;
  }
</style>
