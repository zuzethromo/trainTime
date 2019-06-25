let firebaseConfig = {
    apiKey: "AIzaSyCV4KRghjgNWW26puxtV2s3dNAYunIP0S4",
    authDomain: "traintime-1f645.firebaseapp.com",
    databaseURL: "https://traintime-1f645.firebaseio.com",
    projectId: "traintime-1f645",
    storageBucket: "",
    messagingSenderId: "662521316767",
    appId: "1:662521316767:web:add91cf66bbbb72c"
  };

  firebase.initializeApp(firebaseConfig);

  let trainInfo = firebase.database();

  $("#button").on("click", function(event) {
      event.preventDefault();
      let name = $("#name-input").val().trim();
      let destination = $("#destination-input").val().trim();
      let firstTrain = $("#train-input").val().trim();
      let frequency = $("#frequency-input").val().trim();

    let newTrain = {
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };

    trainInfo.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#train-input").val("");
    $("#frequency-input").val("");
  });

trainInfo.ref().on("child_added", function(childSnapshot, prevChildKey) {

    let time = childSnapshot.val().name;
    let timeDestination = childSnapshot.val().destination;
    let timeFrequency = childSnapshot.val().frequency;
    let timeFirstTrain = child.Snapshot.val().firstTrain;

    let timeA = tFirstTrain.split(":");
    let trainTime = moment().hours(timeA[0]).minutes(timeA[1]);
    let maxMoment = moment.max(moment(), trainTime);
    let timeMinutes;
    let timeArrival;

    if (maxMoment === trainTime) {
        timeArrival = trainTime.format("hh:mm A");
        timeMinutes = trainTime.diff(moment(), "minutes");
    }
    else {
        let difference = moment().diff(trainTime, "minutes");
        let remainder = difference % timeFrequency;
        timeMinutes = timeFrequency - remainder; 

        timeArrival = moment().add(timeMinutes, "m").format("hh:mm A");
    }

    console.log("timeMinutes:", timeMinutes);
    console.log("timeArrival:", timeArrival);

    $("#train-table > tbody").append (
        $("<tr>").append(
            $("<td>").text(time),
            $("<td>").text(timeDestination),
            $("<td>").text(timeFrequency), 
            $("<td>").text(timeArrival),
            $("<td>").text(timeMinutes)
        )
    );
});