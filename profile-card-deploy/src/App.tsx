import './App.css'
import Card from './Card/Card'
import Header from "./components/Header"


type UserProfile = {
  id: number,
  name: string,
  bio: string,
  link?: string
}

const PROFILES: UserProfile[] = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'Hi, my name is John Doe and I’m a freelance web designer based in Amsterdam. I specialize in creating beautiful and functional websites for small businesses and startups',
    link: '/'
  },
  {
    id: 2,
    name: 'Jane Doe',
    bio: 'This is Jane Doe and I’m a freelance writer based in Italy. I specialize in creating engaging and informative content for businesses and individuals.',
    link: '/'
  },
  {
    id: 3,
    name: 'Josh Billy',
    bio: 'Hello I\m Josh Billy and I’m UI/UX designer, & reside in New York. Plus to that, I specialize in creating engaging and informative content for businesses and individuals.',
    link: '/'
  }

]


const App = () => {
  return (
    <div className="container">
      <Header />
      <div className='cards'>
          {
            PROFILES.map(profile => (
                <Card key={profile.id} name={profile.name} bio={profile.bio} link={profile.name ? profile.name : ''}/>
            ))
          }
      </div>

    </div>
  )
}

export default App