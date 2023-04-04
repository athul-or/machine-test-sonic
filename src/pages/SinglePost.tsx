import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function SinglePost() {
    const  id  = useParams();
    const [title,setTitle] = useState();
    const [body,setBody] = useState();
    const [userid,setUserId] = useState();
    
    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id.postId}`)
          setTitle(res.data.title);
          setBody(res.data.body);
          setUserId(res.data.userId);
        }
        getPost();
      }, [])

  return (
    <div className='p-3 d-flex align-items-center justify-content-center'>
        <Card className="text-center">
      <Card.Header>Id : {id.postId}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {body}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">User ID :{userid}</Card.Footer>
    </Card>
    </div>
  )
}
