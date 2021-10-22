const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())
const port = 5000;

const users = [
    { id: 0, name: "kawser", email: "kawser@gmail.com", phone: "0154627895" },
    { id: 1, name: "Emon", email: "Emon@gmail.com", phone: "0154627895" },
    { id: 2, name: "Mansur", email: "Mansur@gmail.com", phone: "0154627895" },
    { id: 3, name: "Mahmud", email: "Mahmud@gmail.com", phone: "0154627895" },
    { id: 4, name: "Raihan", email: "Raihan@gmail.com", phone: "0154627895" },
    { id: 5, name: "Foysal", email: "Foysal@gmail.com", phone: "0154627895" },
]

app.get('/', (req, res) => {

    res.send("Hello from recap my first node ");
})

//create api
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchUsers = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchUsers)
    }
    else {
        res.send(users)

    }
})

// post data from user
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser)
    res.send(JSON.stringify(newUser))
})
// create dynamic api
app.get("/users/:id", (req, res) => {
    const id = (req.params.id);

    res.send(users[id])
})

app.listen(port, () => {
    console.log("Express from ", port);
})