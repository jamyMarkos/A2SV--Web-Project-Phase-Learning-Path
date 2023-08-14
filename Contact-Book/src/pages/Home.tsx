import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'

const Home = () => {
  return (
    <div className="container">
        <Navbar />
        <ContactList />
        <Footer />
      </div>
  )
}

export default Home