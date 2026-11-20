
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="font-medium text-purple-600">
          Let's connect
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-950">
          Contact Me
        </h1>

        <p className="mt-4 text-gray-600">
          Have a project or an opportunity? I'd love to hear from you.
        </p>
      </div>

      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <ContactForm />
      </div>
    </section>
  );
}
