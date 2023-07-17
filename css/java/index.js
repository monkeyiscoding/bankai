
var link = ""
var count = 0
const firebaseConfig = {
    apiKey: "AIzaSyAZIL3AfPm_p5Rkq7t_a2or8XA1j5-QpkE",
    authDomain: "bankai-b1c82.firebaseapp.com",
    databaseURL: "https://bankai-b1c82-default-rtdb.firebaseio.com",
    projectId: "bankai-b1c82",
    storageBucket: "bankai-b1c82.appspot.com",
    messagingSenderId: "985047293607",
    appId: "1:985047293607:web:7f4eaf032c9aa1e089c582",
    measurementId: "G-SF9V2ZN7TZ"
  };
  
  firebase.initializeApp(firebaseConfig);




  firebase.database().ref('AppData').once('value',(snap)=>{
    link = snap.val().apk_url;
    count = snap.val().clicks +1 ;
  });

setTimeout(function() { hideIntro(); }, 2000);

$(".download-div").css("display","none")

function hideIntro(){
    $("#intro-div").slideUp(600)
    $(".download-div").css("display","flex")
}


function downloadApk(){
    window.open(link)
    firebase.database().ref('AppData').update({
        clicks: count
    })
    count = count+1

}