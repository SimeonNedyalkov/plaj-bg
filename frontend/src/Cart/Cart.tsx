import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "../Cart/CartProvider";
import { Button } from "@chakra-ui/react";

export default function Cart() {
  const { isOpen, closeCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Cart Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button onClick={closeCart}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              <div className="border p-2 rounded">
                <p>Product 1</p>
                <p className="text-sm text-gray-500">Qty: 1</p>
              </div>
            </div>

            <Button className="mt-4 w-full">Checkout</Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
