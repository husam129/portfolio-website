/* ============================
   ✅ تفعيل الوضع الليلي / الفاتح
=============================== */
const themeIcon = document.getElementById("theme-icon");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("bx-moon", "bx-sun");
  }
});

themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.classList.replace(isDark ? "bx-moon" : "bx-sun", isDark ? "bx-sun" : "bx-moon");
});

/* ============================
   ⬆️ زر الصعود للأعلى
=============================== */
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================
   📱 زر فتح/إغلاق القائمة في الشاشات الصغيرة
=============================== */
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar.left");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

/* ============================
   ✅ تفعيل الرابط عند السحب للقسم (Smooth Scroll)
   (مبني ضمنياً عند استخدام href="#id" و scroll-behavior)
=============================== */
// تم تفعيله عبر CSS في style.css باستخدام:
// html { scroll-behavior: smooth; }
const translateBtn = document.getElementById("translate-btn");
let isArabic = false;

translateBtn.addEventListener("click", () => {
  isArabic = !isArabic;

  // تغيير اتجاه الصفحة
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.documentElement.lang = isArabic ? "ar" : "en";

  if (isArabic) {
     document.documentElement.classList.add("rtl");
    document.querySelector(".name").textContent = "حسام مقدس";
    document.querySelector(".job").textContent = "مطور واجهات أمامية";
    document.querySelector(".info-box .contact").innerHTML = `
      <li><i class="bx bx-phone"></i> +970 59 753 4955</li>
      <li><i class="bx bx-envelope"></i> hmqdas@gmail.com</li>
      <li><i class="bx bxl-twitter"></i> @husam-mqdas</li>
      <li><i class="bx bx-map"></i> غزة، فلسطين</li>
    `;

    // ✅ روابط التنقل
    document.querySelector('a[href="#home"]').textContent = "الرئيسية";
    document.querySelector('a[href="#about"]').textContent = "عني";
    document.querySelector('a[href="#services"]').textContent = "الخدمات";
    document.querySelector('a[href="#work"]').textContent = "الأعمال";
    document.querySelector('a[href="#blog"]').textContent = "مدونة";
    document.querySelector('a[href="#contact"]').textContent = "تواصل";

    // ✅ قسم عني
    document.querySelector("#about .sub-title").textContent = "عني";
    document.querySelector("#about .title").textContent = "حسام مقدس";
    document.querySelector("#about p").textContent = "أنا مطور واجهات أمامية بخبرة تتجاوز 4 سنوات. إذا كنت بحاجة إلى موقع سريع الاستجابة ومتوافق مع جميع المتصفحات — فأنا المطور المناسب لك.";

    // ✅ معلومات جانبية
    const aboutInfo = document.querySelectorAll(".about-grid p");
    aboutInfo[0].innerHTML = "<strong>تاريخ الميلاد:</strong> 24 ديسمبر 2004";
    aboutInfo[1].innerHTML = "<strong>الموقع:</strong> www.husam-mqdas.com";
    aboutInfo[2].innerHTML = "<strong>الهاتف:</strong> +970 59 753 4955";
    aboutInfo[3].innerHTML = "<strong>الدراسة:</strong> الجامعة الإسلامية بغزة";
    aboutInfo[4].innerHTML = "<strong>الدرجة العلمية:</strong> بكالوريوس";
    aboutInfo[5].innerHTML = "<strong>البريد:</strong> hmqdas@gmail.com";
    aboutInfo[6].innerHTML = "<strong>لينكد إن:</strong> @husam-mqdas";
    aboutInfo[7].innerHTML = "<strong>العمل الحر:</strong> متاح";

    // ✅ زر CV
    document.querySelector(".download-btn").textContent = "تحميل السيرة الذاتية";

    // ✅ الخدمات
    document.querySelector("#services .sub-title").textContent = "ماذا أقدم";
document.querySelector("#services .title").textContent = "الخدمات";

    const serviceCards = document.querySelectorAll(".service-card");
    const arServices = [
      ["موقع إلكتروني", "مواقع دقيقة تناسب احتياجاتك التجارية."],
      ["تحسين محركات البحث", "تعزيز ظهور موقعك باستراتيجيات فعالة."],
      ["متجر إلكتروني", "إنشاء متجر كامل وربطه بالدفع الإلكتروني."],
      ["تصميم جرافيكي", "تصميمات جذابة للويب والسوشيال ميديا."],
      ["التسويق الرقمي", "حملات مستهدفة تحقق نتائج ملموسة."],
      ["إدارة السوشيال", "إدارة المحتوى بكفاءة على جميع المنصات."]
    ];
    serviceCards.forEach((card, i) => {
      card.querySelector("h3").textContent = arServices[i][0];
      card.querySelector("p").textContent = arServices[i][1];
    });

    // ✅ الأعمال
    document.querySelector("#work .sub-title").textContent = "أعمال تم تنفيذها";
    document.querySelector("#work .title").textContent = "عرض المشاريع";

    // ✅ المدونة
    document.querySelector("#blog .sub-title").textContent = "مدونتي";
    document.querySelector("#blog .title").textContent = "آخر الأخبار";

    const blogTitles = document.querySelectorAll(".blog-post .title");
    blogTitles[0].textContent = "أعراض الإرهاق للمطورين";
    blogTitles[1].textContent = "من الكمال إلى الإيجابية";
    blogTitles[2].textContent = "مستقبل التعاون الإبداعي";
    blogTitles[3].textContent = "من الكمال إلى الإيجابية";

    // ✅ تواصل
    document.querySelector("#contact .sub-title").textContent = "تواصل معي";
    document.querySelector("#contact .title").textContent = "اتصل بي";
    document.querySelector("#contact p").textContent = "لنصنع المستقبل معاً";

    const contactForm = document.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form button");
    contactForm[0].placeholder = "الاسم";
    contactForm[1].placeholder = "البريد الإلكتروني";
    contactForm[2].placeholder = "الرسالة";
    contactForm[3].textContent = "إرسال";

    // ✅ الفوتر
    document.querySelector(".footer p").textContent = "© 2025 حسام";

    // ✅ زر اللغة
    translateBtn.textContent = "English";

  } else {
    // اللغة الإنجليزية
    location.reload(); // لإعادة تحميل الصفحة وترتيب العناصر الإنجليزية من جديد
    document.querySelector("#services .sub-title").textContent = "What I Do";
document.querySelector("#services .title").textContent = "Services";
 document.documentElement.classList.remove("rtl");
  location.reload();

  }
});
// 🔗 كل الروابط التي تشير لأقسام الصفحة (href يبدأ بـ #)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // منع السلوك الافتراضي

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // تعديل حسب ارتفاع الهيدر
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("loaded");
  // باقي كود التيم مذكور أعلاه
});
