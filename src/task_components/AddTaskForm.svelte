<script>
  import { userObjectStore } from "../stores";
  import { getContext } from "svelte";

  const handleAddTask = getContext("add-task-function");
  const closeForm = getContext("close-form-function");

  let task = {
    title: "",
    status: "To Do",
    dueDate: new Date(),
    description: "",
    userId: $userObjectStore._id,
  };
</script>

<form on:submit={handleAddTask(task)}>
  <label for="title">Title (required):</label>
  <input
    type="text"
    id="title"
    bind:value={task.title}
    required
    placeholder="Enter task title"
  />

  <label for="status">Status:</label>
  <select id="status" bind:value={task.status}>
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Finished">Finished</option>
  </select>

  <label for="dueDate">Due Date (optional):</label>
  <input type="date" id="dueDate" bind:value={task.dueDate} />

  <label for="description">Description (optional):</label>
  <textarea
    id="description"
    bind:value={task.description}
    placeholder="Enter task description (optional)"
  ></textarea>

  <div class="button-container">
    <button type="submit">Add</button>
    <button on:click={closeForm}>Cancel</button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: bold;
  }

  input,
  select,
  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .button-container {
    align-items: center;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
