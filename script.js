function calculate() {
    // Get input values
    var input1 = parseFloat(document.getElementById('input1').value) || 0;
    var input2 = parseFloat(document.getElementById('input2').value) || 0;
    var input3 = parseFloat(document.getElementById('input3').value) || 0;
    var input4 = parseFloat(document.getElementById('input4').value) || 0;
    var input5 = parseFloat(document.getElementById('input5').value) || 0;

    // Perform calculations (you can replace these with your own calculations)
    var result1 = input1 - input5; // Huspris - kontantinsats = Lånebelopp
    var result2; //  Lånebelopp - pantbrev = pantbrevskostnad
    if (input2 > result1) {
        result2 = 0;
    } else {
        result2 = (result1 - input2) * 0.02 + 375;
    }
       
    var result3;
    if(input1 > input3) {
        result3 = (input1 * 0.015) + 825;
    } else {
        result3 = (input3 * 0.015) + 825;
    }
    var result4 = (((input4 / 100) * result1) / 12).toFixed(2);
    var result5 = result2 + result3;

    var pantbrevSum 

    // Display results
    document.getElementById('result1').value = result1;
    document.getElementById('result2').value = result2;
    document.getElementById('result3').value = result3;
    document.getElementById('result4').value = result4;
    document.getElementById('result5').value = result5;
}
function resetValues() {
    // Reset input values to empty
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';

    // Reset result fields to empty
    document.getElementById('result1').value = '';
    document.getElementById('result2').value = '';
    document.getElementById('result3').value = '';
    document.getElementById('result4').value = '';
    document.getElementById('result5').value = '';
}

