import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ICart } from "../models/ICart";
import { ICartResponseModel } from "../models/ICartResponseModel";
import { cartService } from "../services/api.servise";
import { CartComponent } from "./CartComponent";

export const CartsComponent = () => {
    const { id } = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then((response: ICartResponseModel) => {
                    setCarts(response.carts);
                });
        }
    }, [id]);

    return (
        <div>
            {carts.map((cart: ICart) => (
                <CartComponent key={cart.id} cart={cart} />
            ))}
        </div>
    );
};

export default CartsComponent;
