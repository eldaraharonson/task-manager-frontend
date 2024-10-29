<script>
  import Authentication from "./Authentication.svelte";
  import { userObjectStore } from "../stores";

  const handleLogin = async (event, username, password) => {
    const response = await fetch(`http://localhost:3000/api/users/${username}`);
    const userObject = await response.json();
    if (userObject.length === 0) {
      alert("User does not exist");
    } else if (userObject[0].password !== password) {
      alert("Wrong password");
    } else {
      userObjectStore.set(userObject[0]);
      window.location.href = "http://localhost:8080/tasks";
    }
  };
  const title = "Login";
  const switchToSignup = `<div class="signup">
        Don't have an account? 
        <a href="/signup">Sign up</a>
      </div>`;
</script>

<Authentication
  {title}
  switchAuthentication={switchToSignup}
  handleSubmit={handleLogin}
/>
