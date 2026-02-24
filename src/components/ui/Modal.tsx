import { useEffect, useCallback, ReactNode } from "react";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "@/components/hook/useOutsideClick";
import Image from "next/image";

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ onClose, children, title }: ModalProps) {
  const ref = useOutsideClick(onClose);

  // Close on Escape key
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", escFunction);
      document.body.style.overflow = "auto";
    };
  }, [escFunction]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-onyx/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-lg bg-whitesmoke bg-onyx
          p-4 shadow-lg transition-all duration-500 ease-out
          w-[calc(100vw-25%)] md:max-w-lg max-h-[calc(100vh-25%)] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b border-snow/20 pb-2 mb-6">
          {title ? (
            <div className="flex items-center gap-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/Logo.png"
                  alt="Logo"
                  loading="lazy"
                  fill
                  quality={75}
                  className="object-cover"
                />
              </div>
              <h1 className="font-semibold text-sm md:text-lg">{title}</h1>
            </div>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="cursor-pointer bg-inherit hover:bg-carbon-black rounded-lg p-1 transition-colors duration-200 group"
          >
            <HiOutlineX className="w-5 h-5 group-hover:text-snow text-snow/75" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
