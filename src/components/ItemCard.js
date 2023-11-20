// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ItemCard = () => {
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const users = [];
//         for (let i = 1; i <= 15; i++) {
//           const seed = "a".repeat(i);
//           const response = await axios.get(
//             `https://randomuser.me/api/?page=${i}&results=${i}&seed=${seed}`
//           );
//           users.push(response.data.results[0]);
//         }
//         setUserList(users);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-wrap">
//       {userList.map((user, index) => (
//         <div key={index} className="w-1/3 p-4">
//           <div className="bg-white rounded-md p-4 flex">
//             <img
//               src={user.picture.large}
//               alt={`User Avatar ${index}`}
//               className="rounded-md"
//             />
//             <div className="flex flex-col ml-2">
//               <p className="flex flex-wrap justify-between">
//                 <p>
//                   <span className="font-bold">Name:</span>
//                   {` ${user.name.first}`} {`${user.name.last}`}
//                 </p>
//               </p>
//               {/* <p className="flex flex-wrap justify-between">
//                 <p>
//                   <span className="font-bold mr-1">Firstname:</span>
//                   {` ${user.name.first}`}
//                 </p>
//                 <p>
//                   <span className="font-bold mr-1">Lastname:</span>
//                   {`${user.name.last}`}
//                 </p>
//               </p> */}
//               <p className="flex">
//                 <span className="font-bold mr-1">Gender:</span>
//                 {user.gender}
//               </p>
//               <p className="flex">
//                 <span className="font-bold mr-1">Phone:</span>
//                 {user.phone}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemCard;

import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemCard = () => {
  const [userList, setUserList] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = [];
        for (let i = 1; i <= 15; i++) {
          const seed = "a".repeat(i);
          const response = await axios.get(
            `https://randomuser.me/api/?page=${i}&results=${i}&seed=${seed}`
          );
          users.push(response.data.results[0]);
        }
        setUserList(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {userList.map((user, index) => (
        <div key={index} className="p-4 w-full lg:w-1/3 md:w-1/2 sm:w-1/2">
          <div
            className={`bg-white rounded-md p-4 flex transition duration-300 transform ${
              hoveredIndex === index ? "hover:scale-105 shadow-2xl" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={user.picture.large}
              alt={`User Avatar ${index}`}
              className="rounded-md"
            />
            <div className="flex flex-col ml-2">
              <p className="flex flex-wrap justify-between">
                <p>
                  <span className="font-bold">Name:</span>
                  {` ${user.name.first}`} {`${user.name.last}`}
                </p>
              </p>
              <p className="flex">
                <span className="font-bold mr-1">Gender:</span>
                {user.gender}
              </p>
              <p className="flex">
                <span className="font-bold mr-1">Phone:</span>
                {user.phone}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
