# BrainFit Karşıyaka — İki Sayfalık Mobil İçerik Haritası

## 1. Amaç ve kapsam

Bu belge, BrainFit Karşıyaka'nın iki ana landing page'inin yeniden yazım ve yeniden düzenleme haritasıdır:

- `/`: Çocuklar ve ebeveynler
- `/yetiskinler`: Yetişkinler

Bu aşamada amaç nihai SEO metni yazmak değildir. Amaç:

1. Her bölümün ziyaretçide hangi soruyu cevapladığını belirlemek.
2. Mevcut bileşenlerden hangilerinin korunacağını, taşınacağını, birleştirileceğini veya kaldırılacağını kararlaştırmak.
3. Kullanıcı görüşmelerinden gelen gerçek dili doğru bölümlere dağıtmak.
4. Mobilde metin ve görsel yoğunluğunu sınırlamak.
5. Doğrulanmış gerçekleri, doğrulanacak iddiaları ve ileride SERP verisiyle test edilecek hipotezleri birbirinden ayırmak.
6. WhatsApp ile geri arama formunu eşit öncelikli dönüşüm yolları olarak tasarlamak.

Site kodu bu belgeyle değiştirilmez. Nihai metinler, SEO araştırması ve kullanıcı onayından sonra ayrı bir copy deck içinde yazılacaktır.

Görsel kararların ayrıntıları: [VISUAL_CONTENT_CONCEPTS_AND_PROMPTS.md](./VISUAL_CONTENT_CONCEPTS_AND_PROMPTS.md)

## 2. Kanıt ve karar etiketleri

Her önemli içerik kararı aşağıdaki etiketlerden biriyle takip edilir:

- **ONAYLANDI:** Kullanıcı tarafından açıkça doğrulanmış veya gönderilen CogMAP belgesiyle desteklenen bilgi.
- **HİPOTEZ:** Proje ve kullanıcı geri bildirimlerinden türetilmiş stratejik öneri. SEO talebi veya performansı olarak sunulamaz; ileride SerpLab ile test edilir.
- **DOĞRULANACAK:** İşletme, operasyon, hukuki metin veya belge gerektiren bilgi.
- **KALDIR:** Yanlış, çelişkili, göstermelik, doğrulanmamış veya alınan yeni kararla gereksiz hâle gelmiş içerik.

### 2.1 `DOĞRULANACAK` bilgilerin yazım kuralı

Doğrulanmamış bir değer taslak kopyada gerçekmiş gibi yazılmaz. Gerekiyorsa yalnızca aşağıdaki biçimde iç token olarak tutulur:

```text
[[DOĞRULANACAK:LEDGER-ID]]
```

Örnek:

```text
[[DOĞRULANACAK:V-008-KVKK-METNI]]
```

Bu tokenlar kullanıcıya gösterilen arayüze taşınmaz. Formların yayına alınması için KVKK/aydınlatma metni zorunlu kapıdır. Yayın öncesi render edilmiş içerikte sıfır adet çözülmemiş `DOĞRULANACAK` tokenı bulunmalıdır.

## 3. Sabit kararlar

| ID | Karar | Durum |
|---|---|---|
| F-001 | Ücretsiz herhangi bir hizmet veya görüşme yok; tüm “ücretsiz” ifadeleri kaldırılacak. | ONAYLANDI |
| F-002 | Zihin Check-Up süresi 1 saattir. | ONAYLANDI |
| F-003 | Sonuç görüşmesinin süresi sayfada belirtilmeyecek. | ONAYLANDI |
| F-004 | Rapor sayfa sayısı kullanılmayacak. | ONAYLANDI |
| F-005 | Bilişsel Profil beş ana kümeden oluşur: Motor, Görsel, İşitsel, Dikkat, Duygusal. | ONAYLANDI — CogMAP örneği |
| F-006 | Zihin Check-Up sonrasında kişiye özel egzersiz planı oluşturulur. | ONAYLANDI |
| F-007 | BrainFit bu sayfalarda tedavi veya tanı hizmeti olarak konumlandırılmayacak. | ONAYLANDI |
| F-008 | Program kartları ve program seçme anlatısı iki sayfadan kaldırılacak. | ONAYLANDI |
| F-009 | WhatsApp ve geri arama formu eşit öncelikli; doğrudan arama ikincil. | ONAYLANDI |
| F-010 | Hero görsel yönü ve yerleşimi değişmeyecek. Bilinen yanlışlar hero kopyasında korunmayacak. | ONAYLANDI / yorumlanmış kapsam |
| F-011 | Kendini-fark-etme seçimleri istemci tarafında kalacak ve forma/WhatsApp'a otomatik eklenmeyecek. | STRATEJİK GÜVENLİK KARARI |
| F-012 | Karşıyaka'da BrainFit şubesi vardır; kesin güncel adres ve telefon ayrıca doğrulanacaktır. | ONAYLANDI — resmî merkez listesi / kısmi |
| F-013 | Çocuk sayfasında sınav konusu ayrı bölüm değil; “Hangisini gözlemliyorsunuz?” alanındaki dört bağlamdan biridir. | ONAYLANDI |
| F-014 | Çocuk sayfasında ayrı “BrainFit nedir?” bölümü yoktur; gerekli açıklama Zihin Check-Up bölümüne gömülür. | ONAYLANDI |
| F-015 | Site statik görünmeyecek; etkileşim açıkça anlaşılacak ve hareket mobil performansı bozmadan kontrollü kullanılacaktır. | ONAYLANDI |
| F-016 | Veli ve yetişkin deneyimi/testimonial bölümleri iki sayfada da korunacak; gerçek içerikleri kullanıcı daha sonra güncelleyecektir. | ONAYLANDI |
| F-017 | Blog bölümü iki sayfada da kesinlikle korunacak; tek ortak blog altyapısı kullanılacak ve blog mimarisi, bileşeni, metinleri veya görsel düzeni bu çalışma kapsamında değiştirilmeyecektir. | ONAYLANDI |
| F-018 | Yeni site `https://karsiyaka.brainfit.com.tr/` domaininde mevcut sitenin yerini alacaktır. | ONAYLANDI |
| F-019 | SEO araştırması Karşıyaka birincil, İzmir ikincil coğrafi hedefiyle; çocuk ve yetişkin sayfalarına eşit ağırlık verilerek yürütülecektir. | ONAYLANDI |
| F-020 | ADHD, disleksi ve Alzheimer gibi tanı/hastalık terimleri yalnızca kullanıcı kaygısını ve arama dilini keşfetmek için araştırılacak; sayfaların birincil hedefi veya BrainFit hizmeti olarak konumlandırılmayacaktır. | ONAYLANDI |

## 4. Mobil içerik ve dönüşüm kuralları

### 4.1 Metin bütçeleri

