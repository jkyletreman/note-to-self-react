import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Note from './Note'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      notes: []
    };
  }

  submitTask = () => {
    const { notes, text } = this.state;

    notes.push({ text });

    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <h2>Not to Self</h2>
        {/* short hand for inline={true} */}
        <Form inline>
          <FormControl
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
          />
          <Button onClick={() => this.submitTask()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, i) => {
            return (
              <Note key={i} note={note} />
            )
          })
        }
      </div>
    );
  }
}
