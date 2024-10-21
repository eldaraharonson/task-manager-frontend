<script>
  import { Router, Route } from "svelte-routing";
  import { getContext } from "svelte";
  import Login from "./authentication_components/Login.svelte";
  import Signup from "./authentication_components/Signup.svelte";
</script>

<Router>
  <Route path="/" component={Login} />
  <Route path="login" component={Login} />
  <Route path="/signup" component={Signup} />
</Router>

<style>
</style>
