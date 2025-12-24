import React from 'react';
import { IconRevenue, IconTrendingUp, IconTrendingDown, IconBarChart } from './AdminIcons';

const monthlyData = [
    { month: 'Janvier', revenue: 125000, orders: 52, growth: '+12%' },
    { month: 'Février', revenue: 142000, orders: 61, growth: '+14%' },
    { month: 'Mars', revenue: 138000, orders: 58, growth: '-3%' },
    { month: 'Avril', revenue: 165000, orders: 72, growth: '+20%' },
    { month: 'Mai', revenue: 178000, orders: 78, growth: '+8%' },
    { month: 'Juin', revenue: 195000, orders: 85, growth: '+10%' },
    { month: 'Juillet', revenue: 210000, orders: 92, growth: '+8%' },
    { month: 'Août', revenue: 188000, orders: 82, growth: '-10%' },
    { month: 'Septembre', revenue: 225000, orders: 98, growth: '+20%' },
    { month: 'Octobre', revenue: 248000, orders: 108, growth: '+10%' },
    { month: 'Novembre', revenue: 275000, orders: 120, growth: '+11%' },
    { month: 'Décembre', revenue: 312000, orders: 136, growth: '+13%' },
];

const paymentBreakdown = [
    { method: 'BARIDI MOB', amount: 1850000, percentage: 72, color: 'bg-yellow-400' },
    { method: 'CCP ALGERIE', amount: 720000, percentage: 28, color: 'bg-slate-300' },
];

export const RevenuePage: React.FC = () => {
    const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);
    const totalOrders = monthlyData.reduce((sum, m) => sum + m.orders, 0);
    const avgOrderValue = Math.round(totalRevenue / totalOrders);

    const stats = [
        { label: 'Revenus Annuels', value: `${(totalRevenue / 1000000).toFixed(2)}M DA`, growth: '+45%', up: true, icon: <IconRevenue size={18} /> },
        { label: 'Total Commandes', value: totalOrders.toLocaleString(), growth: '+38%', up: true, icon: <IconBarChart size={18} /> },
        { label: 'Panier Moyen', value: `${avgOrderValue.toLocaleString()} DA`, growth: '+5%', up: true, icon: '🛒' },
        { label: 'Marge Brute', value: '42%', growth: 'Stable', up: null, icon: '💎' },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 italic font-bold text-xs uppercase">
                                {typeof stat.icon === 'string' ? stat.icon : stat.icon}
                            </div>
                        </div>
                        <p className="text-2xl font-black text-slate-900 mb-1">{stat.value}</p>
                        <div className="flex items-center gap-1.5">
                            {stat.up !== null && (
                                <span className={stat.up ? 'text-emerald-500' : 'text-rose-500'}>
                                    {stat.up ? <IconTrendingUp size={14} /> : <IconTrendingDown size={14} />}
                                </span>
                            )}
                            <span className={`text-[11px] font-bold ${stat.up === null ? 'text-slate-400' : stat.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {stat.growth}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-[#0F172A] rounded-[40px] p-8 text-white shadow-2xl">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black italic">Flux de Revenus</h3>
                            <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">Performance mensuelle 2025</p>
                        </div>
                        <div className="flex gap-2">
                            {['Volume', 'Valeur'].map(t => (
                                <button key={t} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${t === 'Valeur' ? 'bg-yellow-400 text-slate-900' : 'bg-white/5 text-slate-400'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-1">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex-1 group relative flex flex-col items-center">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-2 py-1 rounded text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-10">
                                    {data.revenue.toLocaleString()} DA
                                </div>
                                <div
                                    className="w-full bg-gradient-to-t from-yellow-400/80 to-yellow-300 rounded-t-xl transition-all duration-500 group-hover:from-yellow-400 group-hover:to-yellow-200"
                                    style={{ height: `${(data.revenue / 320000) * 100}%` }}
                                />
                                <span className="text-[10px] font-bold text-slate-500 mt-4 uppercase tracking-tighter">{data.month.slice(0, 3)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Mix */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-black italic text-slate-900 mb-1">Mix Paiement</h3>
                        <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-8">Répartition par canal</p>

                        <div className="space-y-8">
                            {paymentBreakdown.map((pm, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-end mb-3">
                                        <div>
                                            <p className="text-[11px] font-black text-slate-900 mb-0.5">{pm.method}</p>
                                            <p className="text-sm font-bold text-slate-400">{(pm.amount / 1000).toFixed(0)}k DA</p>
                                        </div>
                                        <p className="text-lg font-black text-slate-900 italic">{pm.percentage}%</p>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ${pm.color}`}
                                            style={{ width: `${pm.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-slate-50 rounded-[24px] border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                        <p className="text-[10px] font-black text-yellow-600 uppercase tracking-widest mb-2 relative z-10">Optimisation Strategique</p>
                        <p className="text-xs font-bold text-slate-600 leading-relaxed relative z-10 transition-colors group-hover:text-slate-900">
                            BaridiMob domine le flux. Augmentez l'adoption CCP en réduisant les frais de transaction de 2%.
                        </p>
                    </div>
                </div>
            </div>

            {/* Detailed Log Table */}
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-black italic text-slate-900 uppercase text-sm tracking-widest">Rapport Détallé</h3>
                    <button className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-all">Exporter PDF</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F8FAFC]">
                            <tr>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Période</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Chiffre d'Affaire</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Volumes</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">AOV</th>
                                <th className="text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Croissance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {monthlyData.map((data, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-8 py-4 font-black text-slate-900 italic uppercase text-xs">{data.month}</td>
                                    <td className="px-8 py-4 text-sm font-bold text-slate-700">{data.revenue.toLocaleString()} DA</td>
                                    <td className="px-8 py-4 text-sm font-medium text-slate-500">{data.orders} CMD</td>
                                    <td className="px-8 py-4 text-sm font-medium text-slate-500">{Math.round(data.revenue / data.orders).toLocaleString()} DA</td>
                                    <td className="px-8 py-4 text-right">
                                        <span className={`text-[11px] font-black italic ${data.growth.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            {data.growth}
                                        </span>
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

