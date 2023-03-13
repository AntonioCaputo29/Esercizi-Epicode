class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  
  const user1 = new User("Antonio", "Caputo", 28, "Sibari");
  const user2 = new User("Giancarlo", "Caputo", 62, "Potenza");
  
  console.log(user1.compareAge(user2));


  
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwnerAs(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}




function addPet() {
    
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

   
    const pet = new Pet(petName, ownerName, species, breed);


    const petList = document.getElementById("petList");
    const li = document.createElement("li");
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - proprietario: ${pet.ownerName}`;
    petList.appendChild(li);

   
    document.getElementById("petName").value = "";
    document.getElementById("ownerName").value = "";
    document.getElementById("species").value = "";
    document.getElementById("breed").value = "";
}


