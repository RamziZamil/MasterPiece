import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, loading, error, updateCartItem, removeFromCart, clearCart } =
    useCart();
  const { isAuthenticated } = useAuth();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-lg max-w-lg mx-auto">
          <p className="text-lg mb-6">
            Please log in to view your cart and add items.
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  if (loading)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <p className="mt-2">Please try refreshing the page or login again.</p>
        </div>
      </div>
    );

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const result = await updateCartItem(itemId, newQuantity);
    if (!result.success) {
      setMessage(result.message);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleRemoveItem = async (itemId) => {
    const result = await removeFromCart(itemId);
    if (!result.success) {
      setMessage(result.message);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleClearCart = async () => {
    const result = await clearCart();
    if (!result.success) {
      setMessage(result.message);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const calculateTotal = () => {
    if (!cart?.items?.length) return 0;
    return cart.items.reduce((total, cartItem) => {
      return total + cartItem.item.pricePerUnit * cartItem.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {message && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}

      {!cart?.items?.length ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link
            to="/products"
            className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart?.items?.map((cartItem) => (
            <div
              key={cartItem.item._id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{cartItem.item.name}</h3>
                  <p className="text-gray-600">${cartItem.item.pricePerUnit}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        cartItem.item._id,
                        cartItem.quantity - 1
                      )
                    }
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{cartItem.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        cartItem.item._id,
                        cartItem.quantity + 1
                      )
                    }
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemoveItem(cartItem.item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 bg-white p-4 rounded-lg shadow">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-4 md:mb-0"
            >
              Clear Cart
            </button>

            <div className="text-right">
              <p className="text-gray-600 mb-1">Total:</p>
              <p className="text-2xl font-semibold text-purple-600">
                ${calculateTotal().toFixed(2)}
              </p>
              <button
                onClick={handleCheckout}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
