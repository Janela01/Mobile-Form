var mobile = /** @class */ (function () {
    function mobile(brand, model, year, price, isnew) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.isnew = isnew;
    }
    mobile.prototype.isItNew = function () {
        if (this.isnew == true) {
            return "New";
        }
        else
            return "Used";
    };
    mobile.prototype.format = function () {
        return "This Phone Is Made By ".concat(this.brand, " And Is Called ").concat(this.model, ", It Was Made In ").concat(this.year, ". The Condition Is ").concat(this.isItNew(), " And The Price Is ").concat(this.price, " $");
    };
    return mobile;
}());
if (localStorage.length == 0) {
    var text = '';
    var l = 0;
    var arr = [];
    var formater = [];
}
else {
    var text = localStorage.getItem('text');
    var l = parseInt(localStorage.getItem('Mobiles'));
    var arr = JSON.parse(localStorage.getItem('arr'));
    var formater = JSON.parse(localStorage.getItem('formater'));
}
var form = document.querySelector("#mobile");
var brand = document.querySelector("#brands");
var model = document.querySelector("#model");
var year = document.querySelector("#year");
var price = document.querySelector("#price");
var condition = document.querySelector("#condition");
document.getElementById('head').innerHTML = "Amount of Mobile Data : " + l;
var histories = document.querySelector('#history');
histories.innerHTML = "<b>" + text + "</b>";
form.addEventListener('submit', function (e) {
    e.preventDefault();
    arr[l] = new mobile(brand.value, model.value, year.valueAsNumber, price.valueAsNumber, !condition.checked);
    formater[l] = arr[l].format();
    text += "<p> * " + formater[l] + "</p>";
    histories.innerHTML = "<b>" + text + "</b>";
    model.value = '';
    year.valueAsNumber = 2022;
    price.valueAsNumber = 1000;
    brand.value = 'Samsung';
    l++;
    document.getElementById('head').innerHTML = "Amount of Mobile Data : " + l;
    localStorage.setItem('arr', "".concat(JSON.stringify(arr)));
    localStorage.setItem("formater", "".concat(JSON.stringify(formater)));
    localStorage.setItem("Mobiles", "".concat(l));
    localStorage.setItem("text", "".concat(text));
});
function whenclicked() {
    window.localStorage.clear();
    document.getElementById('history').innerHTML = '';
    text = '';
    l = 0;
    document.getElementById('head').innerHTML = 'Amount of Mobile Data : ' + l;
}
