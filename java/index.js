const firebaseConfig = {
  apiKey: "AIzaSyAZIL3AfPm_p5Rkq7t_a2or8XA1j5-QpkE",
  authDomain: "bankai-b1c82.firebaseapp.com",
  databaseURL: "https://bankai-b1c82-default-rtdb.firebaseio.com",
  projectId: "bankai-b1c82",
  storageBucket: "bankai-b1c82.appspot.com",
  messagingSenderId: "985047293607",
  appId: "1:985047293607:web:c9d4af9b7a0f250e89c582",
  measurementId: "G-T99R64GE48",
};

firebase.initializeApp(firebaseConfig);


  var dataRef = firebase.database().ref("Top");


  dataRef.on("value", function (snapshot) {
      if(snapshot.exists()){
    
          var title = snapshot.val().title
          var story = snapshot.val().story
          var des = snapshot.val().description
          var language = snapshot.val().language
          var imdb = snapshot.val().imdb
          var thumbnail = snapshot.val().thumbnail
          

          $("#title").html(title)
          $("#des").html(des)
          $("#language").html(language)
          $("#story").html(story)
          $("#imdb").html(imdb.replace("IMDB",""))
          $(".thumbnail-div").css("background-image","url("+thumbnail+")")
    
      }

    

      
    });

 
      var query = firebase
      .database()
      .ref("top_treandings");
    query.once("value", function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
      
          var title = childSnapshot.val().title;
          var epkey = childSnapshot.val().key;
          var poster = childSnapshot.val().poster_url;
          var stream = childSnapshot.val().stream_url;
          var download = childSnapshot.val().download_url;
          var language = childSnapshot.val().language;
          var mydiv = document.getElementById("top-trending-list");
          mydiv.innerHTML +=
          `
          <div class="anime-card">
          <img onClick="" style="width: 100px; height: 160px;"  src="${poster}" alt="" />
          <div style=" display: block; height: 100%; margin-left: 5px;" >
            <h6 style="margin-left: 5px;margin-top: 20px;" class="title">${title}</h6>
            <h6 style="margin-left: 5px;margin-top: 20px; margin-right: 0px; font-size: 12px; font-weight: 100;">${language}</h6>
            <button class="button-view">View</button>
          </div>
        </div>
  
  
  
         `;
        });
      } else {
        var mydiv = document.getElementById("episodes-list");
        mydiv.innerHTML = "";
        episodeCount = 1;
      }
    });
    


      var query = firebase
      .database()
      .ref("Hindi");
    query.once("value", function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
      
          var title = childSnapshot.val().title;
          var epkey = childSnapshot.val().key;
          var thumbnail = childSnapshot.val().thumbnail_url;
          var stream = childSnapshot.val().stream_url;
          var download = childSnapshot.val().download_url;
          var language = childSnapshot.val().language;
          var mydiv = document.getElementById("hindi-list");
          mydiv.innerHTML +=
          `
  
      <div  style="padding: 0px;" class="anime-card-thumb col-xl-3">
        <img onClick="" style="width: 220px; height: 120px;" class="anime-poster" src="${thumbnail}" alt="" />
  
  
      
      </div>
  
  
         `;
        });
      } else {
        var mydiv = document.getElementById("episodes-list");
        mydiv.innerHTML = "";
        episodeCount = 1;
      }
    });
    