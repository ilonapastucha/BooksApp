import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import "./BookItem.css";

interface Props {
  book: Book;
  removeBook: (book: Book) => void;
}

const BookItem: FC<Props> = ({ book, removeBook }) => {
  return (
    <li className="book-item">
      {`${book.title} by ${book.author}, ${book.price}$`}{" "}
      <button type="button" onClick={() => removeBook(book)}>
        X
      </button>
    </li>
  );
};

export default BookItem;
