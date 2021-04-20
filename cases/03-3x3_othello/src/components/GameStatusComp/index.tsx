import React from 'react';
import './index.css';
import {ChessType, GameStatus} from "../../types/enums";

interface IProps {
    status: GameStatus,
    next: ChessType.red | ChessType.black
}

type Props = {};

export const GameStatusComp: React.FC<IProps> = (props: IProps) => {

    let content: JSX.Element;

    if (props.status === GameStatus.gaming) {

        if (props.next === ChessType.red) {

            content = <div className="next red">红方落子</div>;

        } else {

            content = <div className="next black">黑方落子</div>;
        }

    } else {

        if (props.status === GameStatus.redWin) {

            content = <div className="win red">红方胜利</div>;

        } else if (props.status === GameStatus.blackWin) {

            content = <div className="win red">黑方胜利</div>;

        } else {

            content = <div className="win equal">平局</div>;
        }
    }

    return (

        <div className="status">
            {content}
        </div>
    );
};

GameStatusComp.defaultProps = {};