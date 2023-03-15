const booksRow = document.querySelector("#booksRow");
const sideChart = document.querySelector("#sideChart");
const chartClear = document.querySelector("#chart-clear");

chartClear.addEventListener("click", () => {
  localStorage.clear();
  sideChart.innerHTML = "";
});

const makeBookCard = ({ asin, img, title, price }) => {
    const newCard = `
      <div class="card">
        <img class="card-img-top" src="${img}" alt="${title}">
        <div class="card-body">
          <div class="card-title fw-bold custom-title">${title}</div>
          <div class="card-text fw-bold">${price}€</div>
        </div>
        <div class="card-footer d-grid gap-2">
          <button class="btn btn-danger" onClick="this.parentElement.parentElement.remove()">SCARTA</button>
          <button class="btn btn-primary" onClick="addToCart('${asin}', '${title}', '${price}')">COMPRA ORA</button>
        </div>
      </div>
    `;
    booksRow.innerHTML += newCard;
  };
  
  

const addToCart = (asin, title, price) => {
  const chartBook = { title, price };
  const spanChart = document.createElement("span");
  spanChart.innerHTML = `${title} - ${price}€<button class="btn btn-danger" onClick="this.parentElement.remove()">RIMUOVI</button>`;
  sideChart.appendChild(spanChart);
  localStorage.setItem(`book-${asin}`, JSON.stringify(chartBook));
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(data => data.forEach(makeBookCard))
  .catch(error => console.log(error));



  
  




  

