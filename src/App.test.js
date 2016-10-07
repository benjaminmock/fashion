import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import nock from 'nock';

describe('App', () => {
    it('renders loading indicator', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.loading').length).toEqual(1);
    });

    it('does not render loading indicator if loading is done', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ isLoading: false });
        expect(wrapper.find('.loading').length).toEqual(0);
    });

    it('renders <ProductList /> if request was successful', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ isLoading: false, items: [] });
        expect(wrapper.find('ProductList').length).toEqual(1);
    });

    it('renders <ProductList /> if request was successful', () => {
        nock('http://localhost:8000')
            .filteringRequestBody(() => '*')
            .get('/productList', '*')
            .reply(200, {body: []});

        const wrapper = mount(<App />);

        setTimeout(() => {
            expect(wrapper.find('ProductList').length).toEqual(1);
            done();
        }, 250);
    });
});
