function addData(){


  var ref = firebase.database().ref('UserList');
    
  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var name = childSnapshot.key;
      var emailFromDatabase = childSnapshot.child("email").val();
      var loggedEmail = firebase.auth().currentUser.email;

      if(emailFromDatabase == loggedEmail){
          var selectedValue = document.getElementById("WorkListDropDown").value;          
          var taskCount = childSnapshot.child(selectedValue).child("Count").val();
          ref.child(name).child(selectedValue).child('Count').set(taskCount + 1);
          ref.child(name).child(selectedValue).child('LatestDate').set(getMonthName()) 
          alert("Successfully Added");       
      }
    });
  });
}

function getMonthName(){
  var today = new Date();
  var day = today.getDate()
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var monthName = month[today.getMonth()];

  return day + "-" + monthName
}