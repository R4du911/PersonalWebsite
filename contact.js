function sendEmail(){
    let senderName = document.getElementById("name").value;
    let senderText = document.getElementById("text").value;

    if(senderName === "" || senderText === ""){
        console.log("Not inserted all required data")
    }
    else{
        console.log("Form saved succesfully");
        window.open(`mailto:radusiderias@yahoo.com?subject=Contact from ${senderName}&body=${senderText}`);
    }  
}