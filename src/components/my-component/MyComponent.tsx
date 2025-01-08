// import {FC} from "react";
//
// type MyComponentPropType = {text:string}
// const MyComponent: FC<MyComponentPropType> = ({text})=> {
//     return <div>{text}</div>
// }
// // const MyComponent = ({text}:MyComponentPropType)=> {
// //     return <div>{text}</div>
// // }
// // function MyComponent({text}:MyComponentPropType) {
// //     return <div>{text}</div>
// // }
// // function MyComponent({text}:{text:string}) {
// //     return <div>{text}</div>
// // }
// export default MyComponent;

import {FC, ReactNode} from "react";
// import styles from './MyComponent.module.css'
// import './MyComponent.module.css'
type MyComponentPropType = {title:string; children?:ReactNode};
const MyComponent:FC<MyComponentPropType> = ({title,children}) => {
    return (
        <div className='text-3xl font-bold underline'>
        {/*<div className={styles.target}>*/}
        {/*<div className={'target'}>*/}
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};
   // return (
// <div className='text-3xl font-bold underline'>
//         {/*<div className={styles.target}>*/}
//         {/*<div className={'target'}>*/}
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </div>
//     );
// };

export default MyComponent;