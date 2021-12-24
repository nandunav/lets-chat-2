const firebaseConfig = {
      apiKey: "AIzaSyD-IE5hRBvkwkv4mPUQgkMCys86kS3jKZw",
      authDomain: "lets-chat-4f99d.firebaseapp.com",
      databaseURL: "https://lets-chat-4f99d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-4f99d",
      storageBucket: "lets-chat-4f99d.appspot.com",
      messagingSenderId: "804622415583",
      appId: "1:804622415583:web:7f5a03db583eeda45f1b6a",
      measurementId: "G-2CLMC48RQP"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
