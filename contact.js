// Select the Contact Us button element
const contactUsBtn = document.getElementById('contact-us-btn');

// Add an event listener to the button
contactUsBtn.addEventListener('click', function() {
  // Define a function to handle the button click event
  // This function will be called when the button is clicked
  const form = document.createElement('form');
  form.setAttribute('id', 'contact-form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameLabel.appendChild(nameInput);

  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Phone Number:';
  const phoneInput = document.createElement('input');
  phoneInput.setAttribute('type', 'tel');
  phoneInput.setAttribute('name', 'phone');
  phoneLabel.appendChild(phoneInput);

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailLabel.appendChild(emailInput);

  const commentsLabel = document.createElement('label');
  commentsLabel.textContent = 'Comments:';
  const commentsTextarea = document.createElement('textarea');
  commentsTextarea.setAttribute('name', 'comments');
  commentsLabel.appendChild(commentsTextarea);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Submit';

  form.appendChild(nameLabel);
  form.appendChild(phoneLabel);
  form.appendChild(emailLabel);
  form.appendChild(commentsLabel);
  form.appendChild(submitButton);

  // Attach the form to the page
  document.body.appendChild(form);

  // Show a confirmation message
  // alert('Thank you for your interest in Dyche Consulting Services. Please fill out the contact form to get in touch with us.');
// Get the modal
var modal = document.getElementById("contact-modal");

// Get the button that opens the modal
// var btn = document.getElementById("contact-us-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});

