import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/chad-cn/accordion';
import Headers from '../ui/headers';
import SectionContainer from '../ui/sectionContainer';

function FaqSection() {
  return (
    <SectionContainer>
      <div className="pt-4 text-center">
        <Headers size="xxl">FAQ</Headers>
      </div>
      <div className="p-8">
        <Accordion
          type="single"
          collapsible
          className="mx-auto flex max-w-6xl flex-col gap-2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-md bg-card px-4">
              is it free?
            </AccordionTrigger>
            <AccordionContent className="border-t-2 border-t-border bg-card px-4 pt-2">
              Yes, all the doctors here are volunteers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="rounded-md bg-card px-4">
              This application does not help
            </AccordionTrigger>
            <AccordionContent className="border-t-2 border-t-border bg-card px-4 pt-2">
              Kill your self
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="rounded-md bg-card px-4">
              i am a suicidal, what should i do?
            </AccordionTrigger>
            <AccordionContent className="border-t-2 border-t-border bg-card px-4 pt-2">
              why should i care? die please
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="rounded-md bg-card px-4">
              i feel depressed
            </AccordionTrigger>
            <AccordionContent className="border-t-2 border-t-border bg-card px-4 pt-2">
              Press <strong>&apos; F &apos;</strong> to pay respect
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SectionContainer>
  );
}

export default FaqSection;
