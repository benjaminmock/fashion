import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-lg-3 product">
                <div className="image-wrapper">
                    <img src={ this.props.srcA } alt={ this.props.brand } className="product-image front" />
                    <img src={ this.props.srcB } alt={ this.props.brand } className="product-image back" />
                </div>
                <h3>{ this.props.brand }</h3>
                <p>{ this.props.description }</p>
                <div className="sizes">
                    <h4>verfügbare Größen</h4>
                    <ul>
                        {
                            this.props.sizes.map((v, index) => (
                                <li key={ index }>{ v }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    srcA: React.PropTypes.string.isRequired,
    srcB: React.PropTypes.string.isRequired,
    brand: React.PropTypes.string.isRequired,
    sizes: React.PropTypes.array.isRequired,
    description: React.PropTypes.string,
};

export default Product;
