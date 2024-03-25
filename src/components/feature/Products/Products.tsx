import {Product} from "../Product/Product.tsx";

import './styles.css';
import {shallowEqual, useSelector} from "react-redux";
import {productsSelector} from "../../../store/selectors.ts";


export const Products = () => {
    const products = useSelector(productsSelector, shallowEqual);

    return (
        <div className="products">
            {products.map((product, index) => {
                return (
                    <Product key={product.id} index={index} product={product}/>
                )
            })}
        </div>
    );
};