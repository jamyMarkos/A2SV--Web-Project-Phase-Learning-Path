import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'


const Layout = ({ children }) => {
  return (
    <>
        <Nav />
        <div className='container mx-auto w-700'>
            <main className='w-[800px] mx-auto'>
                {/* <Header /> */}
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout