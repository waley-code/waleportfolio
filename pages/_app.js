import NavBar from 'src/components/NavBar'
import 'src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
  );
}
