import fs from 'fs';
import path from 'path';

const klasorYolu = path.join(process.cwd(), 'src', 'content', 'blog');

console.log("🧹 Eski dosyalar temizleniyor...");
const mevcutDosyalar = fs.readdirSync(klasorYolu);

mevcutDosyalar.forEach(dosya => {
    if (dosya.endsWith('.md') || dosya.endsWith('.mdx')) {
        fs.unlinkSync(path.join(klasorYolu, dosya));
        console.log(`🗑️ Silindi: ${dosya}`);
    }
});

const makaleler = [
    {
        title: "Yavru Köpek Tuvalet Eğitimi En Hızlı Nasıl Verilir?",
        desc: "Yavru köpeğinize evde tuvalet eğitimini 3 günde nasıl verirsiniz? Kesin çözüm ve pratik adımlar.",
        image: "/blog-placeholder-1.jpg"
    },
    {
        title: "Evdeki Kedi Kumu Kokusu Nasıl Giderilir?",
        desc: "Kedi kumu kokusunu evden tamamen silmek için doğal yöntemler ve karbonat mucizesi.",
        image: "/blog-placeholder-2.jpg"
    },
    {
        title: "Kediler Neden Isırır ve Nasıl Engellenir?",
        desc: "Oyun oynarken aniden ısıran kedilerin psikolojisi ve bu davranışı durdurmanın yolları.",
        image: "/blog-placeholder-3.jpg"
    },
    {
        title: "Köpeklerde Tüy Dökülmesini Azaltan 5 Altın Kural",
        desc: "Mevsimsel ve strese bağlı tüy dökülmesini durduran beslenme ve tarama teknikleri.",
        image: "/blog-placeholder-4.jpg"
    },
    {
        title: "Kedi ve Köpek Aynı Evde Nasıl Yaşar?",
        desc: "Kedi ve köpeği birbirine alıştırma süreci, ilk tanışma taktikleri ve güvenli alan oluşturma.",
        image: "/blog-placeholder-about.jpg"
    }
];

const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
        .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
        .replace(/\s+/g, '-')           
        .replace(/[^\w\-]+/g, '')       
        .replace(/\-\-+/g, '-')         
        .replace(/^-+/, '')             
        .replace(/-+$/, '');            
};

// ÇÖZÜM BURADA: Astro'nun hata vermemesi için (YYYY-MM-DD) evrensel tarih formatı
const bugun = new Date().toISOString().split('T')[0];

console.log("📝 Yeni SEO uyumlu dosyalar oluşturuluyor...");
makaleler.forEach(makale => {
    const dosyaAdi = slugify(makale.title);
    const dosyaYolu = path.join(klasorYolu, `${dosyaAdi}.md`);

    const icerik = `---
title: '${makale.title}'
description: '${makale.desc}'
pubDate: '${bugun}'
heroImage: '${makale.image}'
---

Buraya giriş paragrafı gelecek. Ziyaretçiyi sayfada tutacak merak uyandırıcı bir başlangıç yapın.

## Neden Bu Konu Önemli?
Bu kısımda konunun detaylarına girin.

## Dikkat Edilmesi Gerekenler
* Madde 1
* Madde 2
* Madde 3

## Sonuç
Toparlayıcı bir paragraf ile yazıyı bitirin.
`;

    fs.writeFileSync(dosyaYolu, icerik, 'utf8');
    console.log(`✅ Oluşturuldu: ${dosyaAdi}.md`);
});

console.log("\n🚀 Operasyon tamamlandı! Astro artık bu tarihleri tanıyacak.");