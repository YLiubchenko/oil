import {IProductsState} from "./types.ts";

export const productsSelector = ({ products }: {products: IProductsState}) => Object.values(products.products);
export const measurementSelector = ({ products }: {products: IProductsState}) => products.measurement;
export const bestVariantSelector = ({ products }: {products: IProductsState}) => products.bestVariant;

