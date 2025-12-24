import React, { useState } from 'react';
import { IconPlus } from './AdminIcons';
import { getProductIcon } from '../components/Icons';

const allProducts = [
    { id: 1, slug: 'netflix', name: 'Netflix Premium', quality: '4K UHD', price: 2500, originalPrice: 4500, duration: '1 mois', sales: 156, stock: 'unlimited', active: true },
    { id: 2, slug: 'netflix', name: 'Netflix Standard', quality: 'Full HD', price: 1800, originalPrice: 3200, duration: '1 mois', sales: 89, stock: 'unlimited', active: true },
    { id: 3, slug: 'spotify', name: 'Spotify Premium', quality: 'Individual', price: 900, originalPrice: 1500, duration: '1 mois', sales: 124, stock: 'unlimited', active: true },
    { id: 4, slug: 'spotify', name: 'Spotify Family', quality: '6 membres', price: 1800, originalPrice: 2800, duration: '1 mois', sales: 67, stock: 'unlimited', active: true },
    { id: 5, slug: 'youtube', name: 'YouTube Premium', quality: 'Sans pub', price: 1200, originalPrice: 2000, duration: '1 mois', sales: 45, stock: 'unlimited', active: true },
    { id: 6, slug: 'canva', name: 'Canva Pro', quality: 'Équipe', price: 3000, originalPrice: 5000, duration: '1 mois', sales: 89, stock: 'unlimited', active: true },
];

export const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState(allProducts);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editProduct, setEditProduct] = useState<typeof allProducts[0] | null>(null);

    const toggleActive = (id: number) => {
        setProducts(products.map(p => p.id === id ? { ...p, active: !p.active } : p));
    };

    return (
        <div className="space-y-8">
            {/* Header / Actions */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Catalogue d'Abonnements</h3>
                    <p className="text-sm text-slate-500 mt-0.5">Gérez vos offres et tarifs</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-black py-3 px-6 rounded-2xl transition-all shadow-lg shadow-slate-900/10 uppercase text-[11px] tracking-widest"
                >
                    <IconPlus size={16} />
                    Nouveau Produit
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className={`group bg-white rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#8DE713]/50 transition-all duration-300 overflow-hidden ${!product.active ? 'grayscale' : ''}`}>
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-1 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                    {getProductIcon(product.slug, 56)}
                                </div>
                                <button
                                    onClick={() => toggleActive(product.id)}
                                    className={`w-14 h-8 rounded-full transition-all relative ${product.active ? 'bg-[#8DE713] shadow-sm shadow-[#8DE713]/20' : 'bg-slate-200'}`}
                                >
                                    <span className={`absolute top-1.5 w-5 h-5 bg-white rounded-full transition-all shadow-md ${product.active ? 'right-1.5' : 'left-1.5'}`} />
                                </button>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-black text-slate-900 italic tracking-tight">{product.name}</h3>
                                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">{product.quality}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 p-6 bg-slate-50 rounded-[24px] border border-slate-100 mb-8">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mb-1">Tarif Actuel</p>
                                    <p className="text-lg font-black text-slate-900 leading-none">{product.price.toLocaleString()} DA</p>
                                    <p className="text-[11px] text-rose-500 font-bold line-through mt-1 opacity-50">{product.originalPrice.toLocaleString()} DA</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mb-1">Volume Ventes</p>
                                    <p className="text-lg font-black text-slate-900 leading-none">{product.sales}</p>
                                    <p className="text-[11px] text-[#8DE713] font-bold mt-1 uppercase tracking-tighter">Croissance +8%</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setEditProduct(product)}
                                    className="flex-1 py-4 text-[11px] font-black text-slate-600 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all uppercase tracking-widest italic"
                                >
                                    Modifier l'offre
                                </button>
                                <button className="p-4 text-rose-400 hover:text-rose-600 hover:bg-rose-50 bg-white border border-slate-200 rounded-2xl transition-all shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add/Edit Product Side Panel */}
            {(showAddModal || editProduct) && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => { setShowAddModal(false); setEditProduct(null); }}>
                    <div className="bg-white rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
                        <div className="bg-[#0F172A] p-8 text-white">
                            <h3 className="text-2xl font-black italic">{editProduct ? 'Modifier l\'offre' : 'Ajouter au catalogue'}</h3>
                            <p className="text-slate-400 text-sm mt-1">Configurez les paramètres de l'abonnement</p>
                        </div>

                        <form className="p-8 space-y-6">
                            <div>
                                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Nom commercial</label>
                                <input type="text" defaultValue={editProduct?.name} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:ring-2 focus:ring-[#8DE713] focus:outline-none transition-all" placeholder="Ex: Netflix Premium 4K" />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Slug Icone</label>
                                    <input type="text" defaultValue={editProduct?.slug} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:ring-2 focus:ring-[#8DE713] focus:outline-none transition-all" placeholder="netflix, spotify..." />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Qualité</label>
                                    <input type="text" defaultValue={editProduct?.quality} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:ring-2 focus:ring-[#8DE713] focus:outline-none transition-all" placeholder="4K, Full HD..." />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Prix Promo (DA)</label>
                                    <input type="number" defaultValue={editProduct?.price} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-black focus:ring-2 focus:ring-[#8DE713] focus:outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 block">Prix Reél (DA)</label>
                                    <input type="number" defaultValue={editProduct?.originalPrice} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-black focus:ring-2 focus:ring-[#8DE713] focus:outline-none transition-all" />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button type="submit" className="flex-1 bg-[#8DE713] hover:bg-[#8DE713]/90 text-[#041D06] font-black py-4 rounded-2xl transition-all shadow-lg shadow-[#8DE713]/20 uppercase text-[11px] tracking-widest italic">
                                    {editProduct ? 'Mettre à jour l\'offre' : 'Propulser au catalogue'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setShowAddModal(false); setEditProduct(null); }}
                                    className="px-8 bg-slate-100 hover:bg-slate-200 text-slate-600 font-black py-4 rounded-2xl transition-all uppercase text-[11px] tracking-widest"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

