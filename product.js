document.addEventListener("DOMContentLoaded", () => {
  const allitems = [
    { id: 1, name: "Only For Girls", price: "$20", image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Jeans For Man", price: "$30", image: "https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Android Phone", price: "$40", image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg" },
    { id: 4, name: "Coding Laptop", price: "$50", image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Premium Watch Best Quality", price: "$100", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Silver Watch", price: "$140", image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "One More Combo of Three Shoes", price: "$30", image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, name: "Good Quality Shoes", price: "$450", image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 9, name: "Shoes", price: "$940", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];

  const cardContainer = document.getElementById("card-container");

  function createCard(items) {
    return `
      <div class="bg-white border rounded-lg overflow-hidden shadow-lg shadow-blue-200" data-id="${items.id}">
        <img src="${items.image}" alt="${items.name}" class="w-full h-58 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-semibold">${items.name}</h2>
          <p class="text-gray-500">${items.price}</p>
          <button class="add-tocard mt-4 bg-black text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
          <div class="container mt-5 rounded-md flex justify-between float-end bg-gray-200 text-black w-[130px] h-[35px]">
            <button class="plus-item border-2 hover:bg-gray-300 pr-2 pl-2">+</button>
            <p class="count mt-1 p-1">0</p>
            <button class="decr-item border-2 hover:bg-gray-300 font-bold pr-2 pl-2">-</button>
          </div>
        </div>
      </div>
    `;
  }

  cardContainer.innerHTML = allitems.map(createCard).join("");

  cardContainer.addEventListener("click", (event) => {
    const card = event.target.closest('.bg-white');
    if (!card) return;

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
      // Show the popup
      gsap.to("#popup", { opacity: 1, display: "flex", duration: 0.5 });
    }
  });

  document.getElementById("order-form").addEventListener("submit", (event) => {
    event.preventDefault();
    gsap.to("#popup", { opacity: 0, display: "none", duration: 0.5 });
    alert("Your order is confirmed");

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

  document.getElementById('hamburger').addEventListener('click', toggleSidebar);
});

