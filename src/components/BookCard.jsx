import { useState } from "react";
import { SlOptions } from "react-icons/sl";

function BookCard({ book, onEdit, onDelete }) {
  const [options, setOptions] = useState(false)

  return (
    <>
      <div className="relative bg-transparent dark:bg-[#111828] border border-slate-300 dark:border-slate-800 shadow-2xs rounded-md flex flex-col gap-4">
        <div className="rounded-tl-md rounded-tr-md overflow-hidden">
          <img className="w-75 h-110 object-cover" src={book.cover} />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="bg-blue-200 dark:bg-[#162456] text-slate-900 dark:text-[#3291f6] p-1 rounded-lg text-sm">{book.genre}</span>
          <div>
            <h2 className="text-2xl text-center">{book.name}</h2>
            <h2 className="text-center text-slate-800 dark:text-slate-400">{book.author}</h2>
          </div>
          <div className="flex justify-between items-center w-full py-2 px-3">
            <h2>{book.published_year}</h2>
            <SlOptions className="cursor-pointer" onClick={() => setOptions(!options)} />
          </div>
        </div>
        {options && (
          <div className={`bg-white dark:bg-[#1d2939] border shadow-lg border-slate-200 dark:border-slate-700 flex flex-col w-30 p-2 absolute -bottom-19 -right-10 z-5 rounded-md`}>
            <button type="button" className="font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 p-1 cursor-pointer rounded-md text-left" onClick={() => {
              setOptions(false)
              onEdit()}}>Edit</button>
            <button type="button" className="text-red-500 font-medium hover:bg-gray-100 dark:hover:bg-slate-700 p-1 cursor-pointer rounded-md text-left" onClick={() => {
              setOptions(false)
              onDelete()
            }}>Delete</button>
          </div>
        )}
      </div>
    </>
  )
}

export default BookCard;