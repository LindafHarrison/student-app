window.onload = function () {

    var getStudent = document.getElementById('get-students');

    getStudent.addEventListener('click', () => {
        fetch('/allStudents').then((res) => res.json()).then((data) => {
            var studentList = document.getElementById('student-list')
            data.forEach(eachStudent => {
                var li = document.createElement('li')
                li.setAttribute('id', eachStudent._id)
                var span = document.createElement('span')
                li.appendChild(span)
                span.innerHTML = eachStudent.name + "    " + eachStudent.age
                studentList.appendChild(li)
                var button = document.createElement('button')
                var update = document.createElement('button')
                update.innerHTML = "+"
                button.innerHTML = "DELETE"
                li.appendChild(button)
                li.appendChild(update)

                button.addEventListener('click', () => {
                    var _id = {
                        _id: li.id
                    }
                    fetch("/deleteStudent" , {
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        method: 'DELETE',
                        body: (JSON.stringify(_id))
                    })
                    li.remove()
                });

                update.addEventListener('click', () => {
                    var updated = {
                        _id: li.id,
                        age: eachStudent.age += 1
                    }
                    
                    fetch("/updateStudent", {
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        method: 'PATCH',
                        body: (JSON.stringify(updated))
                    })

                    span.innerHTML = eachStudent.name + "    " + eachStudent.age
    
                })

            })
        })
    })

    // <button id="delete-student">Delete Student</button>

    var addStudent = document.getElementById('add-student');
    var addName = document.getElementById('name');
    var addAge = document.getElementById('age');
    var student = {
        name: addName.value,
        age: addAge.value
        }

    addStudent.addEventListener('click', function() {
        fetch('/addStudent', {
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(student)
        }).then(response => response.json())

        document.getElementById("student-create").reset()
    })
}



