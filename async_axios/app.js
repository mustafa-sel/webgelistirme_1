import axios from "axios";

async function getData(number) {
    
        const {data:user } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
        const {data:post } = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + number );
            
    console.log("users: ", user);
    console.log("posts: ", post);
    }

export default getData;