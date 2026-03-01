# SEO Setup Guide for Digantix

## ✅ Completed SEO Optimizations

### 1. Technical SEO
- ✅ **Sitemap.xml** - Automatski generisan za sve stranice i projekte
- ✅ **Robots.txt** - Konfigurisan za optimalno indeksiranje
- ✅ **Meta tags** - Potpuni meta tagovi na svim stranicama
- ✅ **Open Graph** - Social media optimizacija
- ✅ **Twitter Cards** - Twitter optimizacija
- ✅ **Structured Data** - JSON-LD schema markup za organizaciju
- ✅ **Canonical URLs** - Sprečavanje duplicate content-a

### 2. On-Page SEO
- ✅ Title tags sa template-om
- ✅ Meta descriptions za sve stranice
- ✅ Keywords optimizacija
- ✅ Semantic HTML struktura
- ✅ Alt text za slike (Next.js Image component)

## 🔧 Google Search Console Setup

### Korak 1: Verifikacija domena

1. Idi na [Google Search Console](https://search.google.com/search-console)
2. Klikni "Add Property"
3. Izaberi "URL prefix" i unesi: `https://digantix.com`
4. Izaberi metod verifikacije: **DNS TXT Record** ili **DNS CNAME**

### Korak 2: Dodaj DNS Record

Google će ti dati TXT record koji izgleda ovako:
```
google-site-verification=abc123xyz789...
```

**Gde dodati:**
1. Idi kod svog domain provider-a (Namecheap, GoDaddy, Cloudflare, itd.)
2. Otvori DNS Management / DNS Settings
3. Dodaj novi TXT record:
   - **Type:** TXT
   - **Name/Host:** @ (ili ostavi prazno)
   - **Value:** `google-site-verification=tvoj-kod-ovde`
   - **TTL:** 3600 ili Auto

**VAŽNO:** Za detaljne korake, pogledaj [GOOGLE-SEARCH-CONSOLE-DNS.md](GOOGLE-SEARCH-CONSOLE-DNS.md)

### Korak 3: Sačekaj DNS Propagaciju

1. DNS promene traju 5-60 minuta (ponekad do 24h)
2. Klikni "VERIFY LATER" u Google Search Console
3. Nakon 30+ minuta, vrati se i klikni "Verify"

**Provera DNS record-a:**
```bash
dig digantix.com TXT +short
```
ili koristi: https://toolbox.googleapps.com/apps/dig/

### Korak 4: Submit Sitemap

Nakon verifikacije:
1. U Google Search Console, idi na "Sitemaps" (leva strana)
2. Dodaj novi sitemap: `https://digantix.com/sitemap.xml`
3. Klikni "Submit"

Google će početi da indeksira tvoj sajt automatski.

## 📊 Dodatne SEO Provere

### Testovi koje treba uraditi:

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Testiraj mobile i desktop performanse

2. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Testiraj structured data

3. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Proveri mobile optimizaciju

4. **Lighthouse (u Chrome DevTools)**
   - F12 → Lighthouse tab
   - Run test → Performance, SEO, Accessibility

## 🎯 SEO Best Practices (Već implementirano)

✅ Fast loading times (Next.js optimizacije)
✅ Mobile responsive design
✅ HTTPS (Vercel automatski)
✅ Clean URL structure
✅ Image optimization (Next.js Image)
✅ Semantic HTML
✅ Proper heading hierarchy (H1, H2, H3...)
✅ Internal linking
✅ Alt text na slikama

## 📈 Analytics & Tracking Setup

### Google Tag Manager ✅ INSTALLED

**Container ID:** GTM-5RJJW2Q4

Google Tag Manager je već instaliran na sajtu! 

**Sledeći koraci:**
1. Idi na [Google Tag Manager](https://tagmanager.google.com/)
2. Otvori kontejner **GTM-5RJJW2Q4**
3. Dodaj Google Analytics 4 tag
4. Publish promene

**Detaljne instrukcije:** [GOOGLE-TAG-MANAGER.md](GOOGLE-TAG-MANAGER.md)

### Google Analytics 4 (Dodaj kroz GTM)

**Best practice:** Dodaj GA4 kroz GTM umesto direktno u kod

1. Kreiraj GA4 property na [analytics.google.com](https://analytics.google.com)
2. Dobićeš Measurement ID (npr. G-XXXXXXXXXX)
3. U GTM dashboard-u, dodaj novi tag:
   - Type: **Google Analytics: GA4 Configuration**  
   - Measurement ID: tvoj G-ID
   - Trigger: **All Pages**
4. Publish u GTM-u

Sve detalje vidi u: [GOOGLE-TAG-MANAGER.md](GOOGLE-TAG-MANAGER.md)

## 🔍 Monitoring

Nakon 2-3 dana, proveri u Google Search Console:
- **Performance** - Impressions, clicks, CTR
- **Coverage** - Indexed pages
- **Experience** - Core Web Vitals
- **Enhancements** - Structured data status

## 📝 Checklist

- [x] Google Tag Manager instaliran (GTM-5RJJW2Q4)
- [ ] Deploy sajt na production (Vercel)
- [ ] Dodaj DNS TXT record kod domain provider-a
- [ ] Sačekaj DNS propagaciju (30-60 min)
- [ ] Verifikuj domen u Google Search Console
- [ ] Submit sitemap u GSC: `https://digantix.com/sitemap.xml`
- [ ] Dodaj GA4 tag u GTM dashboard
- [ ] Publish GTM container
- [ ] Testirati sve stranice sa PageSpeed Insights
- [ ] Proveri da li se sve stranice indeksiraju (Site:digantix.com na Google-u)
- [ ] Opciono: Dodaj Facebook Pixel kroz GTM
- [ ] Opciono: Setup Cookie Consent

## 🚀 Sledeći koraci za SEO

1. **Content Marketing** - Blog sekcija sa industry insights
2. **Backlinks** - Guest posting, partnerships
3. **Local SEO** - Google My Business (ako ima fizička lokacija)
4. **Schema Markup** - Dodati za individual projects (Service schema)
5. **Testimonials** - Dodati klijent reviews sa schema markup

---

## 📞 Potrebna pomoć?

Sve ovo je već set up! Samo treba:
1. Dodati Google verification code
2. Deploy-ovati na Vercel
3. Verifikovati u Google Search Console
4. Submit sitemap

**Sitemap URL:** https://digantix.com/sitemap.xml
**Robots URL:** https://digantix.com/robots.txt
