<script>
  import Authentication from "./Authentication.svelte";

  const handleLogin = (username, password) => {};
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
