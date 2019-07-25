import * as React from 'react';
import SumButton from './num-btn-comp';
import NumDisplay from './num-disp-comp';
import NumClear from './num-clear-comp';

export default class NumComp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            sum: 0
        }
    }

    add(val: number) {
        this.setState({
            sum: this.state.sum + val
        });
    }

    clear() {
        this.setState({
            sum: 0
        });
    }
    
    
    
    public render() {
        return (
        <div>
            <NumDisplay sum={this.state.sum} />
            <div>
                <SumButton val={7} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
                <SumButton val={8} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
                <SumButton val={9} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
            </div>
            <div>
                <SumButton val={4} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
                <SumButton val={5} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
                <SumButton val={6} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
            </div>
            <div>
                <SumButton val={1} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
                <SumButton val={2} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
                <SumButton val={3} 
                sum={this.state.sum} 
                add={(x: number) => this.add(x)}/>
            </div>
            <NumClear 
            clear={() => this.clear()}/>
            
        </div>
        );
    }
}
