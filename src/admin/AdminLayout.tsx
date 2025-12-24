import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const sidebarItems = [
    { icon: '📊', label: 'Dashboard', path: '/admin' },
    { icon: '📦', label: 'Commandes', path: '/admin/orders' },
    { icon: '🎁', label: 'Produits', path: '/admin/products' },
    { icon: '👥', label: 'Clients', path: '/admin/customers' },
    { icon: '💰', label: 'Revenus', path: '/admin/revenue' },
    { icon: '⚙️', label: 'Paramètres', path: '/admin/settings' },
];

export const AdminLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col fixed h-full">
                {/* Logo */}
                <div className="p-6 border-b border-gray-800">
                    <Link to="/admin" className="text-xl font-serif">
                        Edzy <span className="text-yellow-400 text-sm font-sans">Admin</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                                ? 'bg-yellow-400 text-gray-900 font-medium'
                                                : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* User */}
                <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
                            A
                        </div>
                        <div>
                            <div className="text-sm font-medium">Admin</div>
                            <div className="text-xs text-gray-500">admin@edzy.dz</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64">
                {/* Top Bar */}
                <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">
                                {sidebarItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
                            </h1>
                            <p className="text-sm text-gray-500">
                                {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-gray-500 hover:text-gray-900 relative">
                                🔔
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                            </button>
                            <Link to="/" className="text-sm text-gray-500 hover:text-gray-900">
                                ← Retour au site
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
