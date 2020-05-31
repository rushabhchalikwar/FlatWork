var numberOfWork = 0;

function addTaskToWorkList(){

    var ref = firebase.database().ref("abc");
    ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        numberOfWork++;
        });
    });

    if(numberOfWork !== 0){
        ref.child("Work" + numberOfWork).set("dvk");
        alert(numberOfWork)
    }
}