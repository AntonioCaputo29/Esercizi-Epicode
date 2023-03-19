const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1ZGI0YTE3N2Y3MDAwMTNjNWViNmEiLCJpYXQiOjE2NzkxNTM5OTQsImV4cCI6MTY4MDM2MzU5NH0.z-8-bClrHdwt7KfEZ6cZ5u1fevGEAnrGZsRPrnWpCfk";
let productId = new URLSearchParams(window.location.search).get("productId");

const getProduct = async function () {
  try {
    let response = await fetch(API_URL + productId, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    });
    if (response.ok) {
      let prod = await response.json();
      console.log(prod);
      let rowRef = document.querySelector("main .row");
      console.log(rowRef);
      rowRef.innerHTML = `<div class="col col-8 mt-5 m-auto">
      <div class="card mb-4 shadow-sm">
      <img src="${prod.imageUrl}" alt="${prod.name} image">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">
            Marchio: ${prod.brand}<br>
            Descrizione:${prod.description}<br>
            Codice prodotto: ${prod._id}
          <div class="btn">
          <a href="./index.html" class="btn btn-success">Torna indietro</a>
          <a class="btn btn-success">Aggiungi al carrello</a>
          </div>
        </div>
      </div>
    </div>`;
    } else {
      return new Error("Error while loadig product details");
    }
  } catch (error) {
    console.log(error);
  }
};

getProduct();