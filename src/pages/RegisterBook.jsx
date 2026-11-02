import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import Header from "../components/Header.jsx";

function RegisterBook() {
  const [books, setBooks] = useState(() => localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [])
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  function registerNewBook(book_data) {
    const { name, author, published_year, cover, genre } = book_data
    const updatedBooks = [...books, { name, author, published_year, cover, genre }]
    setBooks(updatedBooks)
    reset()

    localStorage.setItem('books', JSON.stringify(updatedBooks))

    Swal.fire({
      title: 'Livro cadastrado',
      text: `${name} de ${author} foi cadastrado!`,
      icon: "success"
    })
  }

  return (
    <>
      <Header />
      <section className="mt-12 animate-startPage text-slate-900 dark:text-slate-200">
        <h1 className="text-3xl text-center font-bold">Register Book</h1>
        <form className="max-w-85 w-full mx-auto mt-12 flex flex-col gap-3" onSubmit={handleSubmit(registerNewBook)}>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">Name</label>
            <input className="bg-slate-200 dark:bg-slate-800 p-2 rounded-md outline-none" type="text" id="name" {...register('name', { required: true })} />
            {errors.name && <span className="text-red-500 text-sm">Campo obrigatório</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="font-medium">Author</label>
            <input className="bg-slate-200 dark:bg-slate-800 p-2 rounded-md outline-none" type="text" id="author" {...register('author', { required: true })} />
            {errors.author && <span className="text-red-500 text-sm">Campo obrigatório</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="published_year" className="font-medium">Published Year</label>
            <input className="bg-slate-200 dark:bg-slate-800 p-2 rounded-md outline-none" type="number" id="published_year" {...register('published_year', { required: true })} />
            {errors.published_year && <span className="text-red-500 text-sm">Campo obrigatório</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="cover" className="font-medium">Cover</label>
            <input className="bg-slate-200 dark:bg-slate-800 p-2 rounded-md outline-none" type="text" id="cover" {...register('cover', { required: true })} />
            {errors.cover && <span className="text-red-500 text-sm">Campo obrigatório</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="genre" className="font-medium">Genre</label>
            <input className="bg-slate-200 dark:bg-slate-800 p-2 rounded-md outline-none" type="text" id="genre" {...register('genre', { required: true })} />
            {errors.genre && <span className="text-red-500 text-sm">Campo obrigatório</span>}
          </div>

          <div className="flex justify-between mt-6">
            <button type="submit" className="cursor-pointer transition-normal bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800">Register</button>
            <button type="button" className="cursor-pointer transition-normal bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600">Clear</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default RegisterBook;