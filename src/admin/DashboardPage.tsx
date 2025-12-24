import React from 'react';
import { Link } from 'react-router-dom';
import {
    IconTrendingUp,
    IconTrendingDown,
    IconOrders,
    IconCustomers,
    IconRevenue,
    IconBarChart,
    IconPlus,
    IconMail
} from './AdminIcons';

const stats = [
    { label: 'Revenus Aujourd\'hui', value: '45,200 DA', change: '+12.5%', trend: 'up', icon: <IconRevenue className="text-blue-600" />, color: 'bg-blue-50' },
    { label: 'Commandes Total', value: '1,284', change: '+8.2%', trend: 'up', icon: <IconOrders className="text-orange-600" />, color: 'bg-orange-50' },
    { label: 'Nouveaux Clients', value: '124', change: '+23.1%', trend: 'up', icon: <IconCustomers className="text-emerald-600" />, color: 'bg-emerald-50' },
    { label: 'Taux de Conversion', value: '3.24%', change: '-1.4%', trend: 'down', icon: <IconBarChart className="text-purple-600" />, color: 'bg-purple-50' },
];

const recentOrders = [
    { id: 'EDZ-001', customer: 'Ahmed Benali', product: 'Netflix Premium', amount: '2,500 DA', status: 'completed', time: 'Il y a 5 min' },
    { id: 'EDZ-002', customer: 'Sara Mansouri', product: 'Spotify Family', amount: '1,800 DA', status: 'pending', time: 'Il y a 15 min' },
    { id: 'EDZ-003', customer: 'Karim Hadj', product: 'YouTube Premium', amount: '1,200 DA', status: 'completed', time: 'Il y a 32 min' },
    { id: 'EDZ-004', customer: 'Amina Cherif', product: 'Canva Pro', amount: '3,000 DA', status: 'processing', time: 'Il y a 1h' },
    { id: 'EDZ-005', customer: 'Youcef Brahim', product: 'Netflix Standard', amount: '1,800 DA', status: 'completed', time: 'Il y a 2h' },
];

const activities = [
    { user: 'Hassan', action: 'a mis à jour', target: 'Logo Netflix', time: '12m', color: 'bg-blue-500' },
    { user: 'Inès', action: 'a validé la commande', target: '#EDZ-003', time: '32m', color: 'bg-emerald-500' },
    { user: 'Système', action: 'a généré le rapport', target: 'Ventes Hebdo', time: '1h', color: 'bg-purple-500' },
    { user: 'Karim', action: 'a ajouté un client', target: 'Meryem Z.', time: '2h', color: 'bg-orange-500' },
];

const chartData = [35, 55, 45, 70, 65, 85, 75, 90, 80, 95, 88, 100];
const chartLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
        case 'pending': return 'bg-amber-50 text-amber-700 border-amber-100';
        case 'processing': return 'bg-blue-50 text-blue-700 border-blue-100';
        default: return 'bg-slate-50 text-slate-700 border-slate-100';
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
        <div className="space-y-8 pb-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
                                }`}>
                                {stat.trend === 'up' ? <IconTrendingUp size={14} /> : <IconTrendingDown size={14} />}
                                {stat.change}
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            <p className="text-2xl font-extrabold text-slate-900 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Section: Chart & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Analyse des Revenus</h3>
                            <p className="text-sm text-slate-500">Performance mensuelle de l'année en cours</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mr-4">
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                                Ventes Directes
                            </span>
                            <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold rounded-xl px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none cursor-pointer">
                                <option>Année 2025</option>
                                <option>Année 2024</option>
                            </select>
                        </div>
                    </div>

                    {/* Simple Professional Bar Chart */}
                    <div className="h-[280px] flex items-end justify-between gap-3 group">
                        {chartData.map((value, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center group/bar relative">
                                {/* Tooltip */}
                                <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10 font-bold">
                                    {(value * 1234).toLocaleString()} DA
                                </div>
                                <div
                                    className="w-full bg-yellow-400/20 rounded-t-xl transition-all duration-300 group-hover/bar:bg-yellow-400 relative overflow-hidden"
                                    style={{ height: `${value * 2.2}px` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-tighter">{chartLabels[index]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-[#0F172A] rounded-3xl p-8 text-white shadow-xl shadow-slate-900/10 flex flex-col">
                    <h3 className="text-lg font-bold mb-6 flex items-center justify-between">
                        Activité Récente
                        <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-slate-400">Live</span>
                    </h3>
                    <div className="space-y-6 flex-1">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex gap-4 group cursor-pointer">
                                <div className="relative">
                                    <div className={`w-2 h-2 rounded-full mt-2 ring-4 ring-offset-4 ring-offset-[#0F172A] ${index === 0 ? 'bg-yellow-400 animate-pulse' : 'bg-slate-600'
                                        }`}></div>
                                    {index !== activities.length - 1 && (
                                        <div className="absolute top-4 left-1 w-[1px] h-[calc(100%+16px)] bg-slate-800"></div>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-medium">
                                        <span className="text-yellow-400">{activity.user}</span>
                                        <span className="text-slate-400 mx-1.5">{activity.action}</span>
                                        <span className="text-white hover:underline">{activity.target}</span>
                                    </p>
                                    <span className="text-[11px] text-slate-500 font-bold uppercase">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
                        Voir tout l'historique
                    </button>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Commandes en attente</h3>
                        <p className="text-sm text-slate-500 mt-0.5">Dernières transactions à traiter</p>
                    </div>
                    <Link to="/admin/orders" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                        Gestion complète
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F8FAFC]">
                            <tr>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Référence</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Client</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Produit</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Montant</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Status</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Date</th>
                                <th className="text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-5 text-sm font-bold text-slate-900 leading-none">
                                        <span className="text-slate-400 mr-0.5">#</span>{order.id.split('-')[1]}
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 uppercase">
                                                {order.customer.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="text-sm font-semibold text-slate-900">{order.customer}</div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-slate-600 font-medium">{order.product}</td>
                                    <td className="px-8 py-5 text-sm font-extrabold text-slate-900">{order.amount}</td>
                                    <td className="px-8 py-5">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusStyles(order.status)} uppercase tracking-wider`}>
                                            {getStatusLabel(order.status)}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-sm font-medium text-slate-500">{order.time}</td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 text-slate-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 italic font-medium">
                                            Modifier
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Advanced Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-yellow-400 hover:shadow-lg transition-all text-left flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                        <IconPlus size={24} />
                    </div>
                    <div className="mt-1">
                        <h4 className="font-bold text-slate-900">Nouveau Produit</h4>
                        <p className="text-xs text-slate-500 mt-1">Élargir le catalogue d'abonnements</p>
                    </div>
                </button>

                <button className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all text-left flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-rotate-6 shadow-sm">
                        <IconMail size={24} />
                    </div>
                    <div className="mt-1">
                        <h4 className="font-bold text-slate-900">Campagne Email</h4>
                        <p className="text-xs text-slate-500 mt-1">Informer les clients des promos</p>
                    </div>
                </button>

                <button className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all text-left flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                        <IconBarChart size={24} />
                    </div>
                    <div className="mt-1">
                        <h4 className="font-bold text-slate-900">Rapports Financiers</h4>
                        <p className="text-xs text-slate-500 mt-1">Exportation mensuelle détaillée</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

