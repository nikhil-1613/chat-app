// import React from "react";

// export default function GenderCheckbox() {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function GenderCheckbox() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleCheckboxChange = (gender) => {
    if (selectedGender === gender) {
      setSelectedGender(null); // Deselect if already selected
    } else {
      setSelectedGender(gender);
    }
  };

  return (
    <div className="flex space-x-4">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}
