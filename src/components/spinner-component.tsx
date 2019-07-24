import React from 'react';
import logo from '../assets/logo.svg';
import { SpinnerButton } from './spinner-button';

export class SpinnerComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
         speed: 5
        }
       }

       increment(amount: number) {
           if (this.state.speed <= 1) {
            this.setState({
                speed: 5
            });
           } else {
            this.setState({
                speed: this.state.speed - amount
            });
           }
    }

    render() {
        return (
            <div>
                <img style={{animation: `App-logo-spin ${this.state.speed}s linear infinite`}} src={logo} className="App-logo" alt="logo"/>
                <SpinnerButton
                    increment={(x: number) => this.increment(x)} />
            </div>
        );
    }
}