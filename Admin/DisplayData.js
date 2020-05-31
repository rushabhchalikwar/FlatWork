function displayData(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           // Get a reference to the database service
  var ref = firebase.database().ref('UserList');
    
  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
        
      var x = document.getElementById("UserListDropdown");
      var option = document.createElement("option");
      option.text = childKey;
      x.add(option);
      // ...
    });
  });
          // ...
        } else {
          // User is signed out.
          // ...
          
        }
      });
      
}


var garbage = {
  
}

var washingVessels = {
  
}

var waterBottel = {
  
}

function viewData(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           // Get a reference to the database service
  var ref = firebase.database().ref('UserList');
    
  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      var selectedValue = document.getElementById("UserListDropdown").value;
        
        if(selectedValue == childKey){
            var newRef = firebase.database().ref('UserList').child(childKey + '/Garbage/');
            newRef.once('value').then(resolve => updateGarbage(resolve.val()))

            newRef = firebase.database().ref('UserList').child(childKey + '/WashingVessels/');
            newRef.once('value').then(resolve => updateWashingVessels(resolve.val()))

            newRef = firebase.database().ref('UserList').child(childKey + '/WaterBottle/');
            newRef.once('value').then(resolve => updateWaterBottle(resolve.val()))
        }

      // ...
    });
  });
          // ...
        } else {
          // User is signed out.
          // ...
          
        }
      });
}

function updateGarbage(garbageObj){
  garbage = {
    'Count' : garbageObj.Count,
    'LatestDate' : garbageObj.LatestDate
  }
}


function updateWashingVessels(obj){
  washingVessels = {
    'Count' : obj.Count,
    'LatestDate' : obj.LatestDate
  }
}


function updateWaterBottle(obj){
  waterBottel = {
    'Count' : obj.Count,
    'LatestDate' : obj.LatestDate
  }

  setInTable()
}


function setInTable(){
    //For Garbage
    document.getElementById('garbageCount').innerHTML = garbage.Count
    document.getElementById('garbageDate').innerHTML = garbage.LatestDate

    //For Washing Vessels
    document.getElementById('wvCount').innerHTML = washingVessels.Count
    document.getElementById('wvDate').innerHTML = washingVessels.LatestDate

    //For Water Bottle
    document.getElementById('wbCount').innerHTML = waterBottel.Count
    document.getElementById('wbDate').innerHTML = waterBottel.LatestDate
}