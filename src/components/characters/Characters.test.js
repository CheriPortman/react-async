import React from 'react';
import { shallow } from 'enzyme';
import Characters from '../characters/Characters';


describe('Characters component', () => {
  it('renders characters', () => {
    const characters = [
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human', 
        image: './image'
      },
      {
        name: 'Jimmy Stitch',
        status: 'Alive',
        species: 'Human',
        image: './image'
      }
    ];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