| İçerik türü | Mobil hedef |
|---|---:|
| Kicker/badge | 2–5 kelime |
| H2 | tercihen 6–8, en fazla 10 kelime |
| Bölüm giriş paragrafı | en fazla 45 kelime |
| Büyük ebeveyn/yetişkin cümlesi | en fazla 14 kelime |
| Destek gözlemi | en fazla 12–14 kelime |
| Seçim sonrası açıklama | en fazla 35 kelime |
| Süreç adımı açıklaması | en fazla 18 kelime |
| SSS cevabı | en fazla 55–65 kelime |
| Testimonial | tercihen 25–35, en fazla 50 kelime |

Bu değerler katı karakter limitleri değil; mobil bilişsel yük sınırlarıdır. Bir bölüm bütçeyi aşıyorsa önce metin kısaltılır, yeni kart veya accordion eklenmez.

### 4.2 Görünür seçenek sayısı

- Çocuk sayfasındaki navigator dört ana gözlemi birlikte gösterir: Sınav, Ödev, Davranış/Uyum ve Dikkat.
- Mobilde bu dört seçenek 2×2 dokunma alanı olarak görünür; her biri en az 64 px yüksekliğindedir. Seçili durum yalnızca renkle değil, metin ağırlığı, yön işareti ve açık içerik paneliyle de anlaşılır.
- Yetişkin sayfasında iki öncelikli bağlam ilk görünür: **Günlük Zihinsel Yorgunluk** ve **Hafıza**.
- **Sınav/Öğrenme** ve **İş Hayatı**, “Diğer bağlamlar” progressive disclosure alanında açılır.

### 4.3 CTA ritmi

Eşit öncelikli ana eylemler:

- **WhatsApp’tan Yaz**
- **Sizi Arayalım**

Yerleşim:

1. Hero içinde veya hero'nun hemen ardından mevcut tasarımı bozmadan.
2. Zihin Check-Up sürecinin hemen ardından.
3. Sayfa sonundaki iletişim alanında.
4. Mobilde kalıcı iki eylemli alt bar; form görünürken gizlenebilir.

Doğrudan arama footer/iletişim alanında ikincil metin bağlantısıdır.

### 4.4 WhatsApp mesajı

Seçilen kendini-fark-etme cevabı otomatik eklenmez. Genel ve kitleye özel mesaj kullanılır:

- Çocuk: `Merhaba, çocuğum için Zihin Check-Up hakkında bilgi almak istiyorum.`
- Yetişkin: `Merhaba, yetişkin Zihin Check-Up hakkında bilgi almak istiyorum.`

WhatsApp numarası: `[[DOĞRULANACAK:V-006-WHATSAPP-NUMARASI]]`

### 4.5 Form veri sınırı

Geçici minimum yapı:

- Ad Soyad — zorunlu
- Telefon — zorunlu
- Çocuk yaşı / yetişkin yaşı — zorunluluğu doğrulanacak
- Kısa not — isteğe bağlı

Kendini-fark-etme seçimleri hidden input ile otomatik gönderilmez. Kullanıcı isterse not alanında kendi cümlesini yazar.

Kesin alan yapısı: `[[DOĞRULANACAK:V-007-FORM-ALANLARI]]`

Aydınlatma/onay metni: `[[DOĞRULANACAK:V-008-KVKK-METNI]]`

### 4.6 Etkileşim ve hareket sistemi

**Tasarım niyeti:** Sayfa canlı ve keşfedilebilir hissettirmeli; hareket içerikten rol çalmamalı. Animasyonun görevi dokunulabilir alanı göstermek, seçim sonucunu açıklamak, bölüm ilişkisini kurmak ve kullanıcı eylemine geri bildirim vermektir.

**Tek imza anı:** Hero'ların mevcut görsel yönü ve kompozisyonu korunur. Sayfa genelinde ikinci bir gösterişli açılış koreografisi eklenmez; hareket bütçesi gözlem navigatorı ve Bilişsel Profil etkileşimine ayrılır.

**Etkileşim katmanları:**

1. **Gözlem navigatorı:** Seçenekler gerçek `button` elemanlarıdır. Üzerinde kısa bir “Dokun, örnekleri gör” yönlendirmesi bulunur. Seçimde aktif yüzey belirginleşir, yön oku döner ve ilişkili panel 220–280 ms içinde kısa crossfade + en fazla 8 px yer değiştirmeyle açılır.
2. **Bilişsel Profil:** Beş küme sırayla açılan kart ızgarası yerine tek bir bütünsel görsel içinde seçilebilir odaklar olarak çalışır. Dokunulan küme vurgulanır ve kısa açıklaması görünür; sahte skor veya veri animasyonu kullanılmaz.
3. **Zihin Check-Up akışı:** Süreç adımları tek bir sıralı anlatıdır. Görünür alana giren adımın bağlantı çizgisi kısa biçimde ilerler; bütün adımlar ayrı ayrı zıplamaz veya sürekli hareket etmez.
4. **CTA ve form:** Butonda 100–150 ms basma geri bildirimi, inputlarda 180–220 ms odak geçişi, gönderimde açık loading/success/error durumu bulunur. Başarılı gönderimde kısa bir onay işareti yeterlidir; konfeti kullanılmaz.
5. **Disclosure/SSS:** Açılır alanlarda `aria-expanded`, görünür artı/eksi veya chevron ve 250–350 ms kontrollü geçiş kullanılır. İçerik JavaScript çalışmasa bile okunabilir kalır.
6. **Fotoğraf kullanımı:** Seçime bağlı fotoğraf değişiyorsa sert kesme yerine 250–350 ms crossfade uygulanır. Masaüstünde çok hafif crop/scale geçişi olabilir; mobilde sürekli parallax kullanılmaz.

**Hareket dili:**

- Ease-out quart/quint/expo; bounce ve elastic yok.
- Hover tek başına etkileşim göstergesi değildir; mobilde etiket, yön işareti ve aktif durum zorunludur.
- Her bölüm için aynı fade-up animasyonu tekrarlanmaz.
- İçerik başlangıçta görünürdür; scroll animasyonu yüklenmezse boş bölüm oluşmaz.
- `prefers-reduced-motion` durumunda hareket crossfade veya anlık durum değişimine iner.

**Mobil performans bütçesi:** Autoplay video, WebGL/canvas sahnesi, sayfa boyunca sürekli parçacık animasyonu ve geniş alanlı blur yok. Scroll dinleyicisi yerine Intersection Observer; temel hareketlerde `transform` ve `opacity`; pahalı efektler yalnızca küçük ve izole alanlarda. 360, 390 ve 430 px testleri ile düşük güç modunda akıcılık kontrol edilir.

## 5. Çocuk ve ebeveyn sayfası (`/`)

### 5.1 Hedef sayfa görevi

Bir ebeveynin, çocuğunun sınav, ödev, davranış/uyum veya dikkat deneyimlerinde kendisini görmesini; bunun otomatik olarak tembellik veya tanı anlamına gelmediğini anlamasını; 1 saatlik Zihin Check-Up'ın ne sunduğunu görmesini ve WhatsApp/form üzerinden görüşme başlatmasını sağlamak.

**Birincil niyet:** Ebeveyn karar sayfası.  
**Birincil konu hipotezi:** Çocuklarda dikkat/öğrenme/sınav performansı desteği + Karşıyaka.  
**SEO durumu:** HİPOTEZ — SerpLab kanıtı bekliyor.

