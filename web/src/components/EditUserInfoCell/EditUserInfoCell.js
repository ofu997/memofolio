export const QUERY = gql`
  query FindEditUserInfoQuery($id: Int!) {
    editUserInfo: editUserInfo(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ editUserInfo }) => {
  return <div>{JSON.stringify(editUserInfo)}</div>
}
