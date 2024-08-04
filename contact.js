document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formMessage = document.getElementById('form-message');
  formMessage.classList.remove('hidden');
  formMessage.classList.add('animate__animated', 'animate__fadeIn');
  document.getElementById('contact-form').reset();
  setTimeout(() => {
      formMessage.classList.remove('animate__animated', 'animate__fadeIn');
  }, 3000); // Remove animation class after 3 seconds
});


//////////////////////slidebar 
 // slide
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-closed');
    } else {
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
    }
}
 
// slide
//////////////slidebar end
