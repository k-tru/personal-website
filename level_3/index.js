const textSelect= [
    // 'Hello! My name is Kien Trung from Seattle, Washington.',
    // 'Bonjour! My name is Kien Trung from Seattle, Washington.',
    // 'Ciao! My name is Kien Trung from Seattle, Washington.',
    // 'Hallo! My name is Kien Trung from Seattle, Washington.',
    // 'Xin Chào! My name is Kien Trung from Seattle, Washington.',
    // 'Nĭ hăo! My name is Kien Trung from Seattle, Washington.',
    // 'Hola! My name is Kien Trung from Seattle, Washington.',
    // 'Anyoung haseyo! My name is Kien Trung from Seattle, Washington.',
    // 'Selam! My name is Kien Trung from Seattle, Washington.',
    // 'Halo! My name is Kien Trung from Seattle, Washington.'
    "👋", "Hello!", "Aloha!", "Bonjour!", "Ciao!", "Hallo!", "Xin Chào!", "Nĭ hăo!", "Hola!", "Anyoung haseyo!", "Selam!", "Halo!", "Konnichiwa!"
  ];
   
  function getRandomText() {
      const randomIndex = Math.floor(Math.random() * textSelect.length);
      return textSelect[randomIndex];
    }
   
  function loadText() {
    const myDiv = document.getElementById('hello-text');
    myDiv.innerHTML= getRandomText();
  }
   
  window.onload = loadText;