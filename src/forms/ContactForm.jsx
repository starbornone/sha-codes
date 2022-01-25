import { Fragment, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faExclamation,
  faPaperPlane,
  faXmark,
} from '@fortawesome/pro-light-svg-icons'
import { Dialog, Transition } from '@headlessui/react'

function ContactForm() {
  const formRef = useRef()

  const [open, setOpen] = useState(false)
  const [formResult, setFormResult] = useState({})

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_6188mcn',
        'template_a4bqpie',
        formRef.current,
        'user_i7PVOmqRrqUHNV7f8ff2J'
      )
      .then(
        (result) => {
          setOpen(true)
          setFormResult({
            description: "We'll get back to you as soon as possible.",
            title: 'Message successfuly sent.',
            type: 'success',
          })
        },
        (error) => {
          setOpen(true)
          setFormResult({
            description:
              'Please copy your message into an email directed at sha.kongbrooks@gmail.com. Sorry for the inconvenience.',
            title: 'There was an error in sending this message.',
            type: 'error',
          })
        }
      )
  }

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
            defaultValue={''}
            id="message"
            name="message"
            maxLength={255}
            rows={4}
          />
        </div>
      </div>
      <div className="my-4">
        <button className="button w-full" type="submit">
          Send message
          <span className="ml-1">
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-grey-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={`inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 bg-gradient-to-r ${
                  formResult.type === 'success'
                    ? 'from-oasis-800'
                    : 'from-kobi-800'
                } to-grey-900 bg-opacity-50`}
              >
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="text-greyish-400 focus:ring-opacity-0 hover:text-greyish-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </button>
                </div>
                <div className="flex items-start">
                  <div
                    className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 ${
                      formResult.type === 'success'
                        ? 'bg-oasis-600'
                        : 'bg-kobi-600'
                    }`}
                  >
                    <div className="text-greyish-900">
                      <FontAwesomeIcon
                        icon={
                          formResult.type === 'success'
                            ? faCheck
                            : faExclamation
                        }
                        size="lg"
                      />
                    </div>
                  </div>
                  <div className="mt-2 ml-4">
                    <Dialog.Title
                      as="h3"
                      className={`text-lg leading-6 font-medium ${
                        formResult.type === 'success'
                          ? 'text-oasis-600'
                          : 'text-kobi-600'
                      }`}
                    >
                      {formResult.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-greyish-200">
                        {formResult.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </form>
  )
}

export default ContactForm
