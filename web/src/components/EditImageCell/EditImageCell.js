export const QUERY = gql`
  query FindEditImageQuery($id: Int!) {
    editImage: editImage(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ editImage }) => {
  return <div>{JSON.stringify(editImage)}</div>
}
