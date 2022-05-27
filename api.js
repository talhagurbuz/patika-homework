import axios from "axios";

const getData = async (id) => {
  const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(data=>data);
  const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id).then(data=>data);
  console.log(users,post)
};

export default getData;