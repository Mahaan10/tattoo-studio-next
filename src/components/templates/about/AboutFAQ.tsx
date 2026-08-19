import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How can I book a tattoo appointment?",
    answer:
      "You can start by booking a free consultation. Tell us briefly about your tattoo idea and, if available, send us reference or inspiration images. During the consultation, we'll discuss the design, style, size, placement, complexity, and your expectations. For small to medium-sized tattoos, an in-person consultation may not always be necessary. Send us your idea and the most important details, and in many cases we can offer you a short-term appointment directly.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. Our tattoo consultations are completely free. We take the time to understand your idea and work with you to develop the right approach for your tattoo.",
  },
  {
    question: "Can I come to the studio without an appointment?",
    answer:
      "Yes. You're welcome to visit us during our opening hours to arrange a consultation or tattoo appointment, or to purchase a gift voucher. On announced Walk-in Days, you can also visit without a pre-booked tattoo appointment. Available spots are allocated depending on the studio's capacity.",
  },
  {
    question: "How much does a tattoo cost?",
    answer:
      "The price depends on several factors, including the size, style, level of detail, placement, and the actual time required. Our regular hourly rate is €150 per hour, with a minimum charge of €100. During the consultation, we can give you a more accurate estimate based on your project.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer:
      "Yes. A deposit is required to secure your tattoo appointment. For smaller tattoos, the deposit is usually from €50. For medium and large projects, it is normally between €100 and €150. The exact amount will be confirmed when your appointment is arranged.",
  },
  {
    question: "Do you create custom tattoo designs?",
    answer:
      "Yes. Most of our work is individually designed or specifically adapted for each client. We consider your idea as well as the size, proportions, placement, and anatomy of the body area. Our goal isn't simply to transfer an image onto your skin, but to create a tattoo that works with your body and has its own character.",
  },
  {
    question: "Do you offer cover-up tattoos?",
    answer:
      "Yes. Cover-up tattoos are among the specialized work we offer. Because every existing tattoo is different, we recommend an in-person consultation. We'll assess the existing tattoo, its pigmentation, size, placement, and the condition of the skin before discussing the available options.",
  },
  {
    question: "How should I prepare for my tattoo appointment?",
    answer:
      "Get enough sleep the night before, eat a proper meal before your appointment, and stay well hydrated. Please avoid alcohol for at least 24 hours before your appointment. Wear comfortable clothing that gives easy access to the area being tattooed.",
  },
  {
    question: "How long does a tattoo take to heal?",
    answer:
      "The surface healing of a tattoo usually takes around 2–4 weeks. However, complete skin regeneration can take longer, and healing varies depending on the individual, the tattoo's size, style, placement, and your aftercare.",
  },
];

function AboutFAQ() {
  return (
    <section className="px-[5%] py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          {/* Heading */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Everything you need to know.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
              From booking and pricing to preparation and aftercare, here are
              answers to some of the questions we hear most often.
            </p>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>
                    {index + 1} - {item.question}
                  </AccordionTrigger>

                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* View all */}
            <div className="mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-opacity hover:opacity-60"
              >
                View all frequently asked questions
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFAQ;
