import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from ".";

// // afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe("Footer Component", () => {
    // Test 1
    test("Footer Rendering", () => {
        render(<Footer />);
        const footerElement = screen.getByTestId("footer");
        expect(footerElement).toBeInTheDocument();
    })
})