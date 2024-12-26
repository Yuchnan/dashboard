import React from 'react';

import { motion } from 'framer-motion';
import { DATA_SALURAN_PENJUALAN, WARNA_KATEGORI } from '../../constants/overviewPage/channelPenjualan';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SalesChannelChart = () => {
    return (
        <motion.div
            className='bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Kategori Pendistribusian</h2>
            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <BarChart data={DATA_SALURAN_PENJUALAN}>
                        <CartesianGrid strokeDasharray="3 3" stroke='#4B5563' />
                        <XAxis dataKey="name" stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0,8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Bar dataKey="value" fill="#8884D8">
                            {DATA_SALURAN_PENJUALAN.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={WARNA_KATEGORI[index % WARNA_KATEGORI.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesChannelChart