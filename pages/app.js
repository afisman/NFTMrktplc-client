import { Navbar } from '@/components/componentsIndex'

import './styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <div>
        <Navbar />
        <Component{...pageProps} />
    </div>
)

export default MyApp