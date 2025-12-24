import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState({
        siteName: 'Edzy',
        email: 'contact@edzy.dz',
        phone: '+213 555 123 456',
        whatsapp: '+213 555 123 456',
        baridimobRIP: '00799999 00000 22',
        ccpNumber: '0012345678',
        ccpKey: '90',
        orderNotifications: true,
        emailNotifications: true,
        autoConfirm: false,
    });

    return (
        <div className="max-w-4xl space-y-6">
            {/* General Settings */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">⚙️ Paramètres Généraux</h3>
                    <p className="text-sm text-gray-500">Informations de base du site</p>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom du Site</label>
                        <input
                            type="text"
                            value={settings.siteName}
                            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                            className="input"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={settings.email}
                                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                                className="input"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                            <input
                                type="tel"
                                value={settings.phone}
                                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                                className="input"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                        <input
                            type="tel"
                            value={settings.whatsapp}
                            onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                            className="input"
                        />
                    </div>
                </div>
            </div>

            {/* Payment Settings */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">💳 Paramètres de Paiement</h3>
                    <p className="text-sm text-gray-500">Configuration des méthodes de paiement</p>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">BaridiMob RIP</label>
                        <input
                            type="text"
                            value={settings.baridimobRIP}
                            onChange={(e) => setSettings({ ...settings, baridimobRIP: e.target.value })}
                            className="input font-mono"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CCP Numéro</label>
                            <input
                                type="text"
                                value={settings.ccpNumber}
                                onChange={(e) => setSettings({ ...settings, ccpNumber: e.target.value })}
                                className="input font-mono"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CCP Clé</label>
                            <input
                                type="text"
                                value={settings.ccpKey}
                                onChange={(e) => setSettings({ ...settings, ccpKey: e.target.value })}
                                className="input font-mono"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">🔔 Notifications</h3>
                    <p className="text-sm text-gray-500">Gérer les alertes et notifications</p>
                </div>
                <div className="p-6 space-y-4">
                    {[
                        { key: 'orderNotifications', label: 'Notifications de commandes', desc: 'Recevoir une alerte pour chaque nouvelle commande' },
                        { key: 'emailNotifications', label: 'Notifications par email', desc: 'Recevoir un résumé quotidien par email' },
                        { key: 'autoConfirm', label: 'Confirmation automatique', desc: 'Confirmer automatiquement les commandes après paiement vérifié' },
                    ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                            <div>
                                <p className="font-medium text-gray-900">{item.label}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                            <button
                                onClick={() => setSettings({ ...settings, [item.key]: !settings[item.key as keyof typeof settings] })}
                                className={`w-14 h-7 rounded-full transition-colors relative ${settings[item.key as keyof typeof settings] ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                            >
                                <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${settings[item.key as keyof typeof settings] ? 'right-1' : 'left-1'
                                    }`} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm">
                <div className="p-6 border-b border-red-100">
                    <h3 className="font-semibold text-red-600">⚠️ Zone Dangereuse</h3>
                    <p className="text-sm text-gray-500">Actions irréversibles</p>
                </div>
                <div className="p-6 flex flex-wrap gap-4">
                    <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        🗑️ Vider le cache
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        📥 Exporter les données
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                        🔒 Réinitialiser le mot de passe
                    </button>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="btn-primary px-8">
                    💾 Enregistrer les modifications
                </button>
            </div>
        </div>
    );
};
