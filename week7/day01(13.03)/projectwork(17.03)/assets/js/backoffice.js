const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1ZGI0YTE3N2Y3MDAwMTNjNWViNmEiLCJpYXQiOjE2NzkxNTM5OTQsImV4cCI6MTY4MDM2MzU5NH0.z-8-bClrHdwt7KfEZ6cZ5u1fevGEAnrGZsRPrnWpCfk";
  
  if (productId) {
    document.querySelector("#send").innerText = "MODIFICA";
    document.querySelector(".spinner-border").classList.remove("d-none");
    fetch(API_URL + productId, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return new Error("Error!");
        }
      })
      .then((product) => {
        let image = document.querySelector("#imgContainer img");
        image.setAttribute("src", product.imageUrl);
        document.querySelector(".spinner-border").classList.add("d-none");
        document.getElementById("brand").value = product.brand;
        document.getElementById("name").value = product.name;
        document.getElementById("description").value = product.description;
        document.getElementById("imgUrl").value = product.imageUrl;
        document.getElementById("price").value = product.price;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    document.getElementById("delete").classList.add("d-none");
  }
  
  const saveProduct = async function (newProduct) {
    try {
      let url = productId ? API_URL + productId : API_URL;
  
      let response = await fetch(url, {
        method: productId ? "PUT" : "POST",
        body: JSON.stringify(newProduct),
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Saved changes");
      } else {
        alert("Error while saving the product");
      }
      window.location.replace("index.html");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async function () {
    if (confirm("Are you sure?...")) {
      if (productId) {
        try {
          let url = API_URL + productId;
  
          let response = await fetch(url, {
            method: "DELETE",
            headers: {
              Authorization: TOKEN,
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            console.log("PRODUCT DELETED");
          } else {
            alert("Error while saving the product");
          }
          window.location.replace("index.html");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  
  let formReference = document.querySelector("form");
  formReference.addEventListener("submit", (e) => {
    e.preventDefault();
    let newProduct = {
      name: document.getElementById("name").value,
      brand: document.getElementById("brand").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      imageUrl: document.getElementById("imgUrl").value,
    };
    console.log(newProduct);
    saveProduct(newProduct);
  });
