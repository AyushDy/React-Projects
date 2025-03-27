import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(selectAllUsers)

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [userId, setUserId] = React.useState('')
    const [addRequestStatus, setAddRequestStatus] = React.useState('idle')    

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSaveClick = () => { 
        if(canSave){
            try{
               setAddRequestStatus('pending');
               dispatch(addNewPost({title, body:content, userId})).unwrap()
               setTitle('');
               setContent('');
               setUserId('');
                navigate('/')
            }catch(err){
               console.error('Failed to save the post: ', err)
            }finally{
               setAddRequestStatus('idle')
            }
        }
    }

   

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add a new post.</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input 
                type="text" 
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postAuthor">Author:</label>
            <select
                id='postAuthor'
                name='postAuthor'
                value={userId}
                onChange={onAuthorChanged}
                >
                    <option value=''></option>
                    {userOptions}
                </select>
            <label htmlFor="postContent">Post Content:</label>
            <input 
                type="text"
                id='postContent'
                name = 'postContent'
                value = {content}
                onChange={onContentChanged}
             />
             <button 
                type='button'
                onClick={onSaveClick}
                disabled={!canSave}
                >
                    Save Post
                </button>
        </form>
    </section>
  )
}

export default AddPostForm