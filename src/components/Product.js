import React from 'react';

import ProductListRow from './ProductListRow';

const Product = ({ products, searchProducts }) => {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap m-4">
                        {
                            products?.filter((val) => {
                                if (searchProducts === "") {
                                    return val
                                }
                                else if (val.product_name.toLowerCase().includes(searchProducts.toLowerCase())) {
                                    return val
                                }
                            }).map((val) => <ProductListRow
                                key={val.id}
                                productsList={val}
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