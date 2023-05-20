import React,{useState,useEffect} from 'react';

import Modal from './Modal';

const Blogsmain=()=> {
const [blogData,setBlogData]=useState([]);
const [search,setSearchTerm]=useState('');
const [selectedBlog, setSelectedBlog] = useState(null)
const [show,setShow]=useState(false);
     
    useEffect(()=>{
        fetch("https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=60")
        .then((response)=>response.json())
        .then((json) => setBlogData(json.data))
        .catch((error)=>console.log(error))
        },[])

    console.log(blogData)
    const handleBlogClick=(slug) => {
       fetch(`https://api.theinnerhour.com/v1/blogdetail/${slug}`)
        .then((response) => response.json())
        .then((json) => {
          setSelectedBlog(json.blog);
          setShow(true);
        })
        .catch((error) => console.log(error));
    }
    console.log((selectedBlog))
  return (
   
    <div className='container'>
      <div className='my-3 space '>
        <h2 className='text-left'>{search!==''?`Showing results for:${search}`: 'All Articles'}</h2>
        <div>
          <input className="search" type="search" onChange={(event)=>setSearchTerm(event.target.value)} placeholder="Search" aria-label="Search"/>
          <i className="fa-solid fa-magnifying-glass  button"></i>
        </div>
      </div> 

    <div className='row'>
    {blogData.filter((item)=>{
      if(search===""){
        return item
      }else if( item.title.toLowerCase().includes(search.toLowerCase())){
        return item
      }
    }).map((item)=>{
        return <div className="col-12 col-md-6 col-lg-4" key={item.id}  >
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}} onClick={()=>handleBlogClick(item.slug)}>
          <img src={`https:${item.thumb}`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.short_description}</p>
        </div>
        </div>
      </div>
      </div>
    })}
    </div>
   
    {show && <Modal show={show} onClose={() => setShow(false)} selectedBlog={selectedBlog}/>}

  </div>
  )
}




export default Blogsmain
 



