import React from 'react';
import { Link } from 'react-router-dom';

// Stats data - Using neutral colors (ops cockpit, not marketing page)
const stats = [
    { label: 'Revenus Aujourd\'hui', value: '45,200 DA', change: '+12%', icon: '💰', color: 'bg-gray-100 text-gray-600' },
    { label: 'Commandes', value: '24', change: '+8%', icon: '📦', color: 'bg-gray-100 text-gray-600' },
    { label: 'Nouveaux Clients', value: '12', change: '+23%', icon: '👥', color: 'bg-gray-100 text-gray-600' },
    { label: 'Taux de Conversion', value: '3.2%', change: '-2%', icon: '📈', color: 'bg-gray-100 text-gray-600' },
];

// Recent orders
const recentOrders = [
    { id: 'EDZ-001', customer: 'Ahmed Benali', product: 'Netflix Premium', amount: '2,500 DA', status: 'completed', time: 'Il y a 5 min' },
    { id: 'EDZ-002', customer: 'Sara Mansouri', product: 'Spotify Family', amount: '1,800 DA', status: 'pending', time: 'Il y a 15 min' },
    { id: 'EDZ-003', customer: 'Karim Hadj', product: 'YouTube Premium', amount: '1,200 DA', status: 'completed', time: 'Il y a 32 min' },
    { id: 'EDZ-004', customer: 'Amina Cherif', product: 'Canva Pro', amount: '3,000 DA', status: 'processing', time: 'Il y a 1h' },
    { id: 'EDZ-005', customer: 'Youcef Brahim', product: 'Netflix Standard', amount: '1,800 DA', status: 'completed', time: 'Il y a 2h' },
];

// Top products
const topProducts = [
    { name: 'Netflix Premium', sales: 156, revenue: '390,000 DA', growth: '+18%' },
    { name: 'Spotify Family', sales: 124, revenue: '223,200 DA', growth: '+12%' },
    { name: 'Canva Pro', sales: 89, revenue: '267,000 DA', growth: '+25%' },
    { name: 'YouTube Premium', sales: 67, revenue: '80,400 DA', growth: '+8%' },
];

// Chart data (simple visual)
const chartData = [35, 55, 45, 70, 65, 85, 75, 90, 80, 95, 88, 100];
const chartLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-700';
        case 'pending': return 'bg-yellow-100 text-yellow-700';
        case 'processing': return 'bg-blue-100 text-blue-700';
        default: return 'bg-gray-100 text-gray-700';
    }
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'completed': return 'Terminée';
        case 'pending': return 'En attente';
        case 'processing': return 'En cours';
        default: return status;
    }
};

export const DashboardPage: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                    {stat.change} vs hier
                                </p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="font-semibold text-gray-900">Revenus Mensuels</h3>
                            <p className="text-sm text-gray-500">Aperçu de l'année 2025</p>
                        </div>
                        <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                            <option>Cette année</option>
                            <option>Année dernière</option>
                        </select>
                    </div>

                    {/* Simple Bar Chart */}
                    <div className="h-64 flex items-end gap-2">
                        {chartData.map((value, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                <div
                                    className="w-full bg-yellow-400 rounded-t-lg transition-all hover:bg-yellow-500"
                                    style={{ height: `${value * 2}px` }}
                                />
                                <span className="text-xs text-gray-500">{chartLabels[index]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-gray-900">Top Produits</h3>
                        <Link to="/admin/products" className="text-sm text-yellow-600 hover:underline">Voir tout</Link>
                    </div>

                    <div className="space-y-4">
                        {topProducts.map((product, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-bold text-gray-500">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                    <p className="text-xs text-gray-500">{product.sales} ventes</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                                    <p className="text-xs text-green-600">{product.growth}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Commandes Récentes</h3>
                        <Link to="/admin/orders" className="text-sm text-yellow-600 hover:underline">Voir toutes</Link>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">ID</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Client</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Produit</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Montant</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Status</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Temps</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-mono text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {getStatusLabel(order.status)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{order.time}</td>
                                    <td className="px-6 py-4">
                                        <button className="text-sm text-yellow-600 hover:underline">Voir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-yellow-400 transition-colors text-left group">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-yellow-400 transition-colors">
                        ➕
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ajouter un Produit</h4>
                    <p className="text-sm text-gray-500">Créer une nouvelle offre d'abonnement</p>
                </button>

                <button className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-yellow-400 transition-colors text-left group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-blue-400 transition-colors">
                        📧
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Envoyer un Email</h4>
                    <p className="text-sm text-gray-500">Contacter tous les clients</p>
                </button>

                <button className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-yellow-400 transition-colors text-left group">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-green-400 transition-colors">
                        📊
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Générer un Rapport</h4>
                    <p className="text-sm text-gray-500">Exporter les données de ventes</p>
                </button>
            </div>
        </div>
    );
};
