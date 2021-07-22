import { writable } from "svelte/store";

const user = writable({ id: null, name: "", loggedIn: false, isAdmin: false });

fetch("/getuser")
  .then((res) => res.text())
  .then((data) => {
    let json = JSON.parse(data);
    console.log(json);
    user.set(json);
  });

export default user;
