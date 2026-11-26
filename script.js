const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const message = [
    "আসসালামু আলাইকুম, আমি অফিস লাঞ্চ সার্ভিস নিতে চাই।",
    `নাম: ${formData.get("name")}`,
    `অফিস: ${formData.get("office")}`,
    `ঠিকানা: ${formData.get("addr")}`,
    `সংখ্যা: ${formData.get("count")} জন`,
    `প্ল্যান: ${formData.get("plan")}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/8801681921264?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
