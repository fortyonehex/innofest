let pw_show = document.getElementById("password_show");
let addr_show = document.getElementById("address_show");
let addr_chng = document.getElementById("address_change");
let tel_show = document.getElementById("tel_show");
let tel_change = document.getElementById("tel_change");
let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");

let address_submit = document.getElementById("address_submit");
let tel_submit = document.getElementById("tel_submit");

let pw_field = document.getElementById("password");
let addr_field = document.getElementById("address");
let tel_field = document.getElementById("tel");

let pw = "9684";
var addr = "1 Technology Dr Singapore 138572";
var tel = "8014 1255"
homeAddr = addr;

var pw_showing = false;
var addr_showing = false;
var tel_showing = false;

let is_map = true;

pw_show.addEventListener("touchend", () => {
    pw_showing = !pw_showing;
    if (pw_showing) {
        pw_field.innerText = pw;
    } else {
        pw_field.innerText = "****";
    }
});

addr_show.addEventListener("touchend", () => {
    addr_showing = !addr_showing;
    if (addr_showing) {
        addr_field.innerText = addr;
    } else {
        addr_field.innerText = "**************";
    }
});

tel_show.addEventListener("touchend", () => {
    tel_showing = !tel_showing;
    if (tel_showing) {
        tel_field.innerText = tel;
    } else {
        tel_field.innerText = "**** " + tel.substring(5);
    }
});

addr_chng.addEventListener("touchend", () => {
    document.getElementById("main").classList.add("invisible")
    document.getElementById("address_chng").classList.remove("invisible")
    document.getElementById("tel_chng").classList.add("invisible")
});

tel_change.addEventListener("touchend", () => {
    document.getElementById("main").classList.add("invisible")
    document.getElementById("tel_chng").classList.remove("invisible")
    document.getElementById("address_chng").classList.add("invisible")
});

back1.addEventListener("touchend", () => {
    console.log("back")
    document.getElementById("address_chng").classList.add("invisible")
    document.getElementById("tel_chng").classList.add("invisible")
    document.getElementById("main").classList.remove("invisible")
});

back2.addEventListener("touchend", () => {
    console.log("back")
    document.getElementById("address_chng").classList.add("invisible")
    document.getElementById("tel_chng").classList.add("invisible")
    document.getElementById("main").classList.remove("invisible")
});

address_submit.addEventListener("touchend", () => {
    let new_address = document.getElementById("naddr").value;
    let retype_address = document.getElementById("raddr").value;
    let password = document.getElementById("pass_addr").value;

    if (new_address === "") {
        document.getElementById("addr_error").classList.remove("invisible")
        document.getElementById("addr_error").innerText = "Addresses cannot be blank"
    } else if (new_address !== retype_address) {
        document.getElementById("addr_error").classList.remove("invisible")
        document.getElementById("addr_error").innerText = "Addresses do not match up"
    } else if (password !== pw) {
        document.getElementById("addr_error").classList.remove("invisible")
        document.getElementById("addr_error").innerText = "Password incorrect"
    } else {
        addr = new_address;
        document.getElementById("addr_error").classList.add("invisible")
        document.getElementById("address_chng").classList.add("invisible")
        document.getElementById("main").classList.remove("invisible")
        document.getElementById("naddr").value = "";
        document.getElementById("raddr").value = "";
        document.getElementById("pass_addr").value = "";
        if (addr_showing) {
            addr_field.innerText = addr;
        } else {
            addr_field.innerText = "**************";
        }
        homeAddr = addr;
    }
})

tel_submit.addEventListener("touchend", () => {
    let new_tel = document.getElementById("ntel").value;
    let retype_tel = document.getElementById("rtel").value;
    let password = document.getElementById("pass_tel").value;
    let phoneRegex = new RegExp("^[0-9]{4} [0-9]{4}$")

    if (!phoneRegex.test(new_tel)) {
        document.getElementById("tel_error").classList.remove("invisible")
        document.getElementById("tel_error").innerText = "Valid telephone number not provided, must be in the format \"xxxx xxxx\""
    } else if (new_tel !== retype_tel) {
        document.getElementById("tel_error").classList.remove("invisible")
        document.getElementById("tel_error").innerText = "Phone numbers do not match up"
    } else if (password !== pw) {
        document.getElementById("tel_error").classList.remove("invisible")
        document.getElementById("tel_error").innerText = "Password incorrect"
    } else {
        tel = new_tel;
        document.getElementById("tel_error").classList.add("invisible")
        document.getElementById("tel_chng").classList.add("invisible")
        document.getElementById("main").classList.remove("invisible")
        document.getElementById("ntel").value = "";
        document.getElementById("rtel").value = "";
        document.getElementById("pass_tel").value = "";
        if (tel_showing) {
            tel_field.innerText = tel;
        } else {
            tel_field.innerText = "**** " + tel.substring(5);
        }
        document.getElementById("call-the-police").href = "tel:" + tel;
    }
})

function pee() {
    if (is_map) {
        document.querySelector("#settings-cog").classList.add("invisible")
        document.querySelector("#settings-map").classList.remove("invisible")

        document.querySelector(".content").classList.add("invisible")
        document.querySelector(".content-settings").classList.remove("invisible")

        document.querySelector(".bar.footer").classList.add("invisible")
    } else {
        document.querySelector("#settings-map").classList.add("invisible")
        document.querySelector("#settings-cog").classList.remove("invisible")

        document.querySelector(".content-settings").classList.add("invisible")
        document.querySelector(".content").classList.remove("invisible")
        
        document.querySelector(".bar.footer").classList.remove("invisible")
    }
    is_map = !is_map
}