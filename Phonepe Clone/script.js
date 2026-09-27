document.addEventListener("DOMContentLoaded", () => {
    const actionButtons = document.querySelectorAll(".action-btn");

    actionButtons.forEach(button => {
        eventListener("click", () => {
            const title = button.getAttribute("data-title");
            alert(`You clicked on ${title} screen...`);
        });
    });

    navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      // Reset all items to muted text
      navItems.forEach(nav => {
        nav.classList.remove('text-purple', 'active');
        nav.classList.add('text-muted');
      });

      // Highlight clicked item
      item.classList.remove('text-muted');
      item.classList.add('text-purple', 'active');
    });
  });
});