document.getElementById('status').style.visibility = "hidden";
// Saves options to chrome.storage
function save_options() {
  var time = document.getElementById('time').value;
  chrome.storage.sync.set({
    desiredTime: time
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.style.visibility = "visible";
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
      status.style.visibility = "hidden";
    }, 3500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    desiredTime: 2
  }, function(items) {
    document.getElementById('time').value = items.desiredTime;
  });
}

function get_saved_time() {
  // chrome.storage.sync.get({
  // }, function (items) {
  //   return items.desiredTime;
  // });
  return 1;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);