### 5.2 Hedef bölüm sırası

1. Header
2. Hero — görsel/yerleşim kilitli
3. “Hangisini gözlemliyorsunuz?” etkileşimli navigatorı
4. Rahatlatma ve yeniden çerçeveleme
5. 1 saatlik Zihin Check-Up
6. Bilişsel Profil
7. Veli deneyimi + güven sınırları
8. WhatsApp + geri arama formu
9. Kompakt blog teaserı
10. Footer + mobil çift CTA

---

### C-00 — Header

**Mevcut bileşen:** `Header.tsx`  
**Karar:** KORU + NAVİGASYONU GÜNCELLE  
**Ziyaretçi sorusu:** “Sayfada aradığım yere hızlıca nasıl giderim?”

**Hedef bağlantılar:**

- Yaşadıklarınız → `#help`
- Zihin Check-Up → `#checkup`
- Bilişsel Profil → `#cognitive-profile`
- Hakkımızda → `#about`
- İletişim → `#contact`

**Kaldır:** “Programlarımız” ve program anchorı.  
**Sağ üst kitle geçişi:** “Yetişkinler” bağlantısı korunabilir; “Yetişkin Programı” ifadesi kaldırılır.

**Mobil kabul:** Menü ilk açılışta en fazla beş bağlantı; her hedef en az 44 px.

---

### C-01 — Hero

**Mevcut bileşen:** `Hero.tsx`  
**Karar:** GÖRSEL/YERLEŞİM/H1 KİLİTLİ; ZORUNLU DOĞRULUK DÜZELTMESİ  
**Ziyaretçi sorusu:** “Bu sayfa benim çocuğumun yaşadığı durumla ilgili mi?”

**Korunacak:** Mevcut görsel yön, kompozisyon ve H1.  
**Zorunlu değişiklik:** “45 dakika” → “1 saat”.

**Mevcut riskli iddia:** “bilimsel verilerle ortaya koyar.”  
**Ledger:** `[[DOĞRULANACAK:V-012-CHILD-HERO-BILIMSEL-IDDIASI]]`

**Doğrulanmazsa nötr fallback:**

> “Zihin Check-Up, çocuğunuzun bilişsel becerilerini 1 saatlik değerlendirmeyle daha yakından anlamaya yardımcı olur.”

**CTA:** WhatsApp ve “Sizi Arayalım” eşit; mevcut hero kompozisyonunu değiştirmeden hemen hero sonunda da gösterilebilir.

**Kabul:** `45`, `ücretsiz`, sayfa sayısı ve program adı yok.

---

### C-02 — “Hangisini gözlemliyorsunuz?” navigatorı

**Mevcut bileşen:** `HelpSection` concern selector  
**Karar:** YENİDEN KURGULA  
**Ziyaretçi sorusu:** “Bizim evde yaşadığımız durum hangisine benziyor?”  
**Mesaj görevi:** Dört gözlem bağlamını tanısal olmayan, kısa ve etkileşimli biçimde düzenlemek. Sınav konusu önemini korur ancak ayrı bir bölüm oluşturmaz.

**Etkileşim biçimi:** Mobilde dört görünür seçimden oluşan 2×2 kontrol alanı + altında tek ilişkili içerik paneli. İlk seçili durum **Sınav** olabilir. Başlık üstünde kısa “Bir başlığa dokunun” yönlendirmesi ve her seçenekte yön işareti bulunur; alanın etkileşimli olduğu hover olmadan anlaşılır.

#### C-02A — Sınavda bildiğini gösterememe

**Ana ifade:**

> “Evde hepsini biliyor ama sınavda yapamıyor.”

**Destek ifadeleri:**

- “Çok çalışıyor fakat notlarına yansımıyor.”
- “Öğretmeni kapasitesi var ama gösteremiyor diyor.”
- “Bildiklerini sınav anında unutuyor.”
- “Sınavlarda bildiği sorularda dikkatsizlik hatası yapıyor.”

**Dağıtım kuralı:** Ana ifade + en fazla iki destek ifadesi görünür. Kalanlar aynı panel içindeki “Bunlar da tanıdık mı?” disclosure alanında açılır.

**Çalışma mesajı — nihai copy değil:** Evin rahat ortamında görünen bilgi ile sınav anındaki performans aynı olmayabilir; ilk adım hangi bilişsel alanların zorlandığını anlamaktır.

**Görsel:** `C-PHOTO-01` — panel seçildiğinde görünür/değişir; ayrıntı için görsel doküman.  
**Kaçınılacak:** “Kaygı yönetimiyle ilişkilidir”, “baskı altında çökebilir”, “kök nedeni bulur” gibi kesin neden dili.

#### C-02B — Ödev: başlamak ve sürdürmek

**İfadeler:**

- “Masaya oturması saatler sürüyor.”
- “Başlıyor ama birkaç dakika sonra kalkıyor.”

**Görsel:** `C-DIAG-01`  
**Seçim sonrası açıklama bütçesi:** ≤30 kelime.

#### C-02C — Davranış ve uyum

**Bağlam dağılımı:**

- Evde: “Tepkileri bir anda çok büyüyor.” / “Söylediğimiz her şeye karşı çıkıyor.”
- Okulda: “Öğretmeni sınıfta davranışlarıyla ilgili sürekli geri bildirim veriyor.”
- Sosyal hayatta: “Okulda arkadaşlarıyla anlaşamıyor.” / “Yeni ortamlara uyum sağlaması çok zor oluyor.”

**Görsel:** `C-DIAG-02`  
**Tanı adı:** Kullanılmaz.

#### C-02D — Dikkat

**İfadeler:**

- “Öğretmeni derste sık sık hayallere daldığını söylüyor.”
- “Bir işe başlıyor, hemen başka bir şeye geçiyor.”
- “En küçük seste bile dikkati dağılıyor.”

**Görsel:** Yok; tipografi/etkileşim.  
**İçerik sahipliği:** “Sınavlarda bildiği sorularda dikkatsizlik hatası yapıyor” yalnızca Sınav panelinde kullanılır; burada tekrarlanmaz.

**Zorunlu yakın sınır metni:**

> “Bu gözlemler tek başına bir tanı anlamına gelmez. Ama çocuğunuzun hangi alanlarda zorlandığını anlamak için iyi bir başlangıç olabilir.”

**Veri davranışı:** Seçimler client-side; hidden input, form payload, WhatsApp mesajı veya analitik event içine eklenmez.

**Metin bütçesi:** Dört seçim etiketi birlikte görünür; yalnızca seçili bağlamın paneli açık; panel giriş açıklaması ≤35 kelime.

---

### C-03 — Rahatlatma ve yeniden çerçeveleme

**Mevcut bileşen:** `ConfidenceSection`  
**Karar:** KORU + CİDDİ BİÇİMDE KISALT + ÜÇ DALGA KARTINI KALDIR/BİRLEŞTİR  
**Ziyaretçi sorusu:** “Bu durum yalnızca isteksizlik veya tembellik mi?”  
**Mesaj görevi:** Ebeveynin suçluluk ve baskı döngüsünü azaltmak; kontrol edilebilir bir sonraki adım göstermek.

