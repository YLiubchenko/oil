import React, {useEffect, useState} from 'react';
import {MyTextInput} from "../../base/MyTextInput";
import {MyTypography} from "../../base/MyTypography";

interface IProps {
    setProduct: (arg1: { index: number; price: number }) => void;
    index: number;
    measurement: string;
}

const Item = ({setProduct, index, measurement}: IProps) => {
    const [info, setInfo] = useState({
        liter: 0,
        price: 0
    });
    const [literPrice, setByLiter] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const value = e.target.value;

        setInfo({...info, [key]: value});
    }

    useEffect(() => {
        const {liter, price} = info;

        if (liter && price) {
            const result = 1 / liter * price;

            setByLiter(result || 0);
            setProduct({index, price: result})
        }
    }, [info]);

    const getPriceByLitre = (liters: number) => (literPrice * liters).toFixed(1);

    return (
        <>
            <MyTypography>Товар {index + 1}</MyTypography>
            <div className="item-wrapper">
                <div className="wrapper">
                    <MyTextInput value={info.liter || ''} minValue={0} onChange={(e) => onChange(e, 'liter')}
                                 label="Вага/літраж"
                                 type="number" placeholder="Введіть вагу"/>
                    <MyTextInput value={info.price || ''} minValue={0} onChange={(e) => onChange(e, 'price')}
                                 label="Ціна"
                                 type="number" placeholder="Введіть ціну"/>
                </div>
                <div>
                    <div>{info.liter}{measurement} - {info.price} грн</div>
                    <div>1{measurement} - {getPriceByLitre(1)} грн</div>
                    <div>2{measurement} - {getPriceByLitre(2)} грн</div>
                    <div>3{measurement} - {getPriceByLitre(3)} грн</div>
                    <div>5{measurement} - {getPriceByLitre(5)} грн</div>
                </div>
            </div>
        </>
    );
};

export default Item;