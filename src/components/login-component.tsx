import React from 'react';
import Axios from 'axios';
import { tsImportEqualsDeclaration } from '@babel/types';

interface ILoginState {
    username: string,
    password: string,
    inputValue: string,
    inputPassword: string;
}

export class LoginComponent extends React.Component<any, ILoginState> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: '',
            inputValue: 'jaenwawe',
            inputPassword: 'jpassword'
        };
    }

    updateValue(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue: value,
        });
    }

    updatePassword(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputPassword: value
        });
    }

    searchLogin() {
        console.log(this.state.inputPassword);
        console.log(this.state.inputValue);
        const url = `localhost:7163/login`;


        Axios.post(url, {
            username: this.state.inputValue,
            password: this.state.inputPassword,
        })

            .then(payload => {
                console.log(payload.data.username);
                console.log(this.state.inputValue);
                console.log(this.state.inputPassword);
            })
            .catch(error => {
                console.log(this.state.inputValue);
                console.log(this.state.inputPassword);
                //console.log(error);
            });

    }


    submitPost() {
        const url = `http://localhost:4578/login`;
        const data = {
            username: this.state.inputValue,
            password: this.state.inputPassword,

        };
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        //JSON.stringify(data);
        Axios.post(url, JSON.stringify(data), config).then((payload) => {
            console.log(payload.data);
        })
            // .then(response => { 
            //     console.log(response)
            //})
            .catch(error => {
                console.log(error.response)
            });


    }

    render() {

        return (
            <div>
                <div id="display-container">
                    {this.state.username && // only display h2 if id is truthy
                        <h2>#{this.state.username}: {this.state.username}</h2>
                    }

                </div>
                <div id="login-submit-container">
                    <h6>Username:</h6>
                    <input type="text"
                        value={this.state.inputValue}
                        onChange={(e: any) => this.updateValue(e)}></input><br /><br />
                    <h6>Password:</h6>
                    <input type="text"
                        value={this.state.inputPassword}
                        onChange={(e: any) => this.updatePassword(e)}></input><br /><br />

                    <button onClick={() => this.searchLogin()}>Login</button>
                    <br />
                    <button onClick={() => this.submitPost()}>Post</button>

                </div>
            </div >

        );
    }

}