import React from 'react';
import Axios from 'axios'
import '../App.css'

interface Jokes {
    
    type: string,
    joke: string,
    setup: string,
    delivery: string,
    id: number

}

export class ProgJokes extends React.Component<any,Jokes>{
    constructor(props: any){
        super(props);
        this.state =
        {
            type: '',
            joke: '',
            setup: '',
            delivery: '',
            id: 0,
        }
    }

    handlePunchline(){
        const url = 'https://sv443.net/jokeapi/category/Programming';
        
        Axios.get(url).then(payload => {
            if(payload.data.type === 'single')
            {
                this.setState({
                    setup: '',
                    delivery: '',
                    type: payload.data.type,
                    joke: payload.data.joke,
                    id: payload.data.id
                });
            }
            else{
                this.setState({
                    joke: '',
                    type: payload.data.type,
                    setup: payload.data.setup,
                    delivery: payload.data.delivery,
                    id: payload.data.id
                });
            }
    
        });
    }

    render(){
        return(
            <div className="display-container">
            <h2 className ="goodOleStuff">Wanna hear a Joke?</h2>
            
            <button className ="goodOleStuff" onClick = { () => this.handlePunchline()}>Yea!</button>


                <h6 className ="goodOleStuff">{this.state.setup}</h6>
                <h5 className ="goodOleStuff">{this.state.joke}</h5>
                <h6 className ="goodOleStuff">{this.state.delivery}</h6>


            
            </div>
        )};


}