<script>
  // Define any necessary props for your extension
  export let text = 'Click me';
  export let onClick = () => {};

  // Function to handle button clicks
  const handleClick = () => {
    onClick();
  };
</script>

<button on:click={handleClick}>{text}</button>

<style>
  /* You can add some styles here to customize your button */
  button {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2980b9;
  }
</style>