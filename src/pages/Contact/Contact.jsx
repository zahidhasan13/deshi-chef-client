
const Contact = () => {
    return (
        <section>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h2 className="mb-4 text-4xl font-bold text-center">
            Contact <span className="text-green-500">Us</span>
          </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send message</button>
      </form>
  </div>
</section>
    );
};

export default Contact;