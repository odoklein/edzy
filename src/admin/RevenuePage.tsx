import React from 'react';

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
    { method: 'BaridiMob', amount: 1850000, percentage: 72 },
    { method: 'CCP', amount: 720000, percentage: 28 },
];

export const RevenuePage: React.FC = () => {
    const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);
    const totalOrders = monthlyData.reduce((sum, m) => sum + m.orders, 0);
    const avgOrderValue = Math.round(totalRevenue / totalOrders);

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Revenus Totaux (2025)</p>
                    <p className="text-3xl font-bold text-gray-900">{(totalRevenue / 1000000).toFixed(2)}M DA</p>
                    <p className="text-sm text-green-600 mt-1">+45% vs 2024</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Commandes Totales</p>
                    <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
                    <p className="text-sm text-green-600 mt-1">+38% vs 2024</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Panier Moyen</p>
                    <p className="text-3xl font-bold text-gray-900">{avgOrderValue.toLocaleString()} DA</p>
                    <p className="text-sm text-green-600 mt-1">+5% vs 2024</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Marge Bénéficiaire</p>
                    <p className="text-3xl font-bold text-green-600">42%</p>
                    <p className="text-sm text-gray-500 mt-1">Stable</p>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Monthly Revenue */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-6">Revenus Mensuels 2025</h3>
                    <div className="h-80 flex items-end gap-2">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                <div className="text-xs text-gray-500 -rotate-45 origin-bottom-left whitespace-nowrap">
                                    {(data.revenue / 1000).toFixed(0)}k
                                </div>
                                <div
                                    className="w-full bg-yellow-400 rounded-t-lg transition-all hover:bg-yellow-500 cursor-pointer"
                                    style={{ height: `${(data.revenue / 320000) * 200}px` }}
                                    title={`${data.month}: ${data.revenue.toLocaleString()} DA`}
                                />
                                <span className="text-xs text-gray-500">{data.month.slice(0, 3)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-6">Méthodes de Paiement</h3>

                    <div className="space-y-6">
                        {paymentBreakdown.map((payment, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-900">{payment.method}</span>
                                    <span className="text-sm text-gray-500">{payment.percentage}%</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-yellow-400'}`}
                                        style={{ width: `${payment.percentage}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{(payment.amount / 1000).toFixed(0)}k DA</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500">💡 Insight</p>
                        <p className="text-sm font-medium text-gray-900 mt-1">
                            BaridiMob représente 72% des paiements. Envisagez d'ajouter des promotions exclusives pour CCP.
                        </p>
                    </div>
                </div>
            </div>

            {/* Monthly Details Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Détails Mensuels</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Mois</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Revenus</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Commandes</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Panier Moyen</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-4">Croissance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {monthlyData.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{data.month}</td>
                                    <td className="px-6 py-4 text-gray-900">{data.revenue.toLocaleString()} DA</td>
                                    <td className="px-6 py-4 text-gray-600">{data.orders}</td>
                                    <td className="px-6 py-4 text-gray-600">{Math.round(data.revenue / data.orders).toLocaleString()} DA</td>
                                    <td className="px-6 py-4">
                                        <span className={`font-medium ${data.growth.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
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
