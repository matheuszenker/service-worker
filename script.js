const btnOn = document.getElementById("online");
const btnOff = document.getElementById("offline");

btnOn.onclick = function() {
  destroyWorker();

  localStorage.setItem("globalOnline", true);
  location.reload();
};

btnOff.onclick = function() {
  registerWorker();
  localStorage.setItem("globalOnline", false);
  location.reload();
};

let globalOnline = localStorage.getItem("globalOnline");

if (globalOnline == null) {
  localStorage.setItem("globalOnline", true);
  globalOnline = true;
}

document.getElementById("display").innerHTML = globalOnline;

/**
 * FUNCTIONS AREA
 */
function registerWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(function() {
      console.log("Service Worker Registered");
    });
  }
}

function destroyWorker() {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
