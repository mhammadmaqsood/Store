import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123146", 10),
        isAdmin: true   
    },
    {
        name: "John Doe",
        email: "John@example.com",
        password: bcrypt.hashSync("123146", 10),
        isAdmin: true
    },{
        name: "Jane dane",
        email: "jane@example.com",
        password: bcrypt.hashSync("123146", 10),
        isAdmin: true
    },
]

export default users
