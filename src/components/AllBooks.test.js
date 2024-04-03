import { render, screen } from '@testing-library/react';
import AllBooks from './AllBooks'
import SingleComment from './SingleComment';

//
let category='horror';
let searchRecord=[];

test('Non ci sono commenti prima del primo click',()=>{
  render(<AllBooks category={category} searchRecord={searchRecord} />);
  const linkElement=screen.getByRole(SingleComment)
  expect(linkElement).not.toBeInTheDocument();
});