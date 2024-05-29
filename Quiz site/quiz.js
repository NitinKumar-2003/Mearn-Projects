function submitQuiz() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let ans1 = document.querySelector('input[name="q1"]:checked');
    let ans2 = document.querySelector('input[name="q2"]:checked');
    let ans3 = document.querySelector('input[name="q3"]:checked');
    let ans4 = document.querySelector('input[name="q4"]:checked');

    let score = 0;

    if (ans1 && ans1.value === "b") score++;
    if (ans2 && ans2.value === "b") score++;
    if (ans3 && ans3.value === "b") score++;
    if (ans4 && ans4.value === "a") score++;

    alert("Name: " + name + "\nAge: " + age + "\nScore: " + score);
}