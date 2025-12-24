import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
    IconDashboard,
    IconOrders,
    IconProducts,
    IconCustomers,
    IconRevenue,
    IconSettings,
    IconBell,
    IconSearch,
    IconExternalLink
} from './AdminIcons';

const sidebarItems = [
    { icon: <IconDashboard />, label: 'Dashboard', path: '/admin' },
    { icon: <IconOrders />, label: 'Commandes', path: '/admin/orders' },
    { icon: <IconProducts />, label: 'Produits', path: '/admin/products' },
    { icon: <IconCustomers />, label: 'Clients', path: '/admin/customers' },
    { icon: <IconRevenue />, label: 'Revenus', path: '/admin/revenue' },
    { icon: <IconSettings />, label: 'Paramètres', path: '/admin/settings' },
];

export const AdminLayout: React.FC = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#0F172A] text-white flex flex-col fixed h-full transition-all duration-300 z-30 shadow-xl`}>
                {/* Logo */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    {isSidebarOpen ? (
                        <Link to="/admin" className="text-2xl font-serif tracking-tight">
                            Edzy <span className="text-yellow-400 text-xs font-sans font-bold tracking-widest uppercase ml-1">Admin</span>
                        </Link>
                    ) : (
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-[#0F172A] font-bold">E</div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 mt-4">
                    <ul className="space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                            ? 'bg-yellow-400 text-[#0F172A] font-semibold shadow-lg shadow-yellow-400/10'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className={`${isActive ? 'text-[#0F172A]' : 'text-slate-500 group-hover:text-white'}`}>
                                            {item.icon}
                                        </span>
                                        {isSidebarOpen && <span className="text-sm tracking-wide">{item.label}</span>}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-white/5">
                    <div className={`flex items-center ${isSidebarOpen ? 'gap-3 px-4' : 'justify-center'} py-3`}>
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-xl flex items-center justify-center text-[#0F172A] font-bold shadow-inner">
                                A
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#0F172A] rounded-full"></div>
                        </div>
                        {isSidebarOpen && (
                            <div className="overflow-hidden">
                                <div className="text-sm font-semibold truncate">Admin User</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Propriétaire</div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Top Bar */}
                <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 sticky top-0 z-20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors md:hidden"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                            </button>

                            <div className="relative hidden md:block w-72">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                    <IconSearch size={18} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Rechercher une commande..."
                                    className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-yellow-400 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl relative transition-all">
                                <IconBell size={20} />
                                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                            </button>

                            <div className="h-8 w-px bg-slate-200 mx-2"></div>

                            <Link
                                to="/"
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 rounded-xl transition-all"
                            >
                                <IconExternalLink size={18} />
                                <span className="hidden sm:inline">Voir le site</span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8 max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {sidebarItems.find(item => item.path === location.pathname)?.label || 'Aperçu'}
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">
                            {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

