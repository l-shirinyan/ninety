import '@/styles/globals.scss'
import Layout from './Layout'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page)=><Layout>{page}</Layout> )
  return getLayout(<Component {...pageProps} />)
}
