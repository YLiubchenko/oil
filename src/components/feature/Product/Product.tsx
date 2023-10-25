import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MyTypography} from "../../base/MyTypography";
import {bestVariantSelector, measurementSelector, productsSelector} from "../../../store/selectors.ts";
import {deleteProductAction, setBestVariantAction, setProductAction} from "../../../store/reducers/productSlice.ts";
import {IProduct} from "../../../types";
import {MyIconButton} from "../../base/buttons/MyIconButton/MyIconButton.tsx";
import {Trash} from "../../../assets/icons/Trash.tsx";

import './styles.css';
import {ValueList} from "./ValueList.tsx";

interface IProps {
    index: number;
    product: IProduct;
}

const measurementLabel = {
    'л': 'Літраж',
    'г': 'Грами',
    'шт': 'Штуки',
}

export const Product = ({index, product}: IProps) => {
    const [info, setInfo] = useState({
        liter: 0,
        price: 0
    });
    const [literPrice, setByLiter] = useState(0);
    const measurement = useSelector(measurementSelector);
    const products = useSelector(productsSelector);
    const dispatch = useDispatch();
    const bestVariant = useSelector(bestVariantSelector);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const value = e.target.value.replace(',', '.');

        if (+value >= 0 ) {
            setInfo({...info, [key]: value});
        }
    }

    useEffect(() => {
        const {liter, price} = info;

        if (+liter && +price) {
            const result = price / liter;

            setByLiter(result || 0);
            dispatch(setProductAction({
                ...product,
                byLiter: result,
                liter,
                price

            }));
        }
    }, [info, measurement]);

    const getPriceByLitre = (liters: number) => (literPrice * liters).toFixed(1);

    const setPrice = (count: number) => {
        return `${getPriceByLitre(count)}грн`;
    }

    const setMeas = (count: number) => {
        return `${count}${measurement}`;
    }

    const getMeas = () => {
        return measurementLabel[measurement as keyof typeof measurementLabel ];
    }

    const deleteProduct = () => {
        dispatch(deleteProductAction(product.id));
        dispatch(setBestVariantAction(null));
    }

    return (
        <div className={`product ${bestVariant === index + 1 ? 'bestVariant' : ''}`}>
            <div className="label-wrapper">
                <MyTypography>Продукт {index + 1}</MyTypography>
                {products.length > 1 && <MyIconButton className='trash' onClick={deleteProduct} icon={<Trash />}/>}
            </div>
            <div className="item-wrapper">
                <ValueList value={info.liter} setValue={setMeas} valueKey='liter' onChange={onChange} label={getMeas()} />
                <ValueList value={info.price} setValue={setPrice} valueKey='price' onChange={onChange} label='Ціна' />
            </div>
        </div>
    );
};

console.log('chery pickkkkkkk')