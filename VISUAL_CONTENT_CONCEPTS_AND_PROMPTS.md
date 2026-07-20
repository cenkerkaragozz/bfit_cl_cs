# BrainFit Karşıyaka — Bölüm Bazlı Görsel Konsept ve Üretim Promptları

## 1. Belgenin amacı

Bu belge, BrainFit Karşıyaka'nın iki ana landing page'i için mobil öncelikli görsel kullanım planıdır:

- `/`: Çocuklar ve ebeveynler
- `/yetiskinler`: Yetişkinler

Amaç her bölümü görselle doldurmak değil; ziyaretçinin kendi deneyimini daha hızlı fark etmesini, BrainFit'in ne yaptığını daha az metinle anlamasını ve WhatsApp ya da geri arama formu üzerinden iletişime geçmesini sağlamaktır.

Bu belge görsel üretmez ve site kodunu değiştirmez. Fotoğraf sahneleri için üretim promptu, metin/veri doğruluğu gerektiren görseller için ise HTML/CSS/SVG uygulama promptu verir.

## 2. Değişmeyecek kararlar

1. **İki sayfanın hero bölümlerine dokunulmayacak.** Hero görseli, kompozisyonu, yerleşimi ve görsel dili bu çalışmanın dışındadır.
2. Program kartları iki sayfadan da kaldırılacaktır. Kullanıcı, program isimlerine bakmadan kendi derdini, BrainFit'in ne yaptığını ve neden iletişime geçmesi gerektiğini anlamalıdır.
3. WhatsApp ve geri arama formu eşit öncelikli dönüşüm hedefleridir. Doğrudan telefon araması ikincildir.
4. BrainFit tanı veya tedavi sunmaz. Görsel ve metinler hastalık teşhisi, tedavi, ilaç alternatifi veya sonuç garantisi ima etmeyecektir.
5. Zihin Check-Up, **1 saatlik bilişsel değerlendirme** olarak anlatılacaktır.
6. Değerlendirme sonrası **kişiye özel egzersiz planı** oluşturulduğu söylenebilir.
7. Rapor sayfa sayısı kullanılmayacaktır. Gerçek CogMAP raporu sitede gösterilmeyecek; yalnızca Bilişsel Profil görselinin yapısal referansıdır.
8. Bilişsel Profil beş ana kümeyi gösterecektir: **Motor, Görsel, İşitsel, Dikkat, Duygusal**.
9. Stok veya AI görseller gerçek BrainFit danışanı, çalışanı, merkezi ya da seansı gibi sunulmayacaktır.
10. Alzheimer, demans, DEHB, disleksi veya başka bir tanı görsel üzerinden kişiye yakıştırılmayacaktır.

## 3. Görsel üretim sistemi

### 3.1 Görsel yoğunluk bütçesi

Bir sayfanın uzunluğu, görsel sayısını artırmak için gerekçe değildir.

- Çocuk sayfası: en fazla **1 duygusal fotoğraf**, **1 büyük bilgi grafiği**, **2 mikro-görsel** ve **1 kompakt süreç listesi**.
- Yetişkin sayfası: en fazla **2 duygusal fotoğraf**, **1 büyük bilgi grafiği**, **1 kompakt süreç görseli**.
- Her iki sayfadaki tek büyük bilgi grafiği: **Bilişsel Profil**.
- Check-Up akışı büyük infografik değil, mobilde yüksekliği `160px` sınırını geçmeyen kompakt bir adım listesi olacaktır.
- Kendini-fark-etme mikro-görselleri mobilde `120px` yüksekliği geçmeyecek ve bölümün ana içeriğine dönüşmeyecektir.

### 3.2 Görsel karakter

Creative north star: **Grounded warmth meets scientific trust**.

- Fotoğraflar sıcak, doğal, gözlemci ve editoryal olmalıdır.
- Hastane, terapi odası veya steril klinik estetiği kullanılmamalıdır.
- Jenerik wellness, yapay gülümseme, el sıkışma, kameraya bakan stok model ve aşırı dramatik yüz ifadeleri kullanılmamalıdır.
- Çocuk sayfası: sıcak, güven verici, ebeveyn bakışına yakın.
- Yetişkin sayfası: sakin, amaçlı, zihinsel yükü görünür kılan ama kişiyi çaresiz göstermeyen.
- Marka renkleri görüntünün tamamına filtre olarak uygulanmayacaktır. Coral, amber, sky, lime ve lavender yalnızca küçük nesnelerde veya çevresel ayrıntılarda doğal biçimde görülebilir.

### 3.3 Marka renkleri

- Coral: `#F5927E`
- Amber: `#FCBF48`
- Yellow: `#FCEA96`
- Forest green: `#164C35`
- Lime: `#D9F8A8`
- Sky: `#AAE8F6`
- Lavender: `#9B66F4`
- Canvas: `#FAF9F5`
- Paper: `#F4F1EB`
- Ink: `#241D18`

### 3.4 Fotoğraf üretim ve teslim kuralları

- Ana üretim oranı: **4:5 dikey**. Önerilen master: en az `1800 × 2250 px`.
- Ek kırpım: **3:2 yatay**, masaüstü yerleşimi için.
- Mobil kırpımda yüz, el, anlam taşıyan nesne ve bakış yönü korunmalıdır.
- Kadrajın kenarlarında en az `%10–12` kırpım güvenliği bırakılmalıdır.
- Görüntünün içine yazı, logo, arayüz, puan, marka adı veya okunabilir belge üretilmemelidir.
- Üretim sonrasında AVIF/WebP türevleri hazırlanmalıdır.
- Bölüm içi fotoğraf hedefi: mobilde tercihen `100–160 KB`; gerekli kalite korunmuyorsa `220 KB` üst sınır.
- `srcset` ve doğru `sizes` kullanılmalı; aşağı katman görselleri lazy-load edilmelidir.
- Görsel gerçek BrainFit müşterisi/çalışanı/seansı değildir. Sahnenin altında küçük, görünür bir **“Temsili görsel”** açıklaması bulunmalıdır.
- Temsili görsel gerçek referans/testimonial kartının içinde kullanılmamalıdır.

