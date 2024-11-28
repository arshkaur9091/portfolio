import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState(""); // Tracks form submission status
  const [errorMessage, setErrorMessage] = useState(""); // Tracks error messages (if any)

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Sending...");
    setErrorMessage(""); // Clear previous errors

    const formData = new FormData(event.target);
    formData.append("access_key", "2d9712b1-fc24-469e-9cc9-01bc90e1ce60");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("Form Submitted Successfully");
        event.target.reset();
      } else {
        setErrorMessage(data.message || "An error occurred. Please try again.");
        setFormStatus("");
      }
    } catch (error) {
      setErrorMessage("Failed to submit. Check your network connection.");
      setFormStatus("");
    }
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div
          className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
          id="Contact"
        >
          <form
            onSubmit={onSubmit}
            className="mx-auto"
            style={{ maxWidth: "600px" }}
          >
            {/* Name Input */}
            <div className="mb-3">
              <label
                htmlFor="Name"
                className="form-label"
                style={{ textAlign: "left", width: "100%" }}
              >
                Your Name
              </label>
              <input
                id="Name"
                type="text"
                name="Name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label
                htmlFor="Email"
                className="form-label"
                style={{ textAlign: "left", width: "100%" }}
              >
                Your Email
              </label>
              <input
                id="Email"
                type="email"
                name="Email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-3">
              <label
                htmlFor="Message"
                className="form-label"
                style={{ textAlign: "left", width: "100%" }}
              >
                Your Message
              </label>
              <textarea
                id="Message"
                name="Message"
                className="form-control"
                rows="6"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4 d-grid">
              <Button type="submit" className="fork-btn-inner">
                {formStatus || "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
