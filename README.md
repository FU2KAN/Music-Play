 🎵  Music-Play & Visuals - React Müzik Dinleme Uygulaması 


Uygulamanın ana ekran görüntüsü 

![Adsız](https://github.com/user-attachments/assets/bf6b7248-b604-4be1-bbed-36ded0ceabc2)



Uygulamanın video izleme ekran görüntüsü: YouTube video oynatıcı ve şarkı listesi

![Adsızz](https://github.com/user-attachments/assets/da10d37b-481c-45b3-b948-9c6f78236ca9)


React, Express ve Tailwind CSS kullanarak geliştirilmiş, interaktif bir müzik çalar uygulamasıdır. Kullanıcıların şarkı dinlemesini sağlarken, aynı zamanda dinledikleri şarkının görsel bir temsilini (dönen plak) veya YouTube videosunu izleme seçenekleri sunar.


🚀 Proje Hakkında
Merhaba Bu projem, yani Music-Play & Visuals, aslında benim standart müzik çalar uygulamalarına farklı bir bakış açısıyla yaklaşma denemem oldu. Amacım, sadece şarkı dinlemekle kalmayıp, bu deneyime hem nostaljik hem de modern bir hava katmaktı. Bunun için React (frontend), Express.js (backend) ve Tailwind CSS gibi güncel teknolojileri kullandım. YouTube Data API v3 ile iletişim kurmak için de Axios'tan faydalandım. Projemde, dinlediğiniz şarkının albüm kapağını dönen bir plak görseliyle sunarak o eski plak hissini yakalamak istedim. İsterseniz sadece dinleyebilir, isterseniz de "Dinle" ve "İzle" butonları sayesinde ilgili şarkının YouTube videosunu direkt uygulama içinde izleyerek dinleme deneyiminizi zenginleştirebilirsiniz. Kısacası, bu projede hem kendime özgü bir şeyler yapmak hem de modern web geliştirme yeteneklerimi sergilemek istedim.

✨ Temel Özellikler
Şarkı Arama: İstediğiniz şarkıları kolayca arayabilme.
İnteraktif Oynatma Kontrolleri: Şarkıyı oynatma, duraklatma, ileri/geri sarma ve ses seviyesini ayarlama.
Dönen Plak Görseli: Dinlenen şarkının albüm kapağını veya ilgili görselini dönen bir plak formatında dinamik olarak gösterme.
"Dinle" ve "İzle" Modları: Kullanıcının, şarkının sadece sesini dinlemesi veya YouTube V3 API entegrasyonu sayesinde ilgili şarkının videosunu doğrudan uygulama içinde izlemesi arasında geçiş yapabilmesi.
Dinamik Çalma Listesi: Arama sonuçlarını liste halinde görüntüleme ve hızlı erişim.
⚙️ Kurulum ve Çalıştırma
Bu projeyi yerel geliştirme ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

Gereksinimler
Node.js (Tercihen en son LTS sürümü)
npm (Node.js ile birlikte gelir) veya Yarn
YouTube Data API v3 Anahtarı
Bu uygulamanın düzgün çalışabilmesi ve YouTube'dan veri çekebilmesi için bir YouTube Data API v3 Anahtarı'na ihtiyacınız vardır.

Google Cloud Console adresine gidin.
Yeni bir proje oluşturun veya mevcut bir projeyi seçin.
"APIs & Services" (API'ler ve Hizmetler) > "Library" (Kütüphane) bölümüne gidin.
"YouTube Data API v3" araması yapın ve etkinleştirin.
"Credentials" (Kimlik Bilgileri) bölümüne gidin ve bir API anahtarı oluşturun.
Oluşturduğunuz API anahtarını güvenli bir şekilde saklayın.
Kurulum Adımları
Depoyu Klonlayın:

Bash

git clone https://github.com/FU2KAN/Music-Play.git # Depo adının "Music-Play" olduğunu varsaydım.
cd Music-Play
(Music-Play yerine, GitHub'da oluşturduğun deponun tam adını kontrol et.)

Bağımlılıkları Yükleyin:
Proje hem bir frontend (React) hem de bir backend (Express) kısmından oluştuğu için, her iki dizinde de bağımlılıkları yüklemeniz gerekmektedir.

Frontend için:
Bash

cd frontend # veya React projenizin olduğu dizinin adı
npm install # veya yarn install
Backend için:
Bash

cd ../backend # veya Express projenizin olduğu dizinin adı (bir üst dizinden)
npm install # veya yarn install
Ortam Değişkenlerini Ayarlayın:
Her iki dizinde de (frontend ve backend) .env adında yeni bir dosya oluşturmanız gerekmektedir. Bu dosyaların içine YouTube API anahtarınızı ekleyin.

frontend/.env dosyasına:
REACT_APP_YOUTUBE_API_KEY=API_ANAHTARINIZ_BURAYA
backend/.env dosyasına:
YOUTUBE_API_KEY=API_ANAHTARINIZ_BURAYA
ÖNEMLİ: API_ANAHTARINIZ_BURAYA kısmını kendi edindiğiniz YouTube Data API v3 anahtarınızla değiştirin. .env dosyalarını .gitignore'a eklediğinizden emin olun ki API anahtarınız GitHub'a yüklenmesin.
Uygulamayı Başlatın:
Şimdi her iki tarafı da ayrı ayrı başlatabilirsiniz:

Backend'i Başlatın: (Backend dizininde olduğunuzdan emin olun)

Bash

npm start
Bu, genellikle backend sunucusunu http://localhost:5000 gibi bir adreste başlatır.

Frontend'i Başlatın: (Frontend dizininde olduğunuzdan emin olun)

Bash

npm start
Bu, React geliştirme sunucusunu genellikle http://localhost:3000 adresinde başlatır ve tarayıcınızı otomatik olarak açar.

🚀 Kullanım
Uygulama başlatıldıktan sonra, tarayıcınızda otomatik olarak açılacaktır (http://localhost:3000).

Şarkı Arama: Üst kısımdaki arama çubuğunu kullanarak istediğiniz şarkıları veya sanatçıları arayabilirsiniz.
Şarkı Seçimi: Arama sonuçları sağdaki listede görünecektir. Dinlemek istediğiniz şarkıya tıklayarak seçin.
Oynatma Kontrolleri: Uygulamanın alt kısmında yer alan kontrollerle şarkıyı oynatabilir, duraklatabilir, ileri/geri sarabilir ve ses seviyesini ayarlayabilirsiniz.
Mod Seçimi ("Dinle" / "İzle"):
Varsayılan olarak "Dinle" modunda, dinlediğiniz şarkının albüm kapağı veya ilgili görseli dönen bir plak olarak gösterilecektir.
"İzle" butonuna tıklayarak, seçili şarkının YouTube videosunu uygulama içinde izleyebilirsiniz.
🛠️ Kullanılan Teknolojiler
Frontend:
React.js - Kullanıcı arayüzü oluşturmak için JavaScript kütüphanesi.
Tailwind CSS - Hızlı ve özelleştirilebilir UI gelişimi için utility-first CSS framework'ü.
Axios - Frontend'den backend API çağrıları yapmak için HTTP istemcisi.
Backend:
Node.js - Sunucu tarafı uygulamaları çalıştırmak için JavaScript çalışma zamanı ortamı.
Express.js - Backend API'si oluşturmak için hızlı ve minimalist web framework'ü.
Axios - Backend'den YouTube Data API'ye HTTP istekleri yapmak için.
API:
YouTube Data API v3 - Müzik arama ve video verilerini çekmek için.
Paket Yöneticisi:
npm (Node Package Manager)


📄 Lisans
Bu proje, MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakınız.

MIT License

Copyright (c) 2024 Furkan Canbaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ANCIENT ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


📧 İletişim
Ad: Furkan Canbaz
GitHub: https://github.com/FU2KAN
LinkedIn: https://www.linkedin.com/in/furkan-canbaz-21b64b228/