### 3.5 Alt metin kuralı

Fotoğraf metnin iletmediği anlamlı bir bağlam sağlıyorsa genel sahneyi tarif eden alt metin kullanılmalıdır. Kişi BrainFit danışanı olarak tanımlanmayacaktır.

Doğru örnek:

> “Evde çalışma masasındaki soruyu çözen bir öğrenci ve onu uzaktan gözlemleyen ebeveyn.”

Yanlış örnek:

> “BrainFit danışanı sınav sorununu çözüyor.”

Fotoğrafın yanındaki metni yalnızca tekrar ettiği durumlarda `alt=""` kullanılabilir; ancak görünür “Temsili görsel” açıklaması korunur.

### 3.6 Sağlık ve temsil sınırları

- “Alzheimer görseli”, beyin hasarı, dağılan/silinen kafa, boş bakışlı yaşlı kişi, hastane koridoru, MR/BT görüntüsü, ilaç kutusu veya doktor teşhisi çağrıştıran sahne üretilmez.
- Hafıza bölümü hastalık korkusunu değil, **kişinin kendi hafızasındaki değişikliği fark etme ve belirsizliği anlamlandırma anını** gösterir.
- Çocuklar ağlarken, sınav kağıdını buruştururken, cezalandırılırken veya ebeveynle çatışırken gösterilmez.
- AI/stock çocuk gerçek bir danışan gibi sunulmaz. Stok kullanılıyorsa ticari lisans ve model release doğrulanır.
- AI/stock yetişkin testimonial yüzü olarak kullanılmaz.
- Nihai görsel ile yanındaki metin birlikte kontrol edilir; tek başına güvenli görünen bir fotoğraf, yanındaki başlık nedeniyle tanı veya tedavi iddiasına dönüşmemelidir.

## 4. Çocuk ve ebeveyn sayfası (`/`)

### 4.1 Hero

**Karar:** Kilitli — değişiklik yok.

**Görsel üretimi:** Yok.

**Uygulama notu:** Bu dokümandaki hiçbir prompt hero görselinin yerine kullanılamaz. Hero'nun görseli, kırpımı, kompozisyonu veya arka planı değiştirilmez.

---

### 4.2 Güven şeridi ve “BrainFit nedir?”

**Karar:** Yeni stok/AI görsel yok. Güven şeridindeki doğrulanmış öğeler kurum anlatısına birleştirilebilir.

**İletişim görevi:** “Burası ne yapıyor ve neden güvenebilirim?” sorusuna kısa yanıt vermek.

**Neden görsel yok:** Gerçek merkez/ekip fotoğrafı bulunmadığı için temsili bir ekip görüntüsü güven kanıtı gibi algılanabilir. İkon ve sayısal rozetler de doğrulanmamış iddiaları büyütebilir.

**Görsel yaklaşım:** Yalnızca tipografik hiyerarşi, doğrulanmış kısa kanıt satırları ve gerekirse BrainFit marka renklerinden tek bir çizgisel vurgu.

---

### 4.3 Sınavda bildiğini gösterememe

**Karar:** Bir adet anlam taşıyan AI/stok fotoğraf.

**Asset ID:** `C-PHOTO-01`

**İletişim görevi:** Ebeveyne “Evde biliyor ama sınavda gösteremiyor” deneyimini birkaç saniyede tanıtmak.

**Ana ebeveyn cümlesi:**

> “Evde hepsini biliyor ama sınavda yapamıyor.”

**Destekleyen deneyimler:**

- “Çok çalışıyor fakat notlarına yansımıyor.”
- “Öğretmeni kapasitesi var ama gösteremiyor diyor.”
- “Bildiklerini sınav anında unutuyor.”
- “Sınavlarda bildiği sorularda dikkatsizlik hatası yapıyor.”

**Mobil yerleşim:** Fotoğraf tam genişlikte, metnin altında; `4:5` oranında fakat görünür yüksekliği en fazla yaklaşık `58–64svh`. Fotoğrafın üzerine uzun metin bindirilmez. Altında “Temsili görsel” etiketi bulunur.

#### C-PHOTO-01 — aşırı detaylı üretim promptu

