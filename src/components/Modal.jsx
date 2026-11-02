function Modal({ open, onClose, children }) {
  if (!open) return;

  return (
    <>
      <div className="bg-black/50 fixed inset-0 flex justify-center items-center" onClick={onClose}>
        <div className={`w-full max-w-md rounded-lg bg-white dark:bg-[#111828] p-6 animate-startPage`} onClick={(event) => event.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal;