// PhotoとDesignのタブをクリックした時にコンテンツを表示する関数
function openTab(evt, tabName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].classList.remove("active");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.classList.add("active");
 }
 
 // 初期表示としてPhotoのコンテンツを表示する
 document.getElementById("photo").style.display = "block";
 document.getElementsByClassName("tablinks")[0].classList.add("active");