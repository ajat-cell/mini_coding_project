const celciusInput = document.getElementById("Celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("Kelvin");
const reamurInput = document.getElementById("Reamur");

const Inputs = document.getElementByIdClassName ("input");

for (let i=0 i<Inputs.length; i++) {
     let input = input[i];

     input.addEventlestener("function"[e]) {
        let value = parseFloat(e.target.value);
        switch (e.target.name) {
            case "Celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                reamurInput.value = value * 0.8;
                break;
            case "fahrenheit":
                calsiusInput.value = (value - 32 ) / 1.8;
                kelvinInput.value = ((value - 32 ) / 1.8) + 273.15;
                reamurInput.value = ((value - 32 ) / 1.8) * 0.8;
                break;
            case "kelvin":
                calsiusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15)) * 1.8 + 32;
                reamurInput.value = ((value - 273.15)) * 0.8;
                break;
            case "reamur":
                calsiusInput.value = value * 1.25;
                fahrenheitInput.value = ((value * 2.25) + 32);
                kelvinInput.value = ((value * 1.25) + 273.15);
                break;
        ]
    ]);        
}
