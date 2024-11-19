export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filteredList = studentList.filter((students) => students.location === city);
  const updatedList = filteredList.map((student) => {
    const grades = newGrades.find((grade) => grade.studentId === student.id);
    const updatedGrade = grades ? grades.grade : 'N/A';
    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedList;
}
