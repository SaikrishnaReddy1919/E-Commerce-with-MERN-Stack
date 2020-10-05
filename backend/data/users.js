import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name: 'john',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },{
        name: 'doe',
        email: 'doe@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users