const products = {
    bats: [
        {
            id: 1,
            name: "SG English Willow Bat",
            brand: "SG",
            price: 6499,
            level: "Intermediate",
            pitch: "Hard Pitch",
            img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
            desc: "Balanced bat for club players. Made from Grade 3 English Willow."
        },
        {
            id: 2,
            name: "MRF Genius Pro Bat",
            brand: "MRF",
            price: 10999,
            level: "Professional",
            pitch: "Turf Pitch",
            img: "https://cricketpro.b-cdn.net/wp-content/uploads/2020/09/mrf_genius_run_machine_cricket_bat_cricketpro.jpg",
            desc: "Used by professional players. Grade 1 English Willow for supreme power."
        },
        {
            id: 3,
            name: "SS Kashmir Willow Bat",
            brand: "SS",
            price: 3999,
            level: "Beginner",
            pitch: "Mat Pitch",
            img: "https://www.sstoncricket.com/wp-content/uploads/2023/04/gg_smacker_wonder.jpg",
            desc: "Perfect for beginners. Durable Kashmir Willow."
        },
        {
            id: 4,
            name: "GM Diamond 404",
            brand: "GM",
            price: 8500,
            level: "Intermediate",
            pitch: "All Round",
            img: "https://cdn.shopify.com/s/files/1/0012/8591/4694/products/GM-Diamond-404-Cricket-Bat-2021_1024x1024.jpg",
            desc: "Gunn & Moore Diamond range, excellent pickup and balance."
        }
    ],

    balls: [
        {
            id: 101,
            name: "SG Test Leather Ball",
            brand: "SG",
            price: 799,
            level: "Match",
            pitch: "All Conditions",
            img: "https://5.imimg.com/data5/SELLER/Default/2022/10/HW/ZZ/OG/162453258/rns-red-leather-cricket-balls-1000x1000.jpg",
            desc: "High quality red leather ball approved for competitive matches."
        },
        {
            id: 102,
            name: "Kookaburra Turf Ball",
            brand: "Kookaburra",
            price: 1299,
            level: "Professional",
            pitch: "Turf Pitch",
            img: "https://cdn2.bigcommerce.com/server1600/2ff27/products/841/images/3490/1A1101M02-cricket-ball-turf-white-front__38086.1593296638.1280.1280.png?c=2",
            desc: "Used in international matches. White leather for day/night games."
        }
    ],

    kits: [
        {
            id: 201,
            name: "SS Beginner Cricket Kit",
            brand: "SS",
            price: 7999,
            level: "Beginner",
            pitch: "All Grounds",
            img: "https://png.pngtree.com/png-vector/20240725/ourmid/pngtree-full-cricket-kit-png-image_13232691.png",
            desc: "All-in-one starter kit including bat, pads, gloves, and bag."
        },
        {
            id: 202,
            name: "SG Professional Cricket Kit",
            brand: "SG",
            price: 12999,
            level: "Professional",
            pitch: "Turf Pitch",
            img: "https://m.media-amazon.com/images/I/71i6rvL0SaL.jpg",
            desc: "Complete kit for serious players. Includes helmet and thigh guards."
        }
    ],

    accessories: [
        {
            id: 301,
            name: "DSC Cricket Helmet",
            brand: "DSC",
            price: 1499,
            level: "Intermediate",
            pitch: "Safety",
            img: "https://m.media-amazon.com/images/I/61N+x+u+L4L._SL1500_.jpg",
            desc: "Lightweight and sturdy helmet for maximum protection."
        },
        {
            id: 302,
            name: "Puma Cricket Spikes",
            brand: "Puma",
            price: 3499,
            level: "Professional",
            pitch: "Turf",
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/106666/01/sv01/fnd/IND/fmt/png/PUMA-19-VH-One8-Men's-Cricket-Shoes",
            desc: "Superior grip for bowlers and batsmen on turf wickets."
        }
    ]
};

module.exports = { products };