```text
Create a single, highly realistic editorial photograph for a Turkish cognitive-development landing page aimed at parents of school-age children. The emotional idea is the gap between what a child can demonstrate comfortably at home and what appears in formal exam performance. This is not a scene of failure, punishment, diagnosis, therapy, or crisis.

Scene and people: a Turkish or Eastern Mediterranean family home with a warm, contemporary but ordinary dining-study area. Show one school-age student approximately 12–15 years old seated at a table, calmly and competently working through a practice problem in a notebook. The student should look focused and capable, not confused, tearful, ashamed, hyperactive, ill, or defeated. A parent is present only from a gentle observational point of view: an out-of-focus shoulder, hand, or partial profile in the foreground, conveying care and concern without hovering or pressuring. Do not make either person look at the camera.

Narrative props: an open notebook with abstract, non-readable marks; a pencil; a closed or face-down school paper near the edge of the table that subtly suggests a recent exam but contains no readable grade, text, logo, school name, red marks, or failure symbol. Include a simple analog clock or study timer in the background as a quiet reference to exam timing. Keep props sparse and believable. No medication, diagnostic paperwork, hospital items, therapy materials, branded learning products, phones showing messages, or readable screens.

Emotion: restrained concern and capability at the same time. Emotional intensity 2.5 out of 5. The child should appear to know what they are doing in the present moment; the parent should appear thoughtful and supportive. The image should make a parent think “this is familiar” rather than “my child is in danger.” Avoid melodrama, conflict, fear, sadness, staged celebration, or inspirational victory poses.

Composition: vertical 4:5 master composition designed mobile-first. Place the child in the middle-right third and the parent’s soft foreground presence on the lower-left edge. Preserve at least 12% crop-safe space on all sides. Leave calm negative space in the upper-left quadrant for optional HTML copy on wide crops, but do not place any text inside the image. Ensure the child’s face, working hand, notebook, and subtle exam paper remain visible in both a central 4:5 mobile crop and a 3:2 desktop crop. Avoid collage, split-screen, before-and-after framing, duplicated people, or multiple time moments.

Camera and optics: documentary editorial photography, eye-level or slightly above table height, full-frame camera look, 50 mm lens equivalent, f/2.8–f/4, realistic depth of field, natural skin texture, accurate hands and fingers, controlled highlights, no extreme bokeh. The parent can remain softly out of focus but the child and working hand must be anatomically correct and sharp.

Lighting and color: soft late-afternoon daylight entering from a side window, warm-neutral white balance, gentle shadow detail, no dramatic spotlight. The room should use warm canvas, cream, light wood and muted brown. Introduce BrainFit palette only as tiny natural accents: perhaps a coral pencil case, pale sky-blue notebook edge and amber timer detail. Do not color-grade the entire image coral, orange, green or teal. No cold hospital whites, grey corporate office palette, neon colors, heavy vignette, HDR, film damage, or surreal glow.

Styling: believable everyday clothing without logos, uniforms, luxury styling or childish costume. The home must feel local and lived-in but uncluttered, neither wealthy showroom nor distressed environment. The result should feel like a premium Turkish editorial magazine photograph, not generic stock photography and not an advertisement with actors posing.

Hard exclusions: no crying child, no angry parent, no yelling, no disciplinary pose, no red failing grade, no visible exam score, no medical or psychological symbols, no pills, no brain graphic, no school branding, no BrainFit logo, no readable text, no watermarks, no distorted hands, no extra fingers, no uncanny faces, no AI-smoothed skin, no exaggerated sadness, no diagnosis implication, no testimonial framing, and no representation of an actual BrainFit session, client, employee or facility.

Output: one clean photographic asset only, no mood board, no border, no typography, no inset frames. Generate a high-resolution 4:5 master suitable for an 1800 × 2250 px delivery and preserve enough resolution for a 3:2 desktop crop.
```

**Görünür açıklama:** `Temsili görsel`

**Önerilen alt metin:** “Evde çalışma masasındaki soruyu çözen bir öğrenci ve onu uzaktan gözlemleyen ebeveyn.”

**Kabul kriterleri:**

- Çocuk yeterli ve odaklanmış görünür; başarısız veya hasta görünmez.
- Ebeveyn baskı kurmaz; sakin bir gözlemci olarak kalır.
- Görsel tek bir an anlatır; split-screen veya kolaj değildir.
- Kağıtta puan, not veya okunabilir yazı yoktur.
- Mobil ve masaüstü kırpımda temel anlatı korunur.
- Görüntü gerçek BrainFit danışanı/seansı izlenimi vermez ve “Temsili görsel” etiketiyle kullanılır.

---

### 4.4 Kendini-fark-etme alanı — ödev

**Karar:** Küçük, code-native mikro-görsel.

**Asset ID:** `C-DIAG-01`

**İletişim görevi:** “Başlamak” ve “sürdürmek” güçlüklerini iki ayrı deneyim olarak göstermek.

**Görsel metinleri:**

- Başlamak — “Masaya oturması saatler sürüyor.”
- Sürdürmek — “Başlıyor ama birkaç dakika sonra kalkıyor.”

#### C-DIAG-01 — HTML/CSS/SVG uygulama promptu

```text
Build a mobile-first, code-native micro-diagram for the child-page self-recognition navigator. Do not generate a raster image. Represent one homework session as a single continuous path with two moments: “Başlamak” and “Sürdürmek”. This is not two repeated feature cards.

Use a semantic ordered list with exactly two list items. Each item contains an HTML heading, one short parent quote and a minimal SVG accent. Connect the two items with one continuous curved line or progress stroke. The first SVG accent may suggest a chair approaching a desk or a clock beginning; the second may suggest a short focus interval followed by a gentle pause. Keep all SVG shapes abstract and non-diagnostic. Do not draw a sad child, behavior icon, warning icon or stopwatch countdown.

Mobile: vertical flow, maximum visual height 120 px excluding text, full width, 16–20 px internal gap, 44 px minimum touch target if items are interactive. Desktop: the same semantic list may become a horizontal two-stage flow. The order must remain unchanged.

Colors: canvas #FAF9F5, ink #241D18, coral #F5927E for the first node, amber #FCBF48 for the connecting movement, sky #AAE8F6 for the second node. No gradients. Use warm shadows only if the diagram sits in a contained surface; otherwise remain flat.

Typography remains HTML, never paths inside SVG. Use Titillium Web 700 for the two labels and Manrope for quotes. The connecting line is aria-hidden. The ordered list and text must remain understandable with CSS and SVG disabled.

If the user taps a stage, reveal at most two lines of supporting copy with an accessible button using aria-expanded and aria-controls. Store nothing, send no network request and emit no analytics event containing the selected concern. Respect prefers-reduced-motion; any line-draw animation becomes an instant state.
```

