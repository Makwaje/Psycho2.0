import SectionContainer from "@/components/ui/SectionContainer";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/chad-cn/tabs";

function TabSection() {
  return (
    <SectionContainer>
      <div>
        <Tabs
          defaultValue="account"
          className="flex items-center justify-around"
        >
          <TabsList className="flex h-auto flex-col items-start justify-around gap-52">
            <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
            <TabsTrigger value="depression">Depression</TabsTrigger>
            <TabsTrigger value="pstd">PTSD</TabsTrigger>
            <TabsTrigger value="existential-stress">
              Existential Stress
            </TabsTrigger>
          </TabsList>

          <div className="w-44">
            <TabsContent value="anxiety">
              Anxiety is a feeling of worry, nervousness, or unease, typically
              about an imminent event or something with an uncertain outcome -
              It is a normal human emotion that everyone experiences from time
              to time. However, if anxiety is severe or persistent, it can
              interfere with daily life and may indicate an anxiety disorder.
            </TabsContent>
            <TabsContent value="depression">
              Depression is a common and serious medical illness that negatively
              affects how you feel, the way you think and how you act.
              Fortunately, it is also treatable. Depression causes feelings of
              sadness and/or a loss of interest in activities you once enjoyed.
              It can lead to a variety of emotional and physical problems and
              can decrease your ability to function at work and at home.
            </TabsContent>
            <TabsContent value="pstd">
              Post-traumatic stress disorder (PTSD) is a mental disorder that
              can develop in people who have experienced or witnessed a
              traumatic event. A traumatic event is an event that is terrifying,
              shocking, or dangerous. Some examples of traumatic events include
              war, natural disasters, car accidents, sexual assault, and
              physical abuse.
            </TabsContent>
            <TabsContent value="existential-stress">
              Existential stress, also known as existential anxiety or dread, is
              a type of anxiety that arises from contemplating the meaning of
              life, death, and one's place in the universe. It can manifest as
              feelings of unease, fear, or doubt about one's existence, purpose,
              and value. Unlike everyday anxieties or worries, existential
              stress stems from fundamental questions about the nature of
              reality and our place within it.
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </SectionContainer>
  );
}

export default TabSection;
