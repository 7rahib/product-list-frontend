import React, { useEffect, useState } from 'react';
import { HiSearch } from "react-icons/hi";
import Product from './Product';
import axios from "axios";
import Pagination from './Pagination';

const Home = () => {

    const [searchProducts, setSearchProducts] = useState("");
    const [productsLists, setProductLists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    useEffect(() => {
        async function getResults() {
            const results = await axios('http://127.0.0.1:8000/api/products');
            setProductLists(results.data)
        }
        getResults()
    }, [])


    // Getting current page number
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsLists.slice(indexOfFirstProduct, indexOfLastProduct);


    // Changing page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div >
            <div className='mt-12 ml-8'>
                <h1 className='text-4xl font-mono text-gray-900'>Hello,</h1>
                <h3 className='text-2xl font-mono text-gray-700'>This are all the construction products</h3>
                <h4 className='ml-1 font-mono text-gray-400'>You can search by name if you want to</h4>
            </div>
            <div className='ml-6'>
                <div className="rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <div className="relative">
                                <HiSearch className='absolute fa fa-search text-gray-400 top-5 left-4' />
                                <input type="text" className="bg-gray-300 h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    onChange={(e) => { setSearchProducts(e.target.value) }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <Product products={currentProducts} searchProducts={searchProducts} />
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={productsLists.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default Home;