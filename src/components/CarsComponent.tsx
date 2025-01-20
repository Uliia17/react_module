import {useEffect, useState} from "react";
import {getAllCars} from "../services/api.service.tsx";
import {ICar} from "../models/ICar.ts";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars().then((value) => {
            setCars(value);
        });

    }, []);

    return (
        <div>
            {cars.map((car) => (<CarComponent key={car.id} item={car} />))}
        </div>
    );
};

export default CarsComponent;

