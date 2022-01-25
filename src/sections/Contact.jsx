import ContactForm from '../forms/ContactForm'

function Contact() {
  return (
    <div
      className="section bg-grey-900 bg-cover bg-center"
      name="contact"
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/shianra/image/upload/v1639497865/sha/2080Ti-min_ebqfcw.jpg)',
      }}
    >
      <div>
        <div className="container">
          <div className="w-full">
            <h2>
              <span className="highlight">contact</span>.me
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
