function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCvUyXvYwIGnjQBm5rs5Zl6A50rPHNZclg",
      authDomain: "let-s-chat-af0c7.firebaseapp.com",
      projectId: "let-s-chat-af0c7",
      storageBucket: "let-s-chat-af0c7.appspot.com",
      messagingSenderId: "1071896996181",
      appId: "1:1071896996181:web:a372532b16acdace3827dc"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
           console.log("Room Name - " + Room_names);
           row = "<div class = 'room_name' id=" + Room_names + "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
           document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}