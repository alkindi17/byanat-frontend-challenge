import Map from "./map/map";
import Stays from "./stays/stays";
import Widgets from "./widgets/widgets";
import Tabs from "../ui/tabs";

export default function MainTabs() {
  const tabsData = [
    {
      title: "Stays",
      component: <Stays />,
    },
    {
      title: "Map",
      component: <Map />,
    },
    {
      title: "Widgets",
      component: <Widgets />,
    },
  ];

  return <Tabs tabsData={tabsData} defaultTab="Stays" />;
}
