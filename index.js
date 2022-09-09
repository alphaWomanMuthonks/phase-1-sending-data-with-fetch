// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
        name: name,
        email: email
    })
    })
    .then(res => res.json())
    .then(data => {
        const myid = data["id"]
        const body = document.querySelector("body")
        body.innerHTML = myid
    })
    .catch(error => {
        alert("Unauthorized Access");
        document.body.innerHTML = error.message
    })
}
