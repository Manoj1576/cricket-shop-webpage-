const month = new Date().getMonth();

let offer = "";

if(month === 3){
  offer = "🏏 IPL Season Offer – 20% OFF on Bats";
}
else if(month === 5){
  offer = "🏫 School Reopening – Kit Combo Discount";
}
else if(month === 11){
  offer = "🎉 Year End Sale – Flat ₹1000 OFF";
}
else{
  offer = "🔥 Regular Deals on Premium Cricket Gear";
}

document.getElementById("offerBox").innerText = offer;
