import React from "react";
import "./homePage.css";
import { Outlet, Link, useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();

  // Alt sayfalara geçildiğinde HomePage içeriğini gizlemek için bir koşul ekleyin.
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <nav className="header-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Media">Media</Link>
          </li>
          <li>
            <Link to="/Weather">Weather</Link>
          </li>
        </ul>
      </nav>
      {isHomePage && (
        <div>
          <div className="header">
            <h1>HABER VE HAVA DURUMU AKIŞLARI</h1>
          </div>
          <div className="card">
            <h2>Hava Durumu</h2>
            <p>
              Hava Durumu Uygulaması - Hava Durumunu Anında Öğrenin! Hava Durumu
              Uygulamamız ile dünya genelindeki herhangi bir şehrin hava durumu
              bilgilerini anında öğrenin. Sadece şehir adını girin ve güncel
              hava durumu verilerine ulaşın. Hava sıcaklığı, hava durumu durumu
              ve hissedilen sıcaklık gibi önemli bilgilere kolayca
              erişebilirsiniz. Ana Özellikler: Şehir Seçme: İstediğiniz herhangi
              bir şehrin hava durumunu öğrenmek için şehir adını girin. Güncel
              Bilgiler: Uygulama, hava durumu verilerini düzenli olarak
              günceller, böylece her zaman en yeni bilgilere erişebilirsiniz.
              Hava Durumu Durumu: Hava durumu durumu (örneğin, güneşli,
              yağmurlu, karlı) hakkında bilgi edinin. Hissedilen Sıcaklık: Hava
              koşulları, rüzgar hızı vb. dikkate alınarak hesaplanan hissedilen
              sıcaklığı öğrenin. Dil Seçeneği: İstediğiniz dilde hava durumu
              bilgilerini alabilirsiniz. Kolay kullanımı ve güncel verileriyle
              Hava Durumu Uygulamamız, dışarı çıkmadan önce hava koşullarını
              kontrol etmek isteyen herkes için mükemmel bir yardımcıdır. Hemen
              kullanmaya başlayın ve herhangi bir şehrin hava durumunu öğrenin!
            </p>
          </div>
          <div className="card">
            <h2>Haber Akışı</h2>
            <p>
              Haber Sitesi - Son Haberler ve Güncel Bilgilere Erişim! Haber
              Sitesi'miz, dünyanın dört bir yanından son haberleri ve güncel
              bilgileri sunan bir haber platformudur. Sizlere en son haberlere,
              makalelere ve raporlara kolayca ulaşma imkanı sağlar. Güncel
              olayları takip etmek, derinlemesine bilgi edinmek ve dünyanın dört
              bir yanındaki gelişmeleri izlemek için haber sitesini kullanın.
              Ana Özellikler: Son Haberler: En son olayları ve güncel haberleri
              kolayca görüntüleyin. Çeşitli Kategoriler: Spor, politika,
              teknoloji, eğlence ve daha birçok kategori arasından seçim yapın.
              Derinlemesine Makaleler: Detaylı haber makaleleri ve analizleriyle
              olayları daha iyi anlayın. Görsel İçerik: Fotoğraf galerileri ve
              videolar aracılığıyla olayları daha yakından inceleyin. Anlık
              Bildirimler: Önemli haberler ve güncellemeler hakkında anında
              bildirimler alın. Haber Sitesi'miz, haberleri takip etmek ve
              güncel bilgilere kolayca erişmek isteyen herkes için mükemmel bir
              kaynaktır. Sadece birkaç tıklama ile dünyadaki önemli olayları
              takip edebilirsiniz. Hemen haberlerimize göz atın, en son
              gelişmeleri öğrenin ve dünyadaki olaylara daha yakından bakın!
            </p>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default HomePage;
