import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Note from './Note'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = "NOTES";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  submitTask = () => {
    const { notes, text } = this.state;

    notes.push({ text });

    this.setState({ notes });
    // saving a cookie everytime a note is added
    bake_cookie(cookie_key, this.state.notes);
  }

  clearNotes = () => {
    delete_cookie(cookie_key);
    this.setState({ notes: [] })
  }

  render() {
    return (
      <div>
        <h2>Note to Self</h2>
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
        {/* header ruler */}
        <hr/>
        <Button onClick={() => { this.clearNotes() }}>Clear Notes</Button>
      </div>
    );
  }
}
