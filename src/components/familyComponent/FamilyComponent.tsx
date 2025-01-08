import {simpsons} from "../../data/simpsonsList.ts";
import {CharacterComponent} from "../characterComponent/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value,index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};
