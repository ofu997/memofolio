import { useMutation } from '@redwoodjs/web'
import { QUERY } from 'src/components/ImagesCell'
import { toast } from '@redwoodjs/web/toast'
import { Trash } from 'react-bootstrap-icons'

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

const Comment = props => {
  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () =>
    {},
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const missingData = !props.user ? true : false;

  const handleDelete = id => {
    if (confirm('Delete comment?')) {
      deleteComment({variables: {id} })
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
      <p className='rc-font-size'>
        <a href={`/u/${props.comment.user.handle}`} className='link-that-does-not-look-like-a-link'>
          <span style={{ fontWeight: 500, marginRight: 10 }}>{props.comment.user.handle}</span>
        </a>
        {props.comment.body}
      </p>
      {
        // user made the comment: comment posterId = userId (check LS and uQ match)
        // image belongs to user
        // isAdmin
        (
          ( props.comment.user?.id === props.LSuser?.id && props.LSuser.localStoragePassword === props.user?.localStoragePassword )
          ||
          props.user?.images.some(image => image.id === props.comment.imageId)
          ||
          ( props.user?.isAdmin && props.LSuser.localStoragePassword === props.user?.localStoragePassword )
        ) && (
          <Trash
            onClick={() => missingData
              ? (
              toast.error("Must be logged in to delete comment")
              )
              : handleDelete(props.comment.id)
            }
            size={15}
            id='comment-delete'
          />
        )
      }
    </div>
  )
}

Comment.defaultProps = {
  user: null
}

export default Comment
