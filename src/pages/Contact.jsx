import { useState } from "react";
import "./Contact.css";

// The shape of the form lives in one place so it's easy to see all
// the fields React state is controlling.
const initialFormState = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  message: "",
};

function Contact() {
  // React state: every input in the form is "controlled" and driven from here
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // One shared change handler — the "name" attribute on each input tells us
  // which key in formData to update.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic validation: required fields + simple format checks
  const validate = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (data.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(data.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please tell us a bit about your message.";
    }

    return newErrors;
  };

  // Handle submit event without refreshing the page
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialFormState);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section className="contact">
      <p className="contact__eyebrow">Get In Touch</p>
      <h1 className="contact__title">Contact / Register</h1>
      <p className="contact__lead">
        Questions about an order, or want to join our reader community? Fill out the form below.
      </p>

      {submitted && (
        <div className="contact__success" role="alert">
          ✅ Thank you! Your form was submitted successfully. We'll be in touch soon.
        </div>
      )}

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="contact__field">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="contact__error">{errors.fullName}</span>}
        </div>

        <div className="contact__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="contact__error">{errors.email}</span>}
        </div>

        <div className="contact__field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="contact__error">{errors.password}</span>}
        </div>

        <div className="contact__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+20 100 123 4567"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="contact__error">{errors.phone}</span>}
        </div>

        <div className="contact__field contact__field--full">
          <label htmlFor="message">Message / Address</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message or shipping address here..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="contact__error">{errors.message}</span>}
        </div>

        <button type="submit" className="contact__submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
