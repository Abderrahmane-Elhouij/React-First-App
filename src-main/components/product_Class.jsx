import React, { Component } from 'react';

class Product extends Component { 
  render() { 
    const { title, price, thumbnail } = this.props; 

    return (
      <div className="col"> 
        <div className="card shadow-sm">
          <img 
            className="bd-placeholder-img card-img-top"
            src={thumbnail}
            alt=""
          />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-text">{price}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Products extends Component {
  render() { 
    const image = process.env.PUBLIC_URL + '/img/laptop2.png';
    const products = [
      {
        id: 1,
        title: 'PC Portable Gamer HP VICTUS',
        price: '7490 DH',
        thumbnail: image,
      },
      {
        id: 2,
        title: 'PC Portable Gamer HP VICTUS',
        price: '2190 DH',
        thumbnail: image,
      },
      {
        id: 3,
        title: 'Pc Portable Chromebook Acer',
        price: '3640 DH',
        thumbnail: image,
      },
      {
        id: 4,
        title: 'PC Portable - HUAWEI',
        price: '1270 DH',
        thumbnail: image,
      },
    ];

    return (
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default Products;
