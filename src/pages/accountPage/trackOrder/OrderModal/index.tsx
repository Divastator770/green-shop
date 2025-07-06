import { type FC } from "react";

// Avval product va order tiplarini aniqlab olamiz
interface Product {
  title: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  date: string;
  total: number;
  products: Product[];
}

const OrderModal: FC<{ order: Order; onClose: () => void }> = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        <h3 className="text-xl font-bold mb-4">Order Details</h3>
        <p><strong>ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Total:</strong> ${order.total}</p>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Products:</h4>
          <ul className="list-disc pl-4 space-y-1">
            {order.products.map((p) => (
              <li key={p.title}>
                {p.title} × {p.quantity} — ${p.price}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
