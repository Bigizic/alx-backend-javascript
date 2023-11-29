export default function createIteratorObject (report) {
  return (function * _ () {
    for (const departMents of Object.values(report.allEmployees)) {
      for (const emploYEE of departMents) {
        yield emploYEE;
      }
    }
  }());
}
