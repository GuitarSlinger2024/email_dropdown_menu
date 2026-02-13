import { useEffect, useState } from 'react'
import './styles/app.css'
import Dropdown from './components/Dropdown'

function App({ mode }) {
  const [currentEmail, setCurrentEmail] = useState('')
  const [emailOptions, setEmailOptions] = useState([
    'what@ever.com',
    'who@played.first',
    'this_is_an_example_of_a_really_long_email_address@domain.name'
  ])

  useEffect(() => {
    if (!currentEmail) return
    console.log(currentEmail)
    const opts = emailOptions.filter(x => x)
    if (currentEmail) opts.push(currentEmail)
    if (!emailOptions.includes(currentEmail)) {
      setEmailOptions(opts)
      updateEmails(opts)
    }
  }, [currentEmail])

  //  email options can also be updated from Dropdown.jsx

  function updateEmails(addresses) {
    //  This is where a fetch can be used to access backend
    console.log(
      '%cList of addresses:',
      'text-decoration: underline; font-weight: 700'
    )
    console.log(addresses)
  }

  return (
    <main id="main">
      <h2 className='title'>Email dropdown</h2>
      <Dropdown
        placeHolder={'Ender or Choose an email address'}
        options={emailOptions}
        setOptions={setEmailOptions}
        currentOpt={currentEmail}
        setCurrentOpt={setCurrentEmail}
        updateDb={updateEmails}
        emptyMsg={'No email addresses have been entered'}
        className={'email'}
      />
      <br />
      <p className='text'>
        You can pick an email in the dropdown list, or add to the list by typing in a new email address.
        Really long email addresses can be seen in full in the input field when the input is focussed.
      </p>
      <p className='text'>
        This app provides complete CRUD operations to maintain a short list of email addresses, like for sending bulk invitations to a party (birthday, office, neighborhood, etc.).
        It should be easy to apply any database technology that you are familiar with.
      </p>
      <h3 id='errorMsg'>Incorrect email format</h3>
    </main>
  )
}

export default App
