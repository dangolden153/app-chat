const Users =[]

const addUser =({name,room,id})=>{
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();

const existingUser = Users.find((user)=>user.name === name && user.room===room);
if (existingUser){
    return {error : 'user already exist'}
}

const user = {id, name, room};

Users.push(user)

return {user}

}


const removeUser =(id)=>{
  const index = Users.findIndex((user) => user.id === id)
if (index !== -1){
  return  Users.splice(index, 1)[0]
}
}
const getUser =(id)=>Users.find((user)=> user.id === id)


const getUserInROom =(room)=> Users.filter((user) => user.room === room)

module.exports = {addUser, removeUser, getUser, getUserInROom};