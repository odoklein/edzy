import { track } from '@vercel/analytics';

export const useAnalytics = () => {
    const trackPageView = (url: string) => {
        track('page_view', { url });
    };

    const trackWhatsAppClick = (productName?: string) => {
        track('whatsapp_click', { product: productName || 'general' });
    };

    const trackOrderStarted = (productId: string, price: number) => {
        track('order_started', { productId, price: price.toString() });
    };

    const trackOrderCompleted = (orderId: string, total: number) => {
        track('order_completed', { orderId, total: total.toString() });
    };

    return {
        trackPageView,
        trackWhatsAppClick,
        trackOrderStarted,
        trackOrderCompleted,
    };
};
