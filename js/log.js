var firebaseConfig = {
  apiKey: "AIzaSyDL6Cp5LNTd18kA_-ZnunwmWLcYejIQTKA",
  authDomain: "trials-5ee12.firebaseapp.com",
  databaseURL: "https://trials-5ee12.firebaseio.com",
  projectId: "trials-5ee12",
  storageBucket: "",
  messagingSenderId: "922186205784",
  appId: "1:922186205784:web:06d147bfd9b210f3"
};
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 console.log("firebase loaded");

 let Email,Pass, Logcode,course;
 const loginpage =document.getElementById("loginbtn");
 loginpage.addEventListener('click', ()=>{
   Email =document.getElementById("Email").value;
   Pass = document.getElementById("Password").value;
   //Logcode=document.getElementById("Logcode").value

   if (!Email.includes("@")) {
    alert ("Invalid Email ")  
}
else if (!Pass.match(/^[a-zA-Z-0-9]+$/)){
  alert("Enter your Password") 
}

else {
  firebase.auth().signInWithEmailAndPassword(Email,Pass).then(function(){
       //initialze loginpage and send the user there
       window.location.assign('course.html')
  
  }).catch(function(error){
//handle errors here
var errorCode = error.code;
var errorMessage = error.message;
//console.log("error:" +error.code);   
})
}});
  
 

  

     
  
