let qs = (f) => {
	return document.querySelector(f);
}
let c = qs("#main_menu");
let sl = document.createElement("select");
let dv = document.createElement("div");
let body = qs("body")

// Created new Element 
const t = (e) => {
	return `<option value=${e}>${e}</option>`
}

let all = ["Select Your Divition", "Dhaka", "Dinajpur", "Rajbari", "Thakurgang"]

all.map((d) => {
	let tts = t(d);
	sl.insertAdjacentHTML("beforeend", tts)
})

dv.appendChild(sl)
c.addEventListener("change", () => {
	if (c.value == "sl") {
		if (body.appendChild(dv)) {
			body.removeChild(dv)
			qs(".test").innerHTML = ""
		} else {
			console.log("hi")
		}
	} else if (c.value == "bn") {
		body.appendChild(dv)
		qs(".test").innerHTML = ""
	} else if (c.value == "in") {
		if (body.appendChild(dv)) {
			body.removeChild(dv)
		} else {
			console.log("hhf")
		}
		let msg = "NOT FOUND"
		qs(".test").innerHTML = msg
	}
})