import React from 'react';

interface IProps {
    num: number,
    onChange?: (n: number) => void
}

type Props = {};

/** Method_01: React.FC( 有props.children ) 用于约束函数式组件 **/
export const CountComp: React.FC<IProps> = (props) => {

    return (
        <div>
            <button onClick={() => {
        if (props.onChange) {
            props.onChange(props.num - 1);
        }
    }}>-
        </button>
    <span>{props.num}</span>
    <button onClick={() => {
        if (props.onChange) {
            props.onChange(props.num + 1);
        }
    }}>+
        </button>
    </div>
);
};

/** Method_02: React.FC( 无props.children，仅约束 props ) 用于约束函数式组件 **/
// export default function CountComp(props: IProps) {
//
//     return (
//         <div>
//             <button onClick={() => {
//                 if (props.onChange) {
//                     props.onChange(props.num - 1);
//                 }
//             }}>-
//             </button>
//             <span>{props.num}</span>
//             <button onClick={() => {
//                 if (props.onChange) {
//                     props.onChange(props.num + 1);
//                 }
//             }}>+
//             </button>
//         </div>
//     );
// };