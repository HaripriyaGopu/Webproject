
 let closetSection = document.getElementById("closet");
 document.getElementById("btn-closet").addEventListener('click', getCloset);

 function getCloset(e) {
   fetch('Products.json')
   .then((res) => res.json())
   .then((data) => {
     console.log(data)
     data.forEach((item) => {
       let section = 
       `
          <div class="closet">
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Type: ${item.type}</p>
          </div>  
       `;
       closetSection.innerHTML += section;
     })
   })
   .catch((err) => console.log(`Error: ${err}`));
 }