export const QUERY = gql`
  query FindImageQuery($id: Int!) {
    image: image(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ image }) => {
  return <div>{JSON.stringify(image)}</div>
}
