import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Game1() {
    const [isStart, setStart] = useState(false);
    const [value, setValue] = useState(0);
    const [tebakan, setTebakan] = useState(0);
    const [input, setInput] = useState("");
    const [isbtn, setBtn] = useState(false);

    const handleButton = () => {
        if (!isStart) {
            setStart(!isStart);
            setValue(RandomNumber);
        } else {
            if (input === "") {
                toast.error("Input Tidak Boleh Kosong ", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            } else if (value == input) {
                setTebakan(tebakan + 1);
                toast.success("Congratulation!! Anda Menang", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
                setTebakan(4);
            } else if (value > input) {
                setTebakan(tebakan + 1);
                toast.error("Nilai Inputan Terlalu Kecil", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            } else if (value < input) {
                setTebakan(tebakan + 1);
                toast.error("Nilai Inputan Terlalu Besar", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            }
        }
    }

    const handleText = (event) => {
        setInput(event.target.value);
    }

    const handleReset = () => {
        setValue(RandomNumber);
        setTebakan(0)
        const input = document.getElementById("angka");
        input.disabled = false;
        input.value = "";
        setInput(input.value);
        setBtn(!isbtn);
    }


    const RandomNumber = () => {
        var num = Math.floor(Math.random() * 10) + 11;
        return num;
    }

    useEffect(() => {
        if (tebakan >= 4) {
            if (value === parseInt(input)) {
                setBtn(!isbtn);
                const input = document.getElementById("angka");
                input.disabled = true;
            } else {
                setBtn(!isbtn);
                const input = document.getElementById("angka");
                input.disabled = true;
                console.log();
                toast.error("Game Over", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            }
        }
    }, [tebakan])
    return (
        <>
            <h1 className="pt-3 pb-5">Number Guessing Game</h1>
            <div className="px-5 text-start">
                <div className="text-start">
                    <p>1. Each Player gets 4 chances to guess</p>
                    <p>2. Number range is between 11 - 20</p>
                    <p>3. You can reset the number after 4 wrong answers</p>
                </div>
                <div className={isStart ? "py-3 col-md-6" : "visually-hidden"}>
                    <div className="text-start">
                        <label htmlFor="angka" className="form-label">Input Angka</label>
                        <input className="form-control" type="number" name="angka" id="angka" placeholder="Input Angka 11 - 20" onChange={handleText} />
                    </div>
                </div>
                <p className={isStart ? "text-start pt-2 pb-1" : "text-start pt-3 pb-3"}>
                    {isStart ? `Nilai Aslinya adalah ${value}` : "Silahkan Mulai Game"}
                </p>
                <p className={isStart ? "py-2" : "visually-hidden"}>Jumlah Tebakan {tebakan}</p>
                <div className={isbtn ? "visually-hidden" : "d-flex justify-item-start"}>
                    <button className={isStart ? "btn btn-primary" : "btn btn-success"} onClick={handleButton}>
                        {isStart ? "Tebak Angka" : "Mulai Permainan"}
                    </button>
                </div>
                <div className={isbtn ? "d-flex justify-item-start" : "visually-hidden"}>
                    <button className="btn btn-danger" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default Game1