**İçerik iskeleti:**

- Bir H2.
- En fazla 45 kelimelik tek paragraf.
- Bir sonraki bölüme geçiş: “Önce hangi becerilerin desteğe ihtiyaç duyduğunu anlamak gerekir.”

**Görsel:** Yeni fotoğraf yok; yalnızca görsel dokümandaki küçük çizgisel vurgu.  
**Kaldırılacak kesinlik:** “kapasite zorlanması var”, “baskı altında çöker”, “doğrudan desteklenir” gibi kesin neden/sonuç dili.  
**CTA:** Yok; anlatı akışını Zihin Check-Up açıklamasına taşır.

---

### C-04 — 1 saatlik Zihin Check-Up

**Mevcut bileşen:** `CheckUpSection` + `TrustBar`/`BrainFitSection` içinden gerekli iki cümle  
**Karar:** KORU + SADELEŞTİR + KISA BRAINFIT AÇIKLAMASINI BURAYA GÖM  
**Ziyaretçi sorusu:** “Görüşmede ne olacak ve sonunda ne elde edeceğim?”  
**Mesaj görevi:** BrainFit'in ne yaptığını bağımsız bir kurum anlatısına dönmeden açıklamak; süreci üç somut adımda göstermek.

**Kısa giriş:** BrainFit'in bilişsel değerlendirme + kişiye özel egzersiz planı yaklaşımı en fazla iki cümleyle bu bölümün girişinde verilir. Ayrı “BrainFit nedir?” bölümü yoktur.

**Kesin adımlar:**

1. 1 Saatlik Zihin Check-Up
2. Bilişsel Profil
3. Kişisel Egzersiz Planı

**Görsel:** `SH-DIAG-01`  
**Metin bütçesi:** Her adım ≤18 kelime; toplam giriş ≤35 kelime.  
**Kaldır:** Kurum tarihçesi, program kataloğu, 4.6/5, 48.000+, %92, %93, 160.000, Harvard/Stanford, 16 sayfa, ücretsiz, tanı/ilaç pazarlama dili, “en doğru yol”, “bilimsel test”, “kök neden” ve somut verilerle engel tespiti kesinliği.  
**Doğrulanacak:** Personel unvanları, 1.200 egzersiz ve envanterlerin resmî tanımı; bu bölümde doğrulanmadan kullanılmaz.  
**CTA:** Bölüm sonunda eşit WhatsApp + “Sizi Arayalım”.

---

### C-05 — Bilişsel Profil

**Mevcut bileşen:** `ReportAndMeasurementSection`  
**Karar:** KORU + İÇERİK/GÖRSELİ BAŞTAN KURGULA  
**Anchor:** `#cognitive-profile`  
**Ziyaretçi sorusu:** “Değerlendirme bana neyi görünür kılacak?”  
**Mesaj görevi:** Raporu sayfa sayısıyla değil, yapı ve faydayla somutlaştırmak.

**Kesin alanlar:** Motor, Görsel, İşitsel, Dikkat, Duygusal.  
**Görsel:** `SH-DIAG-02` — sayfanın tek büyük bilgi grafiği.  
**Giriş bütçesi:** ≤40 kelime.  
**Zorunlu açıklama:** “Örnek profil görünümüdür. İçerik, yaşa ve uygulanan değerlendirmelere göre değişebilir.”

**DOM'dan kaldır:**

- Yedi alan listesi
- 16 sayfa badge'i
- Aynı `%68` çubukları
- Sahte güçlü/desteklenebilir/takip değerleri
- Rapor sayfa sayısı

**CTA:** İsteğe bağlı tek “Zihin Check-Up'ı konuşalım” bağlantısı; sayfa sonu çift CTA'nın yerine geçmez.

---

### C-06 — Veli deneyimi + güven sınırları

**Mevcut bileşen:** `TestimonialSection`  
**Karar:** BÖLÜMÜ KESİNLİKLE KORU; İÇERİĞİ KULLANICI DAHA SONRA GÜNCELLEYECEK  
**Ziyaretçi sorusu:** “Benzer bir aile bu süreçten nasıl bir netlik kazandı?”  
**Mesaj görevi:** Sonuç vaadi değil, karar netliği ve süreç deneyimi göstermek.

**Kullanım koşulları:**

- Yazılı kullanım izni.
- Anonimleştirme.
- İlaç, doktor alıntısı, tanı veya çocuğu tanımlayan ayrıntı yok.
- En fazla 50 kelime.

**Geliştirme kuralı:** Bölümün tasarımı ve sayfadaki yeri kaldırılmaz. Mevcut göstermelik içerik, kullanıcı gerçek metinleri verene kadar yalnızca iç placeholder olarak kalır; nihai yayın içeriği sayılmaz.  
**İçerikten kaldır/değiştir:** Dönen AI placeholder cümleleri, `doctor-profile.svg` ile sahte ekip sunumu, AI avatar, 4.6 Google puanı, “sorunun kaynağını net anladık” kesinliği.  
**Görsel:** Gerçek izinli fotoğraf yoksa fotoğrafsız alıntı. Stok/AI testimonial yüzü yok.  
**Token:** `[[DOĞRULANACAK:V-005-VELI-REFERANS-IZNI]]`

**Yakın güven sınırı:** BrainFit bilişsel değerlendirme ve eğitim desteğidir; tıbbi tanı veya tedavi sunmaz.

---

### C-07 — WhatsApp + geri arama formu

**Mevcut bileşen:** `CheckUpFormSection`  
**Karar:** KORU + CTA VE KOPYAYI GÜNCELLE + VERİYİ AZALT  
**Ziyaretçi sorusu:** “Baskı hissetmeden nasıl iletişime geçerim?”  
**Mesaj görevi:** Kayıt değil, konuşma başlatmak.

**Ana CTA'lar:**

- WhatsApp’tan Yaz
- Sizi Arayalım

**Form butonu:** “Sizi Arayalım” veya aynı anlamdaki düşük taahhütlü ifade.  
**Kaldır:** “geleceği için bugün”, ücretsiz, 45 dakika, 16 sayfa, callback süresi vaadi.  
**Alanlar:** Bölüm 4.5'e göre; exact yapı doğrulanacak.  
**Selected concern:** Otomatik gönderilmez.  
**Başarı mesajı:** Alındığını ve ekibin iletişime geçeceğini söyler; süre garantisi yok.  
**KVKK:** Çözülmeden yayın yok.

---

### C-08 — Blog teaserı

**Mevcut bileşen:** `BlogSection`  
**Karar:** OLDUĞU GİBİ KORU; DOĞRUDAN DOKUNMA  
**Kapsam dışı:** Blog mimarisi, veri kaynağı, kart yapısı, metinleri, görselleri, filtreleri, bağlantıları, mobil düzeni ve SEO içeriği.  
**Ortaklık kuralı:** Çocuk ve yetişkin sayfaları aynı `BlogSection` bileşenini ve aynı blog altyapısını kullanır; ayrı yetişkin/çocuk blogu oluşturulmaz.

