import React, { useEffect, useState } from 'react';
import { HiSearch } from "react-icons/hi";
import axios from "axios";
import ProductListRow from './ProductListRow';

const Home = () => {

    const [productsLists, setProductLists] = useState([]);

    useEffect(() => {
        async function getResults() {
            const results = await axios('http://127.0.0.1:8000/api/products');
            setProductLists(results.data)
        }
        getResults()
    }, [])

    console.log(productsLists);

    return (
        <div >
            <div className='mt-12 ml-8'>
                <h1 className='text-4xl font-mono text-gray-900'>Hello,</h1>
                <h3 className='text-2xl font-mono text-gray-700'>This is all the construction products list</h3>
                <h4 className='ml-1 font-mono text-gray-400'>You can search by name if you want</h4>
            </div>
            <div className='ml-6'>
                <div className="rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <div className="relative">
                                <HiSearch className='absolute fa fa-search text-gray-400 top-5 left-4' />
                                <input type="text" className="bg-gray-300 h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
                                <button className='absolute top-4 right-3 btn btn-xs btn-primary'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {
                                    productsLists?.map((productsList) => <ProductListRow
                                        key={productsList.id}
                                        productsList={productsList}
                                    >
                                    </ProductListRow>)
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;