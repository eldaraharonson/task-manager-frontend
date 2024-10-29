import { writable } from "svelte/store";


const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
export const userObjectStore = writable(storedUser);
userObjectStore.subscribe((value) => {
    if (value) {
      localStorage.setItem('user', JSON.stringify(value));
    } else {
      localStorage.removeItem('user');
    }
  });