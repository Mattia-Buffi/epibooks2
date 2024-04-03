import { render, screen } from '@testing-library/react';
import CommentArea from './CommentArea';

test('Nessun libro selezionato',()=>{
    render(<CommentArea selected={null}/>)
    //se nessun valore selezionato
    const linkElement=screen.getByText(/click on a book/i);
    expect(linkElement).toBeInTheDocument();
});
test('Se presente libro selezionato ci siano i commneti',()=>{
    let selected={'asin':1941859739}
    render(<CommentArea selected={selected}/>)
    const NoComment=screen.getByText(/no comment/i);
    expect(NoComment).not.toBeInTheDocument();
});