<template>
    <div class="header">
       <div>
           <div class="mytop"></div>
           <div class="my_img">
                  <img src="//ossweb-img.qq.com/upload/webplat/info/yxzj/20190717/830511120753857.jpg" />
            </div> 
           <div class="my-navigation">
               <div class="myleft"></div>
               <div>
                  <a href="">
                     <h2>官网首页</h2> 
                     <p>HOME</p>  
                  </a> 
               </div>
               <div>
                   <a href="">
                     <h2>游戏资料</h2>
                     <p>DATA</p>   
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>内容中心页</h2>
                     <p>CONTENTS</p>    
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>赛事中心</h2> 
                     <p>MATCH</p>
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>百态王者</h2>
                     <p>CULTURE</p>    
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>社区互动</h2>    
                     <p>COMMUNTY</p>
                  </a>
               </div>
               <div>
                   <a href="">
                     <h2>玩家支持</h2>
                     <p>PLAYER</p>   
                  </a>
               </div> 
               <div>
                   <a href="">
                     <h2>欢迎登录</h2> 
                     <p>HOME</p>   
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

a{text-decoration:none}
/* 首页背景图片 样式 */
 .my_img img{
   position:absolute;
    width: 100%;
 }
 /* 首页导航上部 空白区域 */
  .mytop{
      height: 60px;
  }
  /* 导航条 */
  .my-navigation{
      position:absolute;
      background-color:rgba(30, 28, 31, 0.9); 
      width: 100%;  
  }
   .my-navigation>div{
      display:inline-flex; 
      padding:0 40px 0px;    
  }
  /* 导航 字体样式 */
  .my-navigation>div>a p{
    text-align:center;  
    color:rgb(117, 117, 117);  
  }
   .my-navigation>div>a{
       color: #bdbdbd
   }
  .my-navigation .myleft{
      width: 10%;
  }
</style>
