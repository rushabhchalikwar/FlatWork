function readData(){

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           // Get a reference to the database service
  var ref = firebase.database().ref('WorkList');
    
  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      var x = document.getElementById("WorkListDropDown");
      var option = document.createElement("option");
      option.text = childData;
      x.add(option);
      // ...
    });
  });
          // ...
        } else {
          // User is signed out.
          // ...
          alert("Sign out successfully");
        }
      });
      
}