**Kabul kriterleri:** Tek bir akış gibi görünür; iki şablon karta dönüşmez; mobilde 120 px görsel yüksekliği aşmaz; metinsiz de dekoratif, SVG'siz de içerik anlaşılırdır.

---

### 4.5 Kendini-fark-etme alanı — davranış ve uyum

**Karar:** Küçük, code-native bağlam şeridi.

**Asset ID:** `C-DIAG-02`

**İletişim görevi:** Tanısal etiket kullanmadan ebeveynin gözlemini üç yaşam bağlamında düzenlemek.

**Bağlamlar:** Evde, Okulda, Sosyal Hayatta.

#### C-DIAG-02 — HTML/CSS/SVG uygulama promptu

```text
Create a compact, code-native context strip for a parent-facing cognitive-development page. The strip must communicate that behavior and adaptation experiences can appear in three contexts: “Evde”, “Okulda”, and “Sosyal Hayatta”. Do not render three generic icon cards.

Use one continuous SVG path that travels through three small environmental vignettes: a minimal home doorway/table silhouette, a school desk or school-building outline, and two equal human figures in a shared social space. Keep the illustrations abstract, warm and respectful. No child is isolated, crossed out, surrounded by hostile peers or visually labeled as a problem.

On mobile, the path becomes vertical and the three HTML labels sit beside it. On desktop it may become horizontal. Each context can expand an adjacent HTML disclosure containing the validated parent observations, but only one disclosure is open at a time. Use observable language only; do not include “davranış bozukluğu”, “karşıt gelme bozukluğu”, “DEHB”, “disleksi” or another diagnosis in the graphic.

Visual budget: SVG portion maximum 120 px tall on mobile and 96 px tall on desktop. Use coral #F5927E for home, sky #AAE8F6 for school, lime #D9F8A8 for social, with ink #241D18 outlines. No gradients, warning red, alert triangles, sad-face icons or diagnostic symbols.

Use semantic buttons with 44 px minimum targets, visible focus states and aria-expanded. The SVG is aria-hidden; context labels and observations remain HTML. Do not save selections, transmit answers or attach them to the form/WhatsApp message without a later explicit product decision. Respect reduced motion.
```

**Kabul kriterleri:** Üç bağlam tek anlatı şerididir; çocuk damgalanmaz; tanı adı bulunmaz; seçimin ağ isteği veya veri kaydı yoktur.

---

### 4.6 Kendini-fark-etme alanı — dikkat

**Karar:** Tipografi ve etkileşim; yeni görsel yok.

**Kullanılacak gözlemler:**

- “Öğretmeni derste sık sık hayallere daldığını söylüyor.”
- “Bir işe başlıyor, hemen başka bir şeye geçiyor.”
- “En küçük seste bile dikkati dağılıyor.”

**Neden görsel yok:** Sınav fotoğrafı ve iki mikro-görsel zaten yeterli görsel ritmi oluşturur. Dikkat bölümüne bir stok çocuk fotoğrafı eklemek hem tekrar hem de “belirti kataloğu” etkisi yaratır.

---

### 4.7 Rahatlatma / “tembellik olmayabilir”

**Karar:** Yeni fotoğraf yok. Tipografik vurgu ve küçük code-native çizgi kullanılabilir.

**Görsel konsept:** Uzun açıklama yerine bir büyük cümle, yanında baskıdan anlayışa geçen tek bir çizgi veya yumuşak düğüm çözülmesi metaforu. Metafor beyin, hastalık veya tedavi anlatmamalıdır.

**Mikro-görsel limiti:** `64px` yükseklik; aria-hidden; tek renk coral veya amber çizgi.

---

### 4.8 1 saatlik Zihin Check-Up

**Karar:** Paylaşılan kompakt code-native süreç görseli.

**Asset ID:** `SH-DIAG-01`

**Not:** Bu, sayfanın büyük infografiği değildir.

Prompt, yetişkin sayfasıyla ortak olarak Bölüm 6.1'de verilmiştir.

CTA çifti bu bölümün hemen ardından görünür:

- WhatsApp’tan Yaz
- Sizi Arayalım

---

### 4.9 Bilişsel Profil

**Karar:** Sayfanın tek büyük code-native bilgi grafiği.

**Asset ID:** `SH-DIAG-02`

**Görsel üretimi:** AI raster görsel değil; HTML/CSS/SVG.

Prompt, yetişkin sayfasıyla ortak olarak Bölüm 6.2'de verilmiştir.

---

### 4.10 Programlar

**Karar:** Kaldır.

**Yerine yeni görsel:** Yok.

**Gerekli tek geçiş:** “Zihin Check-Up sonuçlarına göre kişiye özel egzersiz planı şekillenir.”

---

### 4.11 Güven / veli deneyimi

**Karar:** Yalnızca izinli gerçek deneyim varsa kullan. Stok/AI yüz kullanılmaz.

**Görsel konsept:** Gerçek fotoğraf yoksa fotoğrafsız kısa alıntı, doğrulanmış yerel kanıt ve tipografik imza alanı. Temsili bir anne/çocuk fotoğrafı testimonial kartına konulmaz.

---

### 4.12 Form, blog ve footer

**Karar:** Yeni dekoratif görsel yok.

**Neden:** Form bölümünde görsel, iki eşit CTA ve kısa alanların görünürlüğünü düşürür. Blog kendi içerik görsellerini kullanır. Footer bilgi ve ikincil telefon erişimi içindir.

## 5. Yetişkin sayfası (`/yetiskinler`)

### 5.1 Hero

**Karar:** Kilitli — değişiklik yok.

**Görsel üretimi:** Yok.

