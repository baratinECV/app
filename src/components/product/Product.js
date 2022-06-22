import React from "react";
import "./Product.scss";
import heroProduct from "../../assets/images/product/product.png";
import cart from "../../assets/images/product/cart.png";

export default function Product() {
  return (
    <div className='container-product'>
      <div className='containe-product'>
        <img src={heroProduct} alt="image d'un produit" />

        <div className='desc-container'>
          <p className='title'>Domaine de l’Horgelus 75cl 11.8°</p>
          <p className='sous-title'>Côtes de Gascogne</p>

          <div className='price'>
            <p className='pricing'>14,40 €</p>
            <div className='cart-container bg-orange'>
              <img src={cart} alt='icon ajout au panier' />
            </div>
          </div>
        </div>
      </div>

      <div className='containe-product'>
        <img src={heroProduct} alt="image d'un produit" />

        <div className='desc-container'>
          <p className='title'>Domaine de l’Horgelus 75cl 11.8°</p>
          <p className='sous-title'>Côtes de Gascogne</p>

          <div className='price'>
            <p className='pricing'>14,40 €</p>
            <div className='cart-container bg-orange'>
              <img src={cart} alt='icon ajout au panier' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
