// Menü verileri - Bu dosyada ürünleri ve kategorileri düzenleyebilirsiniz
const menuData = {
    categories: [
        {
            id: 1,
            name: "Tatlı Kurabiyeler",
            image: "./images/urunler/tatli-kurabiyeler/header-tatli-kurabiye.jpg",
            icon: "🍪"
        },
        {
            id: 2,
            name: "Tuzlu Kurabiyeler",
            image: "./images/urunler/tuzlu-kurabiyeler/header-tuzlu-kurabiye.jpg",
            icon: "🥨"
        },
        {
            id: 3,
            name: "Gevrekler",
            image: "./images/urunler/gevrekler/header-gevrekler.jpg",
            icon: "🥯"
        },
        {
            id: 4,
            name: "Tatlılar",
            image: "./images/urunler/tatlilar/tereyagli-cevizli-baklava-2.jpg",
            icon: "🍮"
        },
        {
            id: 5,
            name: "Hamur İşleri",
            image: "./images/urunler/hamur-isleri/manti-2.jpg",
            icon: "🥖"
        },
        {
            id: 6,
            name: "Simit ve Poğaçalar",
            image: "./images/urunler/simit-ve-pogacalar/header-pogaca.jpg",
            icon: "🥐"
        },
        {
            id: 7,
            name: "İçecekler",
            image: "./images/urunler/icecekler/dimes-icecekler.jpg",
            icon: "🥤"
        },
        {
            id: 8,
            name: "Toptan Satış",
            image: "./images/urunler/toptan-satis/damla-cikolatali-kurabiye-kutu.jpg",
            icon: "📦"
        }
    ],
    
    products: {
        1: [ // Kurabiyeler
            {
                id: 101,
                name: "Damla Çikolatalı Kurabiye",
                description: "Burak Koçaş",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/damla-cikolatali-2.jpg"
            },
            {
                id: 102,
                name: "Fıstıklı Kurabiye",
                description: "Tarafından Hazırlanmıştır.",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/fistikli-kurabiye.jpg"
            },
            {
                id: 103,
                name: "Elmalı Kurabiye",
                description: "Buralar dilediğiniz gibi düzenlenebilir...",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/elmali-kurabiye.jpeg"
            },
            {
                id: 104,
                name: "Çikolatalı Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/cikolatali-kurabiye.jpg"
            },
            {
                id: 105,
                name: "Hindistan Cevizli Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/hindistan-cevizli-kurabiye.jpg"
            },
            {
                id: 106,
                name: "Tarçınlı Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/tarcinli-kurabiye.jpeg"
            },
            {
                id: 107,
                name: "Üzümlü Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/uzumlu-kurabiye.jpg"
            },
            {
                id: 108,
                name: "Frambuazlı Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/frambuazli-kurabiye.jpg"
            },
            {
                id: 109,
                name: "Un Kurabiyesi",
                description: "Geleneksel tarif, badem aroması",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/un-kurabiyesi.jpg"
            },
            {
                id: 110,
                name: "Kakaolu Un Kurabiyesi",
                description: "Taze fındıkla hazırlanan geleneksel lezzet",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/kakaolu-un-kurabiyesi.jpg"
            },
            {
                id: 111,
                name: "Damla Çikolatalı Un Kurabiyesi",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/damla-cikolatali-un-kurabiye.jpg"
            },
            {
                id: 112,
                name: "Frambuazlı Un Kurabiyesi",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/frambuazli-un-kurabiye.jpg"
            },
            {
                id: 113,
                name: "Portakallı Un Kurabiyesi",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatli-kurabiyeler/portakalli-kurabiye.jpeg"
            }
        ],
        2: [ // Tuzlu Kurabiyeler
            {
                id: 201,
                name: "Çörekotlu Tuzlu Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tuzlu-kurabiyeler/corekotlu-tuzlu-kurabiye.jpg"
            },
            {
                id: 202,
                name: "Ay Çekirdekli Tuzlu Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tuzlu-kurabiyeler/aycekirdekli-tuzlu-kurabiye.jpg"
            },{
                id: 203,
                name: "Dereotlu Tuzlu Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tuzlu-kurabiyeler/dereotlu-tuzlu-kurabiye.jpg"
            },{
                id: 204,
                name: "Haşhaşlı Tuzlu Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tuzlu-kurabiyeler/hashasli-tuzlu-kurabiye.jpg"
            },
            {
                id: 205,
                name: "Susamlı Tuzlu Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tuzlu-kurabiyeler/susamli-tuzlu-kurabiye.jpg"
            },
            {
                id: 206,
                name: "Burgu Tuzlu Kurabiye",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tuzlu-kurabiyeler/burgu-tuzlu-kurabiye.jpg"
            }
        ],
        3: [ // Gevrekler
            {
                id: 301,
                name: "Kandil Simidi",
                description: " ",
                price: "₺250",
                image: "./images/urunler/gevrekler/kandil-simidi.jpg"
            },
            {
                id: 302,
                name: "Büyük Kandil Simidi",
                description: " ",
                price: "₺20",
                image: "./images/urunler/gevrekler/buyuk-kandil-simidi.jpg"
            },
            {
                id: 303,
                name: "Kandil Simidi Kutu",
                description: " ",
                price: "₺70",
                image: "./images/urunler/gevrekler/kandil-simiti-kutu.jpg"
            },
            {
                id: 304,
                name: "Susamlı Gevrek",
                description: " ",
                price: "₺250",
                image: "./images/urunler/gevrekler/susamli-gevrek-2.jpg"
            },
            {
                id: 305,
                name: "Yağlı Gevrek",
                description: " ",
                price: "₺250",
                image: "./images/urunler/gevrekler/yagli-gevrek.jpg"
            },{
                id: 306,
                name: "Sütlü Yağsız Gevrek",
                description: " ",
                price: "₺100",
                image: "./images/urunler/toptan-satis/sutlu-yagsiz-gevrek.jpg"
            },{
                id: 307,
                name: "Tandır Usulü Gevrek",
                description: " ",
                price: "₺250",
                image: "./images/urunler/gevrekler/tandir-usulu-gevrek.jpg"
            },
            {
                id: 308,
                name: "Tandır Usulü Düz Gevrek",
                description: " ",
                price: "₺250",
                image: "./images/urunler/gevrekler/tandir-usulu-gevrek-duz.jpg"
            }
        ],
        4: [ // Tatlılar
            {
                id: 401,
                name: "Tereyağlı Cevizli Baklava",
                description: " ",
                price: "₺300",
                image: "./images/urunler/tatlilar/tereyagli-cevizli-baklava-2.jpg"
            },
            {
                id: 402,
                name: "Tereyağlı Cevizli Kadayıf",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatlilar/tereyagli-cevizli-kadayif.jpg"
            },
            {
                id: 403,
                name: "Şambali",
                description: " ",
                price: "₺200",
                image: "./images/urunler/tatlilar/sambali.jpg"
            },
            {
                id: 404,
                name: "Güllaç",
                description: " ",
                price: "₺170",
                image: "./images/urunler/tatlilar/gullac.jpg"
            },
            {
                id: 405,
                name: "Kemalpaşa",
                description: " ",
                price: "₺250",
                image: "./images/urunler/tatlilar/kemalpasa.jpg"
            },
            {
                id: 406,
                name: "Kemalpaşa Kutu",
                description: " ",
                price: "₺70",
                image: "./images/urunler/tatlilar/kemalpasa-2.jpg"
            },
            {
                id: 407,
                name: "Şekerpare",
                description: " ",
                price: "₺80",
                image: "./images/urunler/tatlilar/sekerpare.jpg"
            },
            {
                id: 408,
                name: "Lolipop",
                description: " ",
                price: "₺15",
                image: "./images/urunler/tatlilar/lolipop-2.jpeg"
            }
        ],
        5: [ // Hamur İşleri
            {
                id: 501,
                name: "Ekmek",
                description: " ",
                price: "₺13",
                image: "./images/urunler/hamur-isleri/ekmek.jpg"
            },
            {
                id: 502,
                name: "Ekşi Mayalı Ekmek",
                description: " ",
                price: "₺20",
                image: "./images/urunler/hamur-isleri/eksi-mayali-ekmek.jpg"
            },
            {
                id: 503,
                name: "Erişte",
                description: " ",
                price: "₺120",
                image: "./images/urunler/hamur-isleri/eriste.jpg"
            },
            {
                id: 504,
                name: "Kuru Şebit",
                description: " ",
                price: "₺17",
                image: "./images/urunler/hamur-isleri/kuru-sebit.jpg"
            },
            {
                id: 505,
                name: "Mantı",
                description: " ",
                price: "₺250",
                image: "./images/urunler/hamur-isleri/manti-2.jpg"
            },
            {
                id: 506,
                name: "Bohça Mantı",
                description: " ",
                price: "₺75",
                image: "./images/urunler/hamur-isleri/manti-3.jpg"
            },
            {
                id: 507,
                name: "Gezen Tavuk Yumurtası",
                description: " ",
                price: "₺220",
                image: "./images/urunler/hamur-isleri/yumurta-2.jpg"
            },
            {
                id: 508,
                name: "Yumurta",
                description: " ",
                price: "₺150",
                image: "./images/urunler/hamur-isleri/yumurta.jpg"
            }
        ],
        6: [ // Simit ve Poğaçalar
            {
                id: 601,
                name: "İstanbul Simidi",
                description: "",
                price: "₺15",
                image: "./images/urunler/simit-ve-pogacalar/istanbul-simidi.jpeg"
            },
            {
                id: 602,
                name: "Sade Karaköy Poğaçası",
                description: "",
                price: "₺15",
                image: "./images/urunler/simit-ve-pogacalar/sade-karakoy-pogacasi-2.jpeg"
            },
            {
                id: 603,
                name: "Peynirli Poğaça",
                description: "",
                price: "₺20",
                image: "./images/urunler/simit-ve-pogacalar/peynirli-pogaca.jpeg"
            },
            {
                id: 604,
                name: "Kaşarlı Poğaça",
                description: "",
                price: "₺20",
                image: "./images/urunler/simit-ve-pogacalar/kasarli-pogaca-2.jpeg"
            },
            {
                id: 605,
                name: "Zeytinli Poğaça",
                description: "",
                price: "₺15",
                image: "./images/urunler/simit-ve-pogacalar/zeytinli-pogaca.jpeg"
            },
            {
                id: 606,
                name: "Çikolatalı Poğaça",
                description: "",
                price: "₺20",
                image: "./images/urunler/simit-ve-pogacalar/cikolatali-pogaca-2.jpeg"
            },
            {
                id: 607,
                name: "Tahinli Cevizli Poğaça",
                description: "",
                price: "₺25",
                image: "./images/urunler/simit-ve-pogacalar/tahinli-cevizli-pogaca.jpeg"
            },
            {
                id: 608,
                name: "Sosisli Poğaça",
                description: "",
                price: "₺20",
                image: "./images/urunler/simit-ve-pogacalar/sosisli-pogaca.jpeg"
            },
            {
                id: 609,
                name: "İzmir Kumrusu",
                description: "",
                price: "₺15",
                image: "./images/urunler/simit-ve-pogacalar/izmir-kumrusu.jpeg"
            }
        ],
        7: [ // İçecekler
            {
                id: 701,
                name: "Dimes Meyve Suyu 1 L",
                description: "",
                price: "₺45",
                image: "./images/urunler/icecekler/dimes-buyuk.jpeg"
            },
            {
                id: 702,
                name: "Dimes Meyve Suyu 0.35 mL",
                description: "",
                price: "₺15",
                image: "./images/urunler/icecekler/dimes-kucuk.jpeg"
            },
            {
                id: 703,
                name: "Su 0.5 L",
                description: "",
                price: "₺10",
                image: "./images/urunler/icecekler/su.jpg"
            },
            {
                id: 704,
                name: "Torku Çikolatalı Süt",
                description: "",
                price: "₺15",
                image: "./images/urunler/icecekler/torku-cikolatali-sut.jpg"
            },
            {
                id: 705,
                name: "Torku Süt",
                description: "",
                price: "₺15",
                image: "./images/urunler/icecekler/torku-sut.jpg"
            },
            {
                id: 706,
                name: "Uludağ Gazoz 2.5 L",
                description: "",
                price: "₺75",
                image: "./images/urunler/icecekler/uludag-gazoz.jpg"
            },
            {
                id: 707,
                name: "Uludağ Gazoz 0.5 mL",
                description: "",
                price: "₺15",
                image: "./images/urunler/icecekler/uludag-gazoz-kucuk.jpg"
            },
            {
                id: 708,
                name: "Uludağ Limonata",
                description: "",
                price: "₺80",
                image: "./images/urunler/icecekler/uludag-limonata.jpg"
            },
            {
                id: 709,
                name: "Uludağ Portakallı Gazoz 2.5 L",
                description: "",
                price: "₺75",
                image: "./images/urunler/icecekler/uludag-portakalli-gazoz.jpg"
            },
            {
                id: 710,
                name: "Sarıyer Kola",
                description: "",
                price: "₺60",
                image: "./images/urunler/icecekler/sariyer-kola.jpg"
            },
            {
                id: 711,
                name: "Cola Turka",
                description: "",
                price: "₺65",
                image: "./images/urunler/icecekler/cola-turka.jpg"
            }
        ],
        8: [ // Toptan Satış
            {
                id: 801,
                name: "Damla Çikolatalı Kurabiye 500 Gr.",
                description: " ",
                price: "₺125",
                image: "./images/urunler/toptan-satis/damla-cikolatali-kurabiye-kutu.jpg"
            },
            {
                id: 802,
                name: "Fındıklı Kurabiye 500 Gr.",
                description: " ",
                price: "₺125",
                image: "./images/urunler/toptan-satis/findikli-kurabiye-kutu.jpg"
            },
            {
                id: 803,
                name: "Kakaolu Un Kurabiyesi 500 Gr.",
                description: " ",
                price: "₺125",
                image: "./images/urunler/toptan-satis/kakaolu-un-kurabiyesi-kutu.jpg"
            },
            {
                id: 804,
                name: "Un Kurabiyesi 500 Gr.",
                description: " ",
                price: "₺125",
                image: "./images/urunler/toptan-satis/un-kurabiyesi-kutu.jpg"
            },
            {
                id: 805,
                name: "Kandil Simidi 500 Gr.",
                description: " ",
                price: "₺125",
                image: "./images/urunler/toptan-satis/kandil-simidi-kutu.jpg"
            },
            {
                id: 806,
                name: "Sütlü Yağsız Gevrek 500 Gr.",
                description: " ",
                price: "₺125",
                image: "./images/urunler/toptan-satis/sutlu-yagsiz-gevrek.jpg"
            }
        ]
    }
};
