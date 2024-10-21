<script>
  export let title = "";
  export let switchAuthentication = ""; // html
  export let handleSubmit;

  let username = "";
  let password = "";
</script>

<div class="login-container">
  <h2>{title}</h2>
  <input type="text" placeholder="Username" bind:value={username} />
  <input type="password" placeholder="Password" bind:value={password} />
  <button on:click={handleSubmit(event, username, password)}>Login</button>
  <div>{@html switchAuthentication}</div>
</div>

<style>
  .login-container {
    width: 350px;
    margin: 100px auto;
    padding: 30px;
    background-color: #daeaf9; /* Light gray */
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    color: #333;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #3399ff; /* Light blue */
  }

  input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
  }

  input::placeholder {
    color: #999;
  }

  button {
    width: 100%;
    padding: 12px;
    background-color: #3399ff; /* Light blue */
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #267acc; /* Slightly darker blue on hover */
  }
</style>
