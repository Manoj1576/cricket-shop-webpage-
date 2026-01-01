function getMonthlyOffer() {
    const date = new Date();
    const month = date.getMonth(); // 0 = Jan, 1 = Feb, etc.

    const offers = [
        { month: "January", title: "New Year Sale", discount: "Flat 25% OFF", code: "NEWYEAR25", img: "https://img.freepik.com/free-vector/new-year-sale-banner-template_23-2149122393.jpg" },
        { month: "February", title: "Season Opener", discount: "20% OFF on Kits", code: "START20", img: "https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg" },
        { month: "March", title: "Holi Special", discount: "Colors of Cricket - 15% OFF", code: "HOLI15", img: "https://img.freepik.com/free-vector/holi-festival-sale-banner_23-2148446215.jpg" },
        { month: "April", title: "IPL Frenzy", discount: "Batting Bonanza - 30% OFF", code: "IPL30", img: "https://img.freepik.com/free-vector/cricket-tournament-banners-template_23-2148564070.jpg" },
        { month: "May", title: "Summer Slam", discount: "Buy 1 Get 1 on Accessories", code: "SUMMERBOGO", img: "https://img.freepik.com/free-vector/summer-sale-banner-with-watermelon_1262-1234.jpg" },
        { month: "June", title: "Mid-Year Clearance", discount: "Flat 40% OFF on Old Stock", code: "CLEAR40", img: "https://img.freepik.com/free-vector/flat-design-clearance-sale-background_23-2148187889.jpg" },
        { month: "July", title: "Monsoon Madness", discount: "Rainy Day Deals - 20% OFF", code: "RAIN20", img: "https://img.freepik.com/free-vector/monsoon-sale-banner-with-clouds-rain_1017-32247.jpg" },
        { month: "August", title: "Independence Day Sale", discount: "Freedom to Play - 19.47% OFF", code: "INDIA", img: "https://img.freepik.com/free-vector/independence-day-sale-banner-india_1017-19965.jpg" },
        { month: "September", title: "Championship Chasers", discount: "Pro Gear at 15% OFF", code: "PRO15", img: "https://img.freepik.com/free-vector/sports-championship-banner_23-2148536830.jpg" },
        { month: "October", title: "Festive Dhamaka", discount: "Diwali Special - 50% OFF", code: "DIWALI50", img: "https://img.freepik.com/free-vector/diwali-sale-banner-template_1017-21016.jpg" },
        { month: "November", title: "Winter Warmup", discount: "Sweaters & Gear - 25% OFF", code: "WINTER25", img: "https://img.freepik.com/free-vector/winter-sale-banner-template_23-2148767793.jpg" },
        { month: "December", title: "Year End Bash", discount: "Flat 35% OFF Storewide", code: "BYE2024", img: "https://img.freepik.com/free-vector/end-year-sale-banner_23-2149117652.jpg" }
    ];

    // Wrap around just in case, though getMonth is 0-11
    return offers[month] || offers[0];
}

module.exports = { getMonthlyOffer };
