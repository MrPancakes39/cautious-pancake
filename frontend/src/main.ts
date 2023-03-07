const app = document.querySelector<HTMLDivElement>("#app");

fetch("http://localhost:5000/hello")
    .then((res) => res.json())
    .then((data) => (app!.innerHTML += `<p>${data?.message ?? "Something went wrong"}</p>`));

export default {};
