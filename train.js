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

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#train-input").val("");
    $("#frequency-input").val("");
  });