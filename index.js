    // <!-- <script  > -->
// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Sample data for cards
  const allitems = [
    {
      id: 1,
      name: "Only For Girls",
      price: "$20",
      image:
        " https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Jeans For Man",
      price: "$30",
      image:
        " https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Android Phone",
      price: "$40",
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
    },
    {
      id: 4,
      name: "Coding Laptop ",
      price: "$50",
      image:
        "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Premium Watch Best Quality",
      price: "$100",
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "silver watch",
      price: "$140",
      image:
        "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      name: "One more combo of three shoes",
      price: "$30",
      image:
        "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      name: "good quality of shoes",
      price: "$450",
      image:
        " https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      name: "Shoes ",
      price: "$940",
      image:
        "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    // Add more products as needed
  ];
  // Get the container where cards will be added
  const cardContainer = document.getElementById("card-container");

  // Function to create a card element
  function createCard(items) {
    return `
      <div class= "card-box bg-white border rounded-lg overflow-hidden shadow-lg shadow-blue-200">
        <img src="${items.image}" alt="${items.name}" class="w-full h-58 object-cover ">
        <div class="p-4">
          <h2 class="text-lg font-semibold">${items.name}</h2>
          <p class="text-gray-500">${items.price}</p>
          <button class=" animate add-tocard mt-4 bg-black text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
          
          <div class="container mt-5 rounded-md flex justify-between float-end bg-gray-200 text-black w-[130px] h-[35px]"> 
            <button class="plus-item border-2 hover:bg-gray-300 pr-2 pl-2">+</button>
            <p class="count mt-1 p-1">0</p>
            <button class="decr-item border-2 hover:bg-gray-300 font-bold pr-2 pl-2">-</button>
          </div>
        </div>
      </div>
    `;
  }
 // Append all cards to the container
 cardContainer.innerHTML = allitems.map(createCard).join("");

// Event delegation for dynamically added elements
cardContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("plus-item")) {
        const countElement = event.target.nextElementSibling;
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;
    } else if (event.target.classList.contains("decr-item")) {
        const countElement = event.target.previousElementSibling;
        let count = parseInt(countElement.textContent);
        if (count > 0) {
            count--;
            countElement.textContent = count;
        }
    } else if (event.target.classList.contains("add-tocard")) {
        // Handle "Add to Cart" button click
        gsap.to("#popup", { opacity: 1, display: "flex", duration: 0.5 });  
        
    }

});

document.getElementById("order-form").addEventListener("submit", (event) => {
  event.preventDefault();
  gsap.to("#popup", { opacity: 0, display: "none", duration: 0.5 });
  alert("Your order is confirmed ");

  // Reset all count values
  document.querySelectorAll(".count").forEach((countElement) => {
    countElement.textContent = "0";
  });

  // Clear the form
  document.getElementById("order-form").reset();
});

document.getElementById("close-popup").addEventListener("click", () => {
  gsap.to("#popup", { opacity: 0, display: "none", duration: 0.5 });
});

 

 
 


// Function to hide the order page with animation
function hideOrderPage() {
  const orderPage = document.querySelector('.order-page');
  gsap.to(orderPage, { opacity: 0, duration: 1, onComplete: () => {
      orderPage.classList.add('hidden');
  }});
}

 

// Event listener for the close button
document.querySelector('.close-order-page').addEventListener('click', hideOrderPage);
 
 

// Sidebar functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-hidden");
    sidebar.classList.add("sidebar-visible");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-visible");
    sidebar.classList.add("sidebar-hidden");
});

});
   
// slide
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-closed');
    } else {
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
    }
}
 
gsap.from(".welcome", {
  scale: 0,
  duration: 2,
   
  delay: 0.5,
  borderRadius: "10%",
});

gsap.from(".navbox ", {
  
  y: "-100px",
  
  opacity: 0,
  duration: 1,
delay:4,
  scrollTrigger: {
    trigger: "#page3 h1",

    scroller: "body",
    markers: true,
    start: "top 900",
}
}
);


 