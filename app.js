const clickBtn = document.querySelector('.btn');

clickBtn.addEventListener("click", function display() {
  const input = document.querySelector('.input');
  const inputValue = document.querySelector('.input').value;
  const main = document.getElementById('main');
 
  fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
  .then((res) => {
    console.log(res);
    return res.json()
    
  })
  .then((data) => {
    console.log(data)
    const curr = data[0].currencies
    console.log(Object.keys(curr)[0]);

    
    main.innerHTML = `
    <div class="leftdiv">
    <div class="flag-div">
      <h2> Flag</h2>
      <div> <img src=
      ${data[0].flags.png} alt=""></div>
    </div>
    <div class="empty"></div>
    <div class="coatOfArms-div">
      <h2>Coat of Arms</h2>
      <img src=${data[0].coatOfArms.png} alt="">
    </div>
   </div>
   <div class="right-div">
    <ul class="right-ul">
      <li class="myLi">Country Name: ${data[0].name.common}</li>
      <li class="myLi">Population: ${data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
      <li class="myLi">Region: ${data[0].region}</li>
      <li class="myLi">Capital City: ${data[0].capital[0]}</li>
      <li class="myLi">Currency: ${Object.keys(curr)[0]}</li>
      <li class="myLi">Area: ${data[0].area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KM²</li>
    </ul>
   </div>
    `
   
     
  })
  input.value = ''
  
  })