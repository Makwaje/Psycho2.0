import SectionContainer from "@/components/ui/SectionContainer";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/chad-cn/tabs";
import Image from "next/image";

function TabSection() {
  return (
    <SectionContainer>
      <div className="h-auto bg-card">
        <Tabs defaultValue="anxiety" className="flex  flex-row gap-8">
          <TabsList className="flex h-auto flex-col items-start gap-4">
            <TabsTrigger value="anxiety" className="w-44 p-6">
              Anxiety
            </TabsTrigger>
            <TabsTrigger value="depression" className="w-44 p-6">
              Depression
            </TabsTrigger>
            <TabsTrigger value="pstd" className="w-44 p-6">
              PTSD
            </TabsTrigger>
            <TabsTrigger value="existential-stress" className="w-44 p-6">
              Existential Stress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="anxiety" className=" flex justify-around py-8">
            <p className=" w-2/3 text-base">
              Anxiety is a feeling of worry, nervousness, or unease, typically
              about an imminent event or something with an uncertain outcome -
              It is a normal human emotion that everyone experiences from time
              to time. However, if anxiety is severe or persistent, it can
              interfere with daily life and may indicate an anxiety disorder.
            </p>
            <Image src="/Asset1.svg" alt="anxiety" width={128} height={128} />
          </TabsContent>
          <TabsContent
            value="depression"
            className="-ml-8 flex justify-around py-8"
          >
            <p className=" w-2/3 text-base">
              Depression is a common and serious medical illness that negatively
              affects how you feel, the way you think and how you act.
              Fortunately, it is also treatable. Depression causes feelings of
              sadness and/or a loss of interest in activities you once enjoyed.
              It can lead to a variety of emotional and physical problems and
              can decrease your ability to function at work and at home.
            </p>
            <Image src="/Asset3.svg" alt="anxiety" width={128} height={128} />
          </TabsContent>
          <TabsContent value="pstd" className="-ml-8 flex justify-around py-8">
            <p className=" w-2/3 text-base">
              Post-traumatic stress disorder (PTSD) is a mental disorder that
              can develop in people who have experienced or witnessed a
              traumatic event. A traumatic event is an event that is terrifying,
              shocking, or dangerous. Some examples of traumatic events include
              war, natural disasters, car accidents, sexual assault, and
              physical abuse.
            </p>
            <Image src="/Asset2.svg" alt="anxiety" width={128} height={128} />
          </TabsContent>
          <TabsContent
            value="existential-stress"
            className="-ml-8 flex justify-around py-8 "
          >
            <p className=" w-2/3 text-base">
              Existential stress, also known as existential anxiety or dread, is
              a type of anxiety that arises from contemplating the meaning of
              life, death, and one&apos;s place in the universe. It can manifest
              as feelings of unease, fear, or doubt about one&apos;s existence,
              purpose, and value. Unlike everyday anxieties or worries,
              existential stress stems from fundamental questions about the
              nature of reality and our place within it.
            </p>
            <Image src="/Asset4.svg" alt="anxiety" width={128} height={128} />
          </TabsContent>
        </Tabs>
      </div>
    </SectionContainer>
  );
}

export default TabSection;
