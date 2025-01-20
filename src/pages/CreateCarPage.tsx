import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {addCar} from "../services/api.service.tsx";
import {CarValidator} from "../validators/CarValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import "./CreateCarPage.css";

export const CreateCarPage = () => {
    const {register, handleSubmit, formState: {errors}} =
        useForm<ICar>({mode: 'all', resolver: joiResolver(CarValidator)});

    const createHandler = (data: ICar) => {
        addCar(data);
    };

    return (
        <div className="styles.formContainer">
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" {...register('brand')} className="styles.inputField" placeholder="Brand"/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('price')} className="styles.inputField" placeholder="Price"/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('year')} className="styles.inputField" placeholder="Year"/>
                    <div>{errors.year?.message}</div>
                </div>
                <button className="styles.submitButton">Add car</button>
            </form>
        </div>
    );
};

export default CreateCarPage;
