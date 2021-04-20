import React from 'react';

interface IProps {

}

interface IState {

}

type Props = {};

export class CountComp extends React.PureComponent<IProps, IState> {

    /** 必须同时约束 class & state 的类型，否则 setState 中则无法正确推导类型 **/
    state: IState = {};

    render() {

        return (
            <div>

            </div>
        );
    }
}