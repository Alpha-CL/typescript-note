import React from 'react';


interface Props{

    num: number,
    onChange?: (n: number) => void,
}


export default function CountComp(props: Props) {

    return (
        <div className="warp">
            <button onClick={() => {
                if (props.onChange) {
                    props.onChange(props.num - 1);
                }
            }}>-
            </button>
            <span>{props.num}</span>
            <button onClick={()=> {
                if (props.onChange) {
                    props.onChange(props.num + 1)
                }
            }}>+</button>
        </div>
    );
}
