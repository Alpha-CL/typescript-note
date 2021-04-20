import React from 'react';

interface IProps {
    num: number,
    onChange?: (n: number) => void
}

interface IState {
    msg: string,
    description: string
}

type Props = {};

/** 约束 类组件 **/
export class CountComp extends React.PureComponent<IProps, IState> {

    /** 需要再次约束 IState，否则会状态初始化会覆盖 范型的IState **/
    state: IState = {
        msg: '',
        description: ''
    };

    render() {

        return (
            <div>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num - 1);
                    }
                }}>-
                </button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num + 1);
                    }
                }}>+
                </button>
            </div>
        );
    }
}
