
            window.convertUnit = function() {
                const val = parseFloat(document.getElementById('unit-val').value || 1);
                const from = document.getElementById('unit-from').value;
                const res = document.getElementById('unit-res');
                if (from === 'm') {
                    res.innerText = `Result: ${(val * 3.28084).toFixed(2)} Feet`;
                } else {
                    res.innerText = `Result: ${(val / 3.28084).toFixed(2)} Meters`;
                }
            }
        