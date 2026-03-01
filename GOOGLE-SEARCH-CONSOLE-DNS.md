# Google Search Console - DNS Verifikacija

## 📋 Koraci za verifikaciju putem DNS TXT record-a

### 1. Kopiranje TXT Record-a

Na screenshot-u vidiš ovaj değer:
```
google-site-verification=58q_n33APNwLavsLM5CH1mg2Wvvq7NzKxx
```

**VAŽNO:** Tvoj kod će biti drugačiji! Kopiraj tačan kod sa tvog ekrana.

### 2. Dodavanje TXT Record-a u DNS

Moraš da odeš kod svog **domain provider-a** (gde si kupio domen digantix.com):

**Najpopularniji provajderi:**
- **Namecheap** → Advanced DNS → Add New Record
- **GoDaddy** → DNS Management → Add Record
- **Cloudflare** → DNS → Add Record
- **Google Domains** → DNS → Custom Records
- **Hostinger** → DNS Zone Editor

### 3. Kreiranje TXT Record-a

Dodaj novi DNS record sa sledećim vrednostima:

| Polje | Vrednost |
|-------|----------|
| **Type** | TXT |
| **Name/Host** | @ (ili ostavi prazno za root domen) |
| **Value/Data** | `google-site-verification=TVOJ_KOD_OVDE` |
| **TTL** | 3600 (ili Auto) |

**Primer za različite provajdere:**

#### Namecheap:
```
Type: TXT Record
Host: @
Value: google-site-verification=58q_n33APNwLavsLM5CH1mg2Wvvq7NzKxx
TTL: Automatic
```

#### Cloudflare:
```
Type: TXT
Name: @
Content: google-site-verification=58q_n33APNwLavsLM5CH1mg2Wvvq7NzKxx
TTL: Auto
Proxy status: DNS only (gray cloud)
```

#### GoDaddy:
```
Type: TXT
Name: @
Value: google-site-verification=58q_n33APNwLavsLM5CH1mg2Wvvq7NzKxx
TTL: 1 Hour
```

### 4. Sačekaj propagaciju DNS-a

**VAŽNO:** DNS promene mogu potrajati:
- **Minimum:** 5-10 minuta
- **Prosek:** 30-60 minuta  
- **Maksimum:** Do 24 sata (retko)

### 5. Verifikuj u Google Search Console

Nakon što sačekaš:
1. Klikni **"VERIFY LATER"** u trenutnom prozoru
2. Sačekaj 30-60 minuta
3. Vrati se u Google Search Console
4. Klikni **"Verify"** ponovo

Google će proveriti DNS record i verifikovati domen.

### 6. Provera DNS Record-a (Opciono)

Dok čekaš, možeš proveriti da li je DNS record dodat:

**Online alat:**
1. Idi na: https://toolbox.googleapps.com/apps/dig/
2. Unesi: `digantix.com`
3. Izaberi tip: `TXT`
4. Klikni "Dig"
5. Traži liniju sa `google-site-verification`

**Ili u terminalu (Mac/Linux):**
```bash
dig digantix.com TXT +short
```

Trebao bi da vidiš tvoj google verification kod.

---

## ✅ Nakon uspešne verifikacije

Kada Google verifikuje domen:

### 1. Submit Sitemap
1. U Google Search Console, idi na **"Sitemaps"** (leva navigacija)
2. Dodaj novi sitemap: `sitemap.xml`
3. Klikni **"SUBMIT"**

URL sitemap-a će biti: `https://digantix.com/sitemap.xml`

### 2. Praćenje performansi

Nakon 2-7 dana, počeće da prikazuje podatke u:
- **Performance** - Impressions, clicks, average position
- **Coverage** - Indexed pages
- **Core Web Vitals** - Performance metrics
- **Mobile Usability** - Mobile issues

---

## 🔧 Troubleshooting

**Problem:** "Can't verify via Domain name provider"
- **Razlog:** DNS provider ne podržava Google Search Console direktnu integraciju
- **Rešenje:** Koristi TXT record metodu (ovo što već radiš)

**Problem:** Verification fail nakon dodavanja TXT record-a
- Proveri da li si tačno kopirao kod (bez dodatnih razmaka)
- Sačekaj duže (DNS propagacija može trajati do 24h)
- Proveri da si dodao record za **@** (root domen), ne subdomen

**Problem:** Ne znam ko je moj domain provider
- **Proveri:** https://who.is/whois/digantix.com
- Videćeš "Registrar" - to je tvoj domain provider

---

## 📞 Potrebna pomoć?

Ako ne znaš kako da dodaš TXT record:
1. Reci mi ko je tvoj domain provider (Namecheap, GoDaddy, Cloudflare, itd.)
2. Mogu da ti dam tačne korake specifično za tog provajdera

---

## 🎯 Backup opcija: CNAME verifikacija

Ako iz nekog razloga TXT ne radi, možeš probati CNAME:

1. U Google Search Console, izaberi **"CNAME"** tab
2. Google će ti dati:
   - **Name:** npr. `abc123.digantix.com`
   - **Value:** npr. `gv-xyz789.dv.googlehosted.com`
3. Dodaj CNAME record u DNS sa tim vrednostima

CNAME je isti proces kao TXT, samo drugačiji tip record-a.
