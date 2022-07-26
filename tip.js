let totalTip = document.getElementById("totalTip");
let calculate = document.getElementById("calculate");
let each = document.getElementById("each");


function calcu() {
    let amount = document.getElementById("amount").value;
    let peopleAmount = document.getElementById("peopleamount").value;
    let exprencie = document.getElementById("expamount").value;



    if (amount === "" || exprencie == 0) {
        // console.log("fix the problrm");
        alert("fix the issue")
        return;
    }
    if (peopleAmount === "" || peopleAmount <= 1) {
        peopleAmount = 1;
        each.style.display = "none"


    } else {
        each.style.display = "block"
    }


    let total;
    total = (amount * exprencie) / peopleAmount;
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

calculate.addEventListener("click", () => {
    calcu();
});