**Uygulama notu:** Yetişkin hero'sunun forest-green bağlamı, mevcut kompozisyonu ve görsel alanı korunur.

---

### 5.2 Zihinsel yorgunluk ve dağınıklık

**Karar:** Bir adet anlam taşıyan AI/stok fotoğraf.

**Asset ID:** `A-PHOTO-01`

**İletişim görevi:** Ziyaretçiye günlük bilişsel yükünü hastalık veya tükenmişlik teşhisine dönüştürmeden göstermek.

**İlgili kullanıcı dili:**

- “Günün ortasında zihnim kapanmış gibi oluyor.”
- “Bir işe odaklanıyorum ama aklım sürekli başka yere gidiyor.”
- “Ne yapacağımı biliyorum ama zihinsel olarak başlayamıyorum.”

#### A-PHOTO-01 — aşırı detaylı üretim promptu

```text
Create one realistic, premium editorial photograph for the first post-hero recognition section of a Turkish adult cognitive-development landing page. The subject is everyday mental fatigue and cognitive overload, not burnout diagnosis, depression, dementia, illness, therapy or workplace failure.

Subject: one Turkish or Eastern Mediterranean adult approximately 35–50 years old. The person should look competent, contemporary and relatable, with natural skin texture and ordinary professional-casual clothing without logos. Avoid model-perfect glamour and avoid making the subject look elderly, ill, sedated or emotionally broken.

Setting: a believable home-work hybrid or quiet contemporary workspace in the middle of the day. The subject is seated at a table with a closed or dim laptop, a notebook, two or three neutral task papers and a glass of water. All writing and screens must be abstract and unreadable. The scene should suggest several unfinished cognitive demands without becoming cluttered. The person has paused briefly, looking slightly away from the work as if trying to mentally reorganize the next step. One hand may rest lightly near the notebook or temple, but never clutch the head with both hands.

Emotion: quiet mental overload, self-awareness and retained agency. Emotional intensity 2.5 out of 5. The person is not panicking, crying, sleeping, collapsing, grimacing or staring blankly. They should look like someone who is still functional but recognizes that focus and mental energy do not feel as effortless as before. The viewer reaction should be “I know this moment,” not “this person is seriously ill.”

Composition: mobile-first vertical 4:5 frame. Place the subject on the left or center-left third, with meaningful desk objects in the lower center and calm negative space in the upper-right for optional HTML layout on wider screens. Keep 12% crop-safe margins. The face, hand and notebook must survive both 4:5 and 3:2 crops. Do not overlay text inside the image. Do not create a collage, multiple versions of the same person, motion trails, floating thought bubbles or surreal brain effects.

Camera: candid editorial photography, eye-level seated perspective, full-frame 50 mm or 65 mm lens equivalent, f/2.8–f/4, realistic depth of field, accurate anatomy and hands, restrained sharpness, no beauty retouching, no plastic skin. The image should feel observed rather than staged.

Lighting and palette: soft midday daylight from a window, warm-neutral exposure, gentle directional shadows, no dramatic darkness. Use warm canvas, light wood and muted paper tones. Add very small brand-adjacent accents such as a forest-green notebook, amber pencil or pale sky-blue cup. Do not apply a green/orange cinematic wash. Avoid cold corporate blue, sterile grey, neon lighting, heavy contrast, HDR and moody thriller lighting.

Hard exclusions: no hospital, clinic, therapist, doctor, medication, pill bottle, medical chart, brain scan, damaged-brain metaphor, Alzheimer or dementia implication, elderly-confusion stereotype, crying, despair, hands covering the whole face, sleep-at-desk cliché, messy chaos, coffee-spill comedy, readable screen, brand logo, BrainFit room, BrainFit employee, real-client implication, testimonial pose, watermark, distorted anatomy, extra fingers, duplicated objects, uncanny facial expression or AI-smooth skin.

Output: one clean high-resolution 4:5 photographic asset only, no text, no border, no mood board. Preserve composition for a 3:2 desktop crop.
```

**Görünür açıklama:** `Temsili görsel`

**Önerilen alt metin:** “Gün ortasında çalışma masasındaki işlerine kısa bir ara vererek düşüncelerini toparlayan bir yetişkin.”

**Kabul kriterleri:**

- Kişi yetkin ve gündelik görünür; hasta veya tükenmiş gibi kodlanmaz.
- Zihinsel yük sahne ve beden diliyle anlaşılır; dramatik yüz ifadesine dayanmaz.
- Ekran ve belgelerde okunabilir veri yoktur.
- 4:5 ve 3:2 kırpımlar anlamı korur.
- Temsili görsel gerçek BrainFit danışanı/seansı gibi sunulmaz.

---

### 5.3 Hafıza değişikliği ve belirsizlik

**Karar:** Bir adet anlam taşıyan AI/stok fotoğraf.

**Asset ID:** `A-PHOTO-02`

**İletişim görevi:** “Bu unutkanlık normal mi?” endişesini görünür kılmak; Alzheimer veya başka bir hastalık iması üretmemek.

**Bölümde yakın bulunması gereken sınır:** “Bu alan tanı veya tıbbi değerlendirme değildir.”

#### A-PHOTO-02 — aşırı detaylı üretim promptu

