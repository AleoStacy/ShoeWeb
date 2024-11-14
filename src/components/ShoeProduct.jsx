import { useState } from 'react';

const shoes = [
  { id: 1, name: "Nike SB Dunks", price: "Ksh. 3,500", image: '/images/SneakerA.jpg'},
  { id: 2, name: "AirForce 1 Black", price: "Ksh. 2,500", image: '/images/SneakerB.jpg'},
  { id: 3, name: "AirForce 1 White", price: "Ksh. 2,500", image: '/images/SneakerC.jpg'},
  { id: 4, name: "Nike SB Dunks", price: "Ksh, 2,700", image: '/images/SneakerD.jpg'},
  { id: 5, name: "Nike SB Dunks", price: "Ksh. 2,800", image: '/images/SneakerE.jpg'},
  { id: 6, name: "Nike SB Dunks", price: "Ksh. 2,700", image: '/images/SneakerF.jpg'},
  { id: 7, name: "Nike SB Dunks", price: "Ksh. 2,500", image: '/images/SneakerG.jpg'},
  { id: 8, name: "Nike SB Dunks", price: "2,700", image: '/images/SneakerH.jpg'},
  { id: 16, name: "AirMax 90's", price: "3,000", image: '/images/SneakerP.jpg'},
  { id: 22, name: "New Balance", price: "4,000", image: '/images/SneakerV.jpg'},
  { id: 10, name: "Samba XL", price: "Ksh. 3,600", image: '/images/SneakerJ.jpg'},
  { id: 11, name: "Dior b30", price: "Ksh. 3,300", image: '/images/SneakerK.jpg'},
  { id: 20, name: "Vans Off The Wall", price: "Ksh. 1,800", image: '/images/SneakerT.jpg'},
  { id: 13, name: "Nike SB Dunks", price: "Ksh. 2,500", image: '/images/SneakerM.jpg'},
  { id: 14, name: "Nike SB Dunks", price: "Ksh. 2,500", image: '/images/SneakerN.jpg'},
  { id: 15, name: "Dior b30", price: "Ksh. 3,300", image: '/images/SneakerO.jpg'},
  { id: 17, name: "Sambas", price: "Ksh. 3,300", image: '/images/SneakerQ.jpg'},
  { id: 18, name: "Puma Jogger", price: "Ksh. 6,000", image: '/images/SneakerR.jpg'},
  { id: 19, name: "Vans Off The Wall", price: "Ksh. 1,800", image: '/images/SneakerS.jpg'},
  { id: 21, name: "Vans Off The Wall", price: "Ksh. 1,800", image: '/images/SneakerU.jpg'},
];

const ShoeCategoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", location: "", size: "" });

  const filteredShoes = shoes.filter(shoe =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (shoe) => {
    setSelectedShoe(shoe);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedShoe(null);
    setFormData({ name: "", email: "", location: "", size: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setShowThankYouPopup(true);
  };

  const handleCloseThankYouPopup = () => {
    setShowThankYouPopup(false);
  };

  return (
    <div className="bg-[#0f172a] min-h-screen py-6">
      <div className="container mx-auto px-4 py-6 w-full max-w-[1200px] bg-[#0f172a]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Featured Collection</h1>

          <input
            type="text"
            placeholder="Search for a shoe..."
            className="p-2 w-1/4 sm:w-1/6 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-center max-w-[1200px] mx-auto">
          {filteredShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="p-4 rounded-lg transform transition-transform ease-out duration-300 hover:scale-105 hover:shadow-2xl w-72 h-auto"
              style={{ backgroundColor: 'transparent' }}
            >
              <img src={shoe.image} alt={shoe.name} className="w-full mb-4 rounded" />
              <div className="mb-4 text-center">
                <h2 className="text-xl font-semibold text-white">{shoe.name}</h2>
                <p className="text-lg text-white">{shoe.price}</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleViewDetails(shoe)}
                  className="w-1/2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition ease-out duration-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Details Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#0f172a]">
              Order {selectedShoe?.name}
            </h2>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Delivery location"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Shoe Size</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select Size</option>
                  {[36, 37, 38, 39, 40, 41, 42].map(size => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    {/*Popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-xl text-center">
            <h2 className="text-xl font-bold text-[#0f172a] mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-4">
              Thank you for shopping with us! Details have been sent to {formData.email}.
            </p>
            <button
              onClick={handleCloseThankYouPopup}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Exit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoeCategoryPage;