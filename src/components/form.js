import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '', output: '' };
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    handleSubmit = (event) => {
        fetch('/reverse', {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(this.state.userInput)
        }).then(response => {
            return response.json()
        }).then(data => console.log(data))
        // then(json => {
        //     this.setState({output: json[0]})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method='get'>
                <p>String reversal:</p>
                <input type="text"/>
                <input type="submit" onChange={this.handleChange}/>
                </form>
                <p>{this.state.output}</p>
            </div>
        );
    }
}

ReactDOM.render(<Form/>, document.getElementById('root'));