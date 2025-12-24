import React, { useState } from 'react';

const allCustomers = [
    { id: 1, name: 'Ahmed Benali', email: 'ahmed@gmail.com', phone: '+213 555 123 456', orders: 5, totalSpent: '12,500 DA', lastOrder: '2025-12-24', status: 'active' },
    { id: 2, name: 'Sara Mansouri', email: 'sara@gmail.com', phone: '+213 555 234 567', orders: 3, totalSpent: '5,400 DA', lastOrder: '2025-12-24', status: 'active' },
    { id: 3, name: 'Karim Hadj', email: 'karim@gmail.com', phone: '+213 555 345 678', orders: 8, totalSpent: '19,200 DA', lastOrder: '2025-12-23', status: 'vip' },
    { id: 4, name: 'Amina Cherif', email: 'amina@gmail.com', phone: '+213 555 456 789', orders: 2, totalSpent: '6,000 DA', lastOrder: '2025-12-23', status: 'active' },
    { id: 5, name: 'Youcef Brahim', email: 'youcef@gmail.com', phone: '+213 555 567 890', orders: 12, totalSpent: '28,800 DA', lastOrder: '2025-12-22', status: 'vip' },
    { id: 6, name: 'Nadia Khelifi', email: 'nadia@gmail.com', phone: '+213 555 678 901', orders: 1, totalSpent: '900 DA', lastOrder: '2025-12-22', status: 'new' },
    { id: 7, name: 'Mohamed Ali', email: 'mohamed@gmail.com', phone: '+213 555 789 012', orders: 0, totalSpent: '0 DA', lastOrder: '-', status: 'inactive' },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'vip': return 'bg-yellow-100 text-yellow-700';
        case 'active': return 'bg-green-100 text-green-700';
        case 'new': return 'bg-blue-100 text-blue-700';
        case 'inactive': return 'bg-gray-100 text-gray-500';
        default: return 'bg-gray-100 text-gray-700';
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

    const stats = {
        total: allCustomers.length,
        vip: allCustomers.filter(c => c.status === 'vip').length,
        active: allCustomers.filter(c => c.status === 'active').length,
        new: allCustomers.filter(c => c.status === 'new').length,
    };

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500">Total Clients</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500">VIP 👑</p>
                    <p className="text-2xl font-bold text-yellow-600">{stats.vip}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500">Actifs</p>
                    <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500">Nouveaux</p>
                    <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Rechercher par nom ou email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full input"
                        />
                    </div>
                    <div className="flex gap-2">
                        {['all', 'vip', 'active', 'new', 'inactive'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === status
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {status === 'all' ? 'Tous' : status === 'vip' ? 'VIP 👑' : status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Client</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Contact</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Commandes</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Total Dépensé</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Dernière Commande</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Status</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-900">{customer.email}</p>
                                        <p className="text-xs text-gray-500">{customer.phone}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{customer.orders}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{customer.totalSpent}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{customer.lastOrder}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                                            {customer.status === 'vip' ? 'VIP 👑' : customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="text-sm text-yellow-600 hover:underline">Voir</button>
                                            <button className="text-sm text-green-600 hover:underline">💬</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
