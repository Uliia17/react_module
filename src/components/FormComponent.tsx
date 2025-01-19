import {useForm} from "react-hook-form";

interface IFormProps {
    username:string,
    password:string,
    age:number
}

const FormComponent = () => {
    const {handleSubmit, register} = useForm<IFormProps>();
    // console.log(useForm1);
    console.log(register('username'));

    const newVar = (formData: IFormProps) => {
        console.log(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(newVar)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;