---

### C-09 — Footer ve mobil dönüşüm

**Mevcut bileşen:** `Footer` + `FloatingCta`  
**Karar:** GÜNCELLE  
**Kaldır:** Program linkleri, 48.000+, %93, çalışmayan newsletter varsa tamamı, “30'lu yaşlarda” kitle sızıntısı.  
**Footer:** İletişim, gizlilik, harita/adres, ikincil telefon, iki kitle geçişi.  
**Mobil alt bar:** WhatsApp + “Sizi Arayalım” eşit; zıplayan tekil WhatsApp balonu ve sonradan açılan satış balonu kaldırılır.  
**WhatsApp:** Çocuk mesajı yalnızca çocuk sayfasında.

## 6. Yetişkin sayfası (`/yetiskinler`)

### 6.1 Hedef sayfa görevi

Yaşadığı zihinsel yorgunluk, hafıza değişikliği, öğrenme/sınav veya iş performansı deneyimini henüz adlandıramayan yetişkinin kendisini fark etmesini; bunun tek başına bir hastalık tanısı olmadığını anlamasını; Zihin Check-Up ve kişisel egzersiz planını kavramasını; WhatsApp/form üzerinden konuşma başlatmasını sağlamak.

**Birincil niyet:** Yetişkin bilişsel gelişim ve değerlendirme karar sayfası.  
**Birincil konu hipotezi:** Yetişkin zihinsel yorgunluk/hafıza/odak desteği + Karşıyaka.  
**SEO durumu:** HİPOTEZ — SerpLab kanıtı bekliyor.

### 6.2 Hedef bölüm sırası

1. Header
2. Hero — görsel/yerleşim kilitli
3. Yetişkin kendini-fark-etme alanı
4. Yakın tanı sınırı ve yeniden çerçeveleme
5. BrainFit nedir? / doğrulanmış güven
6. 1 saatlik Zihin Check-Up
7. Bilişsel Profil
8. Ne yapıyoruz / ne yapmıyoruz + kısa SSS
9. Yetişkin deneyimi
10. WhatsApp + geri arama formu
11. Ortak blog bölümü
12. Footer + mobil çift CTA

---

### A-00 — Header

**Mevcut bileşen:** `Header.tsx`  
**Karar:** KORU + NAVİGASYONU GÜNCELLE

**Hedef bağlantılar:**

- Yaşadıklarınız → `#help`
- Zihin Check-Up → `#checkup`
- Bilişsel Profil → `#cognitive-profile`
- İletişim → `#contact`

**Opsiyonel masaüstü bağlantısı:** Hakkımızda → `#about`.  
**Kaldır:** Programlar ve program anchorı.  
**Header CTA:** “Randevu” yerine iki ana eylemden birine götürebilir; mobilde çift alt bar birincil kalır.

---

### A-01 — Hero

**Mevcut bileşen:** `AdultHero`  
**Karar:** GÖRSEL/YERLEŞİM/H1 KİLİTLİ; ZORUNLU DOĞRULUK DÜZELTMESİ  
**Ziyaretçi sorusu:** “Bu sayfa yaşadığım zihinsel değişiklikle ilgili mi?”

**Zorunlu düzeltmeler:**

- 45 dakika → 1 saat
- 16 sayfalık rapor → sayfa sayısı olmadan “kişisel bilişsel profil”
- “üç egzersiz programı” → “kişiye özel egzersiz planı”
- “Ücretsiz Check-Up” → “Zihin Check-Up”

**Korunacak:** Mevcut görsel yön, forest-green hero, H1 ve genel kompozisyon.  
**CTA:** WhatsApp ve form eşit; “45 dakikada ne olur?” bağlantısı “Zihin Check-Up nasıl işler?” olarak güncellenir.  
**Kabul:** Hero'da program adı, ücretsiz, sayfa sayısı veya tedavi iddiası yok.

---

### A-02 — Yetişkin kendini-fark-etme alanı

**Mevcut bileşen:** `AudienceSection`  
**Karar:** BAŞTAN KURGULA  
**Ziyaretçi sorusu:** “Yaşadığım şey hangi günlük deneyime benziyor?”  
**Mesaj görevi:** Kişinin ne yaşadığını adlandırmasına yardımcı olmak; risk skoru veya hastalık sonucu üretmemek.

#### İlk görünür bağlam 1 — Günlük zihinsel yorgunluk

**İfadeler:**

- “Günün ortasında zihnim kapanmış gibi oluyor.”
- “Bir işe odaklanıyorum ama aklım sürekli başka yere gidiyor.”
- “Zihnim eskisi kadar hızlı çalışmıyor gibi hissediyorum.”
- “Ne yapacağımı biliyorum ama zihinsel olarak başlayamıyorum.”

**İlk görünüm:** En fazla iki ifade; diğerleri disclosure.  
**Görsel:** `A-PHOTO-01`.

#### İlk görünür bağlam 2 — Hafıza

**Ana soru:**

> “Bu unutkanlık normal mi, yoksa daha ciddi bir şey mi var?”

**Destek:** “Bir şeyleri daha sık unutmaya başladım.”  
**Görsel:** `A-PHOTO-02`.

#### Progressive disclosure — Diğer bağlamlar

**Sınav/Öğrenme:**

- “Çalışıyorum ama öğrendiklerim kalıcı olmuyor.”
- “Soruları biliyorum ama süreyi yetiştiremiyorum.”
- “Sınav anında zihnim kilitleniyor.”

**İş Hayatı:**

- “Toplantıda anlatılanları takip etmekte zorlanıyorum.”
- “Aynı anda birkaç işi yönetemiyorum.”
- “Basit kararları vermek bile eskisinden uzun sürüyor.”

**Etkileşim kuralı:** İlk görünümde yalnızca Günlük Zihinsel Yorgunluk + Hafıza. “Diğer bağlamlar” açıldığında Sınav/Öğrenme ve İş Hayatı görünür. Bir anda yalnızca bir bağlamın ifadeleri açık.

**Veri:** Seçimler kaydedilmez, gönderilmez, puanlanmaz.  
**Metin bütçesi:** Bağlam başına ilk görünümde ≤2 ifade; açıklama ≤35 kelime.

---

### A-03 — Yakın tanı sınırı ve yeniden çerçeveleme

**Mevcut bileşen:** Yeni mikro-copy alanı; `AudienceSection` içinde veya hemen altında  
**Karar:** EKLE  
**Ziyaretçi sorusu:** “Bu yaşadıklarım bir hastalığım olduğu anlamına mı geliyor?”  
**Mesaj görevi:** Belirsizliği küçümsemeden, BrainFit'in sınırını hemen açıklamak.

**Çalışma sınır metni:**

> “Bu deneyimler tek başına bir tanı anlamına gelmez. Zihin Check-Up tıbbi tanı koymaz; bilişsel profilinizi anlamanıza yardımcı olan bir değerlendirmedir.”

