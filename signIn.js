function signIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorCode);
        // ...
      });


      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = "index.html";
        } else {
          // User is signed out.
          // ...
          alert("Sign out");
        }
      });      
}

function signInWithGoogle(){
    alert("Under Construction");
}



function signOut(){
    firebase.auth().signOut().then(function() {
        window.location.href = "index.html";
      }).catch(function(error) {
        alert(error.message);
      });
}