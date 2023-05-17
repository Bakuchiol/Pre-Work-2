function calculateTip() {
    let amount = document.getElementById('amount').value;
    let services = document.getElementById('services').value;

    // Validate
    if (amount === '' || services == 0) {
        window.alert('Please enter values')
        return;
    }      //stops from continuing if not filled

    //calculate
    let total = (amount * services);
    total = total.toFixed(2); // up to 2 decimals

    document.getElementById('tipPercent').innerHTML = '$ ' + total; //shows tip amount

}

document.getElementById('calculate').onclick = function() {
    calculateTip();
}



