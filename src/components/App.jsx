import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Not to Self</h2>
        <Form>
          <FormControl
            onChange={e => {
              this.setState({ test: e.target.value });
            }}
          />
          <Button onClick={() => console.log(this.state)}>Submit</Button>
        </Form>
      </div>
    );
  }
}
