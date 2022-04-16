function addUser(){
   var username1=document.getElementById("user_name1").value;
   var username2=document.getElementById("user_name2").value;

   localStorage.setItem("username1",username1);
   localStorage.setItem("username2",username2);

   window.location="quiz_game_page.html";

}