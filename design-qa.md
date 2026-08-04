# Design QA — ConfidenceSection

## Karşılaştırma hedefi

- Kaynak görsel: `/Users/cenkerkaragoz/.codex/generated_images/019fbd12-0085-7940-a3cd-1391a4a67d1a/exec-20fd939f-d609-4cda-8ff6-fdcafecfaee7.png`
- Kaynak piksel boyutu: `2052 × 766`
- Uygulama: `src/components/ConfidenceSection.tsx`, `#reframe`
- Masaüstü ekran görüntüsü: `artifacts/design-qa/confidence/confidence-desktop.png`
- Mobil ekran görüntüsü: `artifacts/design-qa/confidence/confidence-mobile.png`
- Yan yana masaüstü karşılaştırması: `artifacts/design-qa/confidence/desktop-comparison.png`
- Masaüstü viewport: `1716 × 900` CSS px; sayfa client genişliği `1701` CSS px; ekran görüntüsü `1701 × 545`; `deviceScaleFactor: 1`
- Mobil viewport: `390 × 844` CSS px; sayfa client genişliği `375` CSS px; ekran görüntüsü `375 × 688`; `deviceScaleFactor: 1`
- Durum: Bölüm `#reframe` konumuna kaydırılmış, CTA görünür ve etkin.

## Tam görünüm karşılaştırması

`desktop-comparison.png` içinde kaynak solda, uygulama sağda eşit genişliğe ölçeklenerek ve beyaz alanda dikey ortalanarak karşılaştırıldı. Uygulama; asimetrik iki kolonlu hiyerarşiyi, mercan ayırıcıyı, iki satırlık ana mesajı, üç güven ifadesini ve tek CTA yapısını koruyor. Uygulamanın yuvarlatılmış kâğıt yüzeyi, mevcut BrainFit tasarım sistemine uyum sağlamak için kaynak görseldeki daha düz banda göre bilinçli bir ürün uyarlamasıdır.

## Odaklı karşılaştırma kanıtı

- Masaüstü ham yakalama, başlık satır kırılımını, sağ kolon genişliğini, CTA ölçüsünü ve ayırıcı hizasını doğrulamak için ayrıca açıldı.
- Mobil ham yakalama, `390 px` viewportta kolonların sıralı akışa dönmesini, dikey ayırıcının üst çizgiye dönüşmesini, CTA'nın sabit mobil iletişim çubuğunun arkasında kalmamasını ve yatay taşma olmamasını doğrulamak için kullanıldı.
- Görselde özel fotoğraf, illüstrasyon veya logo varlığı bulunmadığından ek varlık kırpma karşılaştırması gerekmedi.

## Gerekli fidelity yüzeyleri

- Fontlar ve tipografi: Mevcut Titillium Web display ve Manrope gövde sistemi kullanıldı. Ana başlık masaüstünde kaynakla aynı iki satırlı hiyerarşiye, mobilde okunabilir `36px` boyuta sahip.
- Boşluk ve yerleşim ritmi: Masaüstünde `1440px` maksimum bant genişliği ve `1.15fr / 0.85fr` kolon oranı kullanıldı. Mobilde içerik tek kolona dönüşüyor; `375px` client genişliğinde yatay taşma `0px`.
- Renkler ve tokenlar: `#FAF9F5`, `#F4F1EB`, `#241D18`, `#E86F5B` ve `#F5927E` mevcut BrainFit paletinden kullanıldı. Gradient eklenmedi.
- Görsel/varlık kalitesi: Kaynak bölüm yalnızca düzen, metin ve standart CTA oku içeriyor. Ok için mevcut `lucide-react` kütüphanesindeki `ArrowUpRight` kullanıldı; özel SVG/CSS çizimi veya raster placeholder eklenmedi.
- Metin ve içerik: Seçilen varyasyondaki Türkçe başlık, açıklama, üç güven ifadesi ve CTA metni eksiksiz uygulandı.

## Karşılaştırma geçmişi

