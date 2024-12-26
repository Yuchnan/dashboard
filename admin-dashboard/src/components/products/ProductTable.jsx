import React, { useEffect, useState } from 'react';
import EachUtils from './../../utils/EachUtils';

import { Edit, Search, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { DATA_PRODUK, HEADER_TABLE } from './../../constants/productsPage/productData';
const ProductTable = () => {
    const [isShow, setIsShow] = useState(false)
    const [searchQuery, setSearchQuery] = useState(null)
    const [dataProduk, setDataProduk] = useState(DATA_PRODUK)

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase()
        setSearchQuery(query)
        const produk = DATA_PRODUK.filter(product => product.nama.toLowerCase().includes(query) || product.kategori.toLowerCase().includes(query))
        setDataProduk(produk)
    }

    return (
        <motion.div
            className='bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg font-medium text-gray-100'>Daftar Produk</h2>
                <div className='relative'>
                    <motion.input
                        initial={{ translateX: -20 }}
                        animate={{ translateX: isShow ? 0 : -20 }}
                        style={{ display: isShow ? "block" : "none" }}
                        placeholder='Cari produk...'
                        className='bg-gray-900/50 text-white pl-10 pr-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={handleSearch}
                        value={searchQuery}
                    />
                    <Search
                        onClick={() => setIsShow(!isShow)}
                        className={isShow
                            ? "absolute top-1/2 -translate-y-1/2 left-3 z-10" : null}
                        size={18}
                    />
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className=' min-w-full divide-y divide-gray-800'>
                    <thead>
                        <tr>
                            <EachUtils
                                of={HEADER_TABLE}
                                render={(item, index) => (
                                    <th key={index} className='text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider overflow-hidden'>{item.name}</th>
                                )}
                            />
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-800'>
                        {dataProduk.map(product => (
                            <motion.tr key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 flex gap-2 items-center'>
                                    <img
                                        src='https://images.unsplash.com/photo-1618354691229-88d47f285158?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        className='size-10 rounded-full'
                                        alt='gambar produk'
                                    />
                                    {product.nama}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>{product.kategori}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>{product.harga}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>{product.stok}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>{product.penjualan}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>
                                    <button className='text-indigo-400 hover:text-indigo-200 mr-2'>
                                        <Edit size={18} />
                                    </button>
                                    <button className='text-red-400 hover:text-red-200'>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}

export default ProductTable