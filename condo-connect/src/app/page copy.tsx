// "use client"
// import { useState } from "react";
// import axios from "axios";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     Lname: "",
//     Fname: "",
//     Contact_number: "",
//     ALevelss: "",
//   });

//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccessMessage("");

//     try {
//       // ส่งข้อมูลไปยัง API ด้วย axios
//       const response = await axios.post("/api/user/signup", formData);
//       setSuccessMessage(response.data.message);
//       setFormData({
//         username: "",
//         password: "",
//         Lname: "",
//         Fname: "",
//         Contact_number: "",
//         ALevelss: "",
//       });
//     } catch (error) {
//       // ถ้ามีข้อผิดพลาด
//       setError(error.response?.data?.error || "Something went wrong");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">First Name</label>
//           <input
//             type="text"
//             name="Fname"
//             value={formData.Fname}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Last Name</label>
//           <input
//             type="text"
//             name="Lname"
//             value={formData.Lname}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Contact Number</label>
//           <input
//             type="text"
//             name="Contact_number"
//             value={formData.Contact_number}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">A-Level</label>
//           <input
//             type="text"
//             name="ALevelss"
//             value={formData.ALevelss}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-500 text-white rounded-md"
//         >
//           Sign Up
//         </button>
//       </form>

//       {error && <div className="text-red-500 mt-4">{error}</div>}
//       {successMessage && (
//         <div className="text-green-500 mt-4">{successMessage}</div>
//       )}
//     </div>
//   );
// };

// export default SignupForm;
