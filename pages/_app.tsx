import LanguageProvider from '../Components/locales/LanguageProvider'
import '../styles/globals.css'

import { en } from '../Components/locales/en'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  )
}

export default MyApp
