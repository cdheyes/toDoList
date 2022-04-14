import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';

test("todo list header is rendered", () => {
  render(<App />)
  let element = screen.getByText("to-do list")
  expect(element).toBeInTheDocument()
})

test("input element is displayed", () => {
  render(<App />)
  let element = screen.getByPlaceholderText("add new task")
  expect(element).toBeInTheDocument()
})

test("fireEvent on submit button", () => {
  render(<App />)
  const submitButton = screen.getByText("submit")
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  fireEvent.click(submitButton)
  const deleteButton = screen.getAllByText("delete")
  expect(deleteButton.length).toBe(5)
})

test("input is rendered", () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText("add new task")
  fireEvent.change(inputElement, { target : { value: "hello" }})
  expect(inputElement.value).toBe("hello")
})





// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('todo list heading is rendered', () => {
//   render(<App />)
//   let element = screen.getByText('To Do List')
//   expect(element).toBeInTheDocument()
// })

// test('todo list button is rendered', () => {
//   render(<App />)
//   let element = screen.getAllByText('delete')
//   expect(element.length).toBe(2)
// })

// test('todo list button is rendered', () => {
//   render(<App />)
//   let element = screen.getByPlaceHolderText('new to do')
//   expect(element).toBeInTheDocument()
// })
