import React, { useState } from 'react';
import { IconSearch, IconMail, IconCustomers } from './AdminIcons';

const allCustomers = [
    { id: 1, name: 'Ahmed Benali', email: 'ahmed@gmail.com', phone: '+213 555 123 456', orders: 5, totalSpent: '12,500 DA', lastOrder: '2025-12-24', status: 'active' },
    { id: 2, name: 'Sara Mansouri', email: 'sara@gmail.com', phone: '+213 555 234 567', orders: 3, totalSpent: '5,400 DA', lastOrder: '2025-12-24', status: 'active' },
    { id: 3, name: 'Karim Hadj', email: 'karim@gmail.com', phone: '+213 555 345 678', orders: 8, totalSpent: '19,200 DA', lastOrder: '2025-12-23', status: 'vip' },
    { id: 4, name: 'Amina Cherif', email: 'amina@gmail.com', phone: '+213 555 456 789', orders: 2, totalSpent: '6,000 DA', lastOrder: '2025-12-23', status: 'active' },
    { id: 5, name: 'Youcef Brahim', email: 'youcef@gmail.com', phone: '+213 555 567 890', orders: 12, totalSpent: '28,800 DA', lastOrder: '2025-12-22', status: 'vip' },
    { id: 6, name: 'Nadia Khelifi', email: 'nadia@gmail.com', phone: '+213 555 678 901', orders: 1, totalSpent: '900 DA', lastOrder: '2025-12-22', status: 'new' },
    { id: 7, name: 'Mohamed Ali', email: 'mohamed@gmail.com', phone: '+213 555 789 012', orders: 0, totalSpent: '0 DA', lastOrder: '-', status: 'inactive' },
];

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'vip': return 'bg-amber-50 text-amber-700 border-amber-100';
        case 'active': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
        case 'new': return 'bg-blue-50 text-blue-700 border-blue-100';
        case 'inactive': return 'bg-slate-50 text-slate-500 border-slate-100';
        default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
};

export const CustomersPage: React.FC = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredCustomers = allCustomers.filter(customer => {
        const matchesFilter = filter === 'all' || customer.status === filter;
        const matchesSearch = customer.name.toLowerCase().includes(search.toLowerCase()) ||
            customer.email.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const stats = [
        { label: 'Total Clients', value: allCustomers.length, icon: <IconCustomers size={18} />, color: 'text-slate-600 bg-slate-100' },
        { label: 'Clients VIP', value: allCustomers.filter(c => c.status === 'vip').length, icon: '⭐️', color: 'text-amber-600 bg-amber-50' },
        { label: 'Actifs', value: allCustomers.filter(c => c.status === 'active').length, icon: '✅', color: 'text-emerald-600 bg-emerald-50' },
        { label: 'Nouveaux', value: allCustomers.filter(c => c.status === 'new').length, icon: '✨', color: 'text-blue-600 bg-blue-50' },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>
                                {typeof stat.icon === 'string' ? <span className="text-xs">{stat.icon}</span> : stat.icon}
                            </div>
                        </div>
                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <IconSearch size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Rechercher par nom, email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
                    {['all', 'vip', 'active', 'new', 'inactive'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter === status
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {status === 'all' ? 'TOUS' : status.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F8FAFC]">
                            <tr>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Client</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Contact</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5 text-center">Commandes</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Dépenses</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Status</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 flex items-center justify-center font-bold text-slate-700 shadow-sm border border-slate-200">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{customer.name}</div>
                                                <div className="text-[11px] text-slate-400 font-medium">Inscrit le {customer.lastOrder !== '-' ? customer.lastOrder : 'Récemment'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 uppercase">
                                        <div className="text-sm font-medium text-slate-600 lowercase">{customer.email}</div>
                                        <div className="text-[11px] text-slate-400 font-bold mt-0.5">{customer.phone}</div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-slate-50 text-sm font-bold text-slate-900 border border-slate-100">
                                            {customer.orders}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-sm font-black text-slate-900">{customer.totalSpent}</td>
                                    <td className="px-8 py-5">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-widest ${getStatusStyles(customer.status)}`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right flex items-center justify-end gap-2 pt-6">
                                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all shadow-sm bg-white border border-slate-100">
                                            <IconMail size={16} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all shadow-sm bg-white border border-slate-100 italic font-bold text-xs px-3">
                                            Gérer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredCustomers.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-4 text-slate-200">
                            <IconCustomers size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Aucun client trouvé</h3>
                        <p className="text-sm text-slate-500 mt-1">Essayez d'ajuster vos filtres de recherche</p>
                    </div>
                )}
            </div>
        </div>
    );
};

