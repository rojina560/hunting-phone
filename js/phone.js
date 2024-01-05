const loadePhone = async (searchText='13', isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phone = data.data;
  displayPhones(phone, isShowAll);
};
const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  // console.log(phones.length)
//  show all button 
  const showAll = document.getElementById("show-all");
  if (phones.length < 12 && !isShowAll) {
    showAll.classList.remove('hidden');
  } else {
    showAll.classList.add('hidden');
    console.log("is show all", isShowAll);
  };

  if (!isShowAll) {
    phones = phones.slice(0, 12);
}

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = `<div class="card w-96 bg-gray-100 shadow-xl">`;
    phoneDiv.innerHTML = `
    <figure><img src=" ${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
      <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-accent">Show Details</button>
    </div>
  </div>
      `;
    // append child 
    phoneContainer.appendChild(phoneDiv);
  });
  // hide loading spinner 
  toggleLoadSpinner(false);
};

const handleShowDetail =  async(id) => {
  console.log('click', id)
  // load single phone data 
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`
  );
  const data = await res.json()
 const phone = data.data
  showPhoneDetails(phone)
}
const showPhoneDetails = (phone) => {
  console.log(phone)
  const phoneName = document.getElementById("show-details-phone-name");
  phoneName.innerText = phone.name;
  const showDetailContainer = document.getElementById("show-details-container");
  showDetailContainer.classList.add('showdetail');
  showDetailContainer.innerHTML = `
  <img src="${phone.image}" alt="">
  <p><span>storage:${phone.mainFeatures.storage}</span></p>
  <p>chipSet:${phone.mainFeatures.chipSet}</p>
  <p>display-Size${phone.mainFeatures.displaySize}
</p>
  <p>memory
:${phone.mainFeatures.memory}</p>
  <p>releaseDate
:${phone.releaseDate}
</p>
<P>Gps:${phone.others?.GPS || ' no Gps available'}</p>`;
  
  // show the modal 
  show_details_modal.showModal();

}
const searchBtn = (isShowAll) => {
  toggleLoadSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = '';
  loadePhone(searchText, isShowAll)
}
// spinner or loader 
const toggleLoadSpinner = (isloading) => {
  const loader = document.getElementById("loader");
  if(isloading) {
    loader.classList.remove('hidden')
  } else {
    loader.classList.add('hidden')
  }

 
}
// handle show all 
const handleShowAll = () => {
searchBtn(true)
  
}
loadePhone()


 
