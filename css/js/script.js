// ===== DATA PRODUK =====
const products = [
    {
        id: 1,
        name: 'Butter Croissant',
        category: 'bakery',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400',
        benefits: [
            'Fresh from oven setiap pagi',
            'Menggunakan butter import premium',
            'Tekstur renyah di luar, lembut di dalam',
            'Cocok untuk sarapan atau teman ngopi'
        ],
        specs: {
            weight: '120gr',
            calories: '280 kkal',
            bestConsume: '24 jam',
            suhu: 'Hangat / Suhu ruang'
        }
    },
    {
        id: 2,
        name: 'Caffe Latte',
        category: 'beverage',
        price: 28000,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
        benefits: [
            'Kopi arabika pilihan',
            'Susu segar foam lembut',
            'Tersedia hot & iced',
            'Perfect untuk morning boost'
        ],
        specs: {
            weight: '250ml',
            calories: '180 kkal',
            bestConsume: 'Segera',
            suhu: 'Panas / Dingin'
        }
    },
    {
        id: 3,
        name: 'Chocolate Lava Cake',
        category: 'cake',
        price: 35000,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
        benefits: [
            'Coklat premium meleleh di tengah',
            'Disajikan hangat',
            'Dengan es krim vanilla',
            'Cocok untuk dessert spesial'
        ],
        specs: {
            weight: '150gr',
            calories: '420 kkal',
            bestConsume: 'Segera (hangat)',
            suhu: 'Hangat'
        }
    },
    {
        id: 4,
        name: 'Matcha Latte',
        category: 'beverage',
        price: 30000,
        image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400',
        benefits: [
            'Matcha asli dari Jepang',
            'Rasa creamy dan earthy',
            'Antioksidan tinggi',
            'Bisa hot atau iced'
        ],
        specs: {
            weight: '300ml',
            calories: '200 kkal',
            bestConsume: 'Segera',
            suhu: 'Panas / Dingin'
        }
    },
    {
        id: 5,
        name: 'Club Sandwich',
        category: 'snack',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400',
        benefits: [
            'Roti gandum segar',
            'Isi ayam, telur, sayur',
            'Kentang goreng sampingan',
            'Menu mengenyangkan'
        ],
        specs: {
            weight: '250gr',
            calories: '380 kkal',
            bestConsume: 'Segera',
            suhu: 'Hangat'
        }
    },
    {
        id: 6,
        name: 'Blueberry Muffin',
        category: 'bakery',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
        benefits: [
            'Blueberry segar melimpah',
            'Tekstur lembut & moist',
            'Topping streusel renyah',
            'Cocok untuk cemilan'
        ],
        specs: {
            weight: '100gr',
            calories: '250 kkal',
            bestConsume: '2 hari',
            suhu: 'Suhu ruang'
        }
    },
    {
        id: 7,
        name: 'Strawberry Danish',
        category: 'pastry',
        price: 20000,
        image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400',
        benefits: [
            'Pastry berlapis renyah',
            'Cream cheese lembut',
            'Strawberry segar di atasnya',
            'Rasa manis & asam seimbang'
        ],
        specs: {
            weight: '110gr',
            calories: '290 kkal',
            bestConsume: '24 jam',
            suhu: 'Suhu ruang'
        }
    },
    {
        id: 8,
        name: 'Ice Lemon Tea',
        category: 'beverage',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
        benefits: [
            'Teh asli seduhan',
            'Lemon segar',
            'Menyegarkan',
            'Cocok untuk cuaca panas'
        ],
        specs: {
            weight: '350ml',
            calories: '120 kkal',
            bestConsume: 'Segera',
            suhu: 'Dingin'
        }
    }
];

// ===== DOM ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const productGrid = document.getElementById('productGrid');
const filterCategory = document.getElementById('filterCategory');
const filterPrice = document.getElementById('filterPrice');
const bookingForm = document.getElementById('bookingFormElement');
const booking
