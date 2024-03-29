function calculateProfitOrLoss() {
    // Get input values
    var purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    var sellingPrice = parseFloat(document.getElementById("sellingPrice").value);

    // Calculate profit or loss
    var difference = sellingPrice - purchasePrice;
    var resultMessage = "";

    if (difference > 0) {
        // Profit
        resultMessage = "Profit: " + Math.abs(difference) + "Rs";
    } else if (difference < 0) {
        // Loss
        resultMessage = "Loss: " + Math.abs(difference) + "Rs";
    } else {
        // No profit or loss
        resultMessage = "No profit or loss";
    }

    // Display result
    document.getElementById("result").innerText = resultMessage;
}
