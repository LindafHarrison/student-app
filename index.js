window.onload = function () {

var button = document.getElementById('get-students');

    button.addEventListener('click', function () {
        fetch('/allStudents').then((res) => res.json()).then((data) => {
            var studentList = document.getElementById('student-list')
            data.forEach(eachStudent => {
                var li = document.createElement('li')
                li.setAttribute('id', eachStudent._id)
                li.innerHTML = eachStudent.name + "    " + eachStudent.age
                studentList.appendChild(li)
            });
        })

    })

    
}
