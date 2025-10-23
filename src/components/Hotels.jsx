//
import useFetch from "../useFetch"

const Hotels = ()=>{

   const { data, loading, error } = useFetch(
     "https://hotels-backend-rosy.vercel.app/hotels"
   );

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error fetching hotels</p>;

   return (
     <div>
       <h2>List of all Hotels</h2>
       <ul>
         {data?.map((hotel) => (
           <li key={hotel._id}>{hotel.name}</li>
         ))}
       </ul>
     </div>
   );
}

export default Hotels;