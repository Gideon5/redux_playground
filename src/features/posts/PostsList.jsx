import { useSelector } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice'
import PostsExcerpt from './PostsExcerpt'


const PostsList = () => {

  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  // useEffect(() => {
  //   if (postStatus === 'idle') {
  //     dispatch(fetchPosts())
  //   }
  // },[postStatus, dispatch])


  let content
  if (postStatus === 'loading') {
    content = <p>"lOADING/......."</p>
  } else if (postStatus === 'succeeded') {
      const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
      content = orderedPosts.map( (post, index) => <PostsExcerpt key={post.id} post={post}/>)
  } else if (postStatus === 'failed') {
      content = <p>{error}</p>
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostsList