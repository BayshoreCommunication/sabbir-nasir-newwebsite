"use client";

import { send } from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

interface ContactFormState {
  name: string;
  email: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
}

const Newsletter = () => {
  const [emailForm, setEmailForm] = useState<ContactFormState>({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_hp972gm",
        "template_rztexkj",
        emailForm as unknown as Record<string, unknown>,
        "2WHr6-vL3VIe9C4Nv"
      )
        .then((response) => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for subscribing to our newsletter! You'll receive our latest insights and updates.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              email: "",
            });
            setFormErrors({});
          });
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              email: "",
            });
            setFormErrors({});
            setLoading(false);
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-2 col-span-1 w-full mt-0 md:-mt-10">
      <div className="bg-foreground rounded-2xl shadow-md p-6 md:p-8 space-y-5 transition-all duration-300 hover:shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800">
          Our <span className="text-primary">Newsletter</span>
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Stay informed with the latest insights, strategies, updates and
          receive expert tips from Team Sabbir Nasir to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-full bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 border border-gray-200 hover:border-gray-300 text-gray-500"
              name="name"
              value={emailForm.name}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  name: event.target.value,
                });
                // Clear error when user starts typing
                if (formErrors.name) {
                  setFormErrors({ ...formErrors, name: undefined });
                }
              }}
            />
            {formErrors.name && (
              <span className="text-red-500 text-sm ml-2 animate-pulse">
                {formErrors.name}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-full bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 border border-gray-200 hover:border-gray-300 text-gray-500"
              name="email"
              value={emailForm.email}
              onChange={(event) => {
                setEmailForm({
                  ...emailForm,
                  email: event.target.value,
                });
                // Clear error when user starts typing
                if (formErrors.email) {
                  setFormErrors({ ...formErrors, email: undefined });
                }
              }}
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm ml-2 animate-pulse">
                {formErrors.email}
              </span>
            )}
          </div>

          {loading ? (
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-not-allowed opacity-75"
              disabled
            >
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <span>Subscribing...</span>
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:bg-secondary transform hover:scale-105 active:scale-95"
            >
              SUBSCRIBE
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
