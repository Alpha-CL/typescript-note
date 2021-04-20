import React from 'react';
import './App.css';
import {ChessType} from "./types/enums";
import {BoardComp} from "./components/BoardComp";
import {GameComp} from "./components/GameComp";


// function App() {
//   return (
//     <div className="App">
//       <CountComp num={3}/>
//     </div>
//   );
// }


interface IState {

    num: number;
}
const types: ChessType[] = [
    ChessType.red,
    ChessType.black,
    ChessType.none,
    ChessType.none,
    ChessType.red,
    ChessType.black,
    ChessType.red,
    ChessType.black,
    ChessType.none,
];

/** 若想在 setstate 中获得完整的类型推导，必须在 类组件后 和 state 中都添加约束 **/
class App extends React.PureComponent<{}, IState> {

    state: IState = {
        num: 0
    };

    render() {
        return (

            <div>
                <GameComp/>
            </div>

            // <div>
            //     <BoardComp
            //         chesses={types}
            //         isGameOver={false}
            //         onClick={(i) => {
            //             console.log(i);
            //         }}
            //     />
            // </div>

            // <div>
            //     <ChessComp type={ChessType.none} onClick={() => {
            //         console.log('[none clicked]');
            //     }}/>
            //     <ChessComp type={ChessType.red} onClick={() => {
            //         console.log('[red clicked]');
            //     }}/>
            //     <ChessComp type={ChessType.black} onClick={() => {
            //         console.log('[black clicked]');
            //     }}/>
            // </div>

            // <CountComp num={this.state.num} onChange={n => {
            //     this.setState({
            //         num: n
            //     })
            // }}/>
        );
    }
}

export default App;
