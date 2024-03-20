// const SubDataList = ({ params }: { params: { slug: string }}) => {
//   const  slug  = params.slug
//   return (
//     <div className="w-full flex flex-col">
//       <div className="w-full flex flex-col justify-center mt-10">
//         {slug.subData.map((item: any) => (
//           <div
//             key={item.service}
//             className={`${
//               item.service === params.name
//                 ? "w-full flex flex-col justify-center backdrop-blur-lg border border-orange-200 rounded-xl py-5 px-4"
//                 : "hidden"
//             }`}
//           >
//             <p>{item.service}</p>
//             <p>
//               <span>{item.price}</span>+
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubDataList;
