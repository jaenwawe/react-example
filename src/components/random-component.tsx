import * as React from 'react';
import { RandomDisplay } from './random-display';
import { RandomButton } from './random-button';




export class RandomComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    change(amount: number) {
        this.setState({
            clicks: this.state.clicks + amount
        });
    }

    render() {
        return (
            <div>
                {/* <div>{this.state.clicks}</div> */}
                <RandomDisplay clicks={this.state.clicks} />
                <RandomButton
                    change={(x: number) => this.change(x)}
                    clicks={this.state.clicks} />
                {/* <ClickerButton change={this.change.bind(this)} /> */}
            </div>
        )
    }
}


export default RandomComponent;