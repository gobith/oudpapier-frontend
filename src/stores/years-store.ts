import { writable } from "svelte/store";

const years = writable(null);

fetch("/years")
  .then((res) => res.text())
  .then((data) => {
    let json = JSON.parse(data);
    years.set(json);
  });

export default years;