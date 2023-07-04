const shareButton = document.querySelector(".profile__share");
const socialWidget = document.querySelector(".social-widget");
const shareIcon = document.getElementById('share-icon');

shareButton.addEventListener("click", function () {
  socialWidget.classList.toggle("hidden");
  shareIcon.classList.toggle('hidden')
});
