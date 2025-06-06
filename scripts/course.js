const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduces programming concepts including variables, loops, arrays, and I/O.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Hands-on intro to web design and development.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Learn to build and debug modular programs using functions.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Covers encapsulation, inheritance, and polymorphism in OOP.',
    technology: ['C#'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Create dynamic websites using JavaScript and DOM manipulation.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Covers UX, accessibility, performance, and APIs.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const certGrid = document.querySelector(".cert-grid");
  const creditOutput = document.getElementById("total-credits");
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const courseDetails = document.getElementById("course_details"); // Ensure this matches your <dialog> ID

  function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
      <button id="closeModal" type="button">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();

    const closeBtn = document.getElementById("closeModal");
    closeBtn.addEventListener("click", () => {
      courseDetails.close();
    });

    courseDetails.addEventListener("click", (e) => {
      const dialogDimensions = courseDetails.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        courseDetails.close();
      }
    });
  }

  function renderCourses(filter) {
    certGrid.innerHTML = "";

    const filtered = courses.filter(course =>
      filter === "all" || course.subject.toLowerCase() === filter
    );

      filtered.forEach(course => {
    const btn = document.createElement("button");
    btn.textContent = `${course.subject} ${course.number}`;
    btn.setAttribute("type", "button"); // ✅ prevent submit behavior
    btn.classList.add(course.subject.toLowerCase());

    if (course.completed) {
      btn.classList.add("completed");
      btn.title = `${course.title} - Completed`;
    } else {
      btn.classList.add("incomplete");
      btn.title = `${course.title} - In Progress`;
    }

    // ✅ This is the important part
    btn.addEventListener("click", (e) => {
      e.preventDefault();     // Prevent scrolling
      e.stopPropagation();    // Prevent bubbling up to parent elements
      displayCourseDetails(course);
    });

    certGrid.appendChild(btn);
    });

    // Total completed credits
    const completedCredits = filtered.reduce((sum, course) => {
      return course.completed ? sum + course.credits : sum;
    }, 0);

    creditOutput.textContent = `Total Completed Credits: ${completedCredits}`;
  }

  // Filter button listeners
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      renderCourses(filter);
    });
  });

  renderCourses("all"); // Initial load
});
