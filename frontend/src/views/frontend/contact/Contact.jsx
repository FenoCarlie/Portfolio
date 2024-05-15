import React, { createRef, useRef } from "react";
import Footer from "../../../components/Footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactList from "../../../components/ContactList";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current.from_name.value);

    if (
      (form.current.from_name.value &&
        form.current.user_email.value &&
        form.current.subject.value &&
        form.current.message.value) == ""
    ) {
      toast.warn("pleas, complete fields", {
        position: "bottom-right",
      });
    } else {
      emailjs
        .sendForm("service_hbyj2aq", "template_p5vvzpi", form.current, {
          publicKey: "iwNlX51VXfukbbvV-",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
            toast.success("Your message has been sent, thank you", {
              position: "bottom-right",
            });
          },
          (error) => {
            toast.warn("sorry some mistake", {
              position: "bottom-right",
            });
          }
        );
    }
  };

  return (
    <div id="contact" className="w-full h-auto">
      <div className="px-4 mb-10 flex flex-col items-center justify-center sm:px-10 lg:px-20 xl:px-30">
        <section className="flex flex-col w-full justify-center items-center">
          <h1 className="text-2xl md:text-4xl text-white">Contact</h1>
          <div className="flex flex-col mb-10 h-[10px] items-center w-full justify-between">
            <div className="bg-yellowClaire xl:w-[20%] lg:w-[25%] w-[50%] h-[2px]"></div>
            <div className="bg-yellowClaire xl:w-[15%] lg:w-[20%] w-[40%] h-[2px]"></div>
          </div>
        </section>
        <section className="h-full flex flex-col items-center w-full md:w-[90%] mt-4">
          <section className="w-[75%] h-full flex flex-col items-center md:flex-row justify-between">
            <div className="w-[50vh] relative bg-greyOpac rounded p-4">
              <div className="border-2 border-yellowClaire p-3">
                <ContactList />
              </div>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center p-3 rounded w-[55vh] md:h-[60vh]"
            >
              <div className="item-center justify-center w-full h-full flex-col flex ">
                <span className="flex w-full flex-row px-10 mt-3 mb-3">
                  <span className="flex flex-col w-full">
                    <label className="mb-1 text-white">Full name</label>
                    <input
                      name="from_name"
                      className="py-2 px-3 text-md focus:outline-none border-yellowClaire border-2 rounded bg-grey1 text-black"
                      type="text"
                    />
                  </span>
                </span>
                <span className="flex w-full flex-row px-10 mt-3 mb-3">
                  <span className="flex flex-col w-full">
                    <label className="mb-1 text-white">Email</label>
                    <input
                      name="user_email"
                      className="py-2 px-3 text-md focus:outline-none border-yellowClaire border-2 rounded bg-grey1 text-black"
                      type="mail"
                    />
                  </span>
                </span>
                <span className="flex w-full flex-row px-10 mt-3 mb-3">
                  <span className="flex flex-col w-full">
                    <label className="mb-1 text-white">Subject</label>
                    <input
                      name="subject"
                      className="py-2 px-3 text-md focus:outline-none border-yellowClaire border-2 rounded bg-grey1 text-black"
                      type="mail"
                    />
                  </span>
                </span>
                <span className="flex w-full flex-row px-10 mt-3">
                  <span className="flex flex-col w-full">
                    <label className="mb-1 text-white">Message</label>
                    <textarea
                      name="message"
                      className="py-2 px-3 text-md focus:outline-none border-yellowClaire border-2 rounded overflow-auto h-48 bg-grey1 text-black"
                    ></textarea>
                  </span>
                </span>
                <span className="flex w-full flex-row px-10 mt-3">
                  <span className="flex flex-col w-full">
                    <button
                      type="submit"
                      value="Send"
                      className="text-black mt-4 p-3 text-lg hover:bg-yellowClaire1 bg-yellowClaire"
                    >
                      Send
                    </button>
                  </span>
                </span>
              </div>
            </form>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
