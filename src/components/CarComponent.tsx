import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {FC} from "react";
import "./CarComponent.css";


type CarTypeProps = {
    item:ICar
}

const CarComponent:FC<CarTypeProps> = ({item}) => {
    useForm()
    return (
        <div className="styles.carContainer">
            <p className="styles.carDetails">
                <strong>{item.brand}</strong> — {item.price} UAH ({item.year})
            </p>
        </div>
    );
};

export default CarComponent;
