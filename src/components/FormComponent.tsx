// import {FormEvent} from "react";

import {FormEvent, useState} from "react";

interface FormProps {
    username:string,
    password:string
}

const FormComponent = () => {

    // const handler = (e:FormEvent<HTMLInputElement>) =>{
    //     console.log(e);
    // };

    const [formState, setFormState] = useState<FormProps>({
        username: 'foobar',
        password: '1111'
    })
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let user = {
          username: formState.username,
          password: formState.password
      }
        console.log(user);
        // const form = e.target as HTMLFormElement;
        // console.log(form);
        // console.log(form.username.value);
        // console.log(form.password.value);
    }
    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, username: input.value});
    // };
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, password: input.value});
    // };
    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;