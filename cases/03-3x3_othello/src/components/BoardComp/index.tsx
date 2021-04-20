import React from 'react';
import {ChessType} from "../../types/enums";
import {ChessComp} from "../ChessComp";
import "./index.css";


// 无法在 interface 中设置默认值，因为编译后 ts 类型检查不存在
// 设置默认值: 1) 设置参数时设置默认值
//           2) Comp.defaultProps = {}; 中设置默认值
interface IProps {
    chesses: ChessType[],
    isGameOver?: boolean,                       // ？: 可选的
    onClick?: (i: number) => void,
}

type Props = {};

/** 在参数中直接设置默认值，可以避免 "类型断言" **/
export const BoardComp: React.FC<IProps> = ({chesses, isGameOver = false, onClick}: IProps) => {

    // isGameOver = isGameOver!;                    // 类型断言: 语法糖( 非空断言 )
    // isGameOver = isGameOver as boolean;          // 类型断言: 默认情况

    const list = chesses.map((type, i) => {

        return (
            <ChessComp
                key={i}
                type={type}
                onClick={() => {

                    // isGameOver 由于特殊情况( 可选的 )可能会返回 undefinde
                    // 但实际情况有默认值，所以需要类型断言
                    if (!isGameOver && onClick) {
                        onClick(i);
                    }
                }}
            />
        );
    });

    return (
        <div className="board">
            {list}
        </div>
    );
};

// 设置默认值
// BoardComp.defaultProps = {
//     isGameOver: false
// };
