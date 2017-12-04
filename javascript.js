var config = {
    apiKey: "AIzaSyA646wP47lzkvK-nKVeNTh4fZl6z4YKfZg",
    authDomain: "friendlychat-8d39b.firebaseapp.com",
    databaseURL: "https://friendlychat-8d39b.firebaseio.com",
    projectId: "friendlychat-8d39b",
    storageBucket: "friendlychat-8d39b.appspot.com",
    messagingSenderId: "755875730445"
};
firebase.initializeApp(config);
userRef = firebase.database().ref('users/');
var userLogin;
$('#submit').on('click', function (event) {
    event.preventDefault();
    var message = $('#message').val();
    userRef.push({
        name:userLogin,
        message:message,
    });
    $('#message').val('');
});
userRef.on('child_added', function (snapshot) {
    var message = snapshot.val();
    $('#messages').append($('<p>' + message.name + ' : ' + message.message + '</p>'));
});
$('#login').on('click', function(){
    userLogin = $('#name').val();
    $('#name').val(''); 
    firebase.auth().signInAnonymously().catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage);
    });
});
$('#logout').on('click',function(){
    firebase.auth().signOut();
});
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
  var user = firebase.auth().currentUser;
  
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }