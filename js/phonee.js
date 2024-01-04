const phoneLoad = async (searchText='13') => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json()
  const phone = data.data
  displayPhone(phone)
}
const displayPhone = phones => {
      const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = ''
    const showAll = document.getElementById('show-all');
    if (phones.length > 12) {
        showAll.classList.remove('hidden')
    } else {
        showAll.classList.add('hidden')
    }
    phones = phones.slice(0, 12);
    phones.forEach((phone) => {
      console.log(phone);

      const div = document.createElement("div");
      div.classList = `card w-96 bg-gray-200 shadow-xl`;
      div.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title"> ${phone.slug}</h2>
    <p> ${phone.phone_name}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-success">show details</button>
    </div>
  </div>`;
      phoneContainer.appendChild(div);
    });
}

const searchBtn =() => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value
  searchField.value = ''
   phoneLoad(searchText);
}

phoneLoad()



