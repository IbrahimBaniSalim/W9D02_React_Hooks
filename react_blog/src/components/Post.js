
import React,{useState,useEffect} from 'react'


export default function Post(props) {
    const [Post, setPost] = useState([{userId:5, id:103},{title:"reactblog",body:"welcome to react blog"}])
     const [userId, setUserId] = useState(1);
      const [id, setId] = useState(100);
      const [title, setTitle] = useState("");
      const [body, setBody] = useState(" ");

      useEffect(() => {
        console.log('USERS Comp Ready');
        getData();
      }, []);

      const getData = () => {
        console.log('getData');
        
        axios
          .get(`https://jsonplaceholder.typicode.com/posts`)
          .then((response) => {
            
            console.log('DATA: ', response.data);
            
            setPost(response.data);
            
          })
          .catch((err) => {
            console.log('ERR: ', err);
          });
      };













    return (
        <div>
        {Post && Post.map((elem, i) => <p key={i}>{elem.body},{elem.title}</p>)}    
        <input
        type="number"
        placeholder="userId here"
        
      />
        <input
        type="number"
        placeholder="id here"
        
      />
       <input
        type="text"
        placeholder="title here"
        onChange={(e) => {
            setTitle(e.target.value);
          }}
        
      />  
        <input
        type="text"
        placeholder="body here"
        onChange={(e) => {
            setBody(e.target.value);
          }}
        
      />
        <button onClick={()=>{
            setPost(...Post,Post.push([{userId:{userId}, id:{id}},
                {title:{title},body:{body}}]));
        }}></button>
        </div>
    )
}
