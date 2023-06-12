import './App.css'
import React, {useEffect, useState} from "react";

function App() {
    const [info, setInfo] = useState({
        liter: 0,
        price: 0
    });
    const [literPrice, setByLiter] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const value = +e.target.value;
        setInfo({...info, [key]: value});
    }

    useEffect(() => {
        const {liter, price} = info;
        const result = 1 / liter * price;

        setByLiter(result || 0);
    }, [info]);

    const getPriceByLitre = (liters: number) =>  (literPrice * liters).toFixed(1);

    return (
        <div className="main">
            <div className="wrapper">
                <div className="input-wrapper">
                    <label htmlFor="">Літраж</label>
                    <input type="number" value={info.liter || ''} onChange={(e) => onChange(e, 'liter')}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="">Ціна</label>
                    <input type="number" value={info.price || ''} onChange={(e) => onChange(e, 'price')}/>
                </div>
            </div>
            <div>
                <div>{info.liter}л - {info.price} грн</div>
                <div>1л - {getPriceByLitre(1)} грн</div>
                <div>2л - {getPriceByLitre(2)} грн</div>
                <div>3л - {getPriceByLitre(3)} грн</div>
                <div>5л - {getPriceByLitre(5)} грн</div>
            </div>
        </div>
    )
}

export default App
