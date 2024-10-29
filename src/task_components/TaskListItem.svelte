<script>
  import { getContext } from "svelte";

  export let task;
  const handleDeleteTask = getContext("delete-task-function");
  let isDescriptionVisible = false;

  const parseDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const getStatusClass = (status) => {
    if (status == "To Do") {
      return "to-do";
    } else if (status == "In Progress") {
      return "in-progress";
    } else {
      return "completed";
    }
  };
</script>

<div class="task-item">
  <div class="task-header">
    <div>
      <h3>{task.title}</h3>
      <p>Due: {parseDate(task.dueDate)}</p>
    </div>
    <p class="status {getStatusClass(task.status)}">{task.status}</p>
    <i class="fas fa-trash" on:click={handleDeleteTask(task._id)}></i>
  </div>

  {#if isDescriptionVisible}
    <div class="description">
      <p>{task.description}</p>
    </div>
  {/if}
</div>

<style>
  .task-item {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #f0f4f8; /* Light gray */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3399ff; /* Light blue */
  }

  i:hover {
    color: darkblue;
    cursor: pointer;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  .description {
    margin-top: 10px;
    padding-left: 10px;
    font-size: 14px;
    color: #555; /* Darker gray for the description */
  }

  .status {
    font-weight: bold;
  }

  .status.to-do {
    color: red;
  }

  .status.in-progress {
    color: blue;
  }

  .status.completed {
    color: green;
  }
</style>
