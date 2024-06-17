// Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to submit comment
function submitComment() {
    var comment = document.getElementById('comment').value;
    firebase.database().ref('comments').push().set({
        "comment": comment
    });
}

// Function to fetch comments
firebase.database().ref('comments').on('value', function (snapshot) {
    var comments = document.getElementById('comments');
    comments.innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        var commentElement = document.createElement("p");
        commentElement.textContent = childData.comment;
        comments.appendChild(commentElement);
    });
});