```text
Create one grounded, dignified editorial photograph for a Turkish adult cognitive-development landing page about noticing changes in everyday memory. The scene must represent memory uncertainty in ordinary life, not Alzheimer’s disease, dementia, cognitive decline diagnosis, medical screening, therapy or caregiving.

Subject: one Turkish or Eastern Mediterranean adult approximately 40–55 years old, representing a visitor concerned about their own memory. The person is independent, capable, well-presented in ordinary casual clothing and not visibly ill. Do not age the person into an elderly stereotype. Do not add a second person who appears to be a caregiver.

Scene: a familiar home entryway or kitchen-preparation moment. The subject has paused while checking a simple handwritten list or looking between a small set of ordinary objects such as keys, a reusable shopping bag and a closed notebook. The list must contain no readable words. The pause should suggest “what was I about to do?” without showing severe confusion. Keep the environment calm, organized and believable; the person is oriented and in control of the situation.

Emotion: thoughtful uncertainty with dignity, emotional intensity 2 out of 5. The subject may have a subtle furrowed brow or a small reflective pause, but no fear, panic, blank stare, helplessness, disorientation or sadness. Do not use a hand-to-forehead dementia cliché. The viewer should recognize a familiar lapse and feel invited to understand it, not warned that a disease is beginning.

Composition: vertical 4:5 mobile-first photograph. Frame from mid-torso upward with the meaningful objects in the lower third. Place the subject on the right third, looking toward the objects or list, leaving clean negative space on the upper-left for adjacent HTML layout on wide screens. Maintain 12% crop-safe margins. Preserve the face, list and one key object in a 3:2 desktop crop. Do not insert text inside the image.

Camera: natural documentary editorial style, 50 mm lens equivalent, f/3.2–f/4, realistic skin and hands, soft depth of field, accurate anatomy, no glamour retouching. The photograph should feel like a quiet observed daily moment, not staged stock acting.

Lighting and color: soft morning or early-evening window light, warm cream and light wood environment, neutral skin tones. Introduce only restrained accents from the BrainFit system—perhaps an amber tote detail, coral notebook edge or forest-green plant pot. No full-image color filter, cold clinical lighting, dramatic shadows, desaturation, haze, surreal blur or visual fragmentation.

Hard exclusions: no Alzheimer symbolism, no damaged or dissolving brain, no disappearing face, no puzzle-piece head, no hospital, no doctor, no medicine, no pill organizer, no caregiver, no elderly confusion, no lost-in-public setting, no fear expression, no crying, no blank stare, no hand clutching head, no diagnosis paperwork, no readable list, no brand/logo, no BrainFit location, no real-client/testimonial implication, no text, no watermark, no malformed hands, no duplicate keys, no uncanny face and no AI-smooth skin.

Output: one clean high-resolution 4:5 photographic asset only, no collage, no typography, no frame. Preserve sufficient space and resolution for a 3:2 crop.
```

**Görünür açıklama:** `Temsili görsel`

**Önerilen alt metin:** “Günlük hazırlık sırasında notuna yeniden bakarak kısa süre düşünen bir yetişkin.”

**Kabul kriterleri:**

- Kişi 40–55 yaş aralığında ve kendi hafızasını fark eden yetişkin olarak okunur.
- Hastalık, yaşlılık, bakıma muhtaçlık veya teşhis çağrışımı yoktur.
- Sıradan bir duraksama gösterilir; ağır kafa karışıklığı gösterilmez.
- Sınır metni görsele yakın konumlandırılır.
- “Temsili görsel” etiketi bulunur ve sahne BrainFit danışanı olarak sunulmaz.

---

### 5.4 Sınav/kariyer ve iş yaşamı bağlamları

**Karar:** Tipografi ve etkileşim; ek fotoğraf yok.

**Sınav/kariyer ifadeleri:**

- “Çalışıyorum ama öğrendiklerim kalıcı olmuyor.”
- “Soruları biliyorum ama süreyi yetiştiremiyorum.”
- “Sınav anında zihnim kilitleniyor.”

**İş yaşamı ifadeleri:**

- “Toplantıda anlatılanları takip etmekte zorlanıyorum.”
- “Aynı anda birkaç işi yönetemiyorum.”
- “Basit kararları vermek bile eskisinden uzun sürüyor.”

**Neden görsel yok:** İki yetişkin fotoğrafı zihinsel yorgunluk ve hafıza alanlarında duygusal görevi karşılar. İş ve sınav için ayrı stok görseller sayfayı kişi kataloğuna dönüştürür.

**Etkileşim:** “Bu deneyimi en çok nerede yaşıyorsunuz?” sorusu altında Günlük Yaşam, Hafıza, Sınav/Öğrenme ve İş Hayatı seçenekleri. Seçim yalnızca ekranda ilgili ifadeleri açar; veri kaydetmez ve göndermez.

---

### 5.5 “BrainFit nedir?” ve güven

**Karar:** Yeni fotoğraf yok.

**Neden:** Gerçek ekip/merkez görseli bulunmadığından AI ekip sahnesi güven kanıtı gibi kullanılamaz. Yalnızca doğrulanmış kısa kurum bilgileri, marka işaretleri ve tipografik hiyerarşi kullanılmalıdır.

---

### 5.6 1 saatlik Zihin Check-Up

**Karar:** Paylaşılan kompakt süreç görseli `SH-DIAG-01`.

**Görsel:** Büyük infografik değildir; CTA'ya geçiş sağlayan kısa bir süreç listesi.

---

### 5.7 Bilişsel Profil

**Karar:** Sayfanın tek büyük bilgi grafiği `SH-DIAG-02`.

---

### 5.8 Sonuç şeridi

**Karar:** Ayrı bir görsel bölüm olarak kaldır veya Bilişsel Profil bölümünün kısa sonuç satırına birleştir.

**Neden:** “Profil, rapor, plan” anlatısı Check-Up ve Bilişsel Profil bölümlerinde zaten yer alır; ayrı şerit mobil uzunluğu ve tekrar hissini artırır.

---

### 5.9 Programlar

**Karar:** Kaldır.

**Yerine görsel:** Yok.

