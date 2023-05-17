function calculateTip() {
    let amount = document.getElementById('amount').value;
    let services = document.getElementById('services').value;

    // Validate
    if (amount === '' || services == 0) {
        window.alert('Please enter values')
        return; // window alert
    }      
    //Calculate
    let total = (amount * services);
    total = total.toFixed(2); // up to 2 decimals

    document.getElementById('tipPercent').innerHTML = '$ ' + total; //shows tip amount

    if (isNaN(total)){
          document.getElementById('tipPercent').innerHTML = 'Please choose tip amount'; //script if no tip chosen
    }

}

document.getElementById('calculate').onclick = function() {
    calculateTip();
}



