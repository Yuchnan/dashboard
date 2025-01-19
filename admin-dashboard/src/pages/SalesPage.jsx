import React from 'react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import SalesOverviewChart from '../components/sales/SalesOverviewChart.jsx'
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart.jsx'
import DailySalesTrend from '../components/sales/DailySalesTrend.jsx'

import { motion } from 'framer-motion'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import { SALES_STATS } from '../constants/salesPage/salesStats.js'

const SalesPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Penjualan" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* Stats */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Total Pendapatan" icon={DollarSign} value={SALES_STATS.totalRevenue} color="#6366F1" />
                    <StatCard name="Rata-rata Pesanan" icon={ShoppingCart} value={SALES_STATS.averageOrderValue} color="#10B981" />
                    <StatCard name="Rate Konversi" icon={TrendingUp} value={SALES_STATS.conversionRate} />
                    <StatCard name="Perkembangan Penjualan" icon={CreditCard} value={SALES_STATS.salesGrowth} color="#EF4444" />
                </motion.div>

                {/* Sales Charts */}
                <SalesOverviewChart />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
                    <SalesByCategoryChart />
                    <DailySalesTrend />
                </div>
            </main>
        </div>
    )
}

export default SalesPage