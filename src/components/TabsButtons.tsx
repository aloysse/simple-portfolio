import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";

const TabsButtons = (props: any) => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="bg-cli-surface border border-cli-border w-full p-0 h-11 rounded-sm gap-0">
        <TabsTrigger
          value="about"
          className="
            flex-1 h-full rounded-none font-mono text-xs
            text-cli-text-muted border-r border-cli-border
            data-[state=active]:bg-cli-surface-2
            data-[state=active]:text-cli-green
            data-[state=active]:shadow-none
            hover:text-cli-text transition-colors
            rounded-tl-sm rounded-bl-sm
          "
        >
          <span className="opacity-50 mr-1">$</span> ./about.sh
        </TabsTrigger>
        <TabsTrigger
          value="portfolio"
          className="
            flex-1 h-full rounded-none font-mono text-xs
            text-cli-text-muted
            data-[state=active]:bg-cli-surface-2
            data-[state=active]:text-cli-green
            data-[state=active]:shadow-none
            hover:text-cli-text transition-colors
            rounded-tr-sm rounded-br-sm
          "
        >
          <span className="opacity-50 mr-1">$</span> ./projects.sh
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="mt-0">
        {props.about}
      </TabsContent>
      <TabsContent value="portfolio" className="mt-0">
        {props.portfolio}
      </TabsContent>
    </Tabs>
  );
};

export default TabsButtons;
