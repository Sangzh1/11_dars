//1-masala
// Avtomobil ob'ekti yaratish funktsiyasi
function yangiAvtomobil(avto) {
    const yangiAvtomobil = { ...avto };
    yangiAvtomobil.yil += 1;
    return yangiAvtomobil;
}

// Avtomobil ob'ektini yaratish
const avtomobil = {
    brend: "EcoDrive Motors",
    model: "GreenTech Pro",
    yil: 2024,
    // Qolgan xususiyatlar
    // ...
};

const yangiAvtomobilObyekti = yangiAvtomobil(avtomobil);
console.log(yangiAvtomobilObyekti);

//no3
// Shape ob'ekti
function Shape(type, color) {
    this.type = type;
    this.color = color;
}

// Doira ob'ekti
function Doira(radius, type, color) {
    // Shape ob'ektini meros qilish
    Shape.call(this, type, color);

    this.shakl = "doira";
    this.radius = radius;
}

// triangle ob'ekti
function triangle(uzunlik, balandlik, type, color) {
    // Shape ob'ektini meros qilish
    Shape.call(this, type, color);

    this.shakl = "triangle";
    this.uzunlik = uzunlik;
    this.balandlik = balandlik;
}

// Doira ob'ektini yaratish
const doira = new Doira(5, "doira", "qizil");
console.log("Doira:", doira);

// triangle ob'ektini yaratish
const triangle = new triangle(8, 4, "triangle", "yashil");
console.log("triangle:", triangle);

//no_4
// BankHisob ob'ekti
function BankHisob(egasi, balans) {
    this.egasi = egasi;
    this.balans = balans;
}

// Depozit qo'shish usuli
BankHisob.prototype.depozit = function (miqdor) {
    if (miqdor > 0) {
        this.balans += miqdor;
        console.log(this.balans);
    } else {
        console.log("Salbiy miqdor kiritildi. Depozit qo'shilmadi.");
    }
};

// Pul olish usuli
BankHisob.prototype.pulOlish = function (miqdor) {
    if (miqdor > 0 && miqdor <= this.balans) {
        this.balans -= miqdor;
        console.log(this.balans);
    } else {
        console.log("Salbiy miqdor kiritildi yoki balansdan ortiq miqdor talab qilinmoqda.");
    }
};

// BankHisob ob'ektini yaratish
const bankHisobim = new BankHisob("John Doe", 1000);

// Depozit qo'shish
bankHisobim.depozit(500);
bankHisobim.pulOlish(200);
bankHisobim.pulOlish(2000);

//no_5
// Shaxs ob'ekti
function Shaxs(Ism, yosh, shahar) {
    this.Ism = Ism;
    this.yosh = yosh;
    this.shahar = shahar;
}

// Taqqoslash funktsiyasi
function shaxslarniTaqqosla(shaxs1, shaxs2) {
    const xususiyatlar1 = Object.values(shaxs1);
    const xususiyatlar2 = Object.values(shaxs2);

    // Xususiyatlar to'g'ri keladimi?
    for (let i = 0; i < xususiyatlar1.length; i++) {
        if (xususiyatlar1[i] !== xususiyatlar2[i]) {
            return false;
        }
    }

    return true;
}

// Shaxs ob'ektlari yaratish
const shaxs1 = new Shaxs("Ali");
const shaxs2 = new shaxs("aziz");