import { useState } from "react"

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic
        console.log(formData)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-[614px] w-full md:w-1/2 p-4 bg-white shadow-formShadow rounded-md "
        >
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                >
                    Country
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-md h-32 bg-[#F5F5F5] outline-none"
                    required
                />
            </div>

            <button
                type="submit"
                className="px-5 py-[10px] bg-[#F6941E] text-white p-2 rounded-md hover:bg-[#f6951ec0] transition"
            >
                Submit
            </button>
        </form>
    )
}

export default ContactForm
