function toggle_visibility(menugetstarted) {
  var e = document.getElementById(menugetstarted);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}