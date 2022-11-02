import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductMock from '../../__mocks__/ProductMock';
import 'jsdom-global/register';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  const product = ProductMock;
  const handleAddToCart = jest.fn();
  const component = <ProviderMock><Product product={product} handleAddToCart={handleAddToCart} /></ProviderMock>;

  test('returns Product component', () => {
    const productComponent = shallow(<ProviderMock><Product /></ProviderMock>);
    expect(productComponent.length).toEqual(1);
  });

  test('Return title', () => {
    const productComponent = mount(component);
    expect(productComponent.find('h2').text()).toEqual('T-shirt$25');
  });

  test('should handle the click of purchase button', () => {
    const productComponent = mount(component);
    productComponent.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalled();
  });
});
