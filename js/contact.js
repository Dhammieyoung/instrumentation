 // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCa4-q8cbEWx6ETMmbbmGQJxSXjptRTk9g",
    authDomain: "assignment-6a280.firebaseapp.com",
    databaseURL: "https://assignment-6a280.firebaseio.com",
    projectId: "assignment-6a280",
    storageBucket: "assignment-6a280.appspot.com",
    messagingSenderId: "1090031469196",
    appId: "1:1090031469196:web:d1cbe5d1719ed40c33b1a9",
    measurementId: "G-5FFRM1QT6J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   console.log("firebase loaded");
  const db= firebase.firestore();
  const firestore = firebase.firestore();
 
  let Name,Email,Subject,Message;
  const submitData = document.getElementById("SubmitData");
 submitData.addEventListener("click", () => {
     Name=document.getElementById("Name").value;
     Email=document.getElementById("Email").value;
     Subject=document.getElementById("Subject").value;
     Message=document.getElementById("Message").value;
 
     if(!Name.match(/^[a-zA-Z]+$/)){
         alert ("Enter Your Name")   
     }
     else if (!Email.includes("@")) {
         alert ("Invalid Email ")   
     }
     else if (!Subject.match(/^[a-zA-Z]+$/)){
         alert ("Enter Your Subject")   
     }
     else if(!Message.match(/^[a-zA-Z0-9]+$/)){
         alert ("Enter Your Message")   
     }
     else{
        
             SendData();
            
     }});
 const SendData =()=>{
     SendTodDatabase();
 }
 const SendTodDatabase = () => {
     let docRef = db.collection("Contact").doc(Subject);
     docRef.set({
     Name: Name,
     Email: Email,
     Subject: Subject,
     Message: Message
     })
     .then(function(){
         console.log("Successfully saved");
         window.location.assign('contact.html')
 
     })
     .catch(function(error){
         console.log("Got an error:",error);
     })
 }