import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import superagent from 'superagent';
import request from 'superagent';

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
        request.__setResponse(200, true, [])

        const wrapper = mount(<App />);
        expect(wrapper.find('ProductList').length).toBe(1);
        expect(wrapper.find('.error').length).toBe(0);
    });

    it('renders error if request was not successful', () => {
        request.__setResponse(403, false, [])

        const wrapper = mount(<App />);
        expect(wrapper.find('.error').length).toBe(1);
    });
});