1. İlk masaüstü yakalamada sağdaki güven ifadelerinin üçüncüsü alt satıra düşüyordu (P2). Bant `1440px` maksimum genişliğe çıkarıldı, kolon oranı ve iç boşluklar dengelendi. Son yakalamada üç ifade aynı satırda ve taşmasız.
2. İlk mobil yakalamada bölüm CTA'sı sabit mobil iletişim çubuğunun altında kalıyordu (P1). Mobil başlık, boşluk ve dikey ritim sıkılaştırıldı. Son yakalamada CTA `52px` yüksekliğinde, tamamen görünür ve sabit çubuğun üstünde.
3. Ara masaüstü yakalamada başlık üç satıra bölünerek kaynak hiyerarşiden uzaklaşıyordu (P2). Sol kolon genişletildi ve masaüstü display boyutu `45.6px` seviyesine dengelenerek kaynakla aynı iki satırlı yapı elde edildi.

## Etkileşim ve konsol kontrolü

- `Ücretsiz Ön Görüşme Oluştur` CTA'sı tıklandı; URL `#checkup-form` durumuna geçti ve hedef form alanına yönlendirme çalıştı.
- Temiz tarayıcı oturumunda konsol kontrol edildi: `0` hata, `0` uyarı.
- Mobil CTA hedefi `287 × 52px`; minimum dokunma hedefini karşılıyor.

## Bulgular

- P0/P1/P2 seviyesinde açık bulgu kalmadı.
- P3, kabul edilen ürün uyarlaması: Kaynak görselin daha düz geniş bandı yerine BrainFit'in mevcut yuvarlatılmış yüzey dili korundu.

## Uygulama kontrol listesi

- [x] Seçilen varyasyonun bilgi hiyerarşisi uygulandı.
- [x] CTA `#checkup-form` hedefinde çalışıyor.
- [x] Masaüstü ve mobil görsel kanıt alındı.
- [x] Mobil yatay taşma yok.
- [x] Güncel tarayıcı oturumunda konsol hatası yok.
- [x] Hedefli ESLint kontrolü geçti.

final result: passed

---

# Design QA — AudienceSection / Yetişkin / Varyasyon 1

## Karşılaştırma hedefi

- Kaynak görsel: `artifacts/design-qa/adult-audience/reference-option-1.png`
- Kaynak piksel boyutu: `1487 × 1058`
- Uygulama: `src/components/AdultLandingPage.tsx`, `AudienceSection`, `#help`
- Hedef rota: `/yetiskinler`
- Planlanan masaüstü viewport: `1440 × 1024` CSS px
- Planlanan mobil viewport: `390 × 844` CSS px
- Durum: Seçilen statik üç kartlı düzen uygulandı; yerleşik tarayıcı yerel önizlemeye erişemediği için güncel uygulama ekran görüntüsü üretilemedi.

## Kaynak ve uygulama kapsamı

- Kaynak varyasyonun bilgi hiyerarşisi korundu: üst rozet, başlık, kısa giriş, eşit ağırlıklı üç kart, renk kodlu ikonlar, dört maddelik listeler, açıklama yüzeyleri ve merkezî CTA.
- Metinler Türkçe doğal akışla düzenlendi; kart başlıkları `Zihinsel yorgunluk`, `Günlük planlama` ve `Zihnimi aktif tutmak istiyorum` olarak sabitlendi.
- CTA metni `Bunlardan birkaçını ben de yaşıyorum`; hedefi mevcut `#about` bölümü.
- Masaüstünde üç kolon, küçük ekranlarda tek kolon kullanılacak şekilde responsive yapı kuruldu.

## Statik doğrulama

- `npm run build`: geçti; `/yetiskinler` rotası başarıyla üretildi.
- `npm run lint`: `0` hata; proje içindeki mevcut `.claude/skills/impeccable/...` dosyalarından gelen ve bu değişiklikle ilgisiz `132` uyarı.
- `git diff --check`: geçti.
- Bölüm kapsamındaki yasaklı sağlık dili kontrolü: eşleşme yok.
- CTA hedefi ve `#about` bağlantısı kaynak kodda doğrulandı.

## Görsel ve etkileşim doğrulama engeli

- Yerleşik uygulama tarayıcısı `terminal.local` adresini çözemedi.
- `0.0.0.0:4173` üzerinde üretim sunucusu denendi; özel ağ adresine tarayıcı erişimi politika/bağlantı katmanında engellendi.
- Bu nedenle masaüstü ve mobil uygulama yakalamaları, yan yana karşılaştırma, taşma ölçümü, CTA tıklama testi ve konsol kontrolü tamamlanamadı.
- Kullanıcının açık izni olmadan bağımsız Playwright CLI/MCP yoluna geçilmedi.