**Ek yönlendirme:** Tıbbi bir endişe varsa sağlık profesyoneline başvurma ifadesinin tam yazımı `[[DOĞRULANACAK:V-013-MEDIKAL-SINIR-METNI]]`.

**Metin bütçesi:** En fazla 40 kelime + gerekirse tek kısa yönlendirme.  
**Görsel:** Yeni fotoğraf yok.

---

### A-04 — BrainFit nedir? / doğrulanmış güven

**Mevcut bileşen:** `BrainFitSection`  
**Karar:** KORU + RECOGNITION SONRASINA TAŞI + DOĞRULANMAYANLARI KALDIR  
**Ziyaretçi sorusu:** “BrainFit ne yapıyor?”

**İçerik:**

1. 1 saatlik bilişsel değerlendirme.
2. Beş kümeli bilişsel profil.
3. Kişiye özel egzersiz planı.

**Kaldır:** 160.000, Harvard/Stanford, doğrulanmamış “bilimsel test”, kök neden kesinliği.  
**Görsel:** Yeni ekip/merkez fotoğrafı yok.  
**Anchor:** `#about` opsiyonel.

---

### A-05 — 1 saatlik Zihin Check-Up

**Mevcut bileşen:** `CheckupJourneySection`  
**Karar:** KORU + DÖRT ADIMDAN ÜÇ ADIMA SADELEŞTİR  
**Ziyaretçi sorusu:** “Süreç nasıl işler?”

**Kesin adımlar:** 1 Saatlik Zihin Check-Up → Bilişsel Profil → Kişisel Egzersiz Planı.  
**Görsel:** `SH-DIAG-01`.  
**Kaldır:** 16 sayfa, program seçimi, standart protokol iddiası doğrulanmadan kullanımı.  
**CTA:** Bölüm sonunda eşit WhatsApp + “Sizi Arayalım”.

**Mevcut `OutcomeStrip`:** Ayrı bölüm olarak kaldır; “profil + plan” mesajı burada ve A-06'da zaten var.

---

### A-06 — Bilişsel Profil

**Mevcut bileşen:** `ReportAndMeasurementSection`  
**Karar:** ÇOCUK SAYFASIYLA AYNI NÖTR BİLEŞENİ KULLAN  
**Anchor:** `#cognitive-profile`  
**Ziyaretçi sorusu:** “Değerlendirme bana neyi gösterecek?”

**Kesin alanlar:** Motor, Görsel, İşitsel, Dikkat, Duygusal.  
**Görsel:** `SH-DIAG-02`.  
**Kaldır:** 7 alan, 16 sayfa, sahte skorlar ve `%68` çubukları.  
**Zorunlu açıklama:** Örnek görünüm; içerik yaşa/değerlendirmeye göre değişebilir.  
**Kitle dili:** “Çocuğunuz” kullanılmaz; bileşen nötr “kişinin/bilişsel profiliniz” dili kullanır.

---

### A-07 — Ne yapıyoruz / ne yapmıyoruz + kısa SSS

**Mevcut bileşen:** `TrustAndEvidenceSection` + `FaqSection`  
**Karar:** SINIRLARI KORU; İSTATİSTİK BLOĞUNU KALDIR; SSS'Yİ KISALT  
**Ziyaretçi sorusu:** “Bu hizmet neyi kapsıyor, neyi kapsamıyor?”

**Ne yapıyoruz — en fazla üç madde:**

- Bilişsel profil değerlendirmesi.
- Kişiye özel egzersiz planı.
- Gelişim sürecini yapılandırma/takip ifadesi yalnızca doğrulanırsa.

**Ne yapmıyoruz — en fazla üç madde:**

- Tıbbi tanı koymuyoruz.
- İlaç önermiyoruz veya mevcut tedavinin yerine geçmiyoruz.
- Sonuç garantisi vermiyoruz.

**Kaldır:** 45 dk, 16 sayfa, 1.200+, 20+ yıl ve diğer numeric evidence blokları; doğrulanırsa bile mevcut rewrite'a otomatik dönmez.

**SSS — en fazla dört soru:**

1. Zihin Check-Up tıbbi bir test mi?
2. Değerlendirme sonunda ne elde ederim?
3. Belirgin bir problemim yoksa başvurabilir miyim?
4. İlk iletişim nasıl ilerler?

**Cevap bütçesi:** Her biri ≤65 kelime.  
**Hukuki/medikal kontrol:** `[[DOĞRULANACAK:V-013-MEDIKAL-SINIR-METNI]]`

---

### A-08 — Yetişkin deneyimi

**Mevcut bileşen:** `TestimonialSection`  
**Karar:** BÖLÜMÜ KESİNLİKLE KORU; İÇERİĞİ KULLANICI DAHA SONRA GÜNCELLEYECEK  
**Geliştirme kuralı:** Bölümün tasarımı ve sayfadaki yeri korunur. Mevcut metin geçici içerik olarak işaretlenir ve nihai yayın öncesinde yetişkin kitlesine ait gerçek metinle değiştirilir.  
**İçerikten kaldır/değiştir:** Veli referansı, çocuk dikkat anlatısı, AI avatar, fake rotating copy, 4.6 puanı.  
**Görsel:** Stok/AI testimonial yüzü yok.  
**Token:** `[[DOĞRULANACAK:V-005-YETISKIN-REFERANS-IZNI]]`

---

### A-09 — WhatsApp + geri arama formu

**Mevcut bileşen:** `AdultCheckUpFormSection`  
**Karar:** KORU + KOPYA/VERİ AKIŞINI GÜNCELLE  
**Ziyaretçi sorusu:** “Yaşadığımı nasıl paylaşır ve görüşme başlatırım?”

**Kaldır:** Ücretsiz, 45 dakika, 16 sayfa, 1–2 saat callback, üç program, Senior placeholderı.  
**Ana CTA:** WhatsApp + “Sizi Arayalım”.  
**Selected concern:** Otomatik gönderilmez.  
**Form:** Ad, telefon, yaş gerekliliği doğrulanacak; not opsiyonel.  
**Başarı:** Süre garantisi yok.  
**KVKK:** Çözülmeden yayın yok.

---

### A-10 — Ortak blog bölümü

**Mevcut bileşen:** Çocuk sayfasıyla aynı `BlogSection`  
**Karar:** AYNI BİLEŞENİ YETİŞKİN SAYFASINDA DA GÖSTER; BLOGUN KENDİSİNE DOKUNMA  
**Kural:** Ayrı içerik kaynağı, kategori mimarisi, yetişkin varyantı veya yeni blog kartı oluşturulmaz. Mevcut ortak blog bölümü olduğu gibi kullanılır.

---

### A-11 — Footer ve mobil dönüşüm

**Mevcut bileşen:** `Footer` + `FloatingCta`  
**Karar:** ÇOCUK SAYFASIYLA ORTAK GÜNCELLEME  
**Kaldır:** Program linkleri, çocuk mesajı, unverified stats, newsletter çalışmıyorsa tamamı.  
**WhatsApp mesajı:** Yetişkin kitlesine özel genel mesaj.  
**Mobil bar:** WhatsApp + “Sizi Arayalım” eşit; telefon footer'da ikincil.

