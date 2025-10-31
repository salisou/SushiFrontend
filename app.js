// Seleziona tutti gli elementi con classe .read-more
document.querySelectorAll('.read-more').forEach(button => {

  // Aggiunge un "ascoltatore" per l'evento click
  button.addEventListener('click', () => {

    // Trova il testo corrispondente nella card
    const text = button.closest('.card-body').querySelector('.card-text');

    // Aggiunge o rimuove la classe "expanded" per mostrare/nascondere il testo
    text.classList.toggle('expanded');

    // Cambia il testo del pulsante in base allo stato
    button.textContent = text.classList.contains('expanded') ? 'Leggi di meno' : 'Leggi di più';
  });
});

