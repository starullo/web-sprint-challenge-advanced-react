import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
render(<CheckoutForm />)
const h2 = screen.getByText(/checkout\sform/i);
});

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
  
     const lastNameInput = screen.getByLabelText(/last name/i);
  
    const addressInput = screen.getByLabelText(/address/i);
  
    const cityInput = screen.getByLabelText(/city/i);

    const stateInput = screen.getByLabelText(/state/i);

    const zipInput = screen.getByLabelText(/zip/i);
  
    const button = await screen.findByTestId(/button/i);




    fireEvent.change(firstNameInput, {target: {value: 'Sam'}});

    fireEvent.change(lastNameInput, {target: { value: 'Tarullo'}});

    fireEvent.change(addressInput, {target: {value: '123 wow st'}});

    fireEvent.change(cityInput, {target: {value: 'Chicago'}});

    fireEvent.change(stateInput, {target: {value: 'IL'}});

    fireEvent.change(zipInput, {target: {value: '12345'}});

    fireEvent.click(button);

    await screen.findByTestId(/successmessage/i);

    await screen.findByText(/you have ordered some plants/i);

    
});
