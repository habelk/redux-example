import React from "react";
import App from "../../src/components/App";


describe('App', () => {
    it('Test the text', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
});