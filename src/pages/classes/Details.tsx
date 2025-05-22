import TabsLayer from "@/components/pageComponents/Tabs"
import { LuNotebook, LuSchool, LuPen } from "react-icons/lu";

const Details = () => {

    const tabItems = [
  {
    itemName: "Events",
    itemIcon: <LuPen />,
    itemContent: "Manage your team members"
  },
  {
    itemName: "HomeWork",
    itemIcon: <LuSchool />,
    itemContent: "Manage your projects"
  },
  {
    itemName: "Extra Notes",
    itemIcon: <LuNotebook />,
    itemContent: "Manage your tasks for freelancers"
  }
];

  return (
    <div>
        <TabsLayer itemList={tabItems}/>
    </div>
  )
}

export default Details