// Import CSS and required dependencies
import './ContactList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Contact interface for typing contact objects
interface Contact {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
}

// Define the ContactList component
const ContactList: React.FC = () => {
  // State for storing the list of contacts and the currently edited contact
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editContact, setEditContact] = useState<Contact | null>(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch contacts from the API
  const fetchData = async () => {
    try {
      const response = await axios.get<Contact[]>('http://localhost:5000/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Delete a contact by ID
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      fetchData(); // Refresh the contact list after deletion
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  // Start editing a contact
  const handleEdit = (contact: Contact) => {
    setEditContact(contact);
  };

  // Save changes to an edited contact
  const handleSave = async (id: number, updatedContact: Contact) => {
    try {
      await axios.put(`http://localhost:5000/contacts/${id}`, updatedContact);
      setEditContact(null); // Reset edit mode
      fetchData(); // Refresh the contact list after update
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  // Render the ContactList component
  return (
    <div className='contact_table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: Contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>
                {editContact && editContact.id === contact.id ? (
                  <input
                    className='edit_input'
                    type="text"
                    name="fullName"
                    value={editContact.fullName}
                    onChange={(e) =>
                      setEditContact({ ...editContact, fullName: e.target.value })
                    }
                  />
                ) : (
                  contact.fullName
                )}
              </td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                {editContact && editContact.id === contact.id ? (
                  <div className='flex_container'>
                    <button onClick={() => handleSave(contact.id, editContact)}>Save</button>
                    <button onClick={() => setEditContact(null)}>Cancel</button>
                  </div>
                ) : (
                  <div className='flex_container'>
                    <button onClick={() => handleEdit(contact)}>Edit</button>
                    <button onClick={() => handleDelete(contact.id)} className='del'>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the ContactList component
export default ContactList;
