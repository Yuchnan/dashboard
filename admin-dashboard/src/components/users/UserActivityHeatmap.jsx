import React from 'react'

import { motion } from "framer-motion"
import { CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, Legend } from 'recharts'
import { USER_HEATMAP_DATA } from '../../constants/usersPage/userActivityHeatmapData'


const UserActivityHeatmap = () => {
    return (
        <motion.div
            className='bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Activity Heatmap Pengguna</h2>
            <div style={{ width: "100%%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={USER_HEATMAP_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
                        <XAxis dataKey="name" stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Bar dataKey='0-4' stackId='a' fill='#6366F1' />
                        <Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
                        <Bar dataKey='8-12' stackId='a' fill='#EC4899' />
                        <Bar dataKey='12-16' stackId='a' fill='#108981' />
                        <Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
                        <Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default UserActivityHeatmap