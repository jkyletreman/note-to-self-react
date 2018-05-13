import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';
import "../setupTests";

const props = { note: { text: 'test note' }}

describe("Note", () => {
  let note = mount(<Note {...props} />);

  it("renders the note text", () => {
    // displays the node as a string
    console.log(note.debug())
    expect(note.find('p').text()).toEqual(props.note.text)
  })
})
