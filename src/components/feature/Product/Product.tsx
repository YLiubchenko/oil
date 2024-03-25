import {ChangeEvent, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {MyTypography} from "../../base/MyTypography";
import {bestVariantSelector, measurementSelector, productsSelector} from "../../../store/selectors.ts";
import {deleteProductAction, setBestVariantAction, setProductAction} from "../../../store/reducers/productSlice.ts";
import {IProduct} from "../../../types";
import {MyIconButton} from "../../base/buttons/MyIconButton/MyIconButton.tsx";
import {Trash} from "../../../assets/icons/Trash.tsx";

import './styles.css';
import {ValueList} from "./ValueList.tsx";
import {MyNumberInput} from "../../base/MyNumberInput";
import {Discount} from "../../../assets/icons/Discount.tsx";
import {CloseIcon} from "../../../assets/icons/CloseIcon.tsx";

interface IProps {
    index: number;
    product: IProduct;
}

const measurementLabel = {
    'л': 'Літраж',
    'шт': 'Штуки',
    'кг': 'Кілограми',
}

export const Product = ({index, product}: IProps) => {
    const [info, setInfo] = useState({
        liter: 0,
        price: 0,
        discount: 0
    });
    const [literPrice, setByLiter] = useState(0);
    const [isSale, setIsSale] = useState(false);

    const measurement = useSelector(measurementSelector);
    const products = useSelector(productsSelector, shallowEqual);
    const dispatch = useDispatch();
    const bestVariant = useSelector(bestVariantSelector);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const value = e.target.value.replace(',', '.');

        if (+value >= 0 ) {
            setInfo({...info, [key]: value});
        }
    }

    useEffect(() => {
        const {liter, price, discount} = info;

        if (+liter && +price) {
            const result = (price - (price * (discount / 100))) / liter;

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

    const removeDiscount = () => {
        setIsSale(false);

        if (info.discount) {
            setInfo({...info, discount: 0});
        }
    }

    return (
        <div className={`product ${bestVariant === index + 1 ? 'bestVariant' : ''}`}>
            <div className="label-wrapper">
                <MyTypography>Продукт {index + 1}</MyTypography>
                <div className='buttonsList'>
                    {isSale || <MyIconButton className='buttonIcon' onClick={() => setIsSale(true)} icon={<Discount />} /> }
                    {products.length > 1 && <MyIconButton className='buttonIcon' onClick={deleteProduct} icon={<Trash />}/>}
                </div>
            </div>
            <div className='sale-wrapper'>

            { isSale && (
                   <><MyNumberInput value={info.discount || ''} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, 'discount')}
                           label='Знижка %' />
                    <MyIconButton className='buttonIcon' onClick={removeDiscount} icon={<CloseIcon />}/></>
            )}
                </div>
            <div className="item-wrapper">
                <ValueList value={info.liter} setValue={setMeas} valueKey='liter' onChange={onChange} label={getMeas()} />
                <ValueList value={info.price} setValue={setPrice} valueKey='price' onChange={onChange} label='Ціна' />
            </div>
        </div>
    );
};