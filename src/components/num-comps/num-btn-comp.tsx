import * as React from 'react';

export default class SumButton extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            val: this.props.val
        }
    }

    public render() {
        return (
        <button
            className="btn btn-secondary btn-md"
            onClick={() => this.props.add(this.state.val)}
            style={{margin: '5px'}}
        >{this.state.val}</button>
        );
    }
}
