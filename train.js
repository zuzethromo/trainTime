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