//
import { useState } from "react";
import useFetch from "../useFetch"

const Hotels = ()=>{
   const [successMessage, setSuccessMessage] = useState("");
   const { data, loading, error } = useFetch(
     "https://hotels-backend-rosy.vercel.app/hotels"
   );

   const handleDelete = async (hotelId)=>{
    try {
      const response = await fetch(
        `https://hotels-backend-rosy.vercel.app/hotels/${hotelId}`,
        { method: "DELETE" }
      );

      if(!response.ok) {
        throw "Failed to delete Hotel."
      }

      const data = await response.json();
      if(data) {
        setSuccessMessage("Hotel data deleted successfully.")
        window.location.reload();
      }
    } catch (error) {
      setSuccessMessage("Failed to delete Hotel data from database.");
    }
   }

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error fetching hotels</p>;

   return (
     <div>
       <h2>List of all Hotels</h2>
       <ul>
         {data?.map((hotel) => (
           <li key={hotel._id}>
             {hotel.name}{" "}
             <button onClick={() => handleDelete(hotel._id)}>Delete</button>
           </li>
         ))}
       </ul>

       <p style={{color:"green"}}>{successMessage}</p>
     </div>
   );
}

export default Hotels;