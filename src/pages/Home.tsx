import Card from 'react-bootstrap/Card'; 
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


interface Post {
  id: number;
  title: string;
  body:string;
  userId:number;
}



export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);

    

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
          setPosts(res.data);
        }
        fetchPosts();
      }, [])

  return (
    <div className='d-flex flex-wrap p-5'>
      {posts.map(post => (
        <Card style={{ width: '18rem' }} key={post.id} className='m-4'>
        <Card.Body>
        <Link to={`/post/${post.id}`} className="text-decoration-none"><Card.Title>{post.title}</Card.Title></Link>
          <Card.Subtitle className="mb-2 text-muted">Id : {post.id}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">User Id : {post.userId}</Card.Subtitle>
          <Card.Text>
            {post.body}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}
