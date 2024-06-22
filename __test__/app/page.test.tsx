import { render, screen } from "@testing-library/react";

import Home from "@/app/page";
import StoreProvider from "@/lib/state/storeProvider";

/**
 * Test suite for the Home page.
 */
describe("Home", () => {
  const homePageComponent = (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );

  /**
   * Test case: should render Stays component
   * Given: the Home page is rendered
   * When: searching for the Stays component by test id
   * Then: the Stays component should be in the document
   */
  it("should render Stays component", () => {
    // Given
    render(homePageComponent);

    // When
    const staysElements = screen.getAllByTestId("stays-component");

    // Then
    expect(staysElements[0]).toBeInTheDocument();
  });

  /**
   * Test case: should render Map component
   * Given: the Home page is rendered
   * When: searching for the Map component by test id
   * Then: the Map component should be in the document
   */
  it("should render Map component", () => {
    // Given
    render(homePageComponent);

    // When
    const mapElements = screen.getAllByTestId("map-component");

    // Then
    expect(mapElements[0]).toBeInTheDocument();
  });

  /**
   * Test case: should render Widgets component
   * Given: the Home page is rendered
   * When: searching for the Widgets component by test id
   * Then: the Widgets component should be in the document
   */
  it("should render Widgets component", () => {
    // Given
    render(homePageComponent);

    // When
    const widgetsElements = screen.getAllByTestId("widgets-component");

    // Then
    expect(widgetsElements[0]).toBeInTheDocument();
  });
});