---

### 5.10 Güven sınırları, referanslar ve SSS

**Karar:** Yeni fotoğraf yok.

- Yetişkin testimonial yalnızca gerçek, izinli ve anonimleştirilmiş bir yetişkin deneyimi varsa kullanılabilir.
- Veli testimonialı yetişkin sayfasında kullanılmaz.
- Stok/AI yüz testimonial görseli olamaz.
- Tanı koymama ve tıbbi değerlendirme sunmama sınırı tipografiyle açıkça gösterilir.
- SSS dekoratif görsel kullanmaz.

---

### 5.11 Form ve footer

**Karar:** Yeni dekoratif görsel yok.

WhatsApp ve “Sizi Arayalım” CTA'ları eşit görünürlükte; telefon bağlantısı ikincil olarak footer'da kalır.

## 6. İki sayfada paylaşılan code-native görseller

### 6.1 SH-DIAG-01 — Check-Up süreci

**Kesin adımlar:**

1. 1 Saatlik Zihin Check-Up
2. Bilişsel Profil
3. Kişisel Egzersiz Planı

#### Aşırı detaylı HTML/CSS/SVG uygulama promptu

```text
Implement a compact, shared, mobile-first three-step process component for both BrainFit Karşıyaka landing pages. It must be code-native HTML/CSS with optional decorative SVG connectors, not a raster infographic and not a large visual centerpiece.

Use a semantic ordered list with exactly three steps and these exact Turkish labels:
1. “1 Saatlik Zihin Check-Up”
2. “Bilişsel Profil”
3. “Kişisel Egzersiz Planı”

Each step may include one short supporting sentence in HTML, but the entire component must remain concise. Do not include “ücretsiz”, a report page count, diagnosis, treatment, program names, session frequency, total program duration or outcome guarantees.

Mobile layout: vertical or gently stepped, total decorative/diagram height no more than 160 px excluding text. Desktop layout: horizontal ordered flow. Use one continuous connector, not three separate icon cards. Step markers are rounded organic shapes or numbered circles with minimum 44 px touch area only if interactive. The component does not need interaction by default.

Colors: child-page context may use coral #F5927E, sky #AAE8F6 and lime #D9F8A8. Adult-page context may use amber #FCBF48, sky #AAE8F6 and lime #D9F8A8 while retaining ink #241D18. Forest green #164C35 remains reserved for adult hero context and should not become a full section background. No gradients.

Typography: labels in Manrope 800 or Titillium Web 700 according to existing hierarchy; all text remains live HTML. Decorative SVGs are aria-hidden. The ordered list remains understandable without CSS/SVG. Respect prefers-reduced-motion; a connector-draw animation must become instant. Do not trigger network requests, collect data or attach selections to forms.

Place the equal-priority CTA pair immediately after the component: “WhatsApp’tan Yaz” and “Sizi Arayalım”. On narrow mobile widths they may stack; at wider mobile widths they may share a 50/50 row with equal height and contrast. Direct phone call is not included in this pair.
```

**Kabul kriterleri:** Tam üç adım; “1 Saat” doğru; ücretsiz/sayfa sayısı/program adı yok; büyük infografiğe dönüşmüyor; metin HTML; mobilde CTA çiftini aşağı itmeyecek kadar kompakt.

### 6.2 SH-DIAG-02 — Bilişsel Profil

**Karar:** Her sayfadaki tek büyük bilgi grafiği.

**Kesin kümeler ve renkler:**

- Motor — Coral `#F5927E`
- Görsel — Sky `#AAE8F6`
- İşitsel — Lime `#D9F8A8`
- Dikkat — Amber `#FCBF48`
- Duygusal — Lavender `#9B66F4`

#### Aşırı detaylı HTML/CSS/SVG uygulama promptu

```text
Create a responsive, code-native “Bilişsel Profil” visualization for both BrainFit Karşıyaka landing pages. The visual is structurally inspired by the five-cluster organization of a CogMAP report, but it must not reproduce, screenshot or imitate an individual report page. Do not use real data, sample scores, percentages, scale markers, performance ranges, gauges, progress bars or report page counts.

Information architecture: exactly five equal-status cognitive clusters—“Motor”, “Görsel”, “İşitsel”, “Dikkat”, and “Duygusal”. Render them as five interlocking or orbiting organic bands around a neutral center labeled “Bilişsel Profil”. All five shapes must have equal visual weight and equal apparent length/area so they do not imply comparative scores. Avoid radar charts, bar charts, speedometers and petals with different sizes.

Color mapping is exact: Motor #F5927E, Görsel #AAE8F6, İşitsel #D9F8A8, Dikkat #FCBF48, Duygusal #9B66F4. Center and text use canvas #FAF9F5, paper #F4F1EB and ink #241D18. No gradients, glow, medical-blue treatment or transparent 3D brain.

Mobile-first layout: 320–430 px viewport, graphic width 100%, maximum visual width 420 px and target height 360–440 px including live labels. Place labels as HTML around or below the SVG, never raster text. If radial labels become crowded below 360 px, switch to a two-part layout: compact five-band graphic above and a semantic five-item selector below. Maintain 44 px minimum touch targets and visible focus styles.

Interaction: selecting a cluster reveals a short HTML subskill list beneath the graphic. Only one cluster opens at a time. Use aria-expanded, aria-controls and a polite but non-intrusive update pattern. Do not announce decorative motion. Do not store, transmit, score or analyze user selection. No analytics event may contain a selected concern without a separate future consent decision.

Suggested subskills, presented as examples rather than exhaustive clinical measures:
- Motor: denge, motor planlama, el-göz koordinasyonu, ince motor kontrolü.
- Görsel: görsel bellek, görsel çalışma belleği, göz izleme, görsel algı, görsel akıl yürütme.
- İşitsel: işitsel bellek, işitsel çalışma belleği, ses/kelime ayırt etme, dil çalışma belleği.
- Dikkat: görsel ve işitsel dikkat, dürtü kontrolü, işlem hızı, bilişsel esneklik.
- Duygusal: duygusal düzenleme, öz yönetim, sosyal yönetim, duygu tanıma.

Desktop: max content width approximately 620 px for the graphic, paired with concise explanatory copy. Do not enlarge the graphic into a dashboard. Preserve equal visual weights.

Motion: optional subtle 250–350 ms opacity/scale emphasis on selection only. No continuous orbit, pulsing brain, score animation or count-up. Disable transforms and use instant state under prefers-reduced-motion.

Accessibility: use an adjacent semantic list that exposes the same five cluster names and subskills. The SVG is either aria-hidden with full HTML equivalent, or has a concise accessible name plus HTML details. Color must never be the only differentiator; use persistent labels and distinct shapes/markers. Verify WCAG AA for text. Keyboard navigation must follow DOM order.

Required disclaimer below the visual, as live text:
“Örnek profil görünümüdür. İçerik, yaşa ve uygulanan değerlendirmelere göre değişebilir.”

Explicit removals from the current implementation: delete the seven-area list, the 16-page badge, all identical 68% score bars, any fake score or fake report-row value, and the report page-count claim from the DOM—not merely hidden with CSS.
```

