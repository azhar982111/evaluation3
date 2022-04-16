var data = [
	{
		name: "SAMSUNG Galaxy F12",
		rating: 4,
		image_url: "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
		price: 11499,
	},
	{
		name: "SAMSUNG Galaxy F42",
		rating: 4.2,
		image_url: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/v/5/e/galaxy-f42-5g-sm-e426bzahins-samsung-original-imag7anfwxsgumgz.jpeg?q=70",
		price: 12199,
	},
	{
		name: "Apple Iphone 12",
		rating: 4.6,
		image_url: "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",
		price: 59999,
	},
	{
		name: "APPLE iPhone 12 Mini",
		rating: 4.5,
		image_url: "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
		price: 49999,
	},
	{
		name: "OPPO A12",
		rating: 3.8,
		image_url: "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/q/g/g/oppo-a12-cph2083-original-imafsh2hfkyamqyt.jpeg?q=70",
		price: 9490,
	},
	{
		name: "ASUS ROG Phone 3",
		rating: 4.9,
		image_url: "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
		price: 46999,
	},
	{
		name: "DIZO Star 300",
		rating: 3.4,
		image_url: "https://rukminim1.flixcart.com/image/312/312/kqpj4i80/mobile/e/i/r/star-300-dh2001-dizo-original-imag4nmpv7zahzs2.jpeg?q=70",
		price: 1299,
	},
	{
		name: "Micromax IN Note 1 ",
		rating: 4.4,
		image_url: "https://rukminim1.flixcart.com/image/312/312/ku5ufm80/mobile/v/t/1/in-note-1-e7746-micromax-original-imag7cdgz6tqychm.jpeg?q=70",
		price: 10999,
	},
	{
		name: "SAMSUNG Galaxy Z Fold3 5G",
		rating: 4,
		image_url: "https://rukminim1.flixcart.com/image/312/312/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
		price: 149999,
	},
];

let products = JSON.stringify(data);

localStorage.setItem("product_details", products);

let product_list = document.getElementById("products_list");

let data_array = JSON.parse(localStorage.getItem("product_details"));

const sort_item = (sort_by) => {
	if (sort_by === "price_high_to_low") {
		data_array = data_array.sort((a, b) => b.price - a.price);
	} else if (sort_by === "price_low_to_high") {
		data_array = data_array.sort((a, b) => a.price - b.price);
	} else if (sort_by === "ratings_high_to_low") {
		data_array = data_array.sort((a, b) => b.rating - a.rating);
	} else if (sort_by === "ratings_low_to_high") {
		data_array = data_array.sort((a, b) => a.rating - b.rating);
	} else {
		data_array = data_array;
	}

	return data_array;
};

let my_cart_items = document.getElementById("cart_num");

my_cart_items.textContent = "0";

const add_to_cart = (item_name) => {
	var existingItems = JSON.parse(localStorage.getItem("cart_items"));
	let item = data_array.filter((item) => item.name === item_name);

	if (existingItems !== null) {
		existingItems.push(item[0]);
		localStorage.setItem("cart_items", JSON.stringify(existingItems));
	} else {
		localStorage.setItem("cart_items", JSON.stringify(item));
	}

	my_cart_items.textContent = JSON.parse(localStorage.getItem("cart_items")).length;
};

const display_items = (data) => {
	data.map((item) => {
		let item_div = document.createElement("div");

		let image = document.createElement("img");
		image.src = item.image_url;

		let name_p = document.createElement("p");
		name_p.textContent = item.name;

		let rating_span = document.createElement("span");
		rating_span.textContent = item.rating;

		let price_p = document.createElement("p");
		price_p.textContent = item.price;

		let add_to_cart_btn = document.createElement("button");
		add_to_cart_btn.textContent = "ADD TO CART";
		add_to_cart_btn.addEventListener("click", () => {
			add_to_cart(item.name);
		});

		item_div.append(image, name_p, rating_span, price_p, add_to_cart_btn);

		product_list.appendChild(item_div);
	});
};





let sort_btn = document.getElementById("sort");

sort_btn.addEventListener("change", function () {
	let data = sort_item(this.value);
	product_list.textContent = "";
	display_items(data);
});


document.addEventListener("DOMContentLoaded", function () {
	display_items(data_array);
});
