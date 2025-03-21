import React from "react";

function LocationDetails({ formData, handleInputChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Registered Address</label>
      <input type="text" id="address1" value={formData.address1} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" placeholder="Address line 1.." />
      <input type="text" id="address2" value={formData.address2} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md mt-2" placeholder="Address line 2.." />
      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State
      </label>
      <input 
            type="text" 
            id="state"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="State"
            value={FormData.state}
            onChange={handleInputChange}
      />
       <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
       </label>
       <input 
            type="text" 
            id="postalCode"
            value={FormData.postalCode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Postal Code"
       /> 
       <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
            District
          </label>
       <input 
            type="text" 
            id="district"
            value={FormData.district}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="District"
       />
        
    </div>
  );
}

export default LocationDetails;
