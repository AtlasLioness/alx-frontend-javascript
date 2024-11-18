export default function getStudentIdsSum(studentList) {
  const initialValue = 0;
  const idList = studentList.map((student) => student.id);
  return idList.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
  );
}
