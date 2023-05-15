//configuring the firebase, just copy and paste from firestore
const firebaseConfig = {
    apiKey: "AIzaSyCKVoVt-_o9A6-C1LJHk9rX7k4dj1B3bEY",
    authDomain: "rnd-v2.firebaseapp.com",
    databaseURL: "https://rnd-v2-default-rtdb.firebaseio.com",
    projectId: "rnd-v2",
    storageBucket: "rnd-v2.appspot.com",
    messagingSenderId: "380456528382",
    appId: "1:380456528382:web:9de3775fb33633fc6bb8af"
};

//intitlising the firebase which comes form script tag
firebase.initializeApp(firebaseConfig);

//refreance your database
var RnDdb = firebase.database().ref('RnD-v2');

document.getElementById('contactForm').addEventListener("submit", submitForm);

//creating submitForm function
function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailId = getElementVal("emailId");
    var phone = getElementVal("phone");
    var msgContent = getElementVal("msgContent");

    //just for consoleLog
    // console.log(name, emailId, phone, msgContent);

    //calling the below function
    saveMessages(name, emailId, phone, msgContent);

    //enable alert
    document.querySelector('.alert').style.display = 'block';

    // for removing the alert after 5 sec
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    contactForm.reset()   //reset the input value after the enter
}

//creating a function to save the details to firebase!!!
const saveMessages = (name, emailId, phone, msgContent) => {
    var newRnDForm = RnDdb.push();

    newRnDForm.set({
        name: name,
        emailId: emailId,
        phoneNo: phone,
        msgContent: msgContent,
    });
};

//after submitting the form scroll up at a level
//because if we dont scroll up we will not able to see the alert msg
let button = document.querySelector('.hero-btn');
button.addEventListener("click", () => {
    scrollTo(0, 880);
})





//getting the forms all element values
const getElementVal = (id) => {
    return document.getElementById(id).value;

}

