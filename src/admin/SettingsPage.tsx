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
        <div className="max-w-5xl space-y-12 pb-20">
            {/* Header section */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 italic">Configuration Système</h1>
                    <p className="text-slate-500 font-medium mt-1">Gérez les préférences et l'identité de votre plateforme.</p>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black py-4 px-10 rounded-[20px] shadow-lg shadow-yellow-400/20 transition-all uppercase text-[11px] tracking-[2px] italic">
                    Sauvegarder
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        Identité Visuelle
                    </h3>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed">Ces informations seront affichées sur les factures et le portail client.</p>
                </div>
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                        <div>
                            <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">Nom de la Plateforme</label>
                            <input
                                type="text"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">Email Contact</label>
                                <input
                                    type="email"
                                    value={settings.email}
                                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">Service Client</label>
                                <input
                                    type="tel"
                                    value={settings.phone}
                                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        Finances et Flux
                    </h3>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed">Coordonnées bancaires pour les virements BaridiMob et CCP.</p>
                </div>
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                        <div>
                            <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">BaridiMob RIP</label>
                            <input
                                type="text"
                                value={settings.baridimobRIP}
                                onChange={(e) => setSettings({ ...settings, baridimobRIP: e.target.value })}
                                className="w-full bg-[#0F172A] border border-slate-800 rounded-2xl py-4 px-6 text-sm font-mono font-bold text-yellow-400 outline-none transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">CCP Numéro</label>
                                <input
                                    type="text"
                                    value={settings.ccpNumber}
                                    onChange={(e) => setSettings({ ...settings, ccpNumber: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-mono"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">Clé</label>
                                <input
                                    type="text"
                                    value={settings.ccpKey}
                                    onChange={(e) => setSettings({ ...settings, ccpKey: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-mono"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        Communications
                    </h3>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed">Contrôlez les flux d'alertes automatiques et de rapports.</p>
                </div>
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm divide-y divide-slate-50">
                        {[
                            { key: 'orderNotifications', label: 'Push Notifications', desc: 'Alertes instantanées pour chaque transaction entrante.' },
                            { key: 'emailNotifications', label: 'Rapports Hebdomadaires', desc: 'Résumé analytique envoyé chaque dimanche matin.' },
                            { key: 'autoConfirm', label: 'IA Validation', desc: 'Validation expérimentale des ordres via reconnaissance visuelle de reçu.' },
                        ].map((item) => (
                            <div key={item.key} className="flex items-center justify-between py-6 first:pt-0 last:pb-0">
                                <div>
                                    <p className="text-sm font-black text-slate-900 italic uppercase">{item.label}</p>
                                    <p className="text-[11px] text-slate-400 font-bold mt-1 tracking-tight">{item.desc}</p>
                                </div>
                                <button
                                    onClick={() => setSettings({ ...settings, [item.key]: !settings[item.key as keyof typeof settings] })}
                                    className={`w-14 h-8 rounded-full transition-all relative ${settings[item.key as keyof typeof settings] ? 'bg-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-slate-200'}`}
                                >
                                    <span className={`absolute top-1.5 w-5 h-5 bg-white rounded-full transition-all shadow-md ${settings[item.key as keyof typeof settings] ? 'right-1.5' : 'left-1.5'}`} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-6">
                <div className="md:col-span-1">
                    <h3 className="text-sm font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                        Zone de Sécurité
                    </h3>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed">Ces actions sont permanentes et nécessitent une attention maximale.</p>
                </div>
                <div className="md:col-span-2">
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-4 text-[11px] font-black text-rose-500 bg-rose-50 hover:bg-rose-100 rounded-2xl transition-all uppercase tracking-widest">
                            Vider le Cache Système
                        </button>
                        <button className="px-6 py-4 text-[11px] font-black text-slate-400 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all uppercase tracking-widest">
                            Exporter Logs Bruts
                        </button>
                        <button className="px-6 py-4 text-[11px] font-black text-white bg-rose-500 hover:bg-rose-600 rounded-2xl shadow-lg shadow-rose-500/20 transition-all uppercase tracking-widest">
                            Hard Reset Base de Données
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

