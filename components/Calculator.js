import {useState} from "react";

export default function Calculator() {
    const [display, setDisplay] = useState("0");

    const buttonClick = (value) => {
        if (display === "0" && value !== "/" && value !== "*" && value !== "+" && value !== "-") {
           setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };

    const clear = () => {
        setDisplay("0");
    };

    const equals = () => {
        try {
            const result = eval(display); //Using eval here
            setDisplay(result.toString());
        } catch (error) {
            setDisplay("Error");
        }
    };

    return (
        <div id="calculator">
            <input 
               type="text"
               id="display"
               value={display}
               style={{ width: "250px", marginBottom: "10px", textAlign: "right", fontSize: "1.5rem"  }}
            />

        <div id="buttons" style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "5px" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button key={num} id={`btn-${num}`} onClick={() => buttonClick(num.toString())}>
                   {num}
                </button>
            ))}

            <button id="btn-0" onClick={() => buttonClick("0")}>0</button>
            <button id="btn-add" onClick={() => buttonClick("+")}>+</button>
            <button id="btn-subtract" onClick={() => buttonClick("-")}>-</button>
            <button id="btn-multiply" onClick={() => buttonClick("*")}>*</button>
            <button id="btn-divide" onClick={() => buttonClick("/")}>/</button>
            <button id="btn-clear" onClick={() => buttonClick("AC")}>AC</button>
            <button id="btn-equals" onClick={equals}>=</button>
        </div>
        </div>
    );
}