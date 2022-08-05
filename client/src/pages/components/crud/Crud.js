//addToCart psudo function:
//On click => grabbing the whole product(JSON data).
//Then it initiallizes an empty array.
//Then it checks if there is already a cart object in local storage
//If true, it sets(==, line 7) the object into the array
//(22) we push the product(...product) to the array while adding a new key value pair(count: 0)
//(26) After, we loop through the array.
//Grab the individual [i] product(object) id and match it to the existing product id. If they match, then we add 1 to the count.
//Then check to see if the added prouct(id) matches another product(id, "you HAVE to compare values not whole objects") already existing in the cart
//check for duplicates and remove them, so if you add the same items twice, it removes it.
//Set the new cart array into the local storage(cart)

export const addToCart = (product) => {
  let cart = [];
  //type of window is checking if the browser is running
  if (typeof window !== "undefined") {
    //if there is a key name of cart and its true then we set cart to "cart"
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    //in an object use ":"
    cart.push({ ...product, count: 0 });
    //if there is an in item that alraedy has the id, we want to increase the count.
    //We created a for loop to map through the array(cart)
    //We set each individual [i] cart item to object, compared the id to product.id. if so then increase count.
    for (let i = 0; i < cart.length; i++) {
      const object = cart[i];
      if (object.id === product.id) {
        object.count++;
      }
    }
    // reference line 10+
    cart = Array.from(new Set(cart.map((product) => product.id))).map((id) => {
      return cart.find((product) => product.id === id);
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getAllCart = () => {
  let cart = [];
  if (typeof window !== "undefined") {
    //getItem is CHECKING they key("cart")
    if (localStorage.getItem("cart")) {
      //Now we are setting it
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    return cart;
  }
};

export const removeFromCart = (product) => {
  console.log("Chicken", product);
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    //map through the new cart array
    console.log("be-forloop", cart);
    for (let i = 0; i < cart.length; i++) {
      const object = cart[i];
      if (object.id === product.id) {
        cart.splice(i, 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  }
};

//Create an empty array and
