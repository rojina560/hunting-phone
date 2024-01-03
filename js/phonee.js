const loadPhone = async () => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=iphone`
    ); 
    const data = await res.json()
    const phone = data.data
    displayPhone(phone)
}
const displayPhone = (phones) => {
   phones.forEach(phone => {
    console.log(phone)
   });

    
}
 loadPhone()