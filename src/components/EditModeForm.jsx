import { useEffect } from "react";
import { useForm } from "react-hook-form";

function EditModeForm({ book, onSave, onCancel }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  useEffect(() => {
    reset(book)
  }, [book, reset])

  return (
    <>
      <form className="max-w-85 w-full mx-auto mt-12 flex flex-col gap-3" onSubmit={handleSubmit(onSave)}>
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
          <button type="submit" className="cursor-pointer transition-normal bg-[#162456] text-white p-2 rounded-md hover:bg-blue-900">Update</button>
          <button type="button" className="cursor-pointer transition-normal bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default EditModeForm;