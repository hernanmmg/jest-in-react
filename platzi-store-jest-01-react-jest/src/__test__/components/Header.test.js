import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import 'jsdom-global/register';

describe('<Header />', () => {

  test('Render Header s component', () => {
    const header = shallow(<ProviderMock><Header /></ProviderMock>);
    expect(header.length).toEqual(1);
  });

  test('Render title', () => {
    const header = mount(<ProviderMock><Header /></ProviderMock>);
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });

});

describe('<Header /> SnapShot', () => {
  test('checks the Header\'s SnapShot', () => {
    const header = create(<ProviderMock><Header /></ProviderMock>);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
