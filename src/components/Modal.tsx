import { useEffect, useEffectEvent, useRef } from 'react'
import type { PropsWithChildren } from 'react'
import { X } from 'lucide-react'

type ModalProps = PropsWithChildren<{
  isOpen: boolean
  title: string
  onClose: () => void
  className?: string
}>

export function Modal({
  children,
  isOpen,
  title,
  onClose,
  className = '',
}: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const onKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  })

  useEffect(() => {
    if (!isOpen) {
      return
    }

    document.body.classList.add('modal-open')
    document.addEventListener('keydown', onKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <button
        type="button"
        className="modal__backdrop"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className={['modal__panel', className].filter(Boolean).join(' ')}>
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          aria-label="Close modal"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  )
}
