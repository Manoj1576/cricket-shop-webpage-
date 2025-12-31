const detailModal = document.getElementById("detailModal");
const dName = document.getElementById("dName");
const dBrand = document.getElementById("dBrand");
const dLevel = document.getElementById("dLevel");
const dPitch = document.getElementById("dPitch");
const dPrice = document.getElementById("dPrice");
const dDesc = document.getElementById("dDesc");

const products = {
  bats: [
    {
      name: "SG English Willow Bat",
      brand: "SG",
      price: 6499,
      level: "Intermediate",
      pitch: "Hard Pitch",
      img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
      desc: "Balanced bat for club players."
    },
    {
      name: "MRF Genius Pro Bat",
      brand: "MRF",
      price: 10999,
      level: "Professional",
      pitch: "Turf Pitch",
      img: "https://cricketpro.b-cdn.net/wp-content/uploads/2020/09/mrf_genius_run_machine_cricket_bat_cricketpro.jpg",
      desc: "Used by professional players."
    },
    {
      name: "SS Kashmir Willow Bat",
      brand: "SS",
      price: 3999,
      level: "Beginner",
      pitch: "Mat Pitch",
      img: "https://www.sstoncricket.com/wp-content/uploads/2023/04/gg_smacker_wonder.jpg",
      desc: "Perfect for beginners."
    }
  ],

  balls: [
    {
      name: "SG Test Leather Ball",
      brand: "SG",
      price: 799,
      level: "Match",
      pitch: "All Conditions",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/10/HW/ZZ/OG/162453258/rns-red-leather-cricket-balls-1000x1000.jpg",
      desc: "High quality red leather ball."
    },
    {
      name: "Kookaburra Turf Ball",
      brand: "Kookaburra",
      price: 1299,
      level: "Professional",
      pitch: "Turf Pitch",
      img: "https://cdn2.bigcommerce.com/server1600/2ff27/products/841/images/3490/1A1101M02-cricket-ball-turf-white-front__38086.1593296638.1280.1280.png?c=2",
      desc: "Used in international matches."
    }
  ],

  kits: [
    {
      name: "Beginner Cricket Kit",
      brand: "SS",
      price: 7999,
      level: "Beginner",
      pitch: "All Grounds",
      img: "https://png.pngtree.com/png-vector/20240725/ourmid/pngtree-full-cricket-kit-png-image_13232691.png",
      desc: "All-in-one starter kit."
    },
    {
      name: "Professional Cricket Kit",
      brand: "SG",
      price: 12999,
      level: "Professional",
      pitch: "Turf Pitch",
      img: "https://m.media-amazon.com/images/I/71i6rvL0SaL.jpg",
      desc: "Complete kit for serious players."
    }
  ]
};

// RENDER FUNCTION
function renderProducts(list, containerId) {
  const grid = document.getElementById(containerId);
  list.forEach((p, i) => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p><b>Brand:</b> ${p.brand}</p>
        <p class="price">₹${p.price}</p>
        <button onclick="viewDetailsGlobal(${containerId}, ${i})">
          View Details
        </button>
      </div>
    `;
  });
}

// LOAD ALL
renderProducts(products.bats, "batGrid");
renderProducts(products.balls, "ballGrid");
renderProducts(products.kits, "kitGrid");

// MODAL HANDLER
function viewDetailsGlobal(category, index){
  const data =
    category.id === "batGrid" ? products.bats :
    category.id === "ballGrid" ? products.balls :
    products.kits;

  const p = data[index];

  dName.innerText = p.name;
  dBrand.innerText = p.brand;
  dLevel.innerText = p.level;
  dPitch.innerText = p.pitch;
  dPrice.innerText = p.price;
  dDesc.innerText = p.desc;
  detailModal.style.display = "flex";
}
function closeDetails(){
  detailModal.style.display = "none";
}
window.onclick = function(e){
  if(e.target === detailModal){
    closeDetails();
  }
}
