import { render, screen, fireEvent } from "@testing-library/react";

import Tabs from "@/components/ui/tabs";

/**
 * Test suite for the Tabs component.
 */
describe("Tabs", () => {
  const tabsData = [
    {
      title: "Tab 1",
      component: <div>Tab 1 Content</div>,
    },
    {
      title: "Tab 2",
      component: <div>Tab 2 Content</div>,
    },
    {
      title: "Tab 3",
      component: <div>Tab 3 Content</div>,
    },
  ];

  /**
   * Test case to verify that the default tab content is rendered correctly.
   * Given: the Tabs component is rendered
   * When: the default tab is set to "Tab 1"
   * Then: the default tab content should be rendered
   */
  it("should render the default tab content", () => {
    // Given
    render(<Tabs tabsData={tabsData} defaultTab="Tab 1" />);

    // When
    const defaultTabContent = screen.getByText("Tab 1 Content");

    // Then
    expect(defaultTabContent).toBeInTheDocument();
  });

  /**
   * Test case to verify that the selected tab content is rendered correctly on click.
   * Given: the Tabs component is rendered
   * When: the user clicks on the second tab
   * Then: the second tab content should be rendered
   */
  it("should switch to the selected tab content on click", () => {
    // Given
    render(<Tabs tabsData={tabsData} defaultTab="Tab 1" />);
    const tab2Button = screen.getByText("Tab 2");

    // When
    fireEvent.click(tab2Button);
    const tab2Content = screen.getByText("Tab 2 Content");

    // Then
    expect(tab2Content).toBeInTheDocument();
  });
});
