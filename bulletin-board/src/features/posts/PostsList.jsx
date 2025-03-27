import { useSelector} from 'react-redux'
import { selectPostIds, getPostsStatus,getPostsError } from './postsSlice';
import  PostsExcerpt from './PostsExcerpt';



const PostsList = () => {
    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);



    let content;

    if(postStatus === 'loading'){
        content = <div className="loader">Loading...</div>
    } else if(postStatus === 'succeeded'){
        content = orderedPostIds.map(postId=> <PostsExcerpt key={postId} postId={postId} />)
    } else if(postStatus === 'failed'){
        content = <div>{error}</div>
    }

  return (
    <section>
        {content}
    </section>
  )
}

export default PostsList;