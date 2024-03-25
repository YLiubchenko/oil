import React from "react";
import {MyRegularButton} from "./components/base/buttons/MyRegularButton";

import './App.css'
import {Products} from "./components/feature/Products/Products.tsx";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {bestVariantSelector, measurementSelector, productsSelector} from "./store/selectors.ts";
import {
    clearProductLIstAction,
    setBestVariantAction,
    setMeasurement,
    setProductAction
} from "./store/reducers/productSlice.ts";
import {MyRadioInput} from "./components/base/MyRadioInput/MyRadioInput.tsx";

function App() {
    const measurement = useSelector(measurementSelector);
    const products = useSelector(productsSelector, shallowEqual);
    const bestVariant = useSelector(bestVariantSelector);
    const dispatch = useDispatch();

    const addItem = () => {
        const id = String(Date.now());

        dispatch(setProductAction({
            id,
            liter: 0,
            price: 0,
            byLiter: 0,
            discount: 0
        }));
    }

    const compareProducts = () => {
        let result = 0;
        let value = products[0].byLiter;

        for (let i = 1; i < products.length; i++) {
            const {byLiter} = products[i];

            if (byLiter && value > byLiter) {
                result = i;
                value = byLiter;
            }
        }

        dispatch(setBestVariantAction(result + 1));
    }

    const getMeasurement = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setMeasurement(e.target.value));
    }

    const clearProducts = () => {
        dispatch(clearProductLIstAction());
    }

    return (
        <>
            <div className="header">
                <h1>Калькулятор цін</h1>
            </div>
            <div className="main">
                <div className="header-wrapper">
                    <div>
                        <h4>Одиниця вимірювання</h4>
                        <div className="radio-list">
                            <MyRadioInput className="measurement" name="measurement" value="л"
                                          onChange={getMeasurement} isChecked={measurement === "л"} label='літр'/>
                            <MyRadioInput className="measurement" name="measurement" value="кг"
                                          onChange={getMeasurement} isChecked={measurement === "кг"} label='кілограми'/>
                            <MyRadioInput className="measurement" name="measurement" value="шт"
                                          onChange={getMeasurement} isChecked={measurement === "шт"} label='шт'/>
                        </div>
                    </div>
                    <MyRegularButton text="Очистити" onClick={clearProducts} className="clear-button result-button"/>
                </div>

                <Products />
                <MyRegularButton text="+" onClick={addItem} className="add-product"/>
                {products.length > 1 &&
                    <div className='result'>
                        {!!bestVariant &&
                            <div>Найвигідніший варіант: <span className="bold-text">{bestVariant}</span></div>}
                        <MyRegularButton text="Порівняти" onClick={compareProducts} className="result-button"/>
                    </div>
                }
            </div>
        </>
    )
}

export default App
