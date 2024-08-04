document.getElementById('sign-in-btn').addEventListener('click', function() {
  document.getElementById('sign-in-form').classList.remove('hidden');
  document.getElementById('sign-up-form').classList.add('hidden');
});

document.getElementById('sign-up-btn').addEventListener('click', function() {
  document.getElementById('sign-up-form').classList.remove('hidden');
  document.getElementById('sign-in-form').classList.add('hidden');
});

// Show Sign In form by default
document.getElementById('sign-in-form').classList.remove('hidden');



//////////////////////slidebar 
       
 
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
//////////////slidebar end