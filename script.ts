// // aget refernce to the foam display area

// const form =document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;

// //Handle from submission

// form.addEventListener('submit',(event:Event)=>{
//     event.preventDefault();//prevent page reload

//     //collect input value
//     const name = (document.getElementById('name')as HTMLInputElement).value
//     const email = (document.getElementById('email')as HTMLInputElement).value
//     const phone = (document.getElementById('phone')as HTMLInputElement).value
//     const education = (document.getElementById('education')as HTMLInputElement).value
//     const experience = (document.getElementById('experience')as HTMLInputElement).value
//     const skills = (document.getElementById('skills')as HTMLInputElement).value
   
//     //content the resume content dynamically

//     const resumeHTML =`
//     <h2><b> Editable Resume</b></h2>
//     <h2>Personal Information</h2>
//     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
//         <p><b>Email:</b><span contenteditable="true">${email}</span></p>
//     <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    
//     <h2><b>Education</b></h2>
//     <p contenteditable="true">${education}</p>

//      <h2><b>Experience</b></h2>
//     <p contenteditable="true">${experience}</p>


//  <h2><b>skills</b></h2>
//     <p contenteditable="true">${skills}</p>
    
//     `;
//     //Display the genertes resume
// if(resumeDisplayElement){
//     resumeDisplayElement.innerHTML=resumeHTML;
// }
//     else{
//         console.error('The resume display element is missing')
//     }

// })






const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

const escapeHtml = (unsafe: string): string => {
  return unsafe.replace(/[&<>"'`=\/]/g, (match) => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
      '`': '&#x60;',
      '=': '&#x3D;',
      '/': '&#x2F;',
    };
    return map[match];
  });
};

// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent page reload

  // Collect input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Escape user inputs to prevent XSS
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedEducation = escapeHtml(education);
  const escapedExperience = escapeHtml(experience);
  const escapedSkills = escapeHtml(skills);

  // Generate dynamic resume HTML
  const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h2>Personal Information</h2>
    <p><b>Name:</b><span contenteditable="true">${escapedName}</span></p>
    <p><b>Email:</b><span contenteditable="true">${escapedEmail}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${escapedPhone}</span></p>
    
    <h2><b>Education</b></h2>
    <p contenteditable="true">${escapedEducation}</p>

    <h2><b>Experience</b></h2>
    <p contenteditable="true">${escapedExperience}</p>

    <h2><b>Skills</b></h2>
    <p contenteditable="true">${escapedSkills}</p>
  `;

  // Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error('The resume display element is missing');
  }
});