## Bulgular

- Kod, içerik ve derleme açısından açık P0/P1 bulgu yok.
- Görsel uygunluk ve responsive davranış ekran görüntüsüyle doğrulanamadığı için kabul testi tamamlanmış sayılmıyor.

final result: blocked

---

# Design QA — PostPlanSupportSection / Basamaklı takip düzeni

## Karşılaştırma hedefi

- Kaynak görsel: `/var/folders/mr/06sd3f393j967lhn7_h2r9840000gn/T/codex-clipboard-a912e30e-bcaf-4cc4-bd58-918a174d9914.png`
- Kaynak piksel boyutu: `1725 × 912`
- Uygulama: `src/components/PostPlanSupportSection.tsx`, `#post-plan-support-title-children`
- Son masaüstü yakalama: `artifacts/design-qa/post-plan-support/desktop-final.png` (`1725 × 920` px)
- Son mobil üst akış yakalaması: `artifacts/design-qa/post-plan-support/mobile-top-final.png` (`390 × 844` px)
- Son mobil alt akış ve CTA yakalaması: `artifacts/design-qa/post-plan-support/mobile-final.png` (`390 × 844` px)
- Yan yana masaüstü karşılaştırması: `artifacts/design-qa/post-plan-support/desktop-comparison-final.png`
- Masaüstü viewport: `1725 × 920` CSS px; `deviceScaleFactor: 1`; karşılaştırmada uygulama görüntüsü kaynak yüksekliğine uygun olarak `1725 × 912` kırpıldı.
- Mobil viewport: `390 × 844` CSS px; `deviceScaleFactor: 1`.
- Durum: Çocuk sayfasındaki bölüm görünür; masaüstünde üç basamak ve CTA aynı kadrajda, mobilde üst ve alt akış ayrı kanıtlarla görünür.

## Tam görünüm karşılaştırması

Kaynak ve uygulama tek bir yan yana karşılaştırma görselinde incelendi. Son uygulama; solda aynı tabana oturan üç yükselen blok, `01–03` sırası, Lucide ikonları ve mercan takip bandını; sağda rozet, iki satırlı başlık, kısa açıklama, üç ayraçlı satır ve tek CTA hiyerarşisini koruyor. Basamak yüksekliği `500px`, görsel genişliği `735px`, içerik bandı `1560px` ve CTA genişliği `320px` ile kaynak oranlarına yaklaştırıldı.

## Odaklı karşılaştırma kanıtı

- `desktop-comparison-final.png`, basamakların yükseklik ve genişlik oranını, başlık kırılımını, satır ritmini ve CTA ölçeğini okunabilir boyutta birlikte gösteriyor.
- `mobile-top-final.png`, masaüstü basamaklarının mobilde sade takip mesajına dönüştüğünü; başlık, açıklama ve üç adımın taşmadan sıralandığını gösteriyor.
- `mobile-final.png`, `390px` viewportta CTA'nın `362 × 52px` olduğunu ve sabit mobil iletişim çubuğunun üstünde görünür kaldığını doğruluyor.
- Kaynakta fotoğraf, logo veya özel illüstrasyon bulunmadığından ek raster varlık kırpma karşılaştırması gerekmedi.

## Gerekli fidelity yüzeyleri

- Fontlar ve tipografi: Mevcut BrainFit display/gövde fontları korundu. Masaüstü başlık `60px` üst ölçeğinde iki satır; mobil başlık üç satır ve okunaklı. Basamak numaraları, etiketleri ve sağ liste ağırlıkları kaynak hiyerarşisine yaklaştırıldı.
- Boşluk ve yerleşim ritmi: `1560px` içerik bandı, iki eşit kolon, `80px` kolon aralığı ve `735px` basamak genişliği kaynak kompozisyonuna karşılık geliyor. Mobilde yatay taşma `0px`.
- Renkler ve tokenlar: BrainFit'in kırık beyaz, orman yeşili ve mercan paleti kullanıldı; gradient eklenmedi. İnce yeşil üst çizgiler ve açık mint yüzeyler kaynak görseli takip ediyor.
- Görsel/varlık kalitesi: Basamak ikonlarında mevcut `lucide-react` kütüphanesindeki `BrainCircuit`, `ChartNoAxesCombined`, `ClipboardClock` ve `HeartPulse` kullanıldı. Özel SVG, emoji veya raster placeholder eklenmedi.
- Metin ve içerik: Başlık, açıklama, üç destek adımı, sürekli takip mesajı ve CTA metni kaynakla eksiksiz eşleşiyor.

