import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import "../setupTests";

describe("App", () => {
  let app = mount(<App />);

  it("renders the App title", () => {
    console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self')
  });

  it("renders the clear button", () => {
    expect(app.find('.btn').at(1).text()).toEqual("Clear Notes")
  })

  describe("when rendering the form", () => {
    it('creates a form component', () => {
      expect(app.find("Form").exists()).toBe(true);
    });

    it("renders a Form Control component", () => {
      expect(app.find("FormControl").exists()).toBe(true);
    });

    it("renders a submit button", () => {
      expect(app.find('.btn').at(0).text()).toEqual("Submit")
    });
  });

  describe("when creating a note", () => {
    let testNote = 'test note';
    // simulate user interaction before running test block
    // this adds a note to a cookie as well
    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it("updates the text in state", () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe("and submitting the new note", () => {
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      });
      // this is simulating a clear event, erasing the cookies as well
      afterEach(() => {
        app.find('.btn').at(1).simulate('click')
      });
      // once the cookies have been cleared the only note is the prop we passed
      it("adds the new note to state", () => {
        expect(app.state().notes[0].text).toEqual(testNote)
      });

      describe('and remounting the component', () => {
        let app2;
        // delay mount until this test block is run
        beforeEach(() => {
          app2 = mount(<App />);
        });

        it('reads the stored note cookies', () => {
          expect(app2.state().notes).toEqual([{ text: testNote }])
        })
      })

      describe("and clicking the clear button", () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        });

        it('clears the notes in the state', () => {
          expect(app.state().notes).toEqual([]);
        });
      })
    });
  });
});