## 7. Mevcut bileşen → hedef karar matrisi

| Mevcut bileşen | Çocuk sayfası | Yetişkin sayfası | Hedef karar |
|---|---|---|---|
| `Header` | Var | Var | Program linklerini kaldır, audience-aware anchorlar |
| `Hero` | Var | — | Görsel/layout/H1 kilitli; gerçeklik düzeltmeleri |
| `AdultHero` | — | Var | Görsel/layout/H1 kilitli; gerçeklik düzeltmeleri |
| `TrustBar` | Var | Yok | Doğrulananları kurum alanına birleştir; diğerlerini kaldır |
| `HelpSection` | Var | — | Sınav, Ödev, Davranış/Uyum ve Dikkat içeren tek dört bağlamlı navigator olarak yeniden kur |
| `AudienceSection` | — | Var | Yetişkin kendini-fark-etme alanı olarak yeniden kur |
| `ConfidenceSection` | Var | — | Tek kısa reframe bölümüne indir |
| `BrainFitSection` | Var | Var | Çocukta bağımsız bölümü kaldır, gerekli iki cümleyi Check-Up'a göm; yetişkinde recognition sonrasında koru |
| `CheckUpSection` | Var | — | 1 saat + üç adım |
| `CheckupJourneySection` | — | Var | 1 saat + üç adım |
| `OutcomeStrip` | — | Var | Kaldır/Check-Up'a birleştir |
| `ReportAndMeasurementSection` | Var | Var | Beş kümeli ortak Bilişsel Profil |
| Child `ProgramSection` | Var | — | Kaldır |
| Adult local `ProgramSection` | — | Var | Kaldır |
| `TrustAndEvidenceSection` | — | Var | Sayısal kanıtları kaldır; sınırları kısalt |
| `TestimonialSection` | Var | Var | İki sayfada da bölüm yapısını koru; geçici içeriği kullanıcı daha sonra kitleye ait gerçek metinlerle güncelleyecek |
| `FaqSection` | — | Var | Dört kısa soruya indir |
| `CheckUpFormSection` | Var | — | WhatsApp eşliği + veri azaltma + doğru bilgiler |
| `AdultCheckUpFormSection` | — | Var | WhatsApp eşliği + veri azaltma + doğru bilgiler |
| `FloatingCta` | Var | Var | Tek çocuk WhatsApp balonundan audience-aware çift bara dönüştür |
| `BlogSection` | Var | Eklenecek | Aynı ortak bileşeni iki sayfada da olduğu gibi kullan; blog mimarisi ve içeriğine dokunma |
| `Footer` | Var | Var | Program/stats/newsletter temizliği; iletişim odaklı ortak footer |

## 8. İddia ve operasyon ledgerı

### 8.1 ONAYLANDI

| ID | Bilgi | Kaynak |
|---|---|---|
| F-001 | Ücretsiz hizmet yok | Kullanıcı |
| F-002 | Zihin Check-Up 1 saat | Kullanıcı |
| F-004 | Rapor sayfa sayısı kullanılmayacak | Kullanıcı + değişken PDF |
| F-005 | Beş ana küme | CogMAP örneği |
| F-006 | Kişiye özel egzersiz planı | Kullanıcı + rapordaki strateji yapısı |
| F-007 | Tedavi/tanı konumlandırması yok | Kullanıcı |
| F-008 | Program kartları kaldırılacak | Kullanıcı |
| F-009 | WhatsApp ve form eşit öncelikli | Kullanıcı |
| F-012 | Karşıyaka şubesi var | BrainFit resmî merkez listesi; kesin adres ayrı |
| F-013 | Çocukta sınav ayrı bölüm değil, gözlem navigatorının parçası | Kullanıcı |
| F-014 | Çocukta bağımsız “BrainFit nedir?” bölümü yok | Kullanıcı |
| F-015 | Etkileşim görünür, hareket kontrollü ve mobil öncelikli | Kullanıcı |
| F-016 | Testimonial bölümleri iki sayfada da korunacak | Kullanıcı |
| F-017 | Tek ortak blog bölümü iki sayfada da korunacak; blogun kendisine dokunulmayacak | Kullanıcı |

### 8.2 DOĞRULANACAK

| ID | Soru / bağımlılık | Doğrulanmadan ne olur? |
|---|---|---|
| V-005 | Gerçek veli/yetişkin testimonial metinleri ve yazılı kullanım izni | Bölüm yapısı korunur; geçici içerik nihai içerik sayılmaz ve doğrulanmadan yayına alınmaz |
| V-006 | Güncel WhatsApp numarası ve yönetim saatleri | WhatsApp CTA canlıya alınmaz |
| V-007 | Gerekli form alanları | Minimum form şeması kesinleşmez |
| V-008 | KVKK/aydınlatma/onay metni ve gerçek veri işleme | Form canlıya alınmaz |
| V-009 | Güncel Karşıyaka adresi ve telefon | Footer/yerel schema yazılmaz |
| V-010 | Newsletter gerçekten çalışıyor mu? | Footer newsletter kaldırılır |
| V-011 | İşletmenin garanti edebildiği callback SLA | Süre vaadi kullanılmaz |
| V-012 | Çocuk hero'daki “bilimsel veriler” ifadesinin dayanağı | Nötr fallback kullanılır |
| V-013 | Medikal sınır/yönlendirme metninin onayı | Tanı-adjacent FAQ ve sınır metni taslakta kalır |
| V-014 | Karşıyaka ekibinin resmî unvanları/yetkinlikleri | Unvan/uzmanlık kanıtı kullanılmaz |
| V-015 | 1.200 egzersiz claim'i ve kapsamı | Sayı kullanılmaz |
| V-016 | Uygulanan envanterler ve kullanılabilecek “bilimsel/geçerli” ifade | Bu sıfatlar kullanılmaz |

### 8.3 KALDIR

| ID | Mevcut ifade/öğe | Gerekçe |
|---|---|---|
| K-001 | “Ücretsiz” | Yanlış |
| K-002 | “45 dakika” | Güncel bilgi 1 saat |
| K-003 | “16/18/34 sayfa” pazarlaması | Çıktı değişken; fayda odaklı anlatılacak |
| K-004 | Adult/Performance/Senior ve çocuk program kartları | Kullanıcı kararı; ürün kataloğu yaklaşımı kaldırıldı |
| K-005 | 4.6, %92, %93, 48.000, 160.000 | Çelişkili/doğrulanmamış ve mevcut rewrite için gereksiz |
| K-006 | Harvard/Stanford metodolojisi | Belge olmadan yayınlanamaz |
| K-007 | “Kalıcı gelişim”, “%100”, garanti dili | Sonuç garantisi |
| K-008 | “Kök nedeni bulur”, “engel tespit eder”, “sorunun kaynağı” kesinliği | Tanı/kausal kesinlik riski |
| K-009 | Dönen AI testimonial içeriği, AI avatar, temsili ekip görseli | Yalnızca içerik/asset değiştirilir; testimonial bölümünün yapısı korunur |
| K-010 | Yetişkin sayfasındaki veli referansı | Kitle sızıntısı |
| K-011 | Tekil zıplayan WhatsApp balonu | Formla eşit öncelik kararına aykırı |
| K-012 | Çalışmayan newsletter ve sosyal `#` linkleri | Güven/işlev sorunu |

