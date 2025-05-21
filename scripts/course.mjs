const byuiCourse = {
  code: "WDD231",
  name: "Web Frontend Development I",
  sections: [
    { sectionNumber: 1, enrolled: 91, roomNum: "STC 353", instructor: "Brother Bingham" },
    { sectionNumber: 2, enrolled: 81, roomNum: "STC 347", instructor: "Sister Shultz" },
    { sectionNumber: 3, enrolled: 95, roomNum: "STC 103", instructor: "Sister Smith" }
  ],
  changeEnrollment(sectionNum, add = true) {
    const section = this.sections.find(sec => sec.sectionNumber === parseInt(sectionNum));
    if (section) {
      section.enrolled += add ? 1 : -1;
    }
  }
};

export default byuiCourse;
