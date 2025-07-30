
// MyExample: Class component example with state
// Demonstrates class-based state and structure in React
// Fixes: state syntax (use comma, not semicolon; data should be an array or object)
// Reference: You can add more methods or state fields as needed
import { Component } from "react";
import axios from "axios";
import { width } from "@mui/system";

export default class MyExample extends Component {
    // State with a counter and data array
    state = {
        counter: 1, // Initial counter value
        data: []    // Data array (empty by default)
    };

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrement = () => {
        this.setState({ counter: this.state.counter -1 });
    }

    componentDidMount() {
        // axios.get('https://686fc26191e85fac42a26aba.mockapi.io/UserInformation')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.error("Error fatching data:", error);
    });
}

    render () {

    return (
        <div>
           
            <button onClick={this.increment}> +Hetarth+ </button>
            <div> I am Hetarth {this.state.counter} </div>
            <button onClick={this.decrement}> - </button>
            {
                this.state.data.map((item, index) => (
                    <div key={index}>
                    <div>
                        title: {item.title}
                    </div>
                    {/* <div key={index}>
                        <img src="{item.avatar}" style={{ width:50, height:50 }} /> 
                    </div> */}
                    <div key={index}>
                        body: {item.body}
                    </div>
                    <div key={index}>
                        id: {item.id}
                    </div>
                    </div>
                ))
            }
            
        </div>
    );

    // You can add methods or lifecycle hooks here for reference
    // Example:
    // increment = () => {
    //   this.setState({ counter: this.state.counter + 1 });
    // };
    }
}