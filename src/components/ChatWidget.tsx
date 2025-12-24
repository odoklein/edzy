import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    options?: string[];
}

const quickReplies = {
    fr: [
        'Comment passer commande ?',
        'Quels sont les moyens de paiement ?',
        'Combien de temps pour la livraison ?',
        'Parler à un humain',
    ],
    ar: [
        'كيفاش ندير طلب؟',
        'واش هي طرق الدفع؟',
        'شحال يدي وقت التوصيل؟',
        'نحكي مع واحد حقيقي',
    ],
};

const botResponses: Record<string, { fr: string; ar: string }> = {
    'Comment passer commande ?': {
        fr: '📦 C\'est simple !\n\n1️⃣ Choisissez votre abonnement\n2️⃣ Payez via BaridiMob ou CCP\n3️⃣ Envoyez la preuve de paiement\n4️⃣ Recevez vos accès en 30 min max!\n\nVoulez-vous voir nos offres ?',
        ar: '📦 ساهل بزاف!\n\n1️⃣ اختار الاشتراك تاعك\n2️⃣ خلص بالباريدي موب ولا CCP\n3️⃣ بعث صورة الوصل\n4️⃣ استقبل الحساب في 30 دقيقة!\n\nتحب تشوف العروض؟',
    },
    'Quels sont les moyens de paiement ?': {
        fr: '💳 Nous acceptons:\n\n• BaridiMob (RIP: 00799999 00000 22)\n• CCP (N°: 0012345678, Clé: 90)\n\nLe paiement est 100% sécurisé et local ! 🇩🇿',
        ar: '💳 نقبلو:\n\n• باريدي موب (RIP: 00799999 00000 22)\n• CCP (رقم: 0012345678، المفتاح: 90)\n\nالدفع آمن 100% ومحلي! 🇩🇿',
    },
    'Combien de temps pour la livraison ?': {
        fr: '⚡ Super rapide !\n\nEn moyenne 15-30 minutes après validation du paiement.\n\nNous sommes disponibles 7j/7, de 9h à 23h.',
        ar: '⚡ سريع بزاف!\n\nفي المتوسط 15-30 دقيقة بعد ما نتأكدو من الدفع.\n\nراهنا متوفرين 7/7، من 9 صباحاً حتى 11 ليلاً.',
    },
    'Parler à un humain': {
        fr: '👋 Bien sûr ! Contactez-nous directement:\n\n💬 WhatsApp: +213 555 123 456\n📧 Email: contact@edzy.dz\n\nNotre équipe répond en quelques minutes !',
        ar: '👋 أكيد! راسلنا مباشرة:\n\n💬 واتساب: +213 555 123 456\n📧 إيميل: contact@edzy.dz\n\nالفريق تاعنا يرد في دقائق!',
    },
    'كيفاش ندير طلب؟': {
        fr: '📦 C\'est simple !\n\n1️⃣ Choisissez votre abonnement\n2️⃣ Payez via BaridiMob ou CCP\n3️⃣ Envoyez la preuve de paiement\n4️⃣ Recevez vos accès en 30 min max!',
        ar: '📦 ساهل بزاف!\n\n1️⃣ اختار الاشتراك تاعك\n2️⃣ خلص بالباريدي موب ولا CCP\n3️⃣ بعث صورة الوصل\n4️⃣ استقبل الحساب في 30 دقيقة!',
    },
    'واش هي طرق الدفع؟': {
        fr: '💳 Nous acceptons BaridiMob et CCP.',
        ar: '💳 نقبلو:\n\n• باريدي موب (RIP: 00799999 00000 22)\n• CCP (رقم: 0012345678، المفتاح: 90)\n\nالدفع آمن 100%! 🇩🇿',
    },
    'شحال يدي وقت التوصيل؟': {
        fr: '⚡ 15-30 minutes!',
        ar: '⚡ سريع بزاف!\n\nفي المتوسط 15-30 دقيقة بعد ما نتأكدو من الدفع.',
    },
    'نحكي مع واحد حقيقي': {
        fr: '👋 Contact us on WhatsApp!',
        ar: '👋 أكيد! راسلنا مباشرة:\n\n💬 واتساب: +213 555 123 456\n📧 إيميل: contact@edzy.dz',
    },
};

export const ChatWidget: React.FC = () => {
    const { language, isRTL } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Welcome message
            const welcomeMsg = language === 'ar'
                ? '👋 مرحبا! أنا المساعد الآلي تاع إدزي. كيفاش نقدر نعاونك اليوم؟'
                : '👋 Bonjour ! Je suis l\'assistant Edzy. Comment puis-je vous aider aujourd\'hui ?';

            setMessages([
                { id: 1, text: welcomeMsg, isBot: true, options: quickReplies[language] }
            ]);
        }
    }, [isOpen, language]);

    const handleQuickReply = (reply: string) => {
        // Add user message
        setMessages(prev => [...prev, { id: Date.now(), text: reply, isBot: false }]);

        // Show typing
        setIsTyping(true);

        // Bot response after delay
        setTimeout(() => {
            setIsTyping(false);
            const response = botResponses[reply];
            if (response) {
                setMessages(prev => [
                    ...prev,
                    {
                        id: Date.now(),
                        text: response[language],
                        isBot: true,
                        options: quickReplies[language]
                    }
                ]);
            }
        }, 1000);
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-24 z-50 w-14 h-14 bg-[#8DE713] text-[#041D06] rounded-full shadow-lg flex items-center justify-center hover:bg-[#8DE713]/90 transition-all hover:scale-110 ${isRTL ? 'left-6' : 'right-6'}`}
            >
                {isOpen ? (
                    <span className="text-2xl">✕</span>
                ) : (
                    <span className="text-2xl">💬</span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={`fixed bottom-44 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden ${isRTL ? 'left-6' : 'right-6'}`}>
                    {/* Header */}
                    <div className="bg-gray-900 text-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#8DE713] rounded-full flex items-center justify-center text-[#041D06] font-bold">
                                    🤖
                                </div>
                                <div>
                                    <h4 className="font-semibold">Edzy {language === 'ar' ? 'المساعد الآلي' : 'Assistant Auto'}</h4>
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        {language === 'ar' ? 'متوفر الآن' : 'En ligne'}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Bot</span>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[80%] ${msg.isBot ? 'order-2' : ''}`}>
                                    <div
                                        className={`p-3 rounded-2xl whitespace-pre-line text-sm ${msg.isBot
                                            ? 'bg-white border border-gray-200 rounded-tl-none'
                                            : 'bg-[#8DE713] text-[#041D06] rounded-tr-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {/* Quick Replies */}
                                    {msg.isBot && msg.options && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {msg.options.map((option, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleQuickReply(option)}
                                                    className="text-xs px-3 py-2 bg-white border border-gray-200 rounded-full hover:border-[#8DE713] hover:bg-[#8DE713]/10 transition-colors"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer - Human escalation */}
                    <div className="p-3 border-t border-gray-100 bg-white">
                        <p className="text-xs text-gray-500 text-center mb-2">
                            {language === 'ar' ? 'تحتاج مساعدة بشرية؟' : 'Besoin d\'aide humaine ?'}
                        </p>
                        <a
                            href="https://wa.me/213555123456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-lime-500 text-white rounded-xl font-medium hover:bg-lime-600 transition-colors"
                        >
                            <span>👤</span>
                            <span>{language === 'ar' ? 'تكلم مع فريقنا' : 'Parler à notre équipe'}</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};
