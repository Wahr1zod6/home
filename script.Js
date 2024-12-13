// Prompt foydalanuvchidan ism kiritishni so'raydi
let name = prompt("Ismingizni kiriting:").trim();

// Barcha harflarni chiqarish
let letters = name.split("");
alert(`Ismingizdagi harflar: ${letters.join(", ")}`);

// Ismning 2-harfi mavjudligini tekshirish
if (letters.length >= 2) {
  alert(`Ismingizning ikkinchi harfi '${letters[1]}' mavjud.`);
} else {
  alert("Ismingizda ikkinchi harf mavjud emas.");
}


