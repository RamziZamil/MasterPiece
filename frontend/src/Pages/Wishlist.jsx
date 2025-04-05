import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { Heart, X, ShoppingCart, Trash2, ExternalLink } from "lucide-react";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
        {wishlistItems.length > 0 && (
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="mb-6 bg-blue-50 inline-flex p-6 rounded-full">
            <Heart className="text-blue-500" size={52} />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
            Add items to your wishlist to keep track of products you love!
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <ShoppingCart className="mr-3" size={20} />
            Discover Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-all duration-200"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="text-red-500" size={18} />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-1">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-5 text-sm line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <p className="text-xl font-bold text-blue-700">
                    ${item.price}
                  </p>
                  <Link
                    to={`/product/${item.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Details
                    <ExternalLink className="ml-1" size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to={`/product/${item.id}`}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Buy Now
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-gray-700 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center"
                  >
                    <X className="mr-2" size={16} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
