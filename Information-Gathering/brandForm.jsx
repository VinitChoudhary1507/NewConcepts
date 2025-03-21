import React, { useState } from "react";

function BrandForm({ onSave, onClose }) {
  const [brandName, setBrandName] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!brandName.trim() || !logoPreview) return;

    onSave({ brandName, logo, logoPreview });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Enter Brand Details</h2>

        <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder="Brand Name" className="border p-2 w-full mb-4" />

        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

        {logoPreview && <img src={logoPreview} alt="Preview" className="w-24 h-24 mt-2" />}

        <div className="mt-4 flex justify-between">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default BrandForm;
