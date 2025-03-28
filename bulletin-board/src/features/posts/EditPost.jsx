import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";

import { selectAllUsers} from "../users/usersSlice";

const EditPost = () => {
    const {postId} = useParams();
    const navigate = useNavigate();

    const post = useSelector((state)=>selectPostById(state, Number(postId)));
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.body);
    const [userId, setUserId] = useState(post.userId);
    const [requestStatus, setEditRequestStatus] = useState('idle');

    const dispatch = useDispatch();

    if(!post){
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(Number(e.target.value)); 

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSavePostClicked = async () => {
        if(canSave){
            try{
                setEditRequestStatus('pending');
                dispatch(updatePost({id: post.id, title, body: content, userId,reactions: post.reactions})).unwrap()

                setTitle('');
                setContent('');
                setUserId('');
                navigate(`/post/${post.id}`);
            }catch(err){
                console.error('Failed to save the post: ', err)
            }finally{
                setEditRequestStatus('idle');
            }
        }
    }

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const onDeletePostClicked = async () => {
        try{
            setEditRequestStatus('pending');
            dispatch(deletePost(post)).unwrap();

            setTitle('');
            setContent('');
            setUserId('');
            navigate('/');
        }catch(err){
            console.error('Failed to delete the post: ', err)
        }finally{
            setEditRequestStatus('idle');
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
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
                <textarea
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
                <button type='button' onClick={onDeletePostClicked}>
                    Delete Post
                </button>
            </form>
        </section>
    )
}


export default EditPost