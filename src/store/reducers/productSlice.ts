import { createSlice } from '@reduxjs/toolkit';
import {IProductsState} from "../types.ts";
import {IProduct} from "../../types";

const baseProductState = {
    '0': {
        byLiter: 0,
        liter: 0,
        price: 0,
        id: '0',
    }
}

const initialState: IProductsState = {
    products: structuredClone(baseProductState),
    bestVariant: null,
    measurement: 'л'
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProductAction: (state, { payload }: {payload: IProduct}) => {
            state.products = {...state.products, [payload.id]:  payload};
        },
        deleteProductAction: (state, { payload }: {payload: string}) => {
            const copy = state.products;
            delete copy[payload];
            state.products = copy;
        },
        clearProductLIstAction: (state) => {
            state.products = structuredClone(baseProductState);
        },
        setBestVariantAction: (state, { payload }: {payload: number | null}) => {
            state.bestVariant = payload;
        },
        setMeasurement: (state, { payload }) => {
            state.measurement = payload;
        }
    }
});

export const { setProductAction,clearProductLIstAction, deleteProductAction, setBestVariantAction, setMeasurement } =
    productSlice.actions;

export default productSlice.reducer;