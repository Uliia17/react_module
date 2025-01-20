import {useEffect} from "react";
import {getAllCars} from "../services/api.service.tsx";

const CarsPage = () => {

    useEffect(() => {
        getAllCars().then(() => {

        })
    }, []);

    return (
        <div>

        </div>
    );
};

export default CarsPage;