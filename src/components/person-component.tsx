import React from 'react';

interface IPersonProps {
    id: number,
    name: string,
    age: number
};

export class PersonComponent extends React.Component<IPersonProps, any> {
    constructor(props: IPersonProps) {
        super(props);
    }

    render() {
        return (
            <div className="person-box">
                <h3>{this.props.name}</h3>
                <div>ID: {this.props.id}</div>
                <div>Age: {this.props.age}</div>
            </div>
        );
    };
}