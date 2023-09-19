function toggleInput() {
    const dropdown = document.getElementById('gender');
    const container = document.getElementById('inputContainer');
  

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  
    // Create new input field if 'Other' is selected
    if (dropdown.value === 'Other') {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'otherGender';
      input.id = 'otherGender';
      input.placeholder = 'Type here if gender unlisted';
      container.appendChild(input);
    }
  }