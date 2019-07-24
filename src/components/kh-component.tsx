import * as React from 'react';
import { KHDisplay } from './kh-display-component';
import { KHButton} from './kh-button-component';

export class KHComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    increment(amount: number) {
        this.setState({
            clicks:  this.state.clicks + amount
        });
    }

    render() {
        return (
            <div>
                <KHButton
                increment={(x: number) => this.increment(x)}
                clicks={this.state.clicks}
                />
                <KHDisplay
                clicks={this.state.clicks}
                />
                
            </div>

            
        )
    }
}