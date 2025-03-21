import React from "react";

function CompanyDetails({ formData, handleInputChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Company Name</label>
      <input
        type="text"
        id="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>
  );
}

export default CompanyDetails;