## Karşılaştırma geçmişi

1. İlk masaüstü karşılaştırmasında içerik bandı `1440px`, basamak kompozisyonu `640px` ve CTA yaklaşık `283px` kaldığı için kaynak tasarıma göre küçük görünüyordu (P2). Bant `1560px`, basamaklar `735px`, CTA `320px` yapıldı; başlık ve basamak tipografisi de kaynak ölçeğine yükseltildi. Son kanıt: `desktop-comparison-final.png`.
2. Mobil doğrulamada bölüm tek viewporttan uzun olduğu için üst başlık ve alt CTA ayrı kadrajlarla kontrol edildi. Son iki kanıtta içerik taşmıyor ve CTA sabit alt iletişim çubuğunun üstünde tamamen erişilebilir.

## Etkileşim ve konsol kontrolü

- Bölüme özel `Ücretsiz Ön Görüşme Oluştur` CTA'sı tekil locator ile tıklandı; URL `#checkup-form` durumuna geçti ve hedef form bulundu.
- Masaüstü yatay taşma: `0px`; mobil yatay taşma: `0px`.
- Tarayıcı konsolu: `0` hata, `0` uyarı.
- Hedefli ESLint ve `git diff --check` geçti.

## Bulgular

- P0/P1/P2 seviyesinde açık bulgu kalmadı.
- P3, kabul edilen ürün uyarlaması: Mobilde geniş basamak görseli yerine aynı anlamı taşıyan kompakt takip bandı kullanılıyor; bu seçim bölümün `390px` genişlikte okunabilir ve kısa kalmasını sağlıyor.

## Uygulama kontrol listesi

- [x] Seçilen üç basamaklı yapı uygulandı.
- [x] Kart görselleri mevcut icon library ile oluşturuldu.
- [x] Kaynak ve masaüstü uygulama aynı karşılaştırma görselinde incelendi.
- [x] Masaüstü ve mobil yatay taşma yok.
- [x] CTA hedefi çalışıyor ve mobilde görünür.
- [x] Hedefli ESLint kontrolü geçti.

final result: passed

---

# Design QA — CheckUpShowcaseSection / Çocuk

## Karşılaştırma hedefi

- Kaynak görsel: `/Users/cenkerkaragoz/.codex/generated_images/019fbd12-0085-7940-a3cd-1391a4a67d1a/exec-61cff654-8a6f-4464-ab38-942db91c41d2.png`
- Kaynak piksel boyutu: `1731 × 909`
- Uygulama: `src/components/CheckUpShowcaseSection.tsx`, `audience="children"`
- Son masaüstü yakalama: `artifacts/design-qa/checkup-showcase/desktop-final.png` (`1701 × 838` px)
- Son mobil yakalama: `artifacts/design-qa/checkup-showcase/mobile-375-final.png` (`360 × 1095` px)
- Tam görünüm karşılaştırması: `artifacts/design-qa/checkup-showcase/desktop-comparison-final.png`
- Klasör odaklı karşılaştırma: `artifacts/design-qa/checkup-showcase/folder-comparison-final.png`
- Masaüstü viewport: `1716 × 900` CSS px; client genişliği `1701` CSS px; `deviceScaleFactor: 1`
- Mobil viewport: `375 × 812` CSS px; scrollbar sonrası client genişliği `360` CSS px; `deviceScaleFactor: 1`
- Durum: Çocuk sayfasındaki bölüm görünür; karşılaştırma yakalamalarında yalnızca normalize etmek için sabit site navigasyonu, iletişim çubuğu ve Next.js geliştirme rozeti geçici olarak gizlendi. Normal sayfa durumu etkileşim testinde ayrıca kullanıldı.

## Tam görünüm karşılaştırması

