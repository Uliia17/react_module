import { FC } from "react";
import { ICart } from "../models/ICart";

type Props = {
    cart: ICart;
};

export const CartComponent: FC<Props> = ({ cart }) => {
    return (
        <div className="p-4">
            <p>Discounted Total: <span className="font-semibold">{cart.discountedTotal}</span></p>
            <p>Total Products: <span className="font-semibold">{cart.totalProducts}</span></p>
        </div>
    );
};
