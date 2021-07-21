import { writable } from "svelte/store";

const users = writable(null);

fetch("/users")
  .then((res) => res.text())
  .then((data) => {
    let json = JSON.parse(data);
    users.set(json);
  });

export default users;