Kaynak ve son uygulama tek bir `3402 × 909` karşılaştırma görselinde yan yana incelendi. Uygulama; sol metin/CTA ve sağ dosya-klasör kompozisyonunu, üst sağa bağlı klasör sekmesini, belge başlığını, beş sıralı maddeyi ve mercan renkli son madde hiyerarşisini koruyor. Bölüme özel `1440px` geniş kapsayıcı sayesinde klasör paneli masaüstünde `793px` genişliğe ulaşıyor ve kaynak görseldeki sağ taraf ağırlığına yaklaşıyor.

## Odaklı karşılaştırma kanıtı

`folder-comparison-final.png` kaynak klasörü ve uygulama klasörünü aynı görselde büyütülmüş olarak gösteriyor. Bağlı üst sekme, yatay ayraçlar, `01–05` sıra düzeni, mercan numaralar ve Lucide ikonları okunabilir ölçekte karşılaştırıldı. Mobil ham yakalama, sekmenin panelle bağlantısının korunduğunu ve bütün satırların `375px` viewportta taşmadan okunabildiğini doğruladı.

## Gerekli fidelity yüzeyleri

- Fontlar ve tipografi: Mevcut BrainFit display ve gövde fontları korundu. Başlık hiyerarşisi kaynakla aynı; mobilde iki satırda okunaklı. Klasör satırları site tipografi sistemine uygun daha kompakt optik ağırlıkta.
- Boşluk ve yerleşim ritmi: Masaüstünde iki kolonlu `1440px` düzen; mobilde metin, CTA ve klasör sıralı tek kolon. Klasör sekmesi her iki görünümde de panel gövdesine bağlı ve belirgin.
- Renkler ve tokenlar: Sıcak kırık beyaz yüzey, orman yeşili ikonlar ve mercan vurgu kaynağa ve BrainFit paletine uyuyor. Gradient eklenmedi.
- Görsel/varlık kalitesi: Beş madde ve belge başlığı için yalnızca mevcut `lucide-react` kütüphanesi kullanıldı; özel SVG, raster placeholder, emoji veya CSS illüstrasyonu eklenmedi.
- Metin ve içerik: Başlık, açıklama, CTA ve beş madde feedback metinleriyle eksiksiz ve doğru sırada. Çocuk branch’inde `%92` ve “1 saat” söylemi bulunmuyor.

## Karşılaştırma geçmişi

1. İlk uygulama yakalamasında genel `1220px` kapsayıcı nedeniyle klasör paneli yaklaşık `670px` genişlikte kalıyor, kaynak tasarımın sağ taraf ağırlığını yeterince taşımıyordu (P2). Bölüm `1440px` özel kapsayıcıya alındı; panel `793px` genişliğe çıktı ve satırların dikey ritmi artırıldı. Son kanıt: `desktop-comparison-final.png`.
2. Ara odaklı karşılaştırmada belge başlığı ikonu ve sıra numaraları nötr/yeşil kalmış, kaynaktaki mercan yönlendirme çizgisi zayıflamıştı (P2). Belge ikonu ile `01–05` numaraları mercana çekildi. Son kanıt: `folder-comparison-final.png` ve `mobile-375-final.png`.

## Etkileşim, responsive ve regresyon kontrolü

- CTA tıklandı; URL `#checkup-form` durumuna geçti ve hedef form alanı bulundu/görünür konuma geldi.
- `375 × 812` viewportta `scrollWidth = clientWidth = 360px`; yatay taşma `0px`. CTA `332 × 52px`.
- Yetişkin sayfası `/yetiskinler` ayrıca açıldı: eski “1 Saatte Daha Net Bir Başlangıç” başlığı ve `%92` içeriği korunuyor; yeni çocuk başlığı yetişkin branch’inde görünmüyor.
- Tarayıcı konsolu: `0` hata, `0` uyarı.
- Hedef dosyaya özel ESLint ve `git diff --check` geçti.

## Bulgular

- P0/P1/P2 seviyesinde açık bulgu kalmadı.
- P3, kabul edilen ürün uyarlaması: Kaynak mockuptaki daha büyük ikon/numara ölçeği yerine mevcut BrainFit sayfasının daha kompakt UI yoğunluğu ve kullanıcı isteği doğrultusunda Lucide çizgi ikonları korundu.

