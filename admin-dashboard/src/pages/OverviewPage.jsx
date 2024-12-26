import React from 'react';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesChannelChart from '../components/overview/SalesChannelChart';

import { motion } from 'framer-motion';
import { ShoppingBag, Users, Zap, BarChart2 } from 'lucide-react';

const OverviewPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Overview" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* Stats */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Total Penjualan" icon={Zap} value="Rp123.456.789" color="#6366F1" />
                    <StatCard name="Pengguna Baru" icon={Users} value="1.234" color="#8B5CF6" />
                    <StatCard name="Total Produk" icon={ShoppingBag} value="666" color="#EC4899" />
                    <StatCard name="Rate Konversi" icon={BarChart2} value="15%" color="#10B981" />
                </motion.div>

                {/* Charts */}
                <div className='grid grid-col-1 gap-8 lg:grid-cols-2'>
                    <SalesOverviewChart />
                    <CategoryDistributionChart />
                    <SalesChannelChart />
                </div>
            </main>
        </div>
    )
}

export default OverviewPage