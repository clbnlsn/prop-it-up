import React, { Component } from 'react';


class FirstClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : props.age
        }

        this.handleAge = this.handleAge.bind(this);
    }

    handleAge(){
        this.setState(prevState => {
            return {age:prevState.age + 1}
        })
    }

    render() {
        const {firstName,lastName,hairColor} = this.props;
        return(
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleAge} >IncreaseAge</button>
            </div>
        );
    }
}

export default FirstClass;