import * as React from 'react';

export class LukeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            iterations: 0,
        }
    }

    increment() {
        this.setState({
            iterations: this.state.iterations + 1
        });
        //return this.divCounter(this.state.iterations)
    }

    divCounter(number: number) {
        console.log(number > 0 && number == 1);
        if (number == 1) {
            return (
                <div style={{ fontSize: number + 'px' }}>1</div>
            )
        } else if (number > 1) {
            return (<div><div style={{ fontSize: number + 'px' }}>{number}</div>
                {this.divCounter(number - 1)}
            </div>
            )
        }
    }

    render() {
        return (
            <div id="addon">
                <p>You will see what is happening after 5 clicks</p>
                <button
                    // Binds a function to the click event using React
                    onClick={() => this.increment()}
                    className="btn btn-primary"
                >Click Me!!!</button>
                {this.divCounter(this.state.iterations)}
            </div>
        )
    }
}