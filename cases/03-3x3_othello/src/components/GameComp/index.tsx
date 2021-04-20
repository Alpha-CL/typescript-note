import React from 'react';
import {ChessType, GameStatus} from "../../types/enums";
import {BoardComp} from "../BoardComp";
import {GameStatusComp} from "../GameStatusComp";
import "./index.css";


interface IProps {

}

interface IState {
    chesses: ChessType[],
    gameStatus: GameStatus,
    nextChess: ChessType.red | ChessType.black,
}

type Props = {};

export class GameComp extends React.PureComponent<{}, IState, IProps> {

    state: IState = {
        chesses: [],
        gameStatus: GameStatus.gaming,
        nextChess: ChessType.black
    };

    componentDidMount() {

        this.init();
    }


    init() {

        const arr: ChessType[] = [];

        for (let i = 0; i < 9; i++) {

            arr.push(ChessType.none);
        }

        this.setState({
            chesses: arr,
            gameStatus: GameStatus.gaming,
            nextChess: ChessType.black
        });
    }


    handleChessClick(i: number) {

        const chesses: ChessType[] = [...this.state.chesses];

        chesses[i] = this.state.nextChess;

        this.setState(prevState => ({

            chesses,
            nextChess: prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
            gameStatus: this.getStatus(chesses, i)
        }))
    }


    getStatus(chesses: ChessType[], i: number): GameStatus {

        // 0 1 2
        // 3 4 5
        // 6 7 8
        const horMin = Math.floor(i / 3) * 3,
            verMin = i % 3;

        if (
            (chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) ||
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none) ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
        ) {

            // return chesses[i] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin;

            // console.log(chesses[i]);
            // console.log(ChessType.red);

            if (chesses[i] === ChessType.red) {

                return GameStatus.redWin;

            } else {

                // console.log('black');
                return GameStatus.blackWin;
            }
        }

        if (!chesses.includes(ChessType.none)) {

            return GameStatus.equal;
        }

        return GameStatus.gaming;
    }

    render() {

        console.log(this.state.gameStatus);

        return (
            <div className='game'>
                <h1>黑白棋</h1>
                <GameStatusComp
                    status={this.state.gameStatus}
                    next={this.state.nextChess}
                />
                <BoardComp
                    chesses={this.state.chesses}
                    isGameOver={this.state.gameStatus !== GameStatus.gaming}
                    onClick={this.handleChessClick.bind(this)}
                />
                <button onClick={() => {
                    this.init();
                }}>重新开始
                </button>
            </div>
        );
    }
}

