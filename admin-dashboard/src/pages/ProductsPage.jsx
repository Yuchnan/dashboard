import React from 'react';
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard';
import ProductTable from '../components/products/ProductTable';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesTrendChart from '../components/products/SalesTrendChart';

import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';

const ProductsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Products" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* Stats */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Total Produk" icon={Package} value="23200" color="#6366F1" />
                    <StatCard name="Penjualan Terbaik" icon={TrendingUp} value="1.234" color="#8B5CF6" />
                    <StatCard name="Stok Rendah" icon={AlertTriangle} value="666" color="#EC4899" />
                    <StatCard name="Total Pendapatan" icon={DollarSign} value="15%" color="#10B981" />
                </motion.div>

                <ProductTable />

                {/* Charts */}
                <div className='grid grid-col-1 gap-8 lg:grid-cols-2'>
                    <SalesTrendChart />
                    <CategoryDistributionChart />
                </div>
            </main>
        </div>
    )
}

export default ProductsPage