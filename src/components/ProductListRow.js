import React from 'react';

const ProductListRow = ({ productsList }) => {

    const { product_name, image } = productsList;

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <span className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
            </span>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Construction material</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product_name}</h2>
                <p className="mt-1">$99.99</p>
            </div>
        </div>
    );
};

export default ProductListRow;