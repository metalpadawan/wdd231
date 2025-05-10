// scripts/course.js

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
    const filterButtons = document.querySelectorAll(".filter-buttons button");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        renderCourses(filter);
      });
    });
  
    function renderCourses(filter) {
      certGrid.innerHTML = "";
  
      const filteredCourses = courses.filter(course =>
        filter === "all" || course.subject.toLowerCase() === filter
      );
  
      filteredCourses.forEach(course => {
        const btn = document.createElement("button");
        btn.textContent = `${course.subject} ${course.number}`;
        btn.classList.add(course.subject.toLowerCase());
  
        if (course.completed) {
          btn.classList.add("completed");
          btn.title = `${course.title} - Completed`;
        } else {
          btn.classList.add("incomplete");
          btn.title = `${course.title} - In Progress`;
        }
  
        certGrid.appendChild(btn);
      });
    }
  
    renderCourses("all"); // Initial load
  });
  