import React from 'react'


const Modal=(props)=>{
    let{onClose,selectedBlog,show}=props

    let modelStyle={
      display:'block',
      backgroundColor:'rgba(0,0,0,0.8)',
    }    
    console.log(selectedBlog)
    const body=selectedBlog.body.replace(/<[^>]*>/g, '');
  
    if((!show || !selectedBlog) ){
        return(null);
    }
  return (
    
    <div className="modal show fade" style={modelStyle} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
          <button type="button" className="btn-close" onClick={onClose}>
          <span  aria-hidden="true">&times;</span>
          </button>
          <img src={`https:${selectedBlog.thumb}`} className="img-fluid " />
        <div className="modal-header">
          <h5 className="modal-title">{selectedBlog.title}</h5>
        </div>
        <div className="modal-body">
          <p>{body}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Modal
