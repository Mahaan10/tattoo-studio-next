import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can start by submitting a booking request through our online booking form. Tell us about your idea, preferred style, placement, and any references you have. We'll review your request and get back to you with the next steps.",
  },
  {
    question: "Do I need a consultation before getting tattooed?",
    answer:
      "It depends on the project. Smaller and straightforward tattoos may not require a separate consultation, while larger, more detailed, or custom pieces usually benefit from discussing the idea with your artist beforehand.",
  },
  {
    question: "How much does a tattoo cost?",
    answer:
      "The price depends on several factors, including the size, placement, complexity, style, and estimated session time. Once we understand your project, we'll be able to give you a more accurate estimate.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins may be available depending on the day, artist availability, and the type of tattoo you're looking for. For custom or larger projects, we recommend booking in advance.",
  },
  {
    question: "Can I choose my artist?",
    answer:
      "Absolutely. We encourage you to choose an artist whose style matches your idea. You can explore our artists and their portfolios before submitting your booking request.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Get a good night's sleep, eat beforehand, stay hydrated, and wear comfortable clothing that provides easy access to the tattoo area. Avoid arriving with freshly sunburned or irritated skin.",
  },
  {
    question: "What happens after I get tattooed?",
    answer:
      "Your artist will explain the appropriate aftercare for your tattoo and provide instructions for keeping the area clean and protected while it heals. If you have any concerns during the healing process, you can contact the studio.",
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

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Questions, answered.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
              Everything you need to know before your appointment. If you
              still have questions, don't hesitate to get in touch.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
              >
                <AccordionTrigger className="py-6 text-left text-base font-medium hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default AboutFAQ;