import { useState } from "react";
import Swal from "sweetalert2";

import Header from "../components/Header.jsx";
import Modal from "../components/Modal.jsx";
import EditModeForm from "../components/EditModeForm.jsx";
import BookCard from "../components/BookCard.jsx";

function Books() {
  const [books, setBooks] = useState(() => localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [])
  const [editMode, setEditMode] = useState({ editing: false, index: null })

  function updateBook(book_data) {
    Swal.fire({
      title: "Deseja salvar as alterações?",
      background: document.documentElement.classList.contains('dark') ? "#111828" : "#fff",
      color: document.documentElement.classList.contains('dark') ? "#fff" : "#111828" ,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#162456",
      denyButtonColor: "#922525",
      denyButtonText: "Don't save"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBooks = [...books]
        updatedBooks[editMode.index] = book_data
        setBooks(updatedBooks)

        localStorage.setItem('books', JSON.stringify(updatedBooks))
        Swal.fire({
          title: "Alterações salvas!",
          icon: "success",
          background: "#111828",
          color: "#fff",
          confirmButtonColor: "#162456"
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Alterações descartadas!",
          icon: "info",
          background: document.documentElement.classList.contains('dark') ? "#111828" : "#fff" ,
          color: document.documentElement.classList.contains('dark') ? "#fff" : "#111828" ,
          confirmButtonColor: "#162456"
        });
      }
    })
    setEditMode({ editing: false, index: null })
  }

  function deleteBook(index) {
    Swal.fire({
      title: `Deseja excluir ${books[index].name} de ${books[index].author}?`,
      icon: "question",
      background: document.documentElement.classList.contains('dark') ? "#111828" : "#fff",
      color: document.documentElement.classList.contains('dark') ? "#fff" : "#111828" ,
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#922525"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBooks = [...books].filter((_, i) => i !== index)
        setBooks(updatedBooks)

        localStorage.setItem('books', JSON.stringify(updatedBooks))
        Swal.fire({
          title: "Book successfuly deleted!",
          icon: "success",
          background: document.documentElement.classList.contains('dark') ? "#111828" : "#fff",
          color: "#fff",
          confirmButtonColor: "#162456"
        });
      }
    })
  }

  const renderedBooks = books.map((b, index) => (
    <BookCard key={index} book={b} onEdit={() => setEditMode({ editing: true, index })} onDelete={() => deleteBook(index)} />
  ))

  return (
    <>
      <Header />
      <section className="mt-12 animate-startPage text-slate-900 dark:text-slate-200">
        <h1 className="text-3xl text-center font-bold">Books</h1>
        <div className="flex justify-center items-center gap-4 mt-12">
          {/* Se renderedBooks estiver vazio, exibe uma mensagem. Caso contrário, exibirá renderedBooks. */}
          {renderedBooks.length === 0 ? (<p className="text-[#64748b] text-center text-lg">No books found. Add a new book to get started!</p>) : (renderedBooks)}
        </div>
      </section>
      <Modal open={editMode.editing} onClose={() => setEditMode({ editing: false, index: null })}>
        <EditModeForm book={books[editMode.index]} onSave={updateBook} onCancel={() => setEditMode({ editing: false, index: null })} />
      </Modal>
    </>
  )
}

export default Books;