import * as React from 'react';


export class FirstComponent extends React.Component<any, any> {

    constructor(props: any) {
        console.log(props);
        super(props);
    }

    render() {

        console.log(this.props.name);
        return (
            <div>
                <h3 id="first">User Data {this.props.name}</h3>
                <div id="user-main-container">

                    <div>User Id:</div>
                    <input type="text" id="user_id" name="user_model" />

                    <div>User Name:</div>
                    <input type="text" id="user_name" name="user_mail" />

                    <div>Password:</div>
                    <input type="password" id="pwd" />

                    <div>Email:</div>
                    <input type="email" id="user_email" />

                    <div>First Name:</div>
                    <input type="text" id="first_name" />

                    <div>Last Name:</div>
                    <input type="text" id="last_name" />

                    <div>Role:</div>
                    <input type="role" id="user_role" name="email" />
                </div>


            </div>
        );
    }

}