"use client";

import Modal from "@/components/ui/Modal";
import { useCallback, useState } from "react";
import { PiPlus } from "react-icons/pi";
import ShopTable from "./ShopTable";

function ShopContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="md:text-xl sm:max-md:text-base text-sm font-bold">
          Shop
        </h1>
        <div className="flex items-center">
          <button
            className="btn flex gap-x-2 text-sm"
            onClick={() => setIsOpen(true)}
          >
            <span>Create Voucher</span>
            <PiPlus className="size-5" />
          </button>
        </div>
      </div>
      <div className="w-full h-[0.5px] my-10 bg-snow/30"></div>
      <ShopTable />
      {/* Add New Category */}
      {isOpen && (
        <Modal title="Create new voucher" onClose={handleClose}>
          {/* <ArticleForm onClose={handleClose} /> */}
          <h1>Shop</h1>
        </Modal>
      )}
    </div>
  );
}

export default ShopContainer;
