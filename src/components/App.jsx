import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      notes: []
    };
  }

  submitTask = () => {
    const notes = this.state.notes;

    const newNotes = { text: this.state.text };

    notes.push(newNotes);

    this.setState({ notes: notes });
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
          this.state.notes.map(note => {
            return (
              <div>{note.text}</div>
            )
          })
        }
      </div>
    );
  }
}
