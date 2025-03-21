import React from "react";

function OperatorDetails({ formData, handleInputChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Operator Name</label>
      <input
        type="text"
        id="operatorName"
        value={formData.operatorName}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>
  );
}

export default OperatorDetails;
