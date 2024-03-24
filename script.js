let userName = "Muteeb";
let password = 123;

document.getElementById("concat").onclick = () => {
    let w1 = prompt("Enter First string please.");
    let w2 = prompt("Enter second string please.");
    let concat = w1+ " " +w2;
    document.getElementById("statement").innerHTML = `You entered \"${w1}\" and \"${w2}\".`
    document.getElementById("result").innerHTML    = `The concated string is \"${concat}\".<br>Thanks! try it again.`
}

document.getElementById("ask").onclick  = () => {
    let num = +prompt("Enter a number please.")
} 

document.getElementById("compare").onclick   = () => {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("statement").innerHTML = ""
    document.getElementById("statement").innerHTML = "<ul class='left'><li>&lt;</li><li>&gt;</li><li>&lt;=</li><li>&gt;=</li><li>!=</li><li>==</li><li>===</li></ul>";
}

document.getElementById("if-else-if").onclick  = () => {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    let price = +prompt("Enter the shopping price."); 
    document.getElementById("statement").innerHTML = `<h3>Discount Criteria</h3><br><code>if (price<1000) You can avail 30% Discount!<br> else if(price<1500) You can avail 40% Discount!<br> else if(price>2000) You can avail 50% Discount! <br>else Enjoy your Shopping!</code><br><b>And your price is ${price}</b>`
    if (price<1000) {
        document.getElementById("result").innerHTML = "You can avail <b>30%</b> Discount!."
    }
    else if(price<1500){
        document.getElementById("result").innerHTML = "You can avail <b>40%</b> Discount!."
    }
    else if(price>2000) {
        document.getElementById("result").innerHTML = "You can avail <b>50%</b> Discount!."
    }
    else{
        document.getElementById("result").innerHTML = "Enjoy your Shopping!."
    }
}

document.getElementById("test").onclick             = () => {
    document.getElementById("statement").innerHTML = "<h4>Check condition for ID card</h4>"
    document.getElementById("result").innerHTML = "Using the <b>if-else statement</b> we can check that you are eligible for ID card or not it would check a single condition that are you <b>18 or above</b> if the condition met is true then you are eligible <b>else</b> not."
}

document.getElementById("ifNested").onclick      = () => {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    let score = +prompt("Enter your score, out of hundred");  
    if(score>=80){
        let attendence = +prompt("Enter your attendence please in %, dont write \"%\" with it");    
        if(attendence>=80){
            document.getElementById("result").innerHTML = `<h4>Congrats you are Eligible!</h4><br>And your attendence that you entered is <b>${attendence}%</b>.`
        }
        else{
            document.getElementById("result").innerHTML = `<h4>Unfortunately your attendence is short!.</h4><br>And your attendence that you entered is <b>${attendence}%.</b>`
        }
    }
    else{
        document.getElementById("result").innerHTML = "<h4>You are absolutely not eligible!.</h4>"
    }
    document.getElementById("statement").innerHTML = `<h3>Scholarship Merit Calculation</h3><br>You are only eligible if the score is <b>80</b> or above and your attendence is atleast <b>85</b>.<br>And your marks that you entered are <b>${score}</b>.`
}

document.getElementById("login").onclick = () => {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    const username = prompt("Enter username, write \"Rayyan\"");
    if (username === "nouman") {
        const pass = prompt(`Welcome ${username} Enter password, write 123`);
        if (pass === "123") {
            alert("Login Successful!");
            document.getElementById("result").innerHTML = "<h1>You are now successfully logged in.</h1>";
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Username not found. Please try again or register if you don't have an account.");
    }
}

document.getElementById("check").onclick = () => {
    const fruitArr = ['mango', 'apple', 'banana', 'grapes', 'strawberry', 'watermelon', 'kiwi'];
    const fruit = prompt("Welcome to our shop! Which fruit do you want?").toLowerCase();
    let message;

    if (fruitArr.includes(fruit)) {
        message = `\"${fruit}\" is available.`;
    } else {
        message = `We are really sorry, \"${fruit}\" is not available. Please come again later.`;
    }

    document.getElementById("statement").innerHTML = `<h3>${message}</h3>`;
    document.getElementById("result") = ""
}

document.getElementById("clear1").onclick     = () => {
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clear2").onclick     = () => {
    document.getElementById("result").innerHTML = ""
}