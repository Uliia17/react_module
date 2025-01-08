import {ISimpson} from "../../modules/ISimpson.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: ISimpson,
    children: ReactNode
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-4'>
            <h2 className='text-2xl'>{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};