## 9. SEO araştırmasına devir

Bu belge arama talebini kanıtlamaz. Aşağıdakiler yalnızca araştırma başlangıç hipotezidir:

**Hedef domain:** `https://karsiyaka.brainfit.com.tr/`  
**Coğrafya:** Karşıyaka birincil, İzmir ikincil  
**Sayfa ağırlığı:** Çocuk `%50`, yetişkin `%50`  
**Tanı terimleri:** Keşif/arama dili analizi; hedef landing-page konumlandırması değil

### 9.1 Sayfa rol hipotezleri

| URL | Birincil rol | İkincil temalar | Sayfa dışı / kaçınılacak |
|---|---|---|---|
| `/` | Ebeveynin çocuk odaklı bilişsel değerlendirme/destek karar sayfası | Sınav performansı, ödeve başlama, davranış/uyum, dikkat, Zihin Check-Up | Tanı ansiklopedisi, ilaç alternatifi, dört ayrı hastalık landing page'i |
| `/yetiskinler` | Yetişkin bilişsel değerlendirme ve zihinsel yorgunluk/hafıza karar sayfası | Hafıza endişesi, sınav/öğrenme, iş performansı | Alzheimer taraması, tıbbi test, dört ayrı mini landing page |

### 9.2 İlk üç seed kavramı — HİPOTEZ

1. `zihin check up Karşıyaka`
2. `çocuk dikkat öğrenme desteği Karşıyaka`
3. `yetişkin odak hafıza desteği Karşıyaka`

Bu ifadelerin hacmi, rekabeti veya kullanıcı dili olduğu iddia edilmez. SerpLab araştırması exact phrasing'i doğrulamak/değiştirmek içindir.

### 9.3 Araştırmadan önce gerekenler

1. Proje domaini — **TAMAM:** `https://karsiyaka.brainfit.com.tr/`.
2. Hedef pazar — **TAMAM:** Türkçe / Türkiye; Karşıyaka birincil, İzmir ikincil.
3. Sayfa ağırlığı — **TAMAM:** Çocuk ve yetişkin eşit.
4. Tanı/hastalık terimlerinin araştırma sınırı — **TAMAM:** yalnızca keşif ve kullanıcı dili.
5. SerpLab `preview/status` — goal başladıktan sonraki ilk maliyetsiz kontrol.
6. CLI exit code `2` verirse planned fresh calls + kalan bütçe + rezerv kullanıcıya gösterilir; açık onay olmadan çalıştırılmaz.

WhatsApp, telefon, açık adres, KVKK ve gerçek testimonial içerikleri SEO araştırmasını başlatmak için bloklayıcı değildir; nihai copy ve yayın öncesi çözülür.

### 9.4 Araştırmadan sonra üretilecek copy deck

Her bölüm için ayrı satır:

- URL ve section ID
- Arama niyeti / kullanıcı sorusu
- Mevcut metin
- Kanıt/evidence hedefi
- Önerilen nihai metin
- Kullanılan ana/yardımcı tema
- Görsel asset ID
- CTA
- İddia ledger bağlantısı
- Mobil karakter/kelime sayısı
- Gerekçe

## 10. Rewrite öncesi kontrol listesi

- [ ] İki sayfanın hedef sıra ve bölüm sahipliği onaylandı.
- [ ] Hero görsel/layout kilidi korunuyor; bilinen yanlışlar kopyada düzeltiliyor.
- [ ] Program bölümleri hedef mimaride yok.
- [ ] Her doğrulanmamış gerçek `[[DOĞRULANACAK:ID]]` ile tutuluyor.
- [ ] Çocuk cümlelerinin her biri yalnızca bir bölüme ait.
- [ ] Çocuk navigatorında Sınav, Ödev, Davranış/Uyum ve Dikkat birlikte görünür; sınav için ayrı section yok.
- [ ] Çocuk sayfasında bağımsız “BrainFit nedir?” sectionı yok; gerekli açıklama Check-Up girişinde.
- [ ] Testimonial bölümleri iki sayfada da sayfa mimarisinde korunuyor.
- [ ] Geçici testimonial içerikleri kullanıcı tarafından sağlanan gerçek metinlerle değiştirilmeden nihai kabul edilmiyor.
- [ ] Aynı ortak `BlogSection` iki sayfada da yer alıyor; blog mimarisi, içeriği ve tasarımı değiştirilmiyor.
- [ ] Yetişkin ilk görünümünde yalnızca iki ana bağlam var; diğer ikisi progressive disclosure.
- [ ] Çocuk ve yetişkin tanı sınırları recognition alanına yakın.
- [ ] Selector seçimleri otomatik gönderilmiyor.
- [ ] WhatsApp mesajları generic ve kitleye özel.
- [ ] Form/WhatsApp eşit öncelikli.
- [ ] Görsel asset ID'leri görsel dokümanıyla eşleşiyor.
- [ ] Etkileşimli alanlar hover olmadan da anlaşılır; seçili/açık durum yalnızca renkle anlatılmıyor.
- [ ] Hareket sistemi `prefers-reduced-motion` ve mobil performans bütçesine uyuyor.
- [ ] SEO başlıkları, metadata ve exact keywords SerpLab öncesinde kesinleştirilmiyor.

## 11. Yayın öncesi sert kapılar

- [ ] Render edilmiş içerikte sıfır çözülmemiş `DOĞRULANACAK` tokenı var.
- [ ] KVKK/aydınlatma metni onaylanmadan form canlı değil.
- [ ] WhatsApp numarası doğrulanmadan CTA canlı değil.
- [ ] Güncel adres/telefon doğrulanmadan local schema/footer yayınlanmıyor.
- [ ] `ücretsiz`, `45 dakika`, `16 sayfa`, `18 sayfa`, `34 sayfa` eski pazarlama ifadeleri yok.
- [ ] `4.6`, `%92`, `%93`, `48.000`, `160.000`, `Harvard`, `Stanford` eski iddiaları yok.
- [ ] Tanı, tedavi, ilaç alternatifi, kök neden ve sonuç garantisi dili yok.
- [ ] Bilişsel Profil tam beş kümeyi gösteriyor; fake skor/bar yok.
- [ ] Yetişkin sayfasında veli referansı yok.
- [ ] Stok/AI testimonial veya ekip görseli yok.
- [ ] Hero H1/görsel yönleri değişmedi; doğruluk düzeltmeleri uygulandı.
- [ ] Mobilde WhatsApp ve form eşit; doğrudan arama ikincil.
- [ ] 360, 390 ve 430 px genişliklerde metin, görsel ve CTA QA'sı yapıldı.
- [ ] 360, 390 ve 430 px genişliklerde navigator, accordion, profil etkileşimi ve reduced-motion QA'sı yapıldı.
