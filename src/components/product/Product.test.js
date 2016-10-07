import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';


const props = {
    srcA: 'srcA',
    srcB: 'srcB',
    brand: '',
    description: '',
    sizes: ['s', 'm'],
};

describe('Product', () => {
    it('renders with src and title', () => {
        const wrapper = shallow(<Product { ...props } />);

        expect(wrapper.find('img').length).toEqual(2);
        expect(wrapper.find('img').get(0).props.src).toEqual(props.srcA);
        expect(wrapper.find('img').get(1).props.src).toEqual(props.srcB);
    });

    it('renders with correct bootstrap classes', () => {
        const wrapper = shallow(<Product { ...props } />);

        // since we rely on the correctness of bootstrap we only check the classes here
        expect(wrapper.find('.product').hasClass('col-xs-6')).toEqual(true);
        expect(wrapper.find('.product').hasClass('col-sm-4')).toEqual(true);
        expect(wrapper.find('.product').hasClass('col-lg-3')).toEqual(true);
    });

    it('renders the correct sizes', () => {
        const wrapper = shallow(<Product { ...props } />);

        expect(wrapper.find('ul li').length).toEqual(2);

        expect(wrapper.find('ul li').get(0).props.children).toEqual(props.sizes[0]);
        expect(wrapper.find('ul li').get(1).props.children).toEqual(props.sizes[1]);
    });
});
