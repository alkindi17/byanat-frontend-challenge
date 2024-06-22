import { render, screen } from "@testing-library/react";

import Navbar from "@/components/navbar/navbar";
import StoreProvider from "@/lib/state/storeProvider";

/**
 * Test suite for the Navbar component.
 */
describe("Navbar", () => {
  const navbarComponent = (
    <StoreProvider>
      <Navbar />
    </StoreProvider>
  );

  /**
   * Test case: should contain logo
   * Given: the Navbar component is rendered
   * When: searching for the logo element by alt text
   * Then: the logo element should be in the document
   */
  it("should contain logo", () => {
    // Given
    render(navbarComponent);

    // When
    const logoElement = screen.getByAltText("Logo");

    // Then
    expect(logoElement).toBeInTheDocument();
  });

  /**
   * Test case: should contain phone contact component
   * Given: the Navbar component is rendered
   * When: searching for the phone contact element by test id
   * Then: the phone contact element should be in the document
   */
  it("should contain phone contact component", () => {
    // Given
    render(navbarComponent);

    // When
    const phoneContactElement = screen.getByTestId("phone-contact");

    // Then
    expect(phoneContactElement).toBeInTheDocument();
  });

  /**
   * Test case: should contain profile dropdown component
   * Given: the Navbar component is rendered
   * When: searching for the profile dropdown element by test id
   * Then: the profile dropdown element should be in the document
   */
  it("should contain profile dropdown component", () => {
    // Given
    render(navbarComponent);

    // When
    const profileDropdownElement = screen.getByTestId("profile-dropdown");

    // Then
    expect(profileDropdownElement).toBeInTheDocument();
  });

  /**
   * Test case: should contain search box component
   * Given: the Navbar component is rendered
   * When: searching for the search box elements by test id
   * Then: at least one search box element should be in the document
   */
  it("should contain search box component", () => {
    // Given
    render(navbarComponent);

    // When
    const searchBoxElements = screen.getAllByTestId("search-box");
    const searchBoxElement = searchBoxElements.find(
      (element) => !element.hasAttribute("hidden"),
    );

    // Then
    expect(searchBoxElement).toBeInTheDocument();
  });
});
