import React from 'react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import UserTable from '../components/users/UserTable'
import UserGrowthChart from '../components/users/UserGrowthChart';
import UserActivityHeatmap from '../components/users/UserActivityHeatmap';
import UserDemographicChart from '../components/users/UserDemographicChart';

import { motion } from 'framer-motion';
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import { SALES_STATS } from '../constants/salesPage/salesStats.js'

const UsersPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Pengguna" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* Stats */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Total Pengguna" icon={UsersIcon} value={USER_STATS.totalUsers.toLocaleString()} color="#6366F1" />
                    <StatCard name="Pengguna Baru Per Hari Ini" icon={UserPlus} value={USER_STATS.newUsersToday.toLocaleString()} color="#10B981" />
                    <StatCard name="Pengguna Aktif" icon={UserCheck} value={USER_STATS.activeUsers.toLocaleString()} color="#F59E0B" />
                    <StatCard name="Presentase Pelanggan yang Berhenti Menggunakan" icon={UserX} value={USER_STATS.churnRate} color="#EF4444" />
                </motion.div>

                <UserTable />

                {/* Users Charts */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
                    <UserGrowthChart />
                    <UserActivityHeatmap />
                    <UserDemographicChart />
                </div>
            </main>
        </div>
    )
}

export default UsersPage