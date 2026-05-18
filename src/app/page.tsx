"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Anasayfa",          id: "hero"},
        {
          name: "Hakkımızda",          id: "about"},
        {
          name: "Ürünlerimiz",          id: "products"},
        {
          name: "İletişim",          id: "contact"},
      ]}
      brandName="Deniz Çerçeve"
      button={{ text: "İletişime Geç", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static-grid"}}
      title="Üç Kuşaktır Sanatın Yanındayız"
      description="Tuval, şövale ve kanvas tablo imalatında Ankara'nın en kaliteli ve köklü çerçeve merkezi. Doğrudan üreticiden, yüksek kalite ve titiz işçilikle."
      buttons={[
        {
          text: "Hizmetlerimizi İncele",          href: "#products"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/no-people-empty-drawing-class-prepared-drawing-lesson-paintng-canvas-nobody-creativity-workshop-equipped-with-professional-tools-develop-artistic-students-skills_482257-41762.jpg",          imageAlt: "professional art framing shop"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/view-essentials-pottery-studio_23-2150164935.jpg",          imageAlt: "high quality canvas manufacture"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/cottagecore-aesthetic-illustrated_23-2151855285.jpg",          imageAlt: "artist workshop interior"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/flowers-stand-with-photo-frames_23-2147755102.jpg",          imageAlt: "custom canvas art"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/square-blank-frames-attached-wall-room_181624-11561.jpg",          imageAlt: "artistic workshop frames"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/eggs-paints-table-with-canvas_23-2147749341.jpg",          imageAlt: "detail of canvas frame"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Kalite ve Samimiyetin Adresi"
      description="Deniz Çerçeve olarak, yılların tecrübesiyle sanatın her alanında ihtiyaç duyduğunuz kaliteli malzemeyi ve titiz işçiliği sunuyoruz. Üç kuşaktır süregelen esnaflık anlayışımızla, her ölçüde tuval ve özel çerçeve projelerinizde yanınızdayız."
      imageSrc="http://img.b2bpic.net/free-photo/woman-holding-chair-medium-shot_23-2148966888.jpg"
      imageAlt="master artisan working on frames"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Profesyonel Tuval",          price: "İsteğe Bağlı",          variant: "Sanatçı Serisi",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-woman-posing-with-new-her-art-work_273443-2921.jpg"},
        {
          id: "p2",          name: "Ahşap Şövale",          price: "İsteğe Bağlı",          variant: "Dayanıklı Gövde",          imageSrc: "http://img.b2bpic.net/free-photo/home-interior-design-with-copy-space_23-2148786468.jpg"},
        {
          id: "p3",          name: "Özel Tasarım Çerçeve",          price: "İsteğe Bağlı",          variant: "Ahşap Çerçeve",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-frame-with-starfish-table_23-2148515056.jpg"},
        {
          id: "p4",          name: "Kanvas Tablo",          price: "İsteğe Bağlı",          variant: "Yüksek Baskı",          imageSrc: "http://img.b2bpic.net/free-photo/autumn-symbols-near-frame_23-2147867483.jpg"},
        {
          id: "p5",          name: "Tuval Şasesi",          price: "İsteğe Bağlı",          variant: "Fırınlanmış Ahşap",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-interior-ballet-wooden-handrail_23-2148461892.jpg"},
        {
          id: "p6",          name: "Özel Ebat İmalatı",          price: "İsteğe Bağlı",          variant: "Tam İhtiyaca Göre",          imageSrc: "http://img.b2bpic.net/free-photo/mock-up-blank-frame-hanging-wall-room_1253-1422.jpg"},
      ]}
      title="Profesyonel Üretimimiz"
      description="İhtiyacınıza uygun, yüksek kaliteli üretim seçeneklerimizle yanınızdayız."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          icon: Award,
          title: "Kuşak Tecrübe",          value: "3"},
        {
          id: "m2",          icon: CheckCircle,
          title: "Mutlu Müşteri",          value: "1000+"},
        {
          id: "m3",          icon: Star,
          title: "Yıllık Kalite",          value: "24+"},
      ]}
      title="Deneyimimiz Rakamlarla"
      description="Yılların getirdiği tecrübe ve memnun müşterilerimizle yolumuza devam ediyoruz."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Fırat B.",          role: "Avukat",          testimonial: "24 yıl öncesine ait genç avukatlık fotoğrafımı çerçevelettim. Büyük emek ve özen var, gerçekten harika.",          imageSrc: "http://img.b2bpic.net/free-photo/male-artist-painting-studio-with-watercolors_23-2149908451.jpg"},
        {
          id: "2",          name: "Gürcan A.",          role: "Müşteri",          testimonial: "Her ölçüde istediğiniz tuvali bulabileceğiniz kaliteli bir işletme. Esnaflığı ve samimiyeti için teşekkür ederiz.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-person-painting-wall_23-2148263389.jpg"},
        {
          id: "3",          name: "Funda Ü.",          role: "Müşteri",          testimonial: "İlgisi, alakası ve güler yüze ek kalite de olunca başka ne ister ki insan. Güvenle tercih edebilirsiniz.",          imageSrc: "http://img.b2bpic.net/free-photo/flirty-couple-attending-art-workshop-having-fun-together-while-dating_662251-328.jpg"},
        {
          id: "4",          name: "Murat O.",          role: "Sanatçı",          testimonial: "Büyük boy tuvaller için birebir tavsiye edilir, iş bitirici firma.",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg"},
        {
          id: "5",          name: "Dilber S.",          role: "Ressam",          testimonial: "Üç kuşaktır bu işi yaptıklarını öğrendim. Son derece titiz bir işçilikle resimlerim tam istediğim gibi oldu.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-art-gallery_23-2149911924.jpg"},
      ]}
      title="Müşterilerimizin Deneyimleri"
      description="Sizlerin memnuniyeti bizim en büyük motivasyonumuz."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "Özel ebatlarda tuval yaptırabilir miyim?",          content: "Evet, atölyemizde istediğiniz boyutta ve özel şase ölçülerinde tuval üretimi yapabiliyoruz."},
        {
          id: "q2",          title: "Kargo hizmetiniz var mı?",          content: "Evet, siparişlerinizi hızlı ve güvenli bir şekilde Türkiye genelinde kargolayabiliyoruz."},
        {
          id: "q3",          title: "Çerçeve ve kanvas imalatı ne kadar sürer?",          content: "Genellikle sipariş yoğunluğumuza bağlı olarak çok kısa sürede, hatta bazı durumlarda aynı gün içerisinde teslimat yapabiliyoruz."},
      ]}
      title="Sıkça Sorulan Sorular"
      description="Hizmetlerimizle ilgili aklınıza takılanları yanıtladık."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static"}}
      tag="İletişim"
      title="Bizimle İletişime Geçin"
      description="Siparişleriniz veya sorularınız için bize ulaşın. Üreticiden alıcıya ilk elden kaliteli hizmet sunuyoruz."
      imageSrc="http://img.b2bpic.net/free-photo/top-view-set-tools_23-2148428325.jpg"
      mediaAnimation="slide-up"
      inputPlaceholder="E-posta adresinizi girin"
      buttonText="İletişime Geç"
      imageAlt="art workshop desk contact"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/happy-woman-hanging-pictures_1398-3777.jpg"
      logoText="Deniz Çerçeve"
      columns={[
        {
          title: "Kurumsal",          items: [
            {
              label: "Hakkımızda",              href: "#about"},
            {
              label: "İletişim",              href: "#contact"},
          ],
        },
        {
          title: "Ürünler",          items: [
            {
              label: "Tuval",              href: "#products"},
            {
              label: "Çerçeve",              href: "#products"},
            {
              label: "Şövale",              href: "#products"},
          ],
        },
      ]}
      imageAlt="professional art framing shop"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
