import React, { Fragment, useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [open, setOpen] = useState(false);
  const [formResult, setFormResult] = useState<{
    description: string;
    title: string;
    type: "success" | "error";
  } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_6188mcn",
        "template_a4bqpie",
        formRef.current,
        "user_i7PVOmqRrqUHNV7f8ff2J"
      )
      .then(
        () => {
          setOpen(true);
          setFormResult({
            description: "We'll get back to you as soon as possible.",
            title: "Message successfully sent.",
            type: "success",
          });
        },
        () => {
          setOpen(true);
          setFormResult({
            description:
              "Please copy your message into an email directed to sha.kongbrooks@gmail.com. Sorry for the inconvenience.",
            title: "There was an error sending this message.",
            type: "error",
          });
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <div className="my-4">
        <label className="label" htmlFor="from_name">
          Name
        </label>
        <div className="mt-1">
          <input
            className="input"
            id="from_name"
            name="from_name"
            type="text"
            required
          />
        </div>
      </div>
      <div className="my-4">
        <label className="label" htmlFor="from_email">
          Email
        </label>
        <div className="mt-1">
          <input
            className="input"
            id="from_email"
            name="from_email"
            type="email"
            required
          />
        </div>
      </div>
      <div className="my-4">
        <label className="label" htmlFor="message">
          Message
        </label>
        <div className="mt-1">
          <textarea
            className="input"
            id="message"
            name="message"
            maxLength={255}
            rows={4}
            required
          />
        </div>
      </div>
      <div className="my-4">
        <button className="w-full button" type="submit">
          Send message
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-gray-500" />
            </TransitionChild>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={`inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 bg-gradient-to-r ${
                  formResult?.type === "success"
                    ? "from-oasis-800"
                    : "from-kobi-800"
                } to-gray-900`}
              >
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="text-gray-400 focus:ring-opacity-0 hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 384 512"
                    >
                      <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-start">
                  <div
                    className={`mx-auto flex-shrink-0 h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 flex items-center justify-center ${
                      formResult?.type === "success"
                        ? "bg-oasis-600"
                        : "bg-kobi-600"
                    }`}
                  >
                    <div className="text-gray-900">
                      {formResult?.type === "success" ? (
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z" />
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="ml-4 mt-2">
                    <DialogTitle
                      as="h3"
                      className={`text-lg font-medium ${
                        formResult?.type === "success"
                          ? "text-oasis-600"
                          : "text-kobi-600"
                      }`}
                    >
                      {formResult?.title}
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-gray-200">{formResult?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition.Root>
    </form>
  );
};

export default ContactForm;
