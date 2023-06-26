const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", formatPhoneNumber);
export function formatPhoneNumber() {
  const input = phoneInput.value.replace(/\D/g, "").substring(0, 10); // Remove non-digit characters and limit to 10 digits
  const areaCode = input.substring(0, 3);
  const middlePart = input.substring(3, 6);
  const lastPart = input.substring(6, 10);
  if (input.length > 6) {
    phoneInput.value = `(${areaCode}) ${middlePart}-${lastPart}`;
  } else if (input.length > 3) {
    phoneInput.value = `(${areaCode}) ${middlePart}`;
  }
}
