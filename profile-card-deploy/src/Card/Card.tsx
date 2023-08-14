import Avatar from '../components/Avatar'
import './Card.css'

export interface Props {
    name: string
    bio: string,
    link?: string
}

const Card = (props: Props) => {
  return (
    <div className="card__container">
        <Avatar />
        <div>
            <h3>{props.name}</h3>
            <p>{props.bio}</p>
            <a href="/">website</a>
        </div>
    </div>
  )
}

export default Card