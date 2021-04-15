import addToMailchimp from "gatsby-plugin-mailchimp"
import React, {useState, setState} from "react"

const MailChimpForm = () => {

  const [email, checkEmail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    }

const handleChange = e => {
    checkEmail(e.target.value)
  }
  console.log(email);
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Request Access"
        />
      </form>
    )

}

export default MailChimpForm
