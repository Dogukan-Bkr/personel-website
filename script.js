document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 }); // Görünürlük %10 olduğunda çalışacak

  fadeElements.forEach(el => observer.observe(el));

  // Dil Seçici
  const langSelector = document.getElementById("langSelector");
  langSelector.addEventListener("click", () => {
    const currentLang = langSelector.textContent.trim();
    if (currentLang === "TR") {
      langSelector.textContent = "EN"; // TR'den EN'ye geçiş

      // Başlık ve Açıklama - İngilizce
      document.querySelector("#hero h1").textContent = "Hi, I'm Doğukan Bekaroğlu";
      document.querySelector("#hero p").textContent = "Computer Engineer";

      document.querySelector("#about h2").textContent = "About";
      document.querySelector("#about p").textContent = "I am a Computer Engineering graduate with experience in various programming languages including C, C++, C#, HTML, CSS, and SQL. During my university years, I developed several web projects using the MVC architecture and worked on robot control systems based on Flutter and Arduino. I completed an internship at Istanbul Metropolitan Municipality, where I gained foundational knowledge in big data analysis, data warehouse management, and ETL tools. At Zeytinburnu Municipality, I developed small-scale web applications using PHP, jQuery, and Bootstrap. Currently, I’m actively focused on game development, working with Unity and C#, while continuously improving myself by following new technologies closely.";

      document.querySelector("#projects h2").textContent = "Projects";

      document.querySelector("#featured h3").textContent = "The Brown Hood";
      document.querySelector("#project1").textContent = "Unity and C# were used to develop this comprehensive 2D platform game from scratch. Core mechanics such as moving forward, backward, jumping, double jumping, dashing, climbing, and attack combinations provide the player with a wide range of movement freedom.";
      document.querySelector("#project2").textContent = "AI algorithms for different enemy types (spider, bat, pig, etc.) were developed, and unique movement and interaction states were defined for each. Health, item, and weapon UI systems were integrated into the game mechanics to enhance the player experience.";
      document.querySelector("#project3").textContent = "An in-game store (blacksmith) system was created, where players can purchase items using coins or ads. Interactive game elements such as breakable crates, collectible objects, and health tents were introduced to allow more interaction in the game world.";
      document.querySelector("#project4").textContent = "A total of three levels were designed, each equipped with its own music and visuals. Checkpoints and death mechanics were integrated to create a more dynamic player experience during level transitions.";
      document.querySelector("#project5").textContent = "The sound design of the game was given special attention, with music and effects credited in the credit scene. Transition effects, fade animations, and general UX improvements were implemented using DOTween, enhancing the visual and auditory experience.";
      document.querySelector("#project6").textContent = "The game is being prepared for release on the Play Store and is currently in closed beta testing.";

      // Navbar - İngilizce
      document.querySelector(".navbar-nav .nav-item:nth-child(1) a").textContent = "About";
      document.querySelector(".navbar-nav .nav-item:nth-child(2) a").textContent = "Projects";
      document.querySelector(".navbar-nav .nav-item:nth-child(3) a").textContent = "The Brown Hood";
    } else {
      langSelector.textContent = "TR"; // EN'den TR'ye geçiş

      // Başlık ve Açıklama - Türkçe
      document.querySelector("#hero h1").textContent = "Merhaba, ben Doğukan Bekaroğlu";
      document.querySelector("#hero p").textContent = "Bilgisayar Mühendisi";

      document.querySelector("#about h2").textContent = "Hakkımda";
      document.querySelector("#about p").textContent = "Bilgisayar Mühendisliği mezunuyum. C, C++, C#, HTML, CSS ve SQL gibi çeşitli programlama dillerinde eğitim aldım. Üniversite yıllarımda MVC yapısıyla çalışan web projeleri geliştirdim ve Flutter ile Arduino tabanlı robot kontrol sistemleri üzerinde çalıştım. İstanbul Büyükşehir Belediyesi’nde büyük veri analizi ve veri ambarı yönetimi konularında staj yaparak ETL süreçleri ve ilgili araçlar hakkında temel bilgi edindim. Zeytinburnu Belediyesi’nde ise PHP, jQuery ve Bootstrap kullanarak küçük ölçekli web uygulamaları geliştirdim. Şu anda aktif olarak oyun geliştirmeye odaklanıyor, Unity ve C# üzerine çalışmalar yapıyor ve yeni teknolojileri yakından takip ederek kendimi sürekli geliştiriyorum.";

      document.querySelector("#projects h2").textContent = "Projeler";

      document.querySelector("#featured h3").textContent = "The Brown Hood";
      document.querySelector("#project1").textContent = "Unity ve C# kullanarak sıfırdan kapsamlı bir 2D platform oyunu geliştirdim. Oyunun temel mekanikleri arasında ileri, geri gitme, zıplama, çift zıplama, dash, tırmanma ve saldırı kombinasyonları yer alıyor. Bu mekanikler, oyuncuya zengin bir hareket özgürlüğü sunuyor.";
      document.querySelector("#project2").textContent = "Farklı düşman türleri (örümcek, yarasa, domuz gibi) için AI algoritmaları geliştirildi ve her bir düşman türüne özgü hareket ve etkileşim durumu tanımlandı. Ayrıca, oyuncunun deneyimini zenginleştiren can, eşya, silah UI sistemleri oyun mekaniğiyle entegre edildi.";
      document.querySelector("#project3").textContent = "Oyun içi bir mağaza (blacksmith) sistemi oluşturuldu. Bu mağazadan coin veya reklam karşılığında ürün alınabiliyor. Oyunun etkileşimli öğeleri arasında kırılabilir kutular, toplanabilir nesneler ve sağlık çadırları gibi unsurlar yer almakta. Bu öğeler, oyuncunun oyun dünyasında daha fazla etkileşimde bulunmasına olanak tanıyor.";
      document.querySelector("#project4").textContent = "Toplamda üç farklı seviye tasarlandı ve her biri kendine özgü müzikler ve görsellerle donatıldı. Seviye geçişlerinde checkpoint ve ölüm mantığı entegre edilerek, oyuncu deneyimi daha dinamik hale getirildi.";
      document.querySelector("#project5").textContent = "Oyunun ses tasarımı da önemsenmiş olup, tüm ses kaynakları için müzik ve efektlerin credit sahnesinde belirtilmesi sağlanmıştır. DOTween kullanılarak geçiş efektleri, fade animasyonları ve genel kullanıcı deneyimi iyileştirmeleri yapıldı. Bu sayede oyun, görsel ve işitsel açıdan daha zengin bir deneyim sunuyor.";
      document.querySelector("#project6").textContent = "Oyun, Play Store'da yayımlanmak üzere hazırlanıyor. Henüz kapalı test aşamasında.";

      // Navbar - Türkçe
      document.querySelector(".navbar-nav .nav-item:nth-child(1) a").textContent = "Hakkımda";
      document.querySelector(".navbar-nav .nav-item:nth-child(2) a").textContent = "Projeler";
      document.querySelector(".navbar-nav .nav-item:nth-child(3) a").textContent = "The Brown Hood";
    }
  });
});
