// import { useState } from "react";

// const AddNewHotel = ()=>{

//   const [hotelData, setHotelData] = useState({
//     name: "",
//     category: "",
//     location: "",
//     rating: "",
//     website: "",
//     phoneNumber: "",
//     checkInTime: "",
//     checkOutTime: "",
//     amenities: "",
//     priceRange: "",
//     reservationsNeeded: false,
//     isParkingAvailable: false,
//     isWifiAvailable: false,
//     isPoolAvailable: false,
//     isSpaAvailable: false,
//     isRestaurantAvailable: false,
//     photos: "",
//   });

//  const handleChange = (event) => {
//    const { name, value, type, checked } = event.target;
//    setHotelData((prev) => ({
//      ...prev,
//      [name]: type === "checkbox" ? checked : value,
//    }));
//  };

//   const handleSubmit = async (event)=>{
//     event.preventDefault();
//     console.log("Submitted Hotel:", hotelData);

//     try {
//       const response = await fetch(
//         "https://hotels-backend-rosy.vercel.app/hotels",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(hotelData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Server Error: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Hotel added successfully:", data);
//       alert("Hotel added successfully!");

//       setHotelData({
//         name: "",
//         category: "",
//         location: "",
//         rating: "",
//         website: "",
//         phoneNumber: "",
//         checkInTime: "",
//         checkOutTime: "",
//         amenities: "",
//         priceRange: "",
//         reservationsNeeded: false,
//         isParkingAvailable: false,
//         isWifiAvailable: false,
//         isPoolAvailable: false,
//         isSpaAvailable: false,
//         isRestaurantAvailable: false,
//         photos: "",
//       });
//     } catch (error) {
//       console.error("Error adding hotel:", error);
//       alert(" Failed to add hotel");
//     }
//   }



//     return (
//       <div>
//         <h2>Add New Hotel</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={hotelData.name}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />

//           {/* Category */}
//           <label>Category:</label>
//           <select
//             name="category"
//             value={hotelData.category}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Budget">Budget</option>
//             <option value="Mid-Range">Mid-Range</option>
//             <option value="Luxury">Luxury</option>
//           </select>
//           <br />
//           <br />

//           {/* Location */}
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={hotelData.location}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />

//           {/* Rating */}
//           <label>Rating:</label>
//           <input
//             type="number"
//             name="rating"
//             min="0"
//             max="5"
//             step="0.1"
//             value={hotelData.rating}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           {/* Website */}
//           <label>Website:</label>
//           <input
//             type="text"
//             name="website"
//             value={hotelData.website}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           {/* Phone Number */}
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={hotelData.phoneNumber}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           {/* Check-In Time */}
//           <label>Check-In Time:</label>
//           <input
//             type="text"
//             name="checkInTime"
//             value={hotelData.checkInTime}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           {/* Check-Out Time */}
//           <label>Check-Out Time:</label>
//           <input
//             type="text"
//             name="checkOutTime"
//             value={hotelData.checkOutTime}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           {/* Amenities */}
//           <label>Amenities:</label>
//           <input
//             type="text"
//             name="amenities"
//             value={hotelData.amenities}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           {/* Price Range */}
//           <label>Price Range:</label>
//           <select
//             name="priceRange"
//             value={hotelData.priceRange}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Price Range</option>
//             <option value="11-20">11-20</option>
//             <option value="21-40">21-40</option>
//             <option value="41-60">41-60</option>
//             <option value="61-100">61-100</option>
//             <option value="101-200">101-200</option>
//           </select>
//           <br />
//           <br />

//           {/* Reservations Needed */}
//           <label>
//             <input
//               type="checkbox"
//               name="reservationsNeeded"
//               checked={hotelData.reservationsNeeded}
//               onChange={handleChange}
//             />
//             Reservations Needed
//           </label>
//           <br />
//           <br />

//           {/* Parking */}
//           <label>
//             <input
//               type="checkbox"
//               name="isParkingAvailable"
//               checked={hotelData.isParkingAvailable}
//               onChange={handleChange}
//             />
//             Parking Available
//           </label>
//           <br />
//           <br />

//           {/* WiFi */}
//           <label>
//             <input
//               type="checkbox"
//               name="isWifiAvailable"
//               checked={hotelData.isWifiAvailable}
//               onChange={handleChange}
//             />
//             WiFi Available
//           </label>
//           <br />
//           <br />

