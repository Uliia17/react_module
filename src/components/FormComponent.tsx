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

    return (
        <div>
            <form onSubmit={handleSubmit((formData) => {
                console.log(formData);
            })}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;