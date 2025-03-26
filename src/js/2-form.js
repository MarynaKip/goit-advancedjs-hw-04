let formData = { email: "", message: "" };
const localStorageKey = "gfeedback-form-state";

export function handleForm() {
  const form = document.querySelector(".feedback-form");
  if (!form) return;

  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedData) {
    formData = savedData;
    form.elements.email.value = savedData.email || "";
    form.elements.message.value = savedData.message || "";
  }

  form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
      alert("Fill please all fields");
      return;
    }

    console.log({ email, message });

    localStorage.removeItem(localStorageKey);
    formData = { email: "", message: "" };
    form.reset();
  });
  setTimeout(() => form.elements.email.focus(), 100);
}
