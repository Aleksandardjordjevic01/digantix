# Google Tag Manager Setup - Digantix

## ✅ Uspešno integrisano!

Google Tag Manager (GTM) je sada aktivan na sajtu sa ID-em: **GTM-5RJJW2Q4**

### 🎯 Šta je urađeno:

1. **GTM Script** - Dodat u `app/layout.tsx` sa Next.js Script komponentom
2. **Noscript fallback** - Dodat na početku body tag-a
3. **Strategy: afterInteractive** - Optimalna performance (učitava se nakon što je stranica interaktivna)

---

## 🔧 Google Tag Manager Dashboard

Pristupi svom GTM dashboard-u:
- URL: https://tagmanager.google.com/
- Container ID: **GTM-5RJJW2Q4**

---

## 📊 Dodavanje Tagova u GTM

### 1. Google Analytics 4 (GA4)

**U GTM Dashboard-u:**

1. **Tags** → **New**
2. **Tag Configuration** → Izaberi **Google Analytics: GA4 Configuration**
3. **Measurement ID** → Unesi tvoj GA4 ID (npr. `G-XXXXXXXXXX`)
4. **Triggering** → Izaberi **All Pages**
5. **Save** i daj ime: "GA4 - All Pages"

### 2. Facebook Pixel

1. **Tags** → **New**
2. **Tag Configuration** → **Custom HTML**
3. Paste Facebook Pixel kod
4. **Triggering** → **All Pages**
5. **Save**

### 3. Custom Events (Opciono)

Primeri događaja koje možeš pratiti:
- Form Submissions (Contact Form)
- Button Clicks (CTA buttons)
- Scroll Depth
- Link Clicks (Project links)
- Video Views

---

## 🧪 Testiranje GTM Integracije

### 1. Google Tag Assistant (Chrome Extension)

1. Instaliraj: [Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Otvori sajt: https://digantix.com
3. Klikni na Tag Assistant ikonicu
4. Trebao bi da vidiš: **GTM-5RJJW2Q4** ✓ active

### 2. GTM Preview Mode

1. U GTM Dashboard-u, klikni **Preview** (gore desno)
2. Unesi URL: `https://digantix.com`
3. Otvoriće se novi prozor sa debug mode-om
4. Vidi koje tag-ove se okidaju na svakoj stranici

### 3. Chrome DevTools Console

Otvori konzolu (F12) na digantix.com i proveri:
```javascript
window.dataLayer
```

Trebao bi da vidiš array sa GTM događajima.

---

## 📈 Šta možeš pratiti sa GTM?

### Automatski događaji:
- ✅ Page Views
- ✅ Clicks (ako konfiguriš)
- ✅ Form Submits
- ✅ Scroll Events
- ✅ Video Events

### Custom događaji (možeš dodati):

**Primer: Contact Form Submit**
```javascript
// U components/ui/lets-work-section.tsx ili gde god je forma
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'contact_form_submit',
  'formName': 'Contact Form',
  'userEmail': email // opciono
});
```

**Primer: Project Click**
```javascript
window.dataLayer.push({
  'event': 'project_click',
  'projectName': 'Modular Houses',
  'projectCategory': 'Web Development'
});
```

---

## 🔒 Privacy & GDPR

### Cookie Consent

Ako trebaš GDPR compliance, razmotri:

1. **Cookie Consent Tool:**
   - [CookieYes](https://www.cookieyes.com/)
   - [Cookiebot](https://www.cookiebot.com/)
   - [OneTrust](https://www.onetrust.com/)

2. **Integracija sa GTM:**
   - GTM tag-ovi se aktiviraju tek nakon pristanka korisnika
   - Koristi Custom Events za trigger tagova

### Blocking Before Consent

U GTM, možeš koristiti **Consent Mode** za Google Analytics:
- Documentation: https://support.google.com/tagmanager/answer/10718549

---

## 🚀 Publish Changes

**VAŽNO:** Kada dodaš nove tag-ove u GTM:

1. U GTM dashboard-u → **Submit** (gore desno)
2. Dodaj version name (npr. "GA4 Setup")
3. Dodaj opis izmena
4. Klikni **Publish**

Promene su instant live - ne treba redeploy sajta!

---

## 📝 Checklist

- [x] GTM instaliran na sajt
- [x] GTM script testiran (build prolazi)
- [ ] GA4 tag dodat u GTM
- [ ] GTM testiran sa Preview mode-om
- [ ] GTM tagovi published
- [ ] Opciono: Facebook Pixel, LinkedIn Insight, itd.
- [ ] Opciono: Custom events za contact form
- [ ] Opciono: Cookie consent tool

---

## 🎓 Korisni resursi

- [GTM Fundamentals](https://tagmanager.google.com/)
- [Google Analytics 4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GTM + Next.js Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

---

## 📞 Trebaju ti custom events?

Ako želiš da dodamo tracking za:
- Contact form submissions
- Project card clicks
- Service section interactions
- Scroll depth tracking
- CTA button clicks

Reci mi i mogu da implementiram custom dataLayer push-ove!
