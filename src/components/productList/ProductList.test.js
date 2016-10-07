import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

describe('ProductList', () => {
    it('renders with bootstrap class row', () => {
        const wrapper = shallow(<ProductList items={ [] }/>);

        expect(wrapper.find('div').hasClass('row')).toEqual(true);
    });

    it('renders no <Product /> if items array is empty', () => {
        const wrapper = shallow(<ProductList items={ [] }/>);

        expect(wrapper.find('Product').length).toEqual(0);
    });

    it('renders correct amount of <Product />', () => {
        const item = {
            images: ['a', 'b'],
            brand: 'brand',
            description: 'description',
            sizes: ['s', 'm'],
        };

        const wrapper = shallow(<ProductList items={ [item, item] }/>);
        expect(wrapper.find('Product').length).toEqual(2);
    });
});