**Kabul kriterleri:**

- Tam ve yalnızca beş ana küme vardır.
- Hiçbir uzunluk, alan veya sayı performans kıyaslaması ima etmez.
- Rapor ekran görüntüsü, sayfa sayısı, yüzde veya puan yoktur.
- Beş renk yanında görünür etiketler bulunur.
- Mobilde metin sıkışmaz ve dokunma alanları en az 44 px'tir.
- Kullanıcı seçimi kaydedilmez/gönderilmez.
- Zorunlu örnek görünüm açıklaması canlı metindir.

## 7. Üretim sırası

1. Önce `C-PHOTO-01`, `A-PHOTO-01` ve `A-PHOTO-02` için düşük çözünürlüklü kompozisyon denemeleri üret.
2. Her varlık için tek bir yön seç; aynı sahnenin 4–6 benzer versiyonunu siteye taşıma.
3. Seçilen yönlerde eller, yüzler, okunabilir nesneler, yaş, duygu seviyesi ve mobil kırpım QA'sı yap.
4. Fotoğrafları optimize et ve “Temsili görsel” yerleşimini tasarım içinde doğrula.
5. Önce `SH-DIAG-02` Bilişsel Profil görselini uygula; çünkü iki sayfadaki tek büyük bilgi grafiğidir.
6. Ardından kompakt `SH-DIAG-01` süreci ve çocuk sayfasındaki mikro-görselleri uygula.
7. Son olarak iki sayfayı gerçek mobil genişliklerde görsel yoğunluk, kaydırma uzunluğu ve CTA görünürlüğü açısından test et.

## 8. Nihai kontrol listesi

### Kapsam

- [ ] Çocuk hero'su değişmedi.
- [ ] Yetişkin hero'su değişmedi.
- [ ] Program kartları iki sayfada da kaldırıldı.
- [ ] Çocuk sayfasında en fazla 1 duygusal fotoğraf var.
- [ ] Yetişkin sayfasında en fazla 2 duygusal fotoğraf var.
- [ ] Her sayfada yalnızca 1 büyük bilgi grafiği var: Bilişsel Profil.
- [ ] Check-Up akışı ve çocuk mikro-görselleri belirtilen yükseklik sınırlarını aşmıyor.

### Doğruluk ve güven

- [ ] “Ücretsiz” ifadesi yok.
- [ ] “45 dakika” ve “16 sayfa” ifadeleri yok.
- [ ] Check-Up süresi 1 saat.
- [ ] Rapor sayfa sayısı belirtilmiyor.
- [ ] Tanı, tedavi, ilaç alternatifi veya hastalık sonucu iddiası yok.
- [ ] Alzheimer/demans ve çocuk tanıları görsel metafor olarak kullanılmıyor.
- [ ] Bilişsel Profil tam beş kümeyi gösteriyor.
- [ ] Gerçek veya sahte puan/yüzde/gösterge yok.

### Temsil

- [ ] Her stok/AI fotoğraf sahnesi “Temsili görsel” olarak etiketli.
- [ ] Alt metin kişiyi BrainFit danışanı/çalışanı olarak tanımlamıyor.
- [ ] Görseller gerçek merkez, seans, çalışan veya müşteri izlenimi vermiyor.
- [ ] Testimonial içinde stok/AI yüz kullanılmıyor.
- [ ] Kullanılan stok çocuk görselinin ticari lisansı ve model release'i doğrulandı.

### Mobil ve erişilebilirlik

- [ ] 360, 390 ve 430 px genişliklerde kırpım kontrol edildi.
- [ ] Yüzler, eller ve anlam taşıyan nesneler mobil kırpımda korunuyor.
- [ ] Görseller CTA'ları ilk karar anından uzaklaştırmıyor.
- [ ] WhatsApp ve form CTA'ları eşit görünürlükte.
- [ ] Görsel dosyaları optimize; doğru `srcset`/`sizes` mevcut.
- [ ] Code-native grafiklerde metin canlı HTML.
- [ ] Dokunma hedefleri en az 44 px.
- [ ] Klavye odağı görünür.
- [ ] Renk tek anlam taşıyıcısı değil.
- [ ] `prefers-reduced-motion` destekleniyor.
