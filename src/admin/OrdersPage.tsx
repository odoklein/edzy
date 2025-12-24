import React, { useState } from 'react';

const allOrders = [
    { id: 'EDZ-001', customer: 'Ahmed Benali', email: 'ahmed@gmail.com', phone: '+213 555 123 456', product: 'Netflix Premium', amount: '2,500 DA', status: 'completed', date: '2025-12-24', paymentMethod: 'BaridiMob' },
    { id: 'EDZ-002', customer: 'Sara Mansouri', email: 'sara@gmail.com', phone: '+213 555 234 567', product: 'Spotify Family', amount: '1,800 DA', status: 'pending', date: '2025-12-24', paymentMethod: 'CCP' },
    { id: 'EDZ-003', customer: 'Karim Hadj', email: 'karim@gmail.com', phone: '+213 555 345 678', product: 'YouTube Premium', amount: '1,200 DA', status: 'completed', date: '2025-12-24', paymentMethod: 'BaridiMob' },
    { id: 'EDZ-004', customer: 'Amina Cherif', email: 'amina@gmail.com', phone: '+213 555 456 789', product: 'Canva Pro', amount: '3,000 DA', status: 'processing', date: '2025-12-24', paymentMethod: 'BaridiMob' },
    { id: 'EDZ-005', customer: 'Youcef Brahim', email: 'youcef@gmail.com', phone: '+213 555 567 890', product: 'Netflix Standard', amount: '1,800 DA', status: 'completed', date: '2025-12-23', paymentMethod: 'CCP' },
    { id: 'EDZ-006', customer: 'Nadia Khelifi', email: 'nadia@gmail.com', phone: '+213 555 678 901', product: 'Spotify Premium', amount: '900 DA', status: 'completed', date: '2025-12-23', paymentMethod: 'BaridiMob' },
    { id: 'EDZ-007', customer: 'Mohamed Ali', email: 'mohamed@gmail.com', phone: '+213 555 789 012', product: 'Netflix Premium', amount: '2,500 DA', status: 'cancelled', date: '2025-12-23', paymentMethod: 'CCP' },
    { id: 'EDZ-008', customer: 'Fatima Zohra', email: 'fatima@gmail.com', phone: '+213 555 890 123', product: 'Canva Pro', amount: '3,000 DA', status: 'completed', date: '2025-12-22', paymentMethod: 'BaridiMob' },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-700';
        case 'pending': return 'bg-yellow-100 text-yellow-700';
        case 'processing': return 'bg-blue-100 text-blue-700';
        case 'cancelled': return 'bg-red-100 text-red-700';
        default: return 'bg-gray-100 text-gray-700';
    }
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'completed': return 'Terminée';
        case 'pending': return 'En attente';
        case 'processing': return 'En cours';
        case 'cancelled': return 'Annulée';
        default: return status;
    }
};

export const OrdersPage: React.FC = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<typeof allOrders[0] | null>(null);

    const filteredOrders = allOrders.filter(order => {
        const matchesFilter = filter === 'all' || order.status === filter;
        const matchesSearch = order.customer.toLowerCase().includes(search.toLowerCase()) ||
            order.id.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Gestion des Commandes</h2>
                    <p className="text-sm text-gray-500">{allOrders.length} commandes au total</p>
                </div>
                <button className="btn-primary text-sm py-2.5 px-5">
                    📥 Exporter CSV
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Rechercher par client ou ID..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full input"
                        />
                    </div>
                    <div className="flex gap-2">
                        {['all', 'pending', 'processing', 'completed', 'cancelled'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === status
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {status === 'all' ? 'Toutes' : getStatusLabel(status)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">ID</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Client</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Produit</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Montant</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Paiement</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Status</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Date</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-mono text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                                            <p className="text-xs text-gray-500">{order.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.paymentMethod}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {getStatusLabel(order.status)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setSelectedOrder(order)}
                                                className="text-sm text-yellow-600 hover:underline"
                                            >
                                                Voir
                                            </button>
                                            <button className="text-sm text-green-600 hover:underline">Valider</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Detail Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedOrder(null)}>
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold">Détails de la commande</h3>
                            <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-900">✕</button>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">ID Commande</p>
                                    <p className="font-mono font-medium">{selectedOrder.id}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Status</p>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                                        {getStatusLabel(selectedOrder.status)}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-xs text-gray-500 uppercase mb-2">Client</p>
                                <p className="font-medium">{selectedOrder.customer}</p>
                                <p className="text-sm text-gray-500">{selectedOrder.email}</p>
                                <p className="text-sm text-gray-500">{selectedOrder.phone}</p>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-xs text-gray-500 uppercase mb-2">Produit</p>
                                <p className="font-medium">{selectedOrder.product}</p>
                                <p className="text-lg font-bold text-gray-900 mt-1">{selectedOrder.amount}</p>
                            </div>

                            <div className="border-t pt-4 flex gap-3">
                                <button className="flex-1 btn-primary py-3">✅ Marquer comme livrée</button>
                                <button className="flex-1 btn-secondary py-3">💬 Contacter</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