## Uygulama kontrol listesi

- [x] Seçilen varyasyonun klasör/dosya yapısı korundu.
- [x] Beş madde mevcut icon library ile uygulandı.
- [x] Masaüstü ve tam `375px` mobil kanıt alındı.
- [x] CTA hedefi çalışıyor.
- [x] Yetişkin branch regresyonu yok.
- [x] Güncel görsel karşılaştırmada P0/P1/P2 bulgu kalmadı.

final result: passed

---

# Design QA — CheckUpSection / Ortak beş adımlı süreç

## Kapsam

- Uygulama: `src/components/CheckUpSection.tsx`, `#checkup`
- Çocuk rotası: `/`
- Yetişkin rotası: `/yetiskinler`
- Amaç: Çocuk sayfasındaki beş adımlı süreci polish edip aynı DOM ve görsel yapı üzerinden yetişkin sayfasında kullanmak.
- Metin kararı: Çocuk metinleri korunuyor; yetişkin sayfasında yalnızca kişi ifadeleri yetişkine uyarlanıyor.

## Impeccable polish bulguları ve düzeltmeler

1. Kısa ve uzun kart başlıkları farklı yüksekliklerde kaldığı için açıklamalar farklı seviyelerden başlıyordu (P2). Başlıklar mobil dışında büyüyebilen ortak `min-height` satırına alındı; açıklama başlangıçları aynı satır içinde eşitlendi.
2. Kartlar stroke ve özel gölgeyi birlikte kullanıyordu (P3). Stroke kaldırıldı; tasarım sistemindeki sıcak floating-card gölgesi ve `28px` köşe yarıçapı uygulandı.
3. İkonlar metne göre büyük kalıyordu (P3). Bütün ikonlar `48px / 2.1` stroke değerinde normalize edildi; kart başlıkları beşli masaüstü düzenine uygun `22px / 1.12` ölçüsüne getirildi.
4. `640px` genişlikte beşinci kart, `768px` genişlikte son iki kart sola yığılıyordu (P2). Dört ve altı izli ara grid kullanılarak eksik son satırlar optik olarak ortalandı; `xl` genişlikte beşli sıra korundu.
5. CTA inline-flex olduğu için `mx-auto` ile ortalanmıyordu (P2). CTA gerçek bir `flex justify-center` kapsayıcısına alındı.
6. Mercan rozet/CTA ve açık renkli adım numaralarında beyaz metin kontrastı yetersizdi (P1). Metin renkleri yüzeye göre espresso veya beyaz olarak ayrıldı.

## Responsive ve hizalama kanıtı

- Test genişlikleri: `390`, `640`, `768`, `1280`, `1440` CSS px.
- Tüm genişliklerde yatay taşma: `0px`.
- `640px`: ilk dört kart iki sütunda, beşinci kart merkezde.
- `768px`: ilk üç kart üst sırada, son iki kart merkezlenmiş alt sırada.
- `1280px` ve `1440px`: beş kart `228px` genişlikte tek sırada; kart yüksekliği `360px`.
- Masaüstünde beş açıklamanın başlangıç koordinatı aynı. Tüm gerçek başlıklar ayrılan `min-height` alanına sığıyor; kesilme veya üst üste binme yok.
- CTA merkez sapması ölçüm yuvarlaması içinde `0.004px`; pratikte tam merkezde.

## Rota ve etkileşim kontrolü

- Her iki rotada `5` süreç kartı ve bölüm içinde tek `Ön Görüşme Planla` CTA'sı bulunuyor.
- Çocuk rotasındaki mevcut çocuk metni değişmedi.
- Yetişkin rotasında `çocuğun/çocuğunuz` ifadesi bulunmuyor; aynı beş adımlı yapı yetişkin zamirleriyle kullanılıyor.
- Her iki CTA tıklaması URL'yi `#checkup-form` hedefine taşıdı; hedef form sayfada tekil olarak bulundu.
- Tarayıcı konsolu: `0` hata, `0` uyarı.
- Hedefli ESLint, `git diff --check` ve `npm run build` geçti.

## Bulgular

- P0/P1/P2 seviyesinde açık bulgu kalmadı.

final result: passed
