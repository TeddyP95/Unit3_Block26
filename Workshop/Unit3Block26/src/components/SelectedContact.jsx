import { useState, useEffect } from 'react'

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
        console.log("Contact Data:", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  console.log("Current contact state:", contact);

  return (
    <div>
      <p>Selected Contact ID: {selectedContactId}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  )
} 