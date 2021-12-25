import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GradientForm from "../components/GradientForm";
import { AppProviders } from "../context/AppContext";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockGradient = { id: null, first: "#000", second: "#fff" };
const mockSaveGradient = jest.fn();
const mockState = {
  gradients: [],
};

jest.mock("../context/AppContext", () => ({
  ...jest.requireActual("../context/AppContext"),
  useAppContext: () => mockState,
  useSaveGradient: () => mockSaveGradient,
}));

test("GradientForm should render correct", async () => {
  mockSaveGradient.mockImplementation(() => Promise.resolve(mockGradient));
  render(<GradientForm />, { wrapper: AppProviders });

  const btnEl = screen.getByText(/Add gradient/i);

  expect(btnEl).toBeDisabled();

  userEvent.type(screen.getByTestId(/first/i), mockGradient.first);
  userEvent.type(screen.getByTestId(/second/i), mockGradient.second);

  expect(btnEl).not.toBeDisabled();
  fireEvent.click(btnEl);

  expect(mockSaveGradient).toHaveBeenCalledTimes(1);
  expect(mockSaveGradient).toHaveBeenCalledWith(mockGradient);
});
