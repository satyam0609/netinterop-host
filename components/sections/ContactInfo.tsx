"use client";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import { supportContactPageData } from "@/constant/data";
import { sendEmail } from "@/utils/email-service";
import React, { useState } from "react";
import toast from "react-hot-toast";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const ContactInfo = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // ✅ Handle input change + clear error
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ✅ Validation
  const validate = (): FormErrors => {
    const errors: FormErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.replace(/[^\d+]/g, "");
    const message = form.message.trim();

    if (!name) errors.name = "Name is required";

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!message) errors.message = "Message is required";

    return errors;
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        title: "Support Request",
      });

      toast.success("Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contactDetails"
      className="w-full bg-cover h-full md:py-20 py-10 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.98)_27.61%,_rgba(3,_124,_60,_0.3)_100%),url('/background/contact_2.jpg')]"
    >
      <div className="w-full flex flex-col md:flex-row items-start justify-between px-6 md:px-20 lg:px-25 max-w-360 mx-auto gap-10">
        <div className="md:w-1/2 sm:w-full">
          <FadeIn>
            <h3 className="text-primary font-semibold sm:text-[54px] text-4xl mb-2">
              Get in Touch
            </h3>
          </FadeIn>
          <FadeIn>
            <p className="text-primary font-medium sm:text-xl text-lg leading-[180%]">
              We’d love to hear from you. Please fill out the from{" "}
              <br className="xl:block hidden sm:block md:hidden" />
              below and we’ll get back to you as soon as possible
            </p>
          </FadeIn>
          <div className="flex flex-col justify-between gap-5 mt-10">
            {supportContactPageData.map((item, idx) => (
              <FadeIn
                key={item.id}
                delay={0.1 + idx * 0.1}
                className="bg-main md:max-w-xl w-full rounded-md"
              >
                <ContactCard
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 md:max-w-xl w-full">
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="bg-main shadow-[2px_8px_22px_2px_#6969844D] p-6 rounded-md"
            >
              <h5 className="text-primary font-medium sm:text-[28px] text-2xl mb-2">
                Email Support
              </h5>
              <p className="text-tertiary sm:text-xl text-lg">
                Fill out the from below and our team will get{" "}
                <br className="xl:block hidden sm:block md:hidden" />
                back to you shortly.
              </p>

              <div className="flex flex-col gap-4 mt-6">
                {/* Name */}
                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Phone <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="text-primary sm:text-xl text-lg">
                    Massage <span className="text-[#FF0000]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-md border-[1px_#1E1E1E1A] bg-slate outline-none my-3 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}

                  <Button
                    type="submit"
                    title={loading ? "Sending..." : "Send Message"}
                    disabled={loading}
                    className="py-3 rounded-md text-center bg-green w-full text-main my-5"
                  />
                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
