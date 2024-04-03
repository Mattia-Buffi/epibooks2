import { render, screen } from '@testing-library/react';
import App from './App';

//Deafult test
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//verifica presenza welcome
//verifico se è a schermo un elemento son testo nice to see you
test('Verifica allert',()=>{
  render(<App />);
  const linkElement=screen.getByText(/nice to see you/i); //testo con case ignorato
  expect(linkElement).toBeInTheDocument();
});