//           {/* Pool */}
//           <label>
//             <input
//               type="checkbox"
//               name="isPoolAvailable"
//               checked={hotelData.isPoolAvailable}
//               onChange={handleChange}
//             />
//             Pool Available
//           </label>
//           <br />
//           <br />

//           {/* Spa */}
//           <label>
//             <input
//               type="checkbox"
//               name="isSpaAvailable"
//               checked={hotelData.isSpaAvailable}
//               onChange={handleChange}
//             />
//             Spa Available
//           </label>
//           <br />
//           <br />

//           {/* Restaurant */}
//           <label>
//             <input
//               type="checkbox"
//               name="isRestaurantAvailable"
//               checked={hotelData.isRestaurantAvailable}
//               onChange={handleChange}
//             />
//             Restaurant Available
//           </label>
//           <br />
//           <br />

//           {/* Photos */}
//           <label>Photos (comma-separated URLs):</label>
//           <input
//             type="text"
//             name="photos"
//             value={hotelData.photos}
//             onChange={handleChange}
//           />
//           <br />
//           <br />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
// }

// export default AddNewHotel;

import { useState } from "react";

const AddNewHotel = () => {
  const [hotelData, setHotelData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setHotelData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted Hotel:", hotelData);

    try {
      const response = await fetch(
        "https://hotels-backend-rosy.vercel.app/hotels",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hotelData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Hotel added successfully:", data);
      alert("Hotel added successfully!");

      // Reset form
      setHotelData({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationsNeeded: false,
        isParkingAvailable: false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
        photos: "",
      });
    } catch (error) {
      console.error("Error adding hotel:", error);
      alert("Failed to add hotel");
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={hotelData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {/* Category */}
        <label>Category:</label>
        <select
          name="category"
          value={hotelData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
        </select>
        <br />
        <br />

        {/* Location */}
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={hotelData.location}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {/* Rating */}
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={hotelData.rating || ""}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Website */}
        <label>Website:</label>
        <input
          type="text"
          name="website"
          value={hotelData.website}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Phone Number */}
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={hotelData.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Check-In Time */}
        <label>Check-In Time:</label>
        <input
          type="text"
          name="checkInTime"
          value={hotelData.checkInTime}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Check-Out Time */}
        <label>Check-Out Time:</label>
        <input
          type="text"
          name="checkOutTime"
          value={hotelData.checkOutTime}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Amenities */}
        <label>Amenities:</label>
        <input
          type="text"
          name="amenities"
          value={hotelData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Price Range */}
        <label>Price Range:</label>
        <select
          name="priceRange"
          value={hotelData.priceRange}
          onChange={handleChange}
          required
        >
          <option value="">Select Price Range</option>
          <option value="11-20">11-20</option>
          <option value="21-40">21-40</option>
          <option value="41-60">41-60</option>
          <option value="61-100">61-100</option>
          <option value="101-200">101-200</option>
        </select>
        <br />
        <br />

        {/* Reservations Needed */}
        <label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={hotelData.reservationsNeeded}
            onChange={handleChange}
          />
          Reservations Needed
        </label>
        <br />
        <br />

        {/* Parking */}
        <label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={hotelData.isParkingAvailable}
            onChange={handleChange}
          />
          Parking Available
        </label>
        <br />
        <br />

        {/* WiFi */}
        <label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={hotelData.isWifiAvailable}
            onChange={handleChange}
          />
          WiFi Available
        </label>
        <br />
        <br />

        {/* Pool */}
        <label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={hotelData.isPoolAvailable}
            onChange={handleChange}
          />
          Pool Available
        </label>
        <br />
        <br />

        {/* Spa */}
        <label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={hotelData.isSpaAvailable}
            onChange={handleChange}
          />
          Spa Available
        </label>
        <br />
        <br />

        {/* Restaurant */}
        <label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={hotelData.isRestaurantAvailable}
            onChange={handleChange}
          />
          Restaurant Available
        </label>
        <br />
        <br />

        {/* Photos */}
        <label>Photos (comma-separated URLs):</label>
        <input
          type="text"
          name="photos"
          value={hotelData.photos}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewHotel;
