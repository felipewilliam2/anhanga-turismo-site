// Sistema de Gerenciamento de Cookies - LGPD/GDPR Compliant
class CookieConsent {
    constructor() {
        this.cookieSettings = {
            essential: true, // Sempre true, não pode ser desabilitado
            analytics: false,
            marketing: false
        };
        
        this.cookieNames = {
            consent: 'anhanga_cookie_consent',
            settings: 'anhanga_cookie_settings',
            analytics: 'anhanga_analytics_consent',
            marketing: 'anhanga_marketing_consent'
        };
        
        this.init();
    }
    
    init() {
        this.createBannerHTML();
        this.createModalHTML();
        this.loadSavedSettings();
        this.bindEvents();
        this.checkConsentStatus();
    }
    
    createBannerHTML() {
        const bannerHTML = `
            <div id="cookie-banner" class="cookie-banner" style="display: none;">
                <div class="cookie-banner__content">
                    <div class="cookie-banner__text">
                        <h3>🍪 Utilizamos cookies</h3>
                        <p>Este site utiliza cookies essenciais e outras tecnologias para personalizar sua experiência, analisar o tráfego e exibir anúncios relevantes. Ao continuar navegando, você concorda com nossa <a href="politica-privacidade.html" target="_blank">Política de Privacidade</a>.</p>
                    </div>
                    <div class="cookie-banner__actions">
                        <button id="cookie-accept-all" class="btn btn--primary">Aceitar Todos</button>
                        <button id="cookie-reject-all" class="btn btn--secondary">Rejeitar Todos</button>
                        <button id="cookie-manage" class="btn btn--outline">Gerenciar Cookies</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', bannerHTML);
    }
    
    createModalHTML() {
        const modalHTML = `
            <div id="cookie-modal" class="cookie-modal" style="display: none;">
                <div class="cookie-modal__content">
                    <div class="cookie-modal__header">
                        <h2>Configurações de Cookies</h2>
                        <button id="cookie-modal-close" class="cookie-modal__close">&times;</button>
                    </div>
                    <div class="cookie-modal__body">
                        <p>Personalize suas preferências de cookies. Você pode alterar essas configurações a qualquer momento.</p>
                        
                        <div class="cookie-category">
                            <div class="cookie-category__header">
                                <h3>Cookies Essenciais</h3>
                                <label class="cookie-toggle">
                                    <input type="checkbox" id="essential-cookies" checked disabled>
                                    <span class="cookie-toggle__slider"></span>
                                </label>
                            </div>
                            <p>Necessários para o funcionamento básico do site. Não podem ser desabilitados.</p>
                            <small>Exemplos: Preferências de cookies, segurança, funcionalidades básicas</small>
                        </div>
                        
                        <div class="cookie-category">
                            <div class="cookie-category__header">
                                <h3>Cookies de Análise</h3>
                                <label class="cookie-toggle">
                                    <input type="checkbox" id="analytics-cookies">
                                    <span class="cookie-toggle__slider"></span>
                                </label>
                            </div>
                            <p>Nos ajudam a entender como os visitantes interagem com o site para melhorarmos nossos serviços.</p>
                            <small>Tecnologias: Google Analytics</small>
                        </div>
                        
                        <div class="cookie-category">
                            <div class="cookie-category__header">
                                <h3>Cookies de Marketing</h3>
                                <label class="cookie-toggle">
                                    <input type="checkbox" id="marketing-cookies">
                                    <span class="cookie-toggle__slider"></span>
                                </label>
                            </div>
                            <p>Utilizados para personalizar anúncios e medir a eficácia de campanhas publicitárias.</p>
                            <small>Tecnologias: Meta Pixel (Facebook)</small>
                        </div>
                        
                        <div class="cookie-modal__info">
                            <h4>Mais Informações</h4>
                            <p>Para mais detalhes sobre como tratamos seus dados, consulte nossa <a href="politica-privacidade.html" target="_blank">Política de Privacidade</a>.</p>
                            <p>Você pode alterar suas preferências a qualquer momento clicando no ícone de cookies no rodapé do site.</p>
                        </div>
                    </div>
                    <div class="cookie-modal__footer">
                        <button id="cookie-save-settings" class="btn btn--primary">Salvar Configurações</button>
                        <button id="cookie-accept-all-modal" class="btn btn--secondary">Aceitar Todos</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    bindEvents() {
        // Banner events
        document.getElementById('cookie-accept-all').addEventListener('click', () => this.acceptAll());
        document.getElementById('cookie-reject-all').addEventListener('click', () => this.rejectAll());
        document.getElementById('cookie-manage').addEventListener('click', () => this.openModal());
        
        // Modal events
        document.getElementById('cookie-modal-close').addEventListener('click', () => this.closeModal());
        document.getElementById('cookie-save-settings').addEventListener('click', () => this.saveSettings());
        document.getElementById('cookie-accept-all-modal').addEventListener('click', () => this.acceptAll());
        
        // Close modal on outside click
        document.getElementById('cookie-modal').addEventListener('click', (e) => {
            if (e.target.id === 'cookie-modal') {
                this.closeModal();
            }
        });
        
        // Settings button in footer (will be added)
        this.addSettingsButton();
    }
    
    addSettingsButton() {
        const footer = document.querySelector('.footer__bottom');
        if (footer) {
            const settingsButton = document.createElement('button');
            settingsButton.innerHTML = '🍪 Configurações de Cookies';
            settingsButton.className = 'cookie-settings-btn';
            settingsButton.addEventListener('click', () => this.openModal());
            footer.appendChild(settingsButton);
        }
    }
    
    checkConsentStatus() {
        const consent = this.getCookie(this.cookieNames.consent);
        if (!consent) {
            this.showBanner();
        } else {
            this.loadScripts();
        }
    }
    
    showBanner() {
        document.getElementById('cookie-banner').style.display = 'block';
        document.body.style.paddingBottom = '120px'; // Adjust for banner height
    }
    
    hideBanner() {
        document.getElementById('cookie-banner').style.display = 'none';
        document.body.style.paddingBottom = '0';
    }
    
    openModal() {
        this.loadSettingsToModal();
        document.getElementById('cookie-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        document.getElementById('cookie-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    loadSettingsToModal() {
        document.getElementById('analytics-cookies').checked = this.cookieSettings.analytics;
        document.getElementById('marketing-cookies').checked = this.cookieSettings.marketing;
    }
    
    acceptAll() {
        this.cookieSettings = {
            essential: true,
            analytics: true,
            marketing: true
        };
        this.saveConsent();
        this.hideBanner();
        this.closeModal();
        this.loadScripts();
        this.trackConsentEvent('accept_all');
    }
    
    rejectAll() {
        this.cookieSettings = {
            essential: true,
            analytics: false,
            marketing: false
        };
        this.saveConsent();
        this.hideBanner();
        this.closeModal();
        this.removeNonEssentialCookies();
        this.trackConsentEvent('reject_all');
    }
    
    saveSettings() {
        this.cookieSettings = {
            essential: true,
            analytics: document.getElementById('analytics-cookies').checked,
            marketing: document.getElementById('marketing-cookies').checked
        };
        this.saveConsent();
        this.hideBanner();
        this.closeModal();
        this.loadScripts();
        this.trackConsentEvent('custom_settings');
    }
    
    saveConsent() {
        const consentData = {
            timestamp: new Date().toISOString(),
            settings: this.cookieSettings,
            version: '1.0'
        };
        
        this.setCookie(this.cookieNames.consent, JSON.stringify(consentData), 365);
        this.setCookie(this.cookieNames.settings, JSON.stringify(this.cookieSettings), 365);
        this.setCookie(this.cookieNames.analytics, this.cookieSettings.analytics, 365);
        this.setCookie(this.cookieNames.marketing, this.cookieSettings.marketing, 365);
    }
    
    loadSavedSettings() {
        const savedSettings = this.getCookie(this.cookieNames.settings);
        if (savedSettings) {
            try {
                this.cookieSettings = JSON.parse(savedSettings);
            } catch (e) {
                console.error('Error parsing saved cookie settings:', e);
            }
        }
    }
    
    loadScripts() {
        if (this.cookieSettings.analytics) {
            this.loadGoogleAnalytics();
        }
        
        if (this.cookieSettings.marketing) {
            this.loadMetaPixel();
        }
    }
    
    loadGoogleAnalytics() {
        if (window.gtag) return; // Already loaded
        
        // Google Analytics ID: G-52QZJ03XQV
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-52QZJ03XQV';
        document.head.appendChild(script1);
        
        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52QZJ03XQV', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
            });
        `;
        document.head.appendChild(script2);
    }
    
    loadMetaPixel() {
        if (window.fbq) return; // Already loaded
        
        // Meta Pixel ID: 1238726064652513
        const script = document.createElement('script');
        script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1238726064652513');
            fbq('track', 'PageView');
        `;
        document.head.appendChild(script);
        
        // Add noscript fallback
        const noscript = document.createElement('noscript');
        noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1238726064652513&ev=PageView&noscript=1" />';
        document.body.appendChild(noscript);
    }
    
    removeNonEssentialCookies() {
        // Remove Google Analytics cookies
        this.deleteCookie('_ga');
        this.deleteCookie('_ga_*');
        this.deleteCookie('_gid');
        this.deleteCookie('_gat');
        
        // Remove Meta Pixel cookies
        this.deleteCookie('_fbp');
        this.deleteCookie('_fbc');
        
        // Remove any other non-essential cookies
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const name = cookie.split('=')[0].trim();
            if (!this.isEssentialCookie(name)) {
                this.deleteCookie(name);
            }
        });
    }
    
    isEssentialCookie(name) {
        const essentialCookies = [
            this.cookieNames.consent,
            this.cookieNames.settings,
            this.cookieNames.analytics,
            this.cookieNames.marketing,
            'PHPSESSID',
            'session_id'
        ];
        return essentialCookies.includes(name);
    }
    
    trackConsentEvent(action) {
        // Track consent events for analytics
        const eventData = {
            event: 'cookie_consent',
            action: action,
            settings: this.cookieSettings,
            timestamp: new Date().toISOString()
        };
        
        // Send to your analytics endpoint
        if (typeof gtag !== 'undefined' && this.cookieSettings.analytics) {
            gtag('event', 'cookie_consent', {
                event_category: 'Privacy',
                event_label: action,
                custom_parameter_1: JSON.stringify(this.cookieSettings)
            });
        }
        
        console.log('Cookie consent event:', eventData);
    }
    
    // Cookie utility methods
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    }
    
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname};`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=.${window.location.hostname};`;
    }
    
    // Public method to revoke consent
    revokeConsent() {
        this.rejectAll();
        this.showBanner();
    }
    
    // Public method to get current settings
    getCurrentSettings() {
        return { ...this.cookieSettings };
    }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.cookieConsent = new CookieConsent();
});

// Global function to revoke consent (can be called from anywhere)
window.revokeCookieConsent = function() {
    if (window.cookieConsent) {
        window.cookieConsent.revokeConsent();
    }
};

