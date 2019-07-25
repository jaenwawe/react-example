import * as React from 'react';

export default class NumClear extends React.Component<any, any> {

    public render() {
        return (
        <div>
        <button
            className="btn btn-warning"
            onClick={() => this.props.clear()}
            style={{margin: '5px'}}
        >Clear</button>
            
        </div>
        );
    }
}
