import './App.css'
import Item from "./components/feature/Item/Item.tsx";
import {MyRegularButton} from "./components/base/buttons/MyRegularButton";
import {Fragment, useState} from "react";
import {MyTypography} from "./components/base/MyTypography";

function App() {
    const [items, setItems] = useState([0]);
    const [products, setProducts] = useState([]);
    const [bestChoose, setBestChoose] = useState(null);
    const [measurement, setMeasurement] = useState('л');

    const addItem = () => {
        const copy = [...items];
        copy.push(1);
        setItems(copy);
    }

    const setProduct = (product: { index: number; price: number }) => {
        const copy = [...products];
        copy[product.index] = product;
        setProducts(copy);
    }

    const compareProducts = () => {
        setBestChoose(products.sort((a, b) => a.price - b.price)[0].index + 1);
    }

    return (
        <div className="main">
            <div>
                <MyTypography>Вибери одиницю вимірювання</MyTypography>
                <div>
                    <MyTypography>літр</MyTypography>
                    <input type="radio" checked={measurement === "л"} name="measurement" value="л"
                           onChange={(e) => setMeasurement(e.target.value)}/>
                    <MyTypography>кг</MyTypography>
                    <input type="radio" checked={measurement === "кг"} name="measurement" value="кг"
                           onChange={(e) => setMeasurement(e.target.value)}/>
                </div>
            </div>
            {items.map((_, index) => <Item key={index} setProduct={setProduct} index={index}
                                                                                  measurement={measurement}/>)}

            <MyRegularButton text="Додати товар" onClick={addItem}/>
            {products.length > 1 && <MyRegularButton text="Порівняти" onClick={compareProducts}/>}

            {!!bestChoose && `Найвигідніший варіант ${bestChoose}`}
        </div>
    )
}

export default App
