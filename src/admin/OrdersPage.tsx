import React, { useState } from 'react';
import { IconSearch, IconOrders, IconMail } from './AdminIcons';

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

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-[#8DE713]/10 text-[#8DE713] border-[#8DE713]/20';
        case 'pending': return 'bg-amber-50 text-amber-700 border-amber-100';
        case 'processing': return 'bg-blue-50 text-blue-700 border-blue-100';
        case 'cancelled': return 'bg-rose-50 text-rose-700 border-rose-100';
        default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'completed': return 'LIVRÉE';
        case 'pending': return 'EN ATTENTE';
        case 'processing': return 'EN COURS';
        case 'cancelled': return 'ANNULÉE';
        default: return status.toUpperCase();
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
        <div className="space-y-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="relative w-full md:w-[450px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <IconSearch size={20} />
                    </span>
                    <input
                        type="text"
                        placeholder="Rechercher par client, référence ou produit..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#8DE713] transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto max-w-full">
                    {['all', 'pending', 'processing', 'completed', 'cancelled'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all whitespace-nowrap ${filter === status
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {status === 'all' ? 'TOUTES' : status.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F8FAFC]">
                            <tr>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Réf.</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Client</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Produit</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Montant</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Paiement</th>
                                <th className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Status</th>
                                <th className="text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8 py-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-5 font-mono text-xs font-bold text-slate-400">
                                        <span className="text-[#8DE713] mr-0.5">#</span>{order.id.split('-')[1]}
                                    </td>
                                    <td className="px-8 py-5">
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 leading-tight">{order.customer}</p>
                                            <p className="text-[11px] text-slate-400 font-medium">{order.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="text-sm font-semibold text-slate-700">{order.product}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">{order.date}</div>
                                    </td>
                                    <td className="px-8 py-5 text-sm font-black text-slate-900">{order.amount}</td>
                                    <td className="px-8 py-5">
                                        <span className="text-[11px] font-bold text-slate-500 border border-slate-200 px-2 py-0.5 rounded-lg bg-slate-50 italic">
                                            {order.paymentMethod}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-widest ${getStatusStyles(order.status)}`}>
                                            {getStatusLabel(order.status)}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button
                                            onClick={() => setSelectedOrder(order)}
                                            className="px-4 py-2 text-xs font-black text-[#041D06] bg-slate-100 hover:bg-[#8DE713] transition-all rounded-xl"
                                        >
                                            GÉRER
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredOrders.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-4 text-slate-200">
                            <IconOrders size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Aucune commande</h3>
                        <p className="text-sm text-slate-500 mt-1">Essayez un autre filtre</p>
                    </div>
                )}
            </div>

            {/* Order Detail Side Panel / Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedOrder(null)}>
                    <div className="bg-white rounded-[32px] max-w-xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
                        <div className="bg-[#0F172A] p-8 text-white relative">
                            <div className="flex items-center justify-between mb-2">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black border tracking-widest ${getStatusStyles(selectedOrder.status)} border-transparent`}>
                                    {getStatusLabel(selectedOrder.status)}
                                </span>
                                <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h3 className="text-2xl font-black italic">Commande #{selectedOrder.id.split('-')[1]}</h3>
                            <p className="text-slate-400 text-sm mt-1">Transaction enregistrée le {selectedOrder.date}</p>
                        </div>

                        <div className="p-8 space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">Informations Client</p>
                                    <p className="font-black text-slate-900 text-lg leading-tight mb-1">{selectedOrder.customer}</p>
                                    <p className="text-sm text-slate-500 font-medium">{selectedOrder.email}</p>
                                    <p className="text-sm text-slate-500 font-medium">{selectedOrder.phone}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">Mode de Paiement</p>
                                    <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
                                        <div className="w-2 h-2 rounded-full bg-[#8DE713]"></div>
                                        <span className="font-black text-slate-900 uppercase text-xs italic">{selectedOrder.paymentMethod}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-[24px] p-6 border border-slate-100">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Détails du Produit</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-black text-slate-900 text-xl">{selectedOrder.product}</p>
                                        <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-tighter">Abonnement Digital • Livraison Instantanée</p>
                                    </div>
                                    <p className="text-2xl font-black text-slate-900">{selectedOrder.amount}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button className="flex-1 bg-[#8DE713] hover:bg-[#8DE713]/90 text-[#041D06] font-black py-4 rounded-2xl transition-all shadow-lg shadow-[#8DE713]/20 uppercase text-xs tracking-widest">
                                    Confirmer la livraison
                                </button>
                                <button className="px-6 bg-slate-100 hover:bg-slate-200 text-slate-600 font-black py-4 rounded-2xl transition-all uppercase text-xs tracking-widest">
                                    <IconMail size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

