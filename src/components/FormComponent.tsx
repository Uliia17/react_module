import {useForm} from "react-hook-form";

interface IFormProps {
    username:string,
    password:string,
    age:number
}

const FormComponent = () => {
    const {handleSubmit,
           register,
           formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all'
    });


    const newVar = (formData: IFormProps) => {
        console.log(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(newVar)}>
                <label><input type="text" {...register('username', {
                    required: {value:true, message: 'name is required'},
                    // pattern:{
                    //     value:/\w+/,
                    //     message:'wrong name'
                    // },
                    minLength: {value: 1, message: 'wrong name'}
                })}/>
                    <div>{errors.username && <div>{errors.username.message}</div>}</div>
                </label>
                <label><input type="text" {...register('password', {
                    required: true,
                    minLength: {value: 3, message: 'pass too short'},
                    maxLength: {value: 6, message: 'pass too long'}
                })}/>
                    <div>{errors.password && <div>{errors.password.message}</div>}</div>
                </label>
                <label><input type="password" {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1, message: 'wrong age'},
                    max: {value: 117, message: 'age too big'},
                })}/>
                    <div>{errors.age && <div>{errors.age.message}</div>}</div>
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;