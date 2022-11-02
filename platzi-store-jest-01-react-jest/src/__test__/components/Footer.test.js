import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';
import 'jsdom-global/register';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('renders del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('renders title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });

  test('checks Footer component s UI', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON).toMatchSnapshot();
  });
});
