function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !phone || !country || !message) {
    alert("Please fill in all the mandatory fields.");
    return false;
  }


  return true;
  }

  function showAlert() {
    alert("Thank you for your message!");
  }

  function openImage(imageUrl, description) {
  document.getElementById("lightbox-image").src = imageUrl;
  document.getElementById("image-description").textContent = description;
  document.getElementById("lightbox").style.display = "block";
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}
