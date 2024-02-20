document.addEventListener('DOMContentLoaded', function() {
    var stockForm = document.getElementById('stockForm');
    var stockInput = document.getElementById('Stock');
    var errorMessage = document.getElementById('errorMessage');
    var clearButton = document.getElementById('clearButton'); // Get the clear button

    stockForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var stockName = stockInput.value.trim();
        
        if (stockName === '') {
            errorMessage.style.display = 'block';
            return;
        }

        var p = document.createElement('p');
        p.textContent = stockName;
        document.getElementById('stockOutput').appendChild(p);
        stockInput.value = '';
        errorMessage.style.display = 'none'; 
    });

    stockInput.addEventListener('input', function() {
        if (errorMessage.style.display === 'block') {
            errorMessage.style.display = 'none';
        }
    });

    // Event listener for the clear button
    clearButton.addEventListener('click', function() {
        // Clear the 'stockOutput' div
        document.getElementById('stockOutput').innerHTML = '';
    });
});

