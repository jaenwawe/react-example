import * as React from 'react';
import { JessicaButton } from './jessica-button-component';
import { JessicaDisplay } from './jessica-display-component';
import Axios from 'axios';

interface IDigiState{
    id: number,
    name: string,
    imageurl: string,
    level: string
}

export class JessicaComponent extends React.Component<any, any> {
    
    constructor(props: any) {
        var d = new Date();
        var n = d.getSeconds();
        super(props);
        this.state = {
            time: n,
            id: 0,
            name: '',
            url: '',
            level: ''
        }
    }
    change() {
        var d = new Date();
        var n = d.getSeconds();
        this.setState({
            time: n
        });
    }
    updateValue(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            id: value
        });
    }
    logState(){
        console.log(this.state);
    }
    searchDigimon() {
        const url = `https://digimon-api.herokuapp.com/api/digimon/id/${this.state.id}`;
        console.log(url);
        Axios.get(url).then(payload => {
            console.log(payload);
            this.setState({
                ...this.state,
                name: payload.data[0].name,
                id: payload.data[0].id,
                url: payload.data[0].img,
                level: payload.data[0].level
            })
            
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <JessicaDisplay time ={this.state.time} />
                <JessicaButton  change={() => this.change()}/>
                <div id="display-container">
                    {this.state.id && // only display h2 if id is truthy
                        <h2>#{this.state.id}: {this.state.name}</h2>
                    }
                    <div>{this.state.level}</div>
                    <img src={this.state.url}></img>
                </div>
                <div id="digi-submit-container">
                    <input type="number" min="1" step="1" 
                        value={this.state.inputValue}
                        onChange={(e: any) => this.updateValue(e)}></input>
                    <button onClick={() => this.searchDigimon()}>Submit</button>
                </div>
            </div>
        );
    }
}

export default JessicaComponent;