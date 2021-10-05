window.onload = function(){
    console.log('loaded');


    //add event listeners to submit button
    document.getElementById('form').addEventListener('submit', event =>{
        event.preventDefault();

        //get values of input fields
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;
        
        //print on screen
        document.getElementById('messages').innerHTML = getmessage()
    })
}