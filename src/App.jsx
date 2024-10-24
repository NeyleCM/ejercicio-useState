import { useState } from 'react'
import './App.css'

function App() {
const [name, setName] = useState('Sofía')
const [newName, setNewName] = useState('')

const hadleNameChange = (profesor) => {
    setName(profesor)
}

const changeName = (e) => {
    e.preventDefault()
    if(newName.trim()) {
        setName(newName)
        setNewName('')
        
    }
}

return (
    <>
        <h2>Teacher name: {name}</h2>
        <form onSubmit={changeName}>
            <input 
                type='text' 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder='Add a name'
            />
            <button type='submit'>Add</button>
        </form>
        <ul>
            <li onClick={() => hadleNameChange('Data')}>Data</li>
            <li onClick={() => hadleNameChange('Reyes')}>Reyes</li>
            <li onClick={() => hadleNameChange('Soraya')}>Soraya</li>
        </ul>
    </>
)
}

export default App
