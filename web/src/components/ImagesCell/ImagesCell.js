export const QUERY = gql`
  query ImagesQuery {
    images {
      id
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ images }) => {
  return (
    <ul>
      {images.map((item) => {
        return <img key={item.id} src={item.url} className='cardImg' />
      })}
    </ul>
  )
}
