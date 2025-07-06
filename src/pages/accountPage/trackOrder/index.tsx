import { useState } from "react";
import OrderModal from "./OrderModal";

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

const fakeOrders = Array.from({ length: 15 }, (_, i) => ({
  id: `2348ru${14920 + i}`,
  date: new Date().toLocaleDateString(),
  total: Math.floor(Math.random() * 300) + 50,
  products: [
    { title: "Rose Bouquet", price: 25, quantity: 2 },
    { title: "Tulips", price: 15, quantity: 3 },
  ],
}));

const TrackOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order|null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Track Your Orders</h2>

      <div className="space-y-4">
        {fakeOrders.map(order => (
          <div
            key={order.id}
            className="bg-white shadow p-2 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="font-semibold">{order.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold">{order.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="font-semibold">${order.total}</p>
            </div>
            <button
              onClick={() => setSelectedOrder(order)}
              className="text-blue-600 hover:underline text-sm"
            >
              More info
            </button>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <OrderModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </div>
  );
};

export default TrackOrders;
