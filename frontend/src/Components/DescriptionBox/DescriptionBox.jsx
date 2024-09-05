import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate the
          buying and selling of products or services over the internet.It 
          serves as a virtual marketplace where bussinesses and individuals can 
          showcase their products, interact with customers, and conduct
          transactions whithout the need for a physical presence. E-Commerce
          websites have gained immense popularity due to their convenience 
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-Commerce websites typically display products or services along 
          with detailed descriptions. images, prices, and any available variations.
          (e.g. sizes, colours). Each products usually has its own dedicated page
          with relevant information

        </p>
      </div>

    </div>
  )
}

export default DescriptionBox