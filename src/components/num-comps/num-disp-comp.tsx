import * as React from 'react';

export default class NumDisplay extends React.Component<any, any> {
  
    constructor(props: any) {
        super(props);
    }
  
    public render() {
        return (
        <div style={{margin: '5px'}}>
            {this.props.sum}
            
        </div>
        );
    }
}
