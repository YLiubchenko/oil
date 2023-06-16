import {Product} from "../Product/Product.tsx";

import './styles.css';
import {useSelector} from "react-redux";
import {productsSelector} from "../../../store/selectors.ts";


export const Products = () => {
    const products = useSelector(productsSelector);

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