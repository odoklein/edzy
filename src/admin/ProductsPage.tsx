import React, { useState } from 'react';

const allProducts = [
    { id: 1, name: 'Netflix Premium', quality: '4K UHD', price: 2500, originalPrice: 4500, duration: '1 mois', sales: 156, stock: 'unlimited', active: true },
    { id: 2, name: 'Netflix Standard', quality: 'Full HD', price: 1800, originalPrice: 3200, duration: '1 mois', sales: 89, stock: 'unlimited', active: true },
    { id: 3, name: 'Spotify Premium', quality: 'Individual', price: 900, originalPrice: 1500, duration: '1 mois', sales: 124, stock: 'unlimited', active: true },
    { id: 4, name: 'Spotify Family', quality: '6 membres', price: 1800, originalPrice: 2800, duration: '1 mois', sales: 67, stock: 'unlimited', active: true },
    { id: 5, name: 'YouTube Premium', quality: 'Sans pub', price: 1200, originalPrice: 2000, duration: '1 mois', sales: 45, stock: 'unlimited', active: true },
    { id: 6, name: 'Canva Pro', quality: 'Équipe', price: 3000, originalPrice: 5000, duration: '1 mois', sales: 89, stock: 'unlimited', active: true },
];

export const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState(allProducts);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editProduct, setEditProduct] = useState<typeof allProducts[0] | null>(null);

    const toggleActive = (id: number) => {
        setProducts(products.map(p => p.id === id ? { ...p, active: !p.active } : p));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Gestion des Produits</h2>
                    <p className="text-sm text-gray-500">{products.length} produits au catalogue</p>
                </div>
                <button onClick={() => setShowAddModal(true)} className="btn-primary text-sm py-2.5 px-5">
                    ➕ Ajouter un Produit
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className={`bg-white rounded-xl border shadow-sm overflow-hidden ${!product.active ? 'opacity-60' : ''}`}>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.quality}</p>
                                </div>
                                <button
                                    onClick={() => toggleActive(product.id)}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${product.active ? 'bg-green-500' : 'bg-gray-300'}`}
                                >
                                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${product.active ? 'right-1' : 'left-1'}`} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-xs text-gray-500">Prix</p>
                                    <p className="font-bold text-gray-900">{product.price} DA</p>
                                    <p className="text-xs text-gray-400 line-through">{product.originalPrice} DA</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Ventes</p>
                                    <p className="font-bold text-gray-900">{product.sales}</p>
                                    <p className="text-xs text-green-600">ce mois</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => setEditProduct(product)}
                                    className="flex-1 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    ✏️ Modifier
                                </button>
                                <button className="py-2 px-4 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                    🗑️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add/Edit Modal */}
            {(showAddModal || editProduct) && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => { setShowAddModal(false); setEditProduct(null); }}>
                    <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold">{editProduct ? 'Modifier le produit' : 'Ajouter un produit'}</h3>
                            <button onClick={() => { setShowAddModal(false); setEditProduct(null); }} className="text-gray-400 hover:text-gray-900">✕</button>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
                                <input type="text" defaultValue={editProduct?.name} className="input" placeholder="Ex: Netflix Premium" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Qualité / Description</label>
                                <input type="text" defaultValue={editProduct?.quality} className="input" placeholder="Ex: 4K UHD" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Prix (DA)</label>
                                    <input type="number" defaultValue={editProduct?.price} className="input" placeholder="2500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Ancien prix (DA)</label>
                                    <input type="number" defaultValue={editProduct?.originalPrice} className="input" placeholder="4500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Durée</label>
                                <select defaultValue={editProduct?.duration} className="input">
                                    <option>1 mois</option>
                                    <option>3 mois</option>
                                    <option>6 mois</option>
                                    <option>1 an</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full btn-primary py-3">
                                {editProduct ? 'Enregistrer les modifications' : 'Ajouter le produit'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
