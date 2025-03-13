import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import Image from "next/image";
import backimg from "@/assets/building.jpg";

export default function Faq() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 mb-8">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt
                        </p>

                        <Accordion type="single" collapsible className="w-full">
                            {["What are the costs to buy a house?",
                                "How can I get a mortgage?",
                                "What should I consider before buying a home?",
                                "Are there additional hidden costs?",
                            ].map((question, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left no-underline hover:no-underline focus:no-underline">
                                         {question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        The costs of buying a house typically include the down payment, closing costs, inspection fees,
                                        appraisal fees, and ongoing costs like property taxes, homeowners insurance, and maintenance.
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div>
                        <Image
                            src={backimg}
                            alt="House with pool"
                            width={600}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
