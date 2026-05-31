import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([])
    const [filter, setFilter] = useState('Not Approved')
   const fetchComments = async () => {
    setComments(comments_data);
   }
  return (
    <div>Comments</div>
  )
}

export default Comments