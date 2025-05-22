import { Tabs } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";

type TabsListProp = {
  itemName: string;
  itemIcon: React.ReactElement;
  itemContent: React.ReactNode;
};

type TabsProp = {
  itemList: TabsListProp[];
};
const TabsLayer = ({ itemList }: TabsProp) => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        {itemList.map((item) => (
          <Tabs.Trigger
            display="flex"
            alignItems="center"
            gap={2}
            value={item.itemName}
          >
            {item.itemIcon}
            {item.itemName}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {itemList.map((item) => (
        <Tabs.Content value={item.itemName}>{item.itemContent}</Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabsLayer;
