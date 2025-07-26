
// MyExample: Class component example with state
// Demonstrates class-based state and structure in React
// Fixes: state syntax (use comma, not semicolon; data should be an array or object)
// Reference: You can add more methods or state fields as needed
import React, { Component } from "react";

export default class MyExample extends Component {
    // State with a counter and data array
    state = {
        counter: 1, // Initial counter value
        data: []    // Data array (empty by default)
    };

    // You can add methods or lifecycle hooks here for reference
    // Example:
    // increment = () => {
    //   this.setState({ counter: this.state.counter + 1 });
    // };
}