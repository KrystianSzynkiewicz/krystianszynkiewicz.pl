    // Get the square element
    const square = document.getElementById('animatedSquare');

    // Add click event listener
    square.addEventListener('click', () => {
      // Toggle the 'clicked' class
      square.classList.toggle('clicked');

      // Rotate the square 180 degrees on each click
      const rotation = square.classList.contains('clicked') ? 'rotate(180deg)' : 'rotate(0deg)';
      square.style.transform = rotation;
      
      const imgUslugi1 = document.getElementById('imgUslugi1');

      imgUslugi1.src = 'images/product2.png'
    });

    // Get the square element
    const square2 = document.getElementById('animatedSquare2');

    // Add click event listener
    square2.addEventListener('click', () => {
      // Toggle the 'clicked' class
      square2.classList.toggle('clicked');

      // Rotate the square 180 degrees on each click
      const rotation = square2.classList.contains('clicked') ? 'rotate(360deg)' : 'rotate(0deg)';
      square2.style.transform = rotation;
    });