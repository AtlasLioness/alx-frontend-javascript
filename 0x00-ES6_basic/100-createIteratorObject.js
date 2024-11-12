export default function createIteratorObject(report) {
  function* employeeNames() {
    for (const dep in report.allEmployees) {
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, dep)) {
        for (const item of report.allEmployees[dep]) {
          yield item;
        }
      }
    }
  }
  return employeeNames();
}
