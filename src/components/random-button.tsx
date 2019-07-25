import * as React from 'react';

export class RandomButton extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button
                    // Binds a function to the click event using React
                    onClick={() => this.props.change(1)}
                    className="btn btn-primary"
                >Click</button>
          

            </div>


        )
    }
}
 
export default RandomButton;