function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
  
    var students = [];
  
    for (var i = 0; i < numberOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  var classRoom = createClassRoom(10);
  
  // Test the functions
  console.log(classRoom[0]()); // Should display: 1
  console.log(classRoom[3]()); // Should display: 4
  console.log(classRoom[9]()); // Should display: 10
  