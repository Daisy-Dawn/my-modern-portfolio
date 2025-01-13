'use client'
import { Alert, CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { ImLocation } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import { MdPhoneInTalk } from 'react-icons/md'

interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}
interface Errors {
    name: string
    email: string
    message: string
}
const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState<{
        type: 'success' | 'error'
        message: string
    } | null>(null)
    const [isValidated, setIsValidated] = useState(false)
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [formErrors, setFormErrors] = useState<Errors>({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setFormErrors({ ...formErrors, [name]: '' })

        // Dynamically update the validation state
        const isValid = validateInputs({ ...formData, [name]: value })
        setIsValidated(isValid)
    }

    const validateInputs = (data: ContactFormData = formData) => {
        const newErrors: Errors = {
            name: '',
            email: '',
            message: '',
        }

        if (data.name.trim() === '') {
            newErrors.name = 'Name is required!'
        }

        if (data.email.trim() === '') {
            newErrors.email = 'Email is required!'
        }
        if (data.message.trim() === '') {
            newErrors.message = 'Message is required!'
        }

        setFormErrors(newErrors)

        return !Object.values(newErrors).some((error) => error !== '')
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateInputs()) {
            try {
                setLoading(true)
                const response = await axios.post(
                    'https://my-modern-portfolio-ddm1.onrender.com/send-email',
                    formData,
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                )

                console.log('Contact Form response data:', response.data)

                setAlert({
                    type: 'success',
                    message: 'Message sent successfully!',
                })

                setLoading(false)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                })
            } catch (error) {
                let errorMessage = 'Error during sending form'
                if (axios.isAxiosError(error)) {
                    // AxiosError has response.data
                    errorMessage =
                        errorMessage + ': ' + error.response?.data?.message ||
                        errorMessage
                    setAlert({
                        type: 'error',
                        message: errorMessage,
                    })
                } else if (typeof error === 'string') {
                    errorMessage = error // Handle string errors
                    setAlert({
                        type: 'error',
                        message: errorMessage,
                    })
                } else if (error instanceof Error) {
                    errorMessage = error.message // Fallback for non-Axios errors
                    setAlert({
                        type: 'error',
                        message: errorMessage,
                    })
                }
                console.error('Error response:', errorMessage)
                console.error('Error fetching order progress:', error)

                setLoading(false)
            }
        } else {
            setAlert({ type: 'error', message: 'Please fill in all fields.' })
        }
    }

    const contactIconList = [
        {
            icon: <MdPhoneInTalk size={24} />,
            header: 'Call Me',
            text: '+23480 6621 0218',
        },
        {
            icon: <IoIosMail size={26} />,
            header: 'Email Address',
            text: 'agboella20@gmail.com',
        },
        {
            icon: <ImLocation size={24} />,
            header: 'Location',
            text: 'Onitsha, Anambra State, Nigeria',
        },
    ]
    return (
        <div
            id="contact"
            className="min-h-screen relative flex items-center text-white  lg:px-[5rem] md:px-[2rem] px-[1rem] py-[3rem]"
        >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[4rem]">
                {/* contact me */}
                <div className="flex flex-col gap-[4rem]">
                    <div className="flex flex-col gap-[1.5rem]">
                        <h2 className="font-playwrite text-lemonGreen text-[32px]">
                            Contact Me
                        </h2>
                        <h1 className="text-">
                            Have a project or idea? Let’s connect! Whether it’s
                            developing a full-stack web application or sleek
                            designs, I’m here to bring your vision to life.
                            {/* Got
                            a project in mind or just want to say hi? I’m always
                            open to new opportunities, whether , creating sleek
                            designs, or collaborating on something exciting.
                            Let’s connect and bring your ideas to life! */}
                        </h1>
                    </div>

                    <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
                        {/* contact */}
                        {contactIconList.map((contact, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-center"
                            >
                                <span className="bg-darkGreen flex justify-center items-center rounded-full text-foreground w-10 h-10">
                                    {contact.icon}
                                </span>

                                <div>
                                    <h5 className="text-lightGrey">
                                        {' '}
                                        {contact.header}{' '}
                                    </h5>
                                    <p> {contact.text} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* contact form */}
                <div className="flex flex-col gap-[1.5rem]">
                    <h2 className="text-[32px] font-playwrite">Drop a Line</h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-2 gap-[2rem]"
                    >
                        {/* name */}
                        <div className="col-span-2 lg:col-span-1">
                            <input
                                type="text"
                                className="rounded-md  px-[15px] py-[15px] bg-transparent w-full border-[1px] border-lightBg outline-none"
                                placeholder="Name"
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            {formErrors.name && (
                                <p className="text-red-500 text-[0.75rem]">
                                    {formErrors.name}
                                </p>
                            )}
                        </div>

                        {/* email */}
                        <div className="col-span-2 lg:col-span-1">
                            <input
                                type="email"
                                className="rounded-md px-[15px] py-[15px] bg-transparent w-full border-[1px] border-lightBg outline-none"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-[0.75rem]">
                                    {formErrors.email}
                                </p>
                            )}
                        </div>

                        {/* phone */}
                        <input
                            type="tel"
                            className="rounded-md px-[15px] col-span-2 lg:col-span-1 py-[15px] bg-transparent w-full border-[1px] border-lightBg outline-none"
                            placeholder="Phone#"
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
                        />

                        {/* subject */}
                        <input
                            type="text"
                            className="rounded-md px-[15px] col-span-2 lg:col-span-1 py-[15px] bg-transparent w-full border-[1px] border-lightBg outline-none"
                            placeholder="Subject"
                            name="subject"
                            onChange={handleChange}
                            value={formData.subject}
                        />

                        {/* message */}
                        <div className="col-span-2">
                            <textarea
                                className="rounded-md px-[15px] py-[15px] bg-transparent w-full border-[1px] border-lightBg outline-none"
                                placeholder="Message"
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                                rows={6}
                            />
                            {formErrors.message && (
                                <p className="text-red-500 text-[0.75rem]">
                                    {formErrors.message}
                                </p>
                            )}
                        </div>

                        <button
                            className={`rounded-md py-[15px] px-2 flex items-center justify-center  gap-2 lg:w-[80%] w-full   login-button-glass-background bg-opacity-30 z-50 shadow-lg ${
                                isValidated
                                    ? 'bg-[#9d377ebb]'
                                    : 'bg-[#55535523]'
                            }`}
                        >
                            <p
                                className={`${
                                    isValidated ? 'text-white' : 'text-lightBg'
                                }`}
                            >
                                Submit{' '}
                            </p>
                            {loading && (
                                <CircularProgress size={25} color="inherit" />
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {alert && (
                <div className="absolute z-50 top-3 w-full flex justify-center">
                    <Alert
                        variant="filled"
                        className="w-1/2"
                        onClose={() => setAlert(null)}
                        severity={alert.type}
                    >
                        {alert.message}
                    </Alert>
                </div>
            )}
        </div>
    )
}

export default Contact
