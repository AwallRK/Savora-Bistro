/* ============================
   MENU DATA (ARRAY DATABASE)
============================ */
const menuData = [
    {
        id: 1,
        name: "Grilled Steak",
        description: "Premium beef with special sauce",
        price: 25,
        category: "food",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
        id: 2,
        name: "Burger Deluxe",
        description: "Juicy beef burger with cheese",
        price: 18,
        category: "food",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        id: 3,
        name: "Fresh Mojito",
        description: "Refreshing mint & lime drink",
        price: 8,
        category: "drink",
        image: "https://www.troprockin.com/wp-content/uploads/2022/06/mojito-recipe-with-simple-syrup-1.jpg"
    },
    {
        id: 4,
        name: "Cappuccino",
        description: "Hot espresso with milk foam",
        price: 6,
        category: "drink",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
        id: 5,
        name: "Chocolate Lava Cake",
        description: "Warm cake with melted chocolate",
        price: 12,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
    },
    {
        id: 6,
        name: "Cheesecake",
        description: "Creamy classic cheesecake",
        price: 10,
        category: "dessert",
        image: "https://chefsmandala.com/wp-content/uploads/2018/03/Neufchatel-Cheese-Cake-w-Blueberry-Sauce.jpg"
    }
]

/* ============================
   ELEMENTS
============================ */
const menuContainer = document.getElementById("menuContainer")
const filterButtons = document.querySelectorAll(".filter-btn")

/* ============================
   RENDER MENU FUNCTION
============================ */
function renderMenu(category = "all") {
    menuContainer.innerHTML = ""

    const filteredMenu = category === "all"
        ? menuData
        : menuData.filter(item => item.category === category)

    filteredMenu.forEach(item => {
        const card = `
      <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <img src="${item.image}" class="h-56 w-full object-cover">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">${item.name}</h3>
          <p class="text-gray-600 mb-4">${item.description}</p>
          <span class="font-bold text-[#3e2c23]">$${item.price}</span>
        </div>
      </div>
    `
        menuContainer.innerHTML += card
    })
}

/* ============================
   FILTER BUTTON FUNCTION
============================ */
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => {
            b.classList.remove("bg-[#3e2c23]", "text-white")
            b.classList.add("bg-white")
        })

        btn.classList.add("bg-[#3e2c23]", "text-white")

        const category = btn.getAttribute("data-category")
        renderMenu(category)
    })
})

/* ============================
   INITIAL LOAD
============================ */
document.addEventListener("DOMContentLoaded", () => {
    renderMenu()
})