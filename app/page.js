"use client"

import { useState } from "react"

export default function Home() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [query, setQuery] = useState("")
  const [message, setMessage] = useState("")
  const [consent, setConsent] = useState(false)

  const [errors, setErrors] = useState({})

  const [submitted, setSubmitted] = useState(false)

  const fieldRequired = "This field is required"

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!firstName) newErrors.firstName = fieldRequired
    if (!lastName) newErrors.lastName = fieldRequired
    if (!email) {
      newErrors.email = fieldRequired
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!query) newErrors.query = "Please select a query type"
    if (!message) newErrors.message = fieldRequired
    if (!consent) newErrors.consent = "To submit this form, please consent"

    setErrors(newErrors);
  };

  return (   
    <div className="flex items-center justify-center min-h-screen font-karla text-[16px] bg-emerald-50">
      

      <form
        onSubmit={handleSubmit}
        className="p-6 mx-6 w-full lg:w-[600px] bg-white rounded-2xl shadow"
      >
        <div className="flex flex-col gap-6">

          {submitted && (<div className="h-[100px] w-[450px] absolute top-30 right-200 border-white bg-black text-white rounded-md text-center"> 
              <p> Message Sent!</p>
              <p> Thanks for completing the form. We'll be in touch soon! </p>
            </div>)}

          <h1 className="text-2xl font-bold">Contact Us</h1>

          <div className="flex flex-col lg:flex-row gap-6 w-full">

            <div className="flex flex-col  gap-1 lg:w-[50%]">
              <label>First Name *</label>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className={`p-2 rounded-md border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-emerald-500 outline-none`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 lg:w-[50%]">
              <label>Last Name *</label>
              <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className={`p-2 rounded-md border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-emerald-500 outline-none`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label>Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`p-2 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-emerald-500 outline-none`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label>Query Type *</label>
            <div className="flex flex-col lg:flex-row gap-4">
              <label
                className={`p-2 flex items-center border rounded-md cursor-pointer lg:w-[50%] ${
                  query === "general" ? "border-emerald-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="query"
                  value="general"
                  checked={query === "general"}
                  onChange={e => setQuery(e.target.value)}
                  className="mr-2"
                />
                General Enquiry
              </label>
              <label
                className={`p-2 flex items-center border rounded-md cursor-pointer lg:w-[50%] ${
                  query === "support" ? "border-emerald-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="query"
                  value="support"
                  checked={query === "support"}
                  onChange={e => setQuery(e.target.value)}
                  className="mr-2"
                />
                Support Request
              </label>
            </div>
            {errors.query && (
              <p className="text-sm text-red-500">{errors.query}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label>Message *</label>
            <textarea
              rows="4"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={`p-2 rounded-md border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-emerald-500 outline-none`}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <input
                id="consent"
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                className="rounded border-gray-300 focus:ring-emerald-500"
              />
              <label htmlFor="consent">
                I consent to being contacted by the team *
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-500">{errors.consent}</p>
            )}
          </div>

          <button
            onClick={()=>setSubmitted(true)}
            type="submit"
            className="py-2 w-full bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
