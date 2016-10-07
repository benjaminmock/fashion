import React, { Component } from 'react';

import Product from '../product/Product';
import './ProductList.css';

class ProductList extends Component {
    render() {
        const items = Array.isArray(this.props.items) ? this.props.items : [];
        return (
            <div className="row">
                {
                    items.map((v, index) => (
                        <Product
                            key={ index }
                            srcA={ v.images[0] }
                            srcB={ v.images[1] }
                            brand={ v.brand }
                            description={ v.description }
                            sizes={ v.sizes }
                        />
                    ))
                }
            </div>
        );
    }
}

ProductList.propTypes = {
    items: React.PropTypes.array.isRequired,
};

export default ProductList;
