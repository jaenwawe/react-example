import * as React from 'react';
import { PersonComponent } from './person-component';


export class ArrayComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            array: [
                { name: 'Stephon', id: 1, age: 23 },
                { name: 'Dionel', id: 2, age: 15 },
                { name: '"Sam"', id: 3, age: 35 }],
            inputValue: ''
        };
    }

    updateValue(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state, // copies all existing state properties
            inputValue: value // overwrites the inputValue property
        });
    }

    submitValue() {
        const name = this.state.inputValue;
        const age = Math.floor(Math.random() * 50);
        this.state.array.unshift({
            name,
            age,
            id: this.state.array.length,
        });
        // const newArray = [, ...this.state.array]
        this.setState({
            ...this.state,
            inputValue: '',
        });
    }

    /*
        We want to render a list with these names, in the format of
        <ul>
            <li>{person data}</li>
        </ul>


    */
    render() {
        // Mapping each name from {name} -> <li>{name}</li>
        const nameList = this.state.array.map((n: any) =>
            (<li key={n.id}>{n.name}</li>)
        );

        const personComponentList = this.state.array.map((n: any) => {
            return (<PersonComponent key={n.id} id={n.id} name={n.name} age={n.age} />)
        });

        return (
            <div>
                <div>
                    <ul>
                        {nameList}
                    </ul>
                    <input type="text" onChange={(e) => this.updateValue(e)} value={this.state.inputValue}></input>
                    <button onClick={() => this.submitValue()} >Submit</button>
                </div>

                <div id="person-container">
                    {personComponentList}
                </div>
            </div>

        );

    }
}