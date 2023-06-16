import {IProduct} from "../types";

export interface IProductsState {
    products: {[key: string]: IProduct};
    bestVariant: number | null;
    measurement: string;
}
