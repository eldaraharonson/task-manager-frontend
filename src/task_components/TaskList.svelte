<script>
  import TaskListItem from "./TaskListItem.svelte";
  import AddTaskForm from "./AddTaskForm.svelte";
  import { setContext } from "svelte";
  import { userObjectStore } from "../stores";

  let allTasks = [];
  let isFormOpen = false;

  const openForm = () => {
    isFormOpen = true;
  };

  const closeForm = () => {
    isFormOpen = false;
  };
  setContext("close-form-function", closeForm);

  const fetchTasks = async () => {
    const response = await fetch(
      `http://localhost:3000/api/tasks/${$userObjectStore._id}`
    );
    allTasks = await response.json();
  };

  const handleAddTask = async (task) => {
    debugger;
    await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchTasks();
    closeForm();
  };
  setContext("add-task-function", handleAddTask);

  const handleDeleteTask = async (taskId) => {
    if (window.confirm("Are you sure you would like to delete this task?")) {
      await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchTasks();
    }
  };
  setContext("delete-task-function", handleDeleteTask);

  fetchTasks();
</script>

<div class="task-list">
  <h2>Your To-Do List</h2>

  {#each allTasks as task}
    <TaskListItem {task} />
  {/each}
  {#if !isFormOpen}
    <button on:click={openForm}>Add Task</button>
  {:else}
    <AddTaskForm />
  {/if}
</div>

<style>
  .task-list {
    position: absolute;
    left: 250 px;
    width: 900px; /* Wider list */
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: left; /* Align list to the left */
  }

  h2 {
    color: #3399ff; /* Light blue */
    font-size: 24px;
    margin-bottom: 20px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
