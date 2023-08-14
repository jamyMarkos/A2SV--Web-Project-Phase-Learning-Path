import './AddContactForm.css'
import { FormEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddContactForm: React.FC = () => {
  // const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });


  const handleAdd:FormEventHandler<HTMLFormElement> = async (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/contacts', newContact);
      setNewContact({
        fullName: '',
        phoneNumber: '',
        email: '',
      });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewContact((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    
  return (
    <div className='form_container'>
      <h2>Add Contact</h2>
      <form onSubmit={handleAdd}>
        <label>Name:</label>
        <input
          type="text"
          required
          name='fullName'
          value={newContact.fullName}
          placeholder="Name"
          onChange={handleChange}
        />
        <label>Phone N<u>o</u>:</label>
        <input
            type="tel"
            required
            name='phoneNumber'
            placeholder="Phone Number"
            value={newContact.phoneNumber}
            onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type='email'
          required
          name='email'
          placeholder="jay.mark@gmail.com"
          onChange={handleChange}
          value={newContact.email}
        />
        <button type="submit">Add Contact</button>
        <Link to='/' >Go to Home</Link>
      </form>
    </div>

  )
}

export default AddContactForm