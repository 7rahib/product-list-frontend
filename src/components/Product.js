import React from 'react';

import ProductListRow from './ProductListRow';

const Product = ({ products }) => {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products?.map((productsList) => <ProductListRow
                                key={productsList.id}
                                productsList={productsList}
                            >
                            </ProductListRow>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;