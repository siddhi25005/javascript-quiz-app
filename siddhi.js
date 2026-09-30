// ---------------- ELEMENTS ----------------

let a = document.querySelectorAll(".answer");

let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");

let btn = document.querySelector("#btn");
let bt = document.querySelector("#bt");

let ques = document.querySelector("#ques");

let twotext = document.querySelector("#twotext");
let threetext = document.querySelector("#threetext");
let fourtext = document.querySelector("#fourtext");
let fivetext = document.querySelector("#fivetext");

let name = document.querySelector("#name1");

let stud = document.querySelector("#stud1");


// ---------------- QUESTIONS ----------------

let ques1 = [
    "What is capital of India?",
    "What do we use to charge a phone?",
    "How many days are there in a week?",
    "What is the chemical formula of water?"
];


// ---------------- OPTIONS ----------------

let two1 = [
    "Mumbai",
    "Charger",
    "5",
    "CO₂"
];

let three1 = [
    "Delhi",
    "Speaker",
    "6",
    "H₂O"
];

let four1 = [
    "Jaipur",
    "Keyboard",
    "7",
    "O₂"
];

let five1 = [
    "MP",
    "Mouse",
    "8",
    "NaCl"
];


let r = [
    "Delhi",
    "Charger",
    "7",
    "H₂O"
];




let c = 0;

let score = 0;

let answered = false;

let studentName = "";



btn.disabled = true;




bt.addEventListener("click", function () {

    // Check name
    if (name.value.trim() === "") {

        alert("Please enter your name");

        return;
    }



    studentName = name.value.trim();



    c = 0;

    score = 0;

    answered = false;


   
    ques.textContent = ques1[c];


    twotext.textContent = two1[c];

    threetext.textContent = three1[c];

    fourtext.textContent = four1[c];

    fivetext.textContent = five1[c];


    
    two.value = two1[c];

    three.value = three1[c];

    four.value = four1[c];

    five.value = five1[c];


    a.forEach(function (a1) {

        a1.checked = false;

    });


    bt.disabled = true;


    btn.disabled = false;


    btn.textContent = "Next";

});




a.forEach(function (a1) {

    a1.addEventListener("change", function () {


        

        if (answered === true) {

            return;
        }



        if (r[c] === a1.value) {

            score++;

            console.log("Correct");

        }

        else {

            console.log("Wrong");

        }
        answered = true;

    });

});


// ---------------- NEXT / SUBMIT ----------------

btn.addEventListener("click", function () {


    // If current question is last question

    if (c === ques1.length - 1) {


        console.log("Quiz Finished");


        // Create new table row

        let row = stud.insertRow(-1);


        // Create name cell

        let nameCell = row.insertCell(0);

        nameCell.textContent = studentName;


        // Create marks cell

        let marksCell = row.insertCell(1);

        marksCell.textContent = score;


        console.log("Name:", studentName);

        console.log("Marks:", score);


        // Quiz finished

        btn.textContent = "Finished";

        btn.disabled = true;


        // Allow next student

        bt.disabled = false;


        // Clear input

        name.value = "";


        return;

    }


    // ---------------- NEXT QUESTION ----------------

    c++;

    answered = false;


    // Change question

    ques.textContent = ques1[c];


    // Change options

    twotext.textContent = two1[c];

    threetext.textContent = three1[c];

    fourtext.textContent = four1[c];

    fivetext.textContent = five1[c];


    // Change values

    two.value = two1[c];

    three.value = three1[c];

    four.value = four1[c];

    five.value = five1[c];


    // Unselect previous answer

    a.forEach(function (a1) {

        a1.checked = false;

    });


    // Last question

    if (c === ques1.length - 1) {

        btn.textContent = "Submit";

    }

    else {

        btn.textContent = "Next";

    }

});
