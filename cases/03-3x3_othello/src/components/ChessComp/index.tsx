import React from 'react';
import {ChessType} from "../../types/enums";
import "./index.css";


/** 设置属性类型检查 **/
interface IProps {
    type: ChessType,
    onClick?: () => void
}

type Props = {};

export const ChessComp: React.FC<IProps> = ({type, onClick}) => {

    let chess = null;

    if (type === ChessType.red) {

        chess = <div className='chess-item red'></div>;

    } else if (type === ChessType.black) {

        chess = <div className='chess-item black'></div>;
    }

    return (
        <div className="chess"
             onClick={() => {
                 if (type === ChessType.none && onClick) {
                     onClick();
                 }
             }}
        >
            {chess}
        </div>
    );
};



