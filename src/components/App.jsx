import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Not to Self</h2>
        <Form>
          <FormControl />
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
