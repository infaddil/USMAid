import ListDetails from '@/components/Map/ListDetails'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  

  return <ListDetails />
}

export default Post