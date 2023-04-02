Vue.component('header-template', {
   template: `
   <header>
      <nav id="mainnavi">
         <!-- <div class="icon"></div> -->
         <div class="sns">
            <a href="https://twitter.com/"><i class="fab fa-behance"></i></a>
         </div>
         <div class="sns">
            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
         </div>
         <div class="sns">
            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i>
            </a>
         </div>
            
         <div class="navilist" id="works">
            <a href="./index.html">Works</a>
         </div>
         <div class="navilist">
         <a href="./about.html">About</a>
         </div>
         <!-- <div class="navilist">
            <a href="https://www.facebook.com/muuuuu.chang" target="_blank">Contact</a>
         </div> -->
      </nav>
   </header>
   `,
})

new Vue({
   el: '#app',
})