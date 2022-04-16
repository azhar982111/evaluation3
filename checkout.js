let checkout_diplay = document.getElementById("checkout_items");
let bill_total = document.getElementById("bill_total");



const display_items_cart_items = (cart_items) => {
    cart_items?.map(item => {

        let item_div = document.createElement("div");

		let image = document.createElement("img");
		image.src = item.image_url;

		let name_p = document.createElement("p");
		name_p.textContent = item.name;

		let rating_span = document.createElement("span");
		rating_span.textContent = item.rating;

		let price_p = document.createElement("p");
		price_p.textContent = item.price;

        item_div.append(image, name_p, rating_span, price_p);

        checkout_diplay && checkout_diplay.appendChild(item_div);

    })
};

display_items_cart_items(JSON.parse(localStorage.getItem("cart_items")))


let total_array = JSON.parse(localStorage.getItem("cart_items"))?.map(item => item.price);

const initialValue = 0;
const sumWithInitial = total_array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

bill_total.textContent = sumWithInitial;