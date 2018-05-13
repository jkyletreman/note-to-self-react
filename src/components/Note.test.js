import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';
import "../setupTests"

describe("Note", () => {
  let note = mount(<Note note={{ text: 'test note' }}/>);

  it("renders the note text", () => {
    console.log(note.debug())
  })
})
