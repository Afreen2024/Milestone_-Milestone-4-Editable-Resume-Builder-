// aget refernce to the foam display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle from submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //content the resume content dynamically
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h2><b>Education</b></h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n     <h2><b>Experience</b></h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n\n <h2><b>skills</b></h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    \n    ");
    //Display the genertes resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
