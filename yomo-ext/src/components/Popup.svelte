<script>
  import CustomButton from './CustomButton.svelte';

  // Function to handle button clicks
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add your custom logic here
  };
</script>

<div>
  <!-- Use the CustomButton component with custom text and onClick handler -->
  <CustomButton text="Click me!" on:click={handleButtonClick} />
</div>