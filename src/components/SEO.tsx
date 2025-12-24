import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'product';
    schema?: object;
    language?: 'fr' | 'ar';
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image,
    url,
    type = 'website',
    schema,
    language = 'fr',
}) => {
    const siteName = 'Edzy';
    const defaultDescription = 'Abonnements premium en Algérie - Netflix, Spotify, YouTube et plus. Paiement facile via BaridiMob et CCP au meilleur prix.';
    const baseUrl = 'https://edzy.dz'; // Assuming the domain
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Abonnements Premium en Algérie`;
    const metaDescription = description || defaultDescription;
    const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;
    const ogImage = image || `${baseUrl}/og-image.jpg`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />
            <html lang={language} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Language Alternates (pre-configured for future) */}
            <link rel="alternate" hrefLang="fr-DZ" href={canonicalUrl} />
            <link rel="alternate" hrefLang="ar-DZ" href={canonicalUrl} />
            <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Organization Schema (Always present) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    'name': 'Edzy',
                    'url': baseUrl,
                    'logo': `${baseUrl}/logo.png`,
                    'description': defaultDescription,
                    'address': {
                        '@type': 'PostalAddress',
                        'addressCountry': 'DZ'
                    },
                    'contactPoint': {
                        '@type': 'ContactPoint',
                        'contactType': 'customer support',
                        'areaServed': 'DZ',
                        'availableLanguage': ['French', 'Arabic']
                    },
                    'sameAs': [
                        'https://facebook.com/edzy.dz',
                        'https://instagram.com/edzy.dz'
                    ]
                })}
            </script>
        </Helmet>
    );
};
