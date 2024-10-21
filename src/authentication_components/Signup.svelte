<script>
  import Authentication from "./Authentication.svelte";

  const handleSignup = (event, username, password) => {
    console.log(username + " " + password);
  };
  const title = "Signup";
  const switchToLogin = `<div class="login">
          Already have an account? 
          <a href="/login">Login</a>
        </div>`;
</script>

<Authentication
  {title}
  switchAuthentication={switchToLogin}
  handleSubmit={handleSignup}
/>
