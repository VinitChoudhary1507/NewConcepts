import React, { useState } from "react";
import "./test.css";
import CompanyDetails from "./CompanyDetails";
import OperatorDetails from "./OperatorDetails";
import LocationDetails from "./LocationDetails";
import BrandList from "./BrandList";
import BrandForm from "./BrandForm";

function Information() {
  const [formData, setFormData] = useState({
    address2: "",
    companyName: "",
    address1: "",
    state: "",
    postalCode: "",
    district: "",
    warehouseaddress: "",
    gst: "",
    operatorEmail: "",
    operatorName: "",
    companycontact: "",
    Companyemail: "",
    operatorcontact: "",
  });

  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddBrand = (newBrand) => {
    setBrands((prevBrands) => [...prevBrands, newBrand]);
  };

  const handleDeleteBrand = (index) => {
    setBrands(brands.filter((_, i) => i !== index));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-2xl font-bold mb-6 text-gray-800">Information Component</h4>

      <CompanyDetails formData={formData} handleInputChange={handleInputChange} />
      <LocationDetails formData={formData} handleInputChange={handleInputChange} />
      <OperatorDetails formData={formData} handleInputChange={handleInputChange} />

      <BrandList brands={brands} onDeleteBrand={handleDeleteBrand} />

      <button onClick={() => setIsOpen(true)} className="bg-teal-500 text-white py-3 px-6 rounded-md mt-6">
        Add Brand
      </button>

      <button onClick={submitHandler} className="bg-slate-600 text-white py-3 px-6 rounded-md mt-6 ml-4">
        Submit
      </button>

      {isOpen && <BrandForm onSave={handleAddBrand} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default Information;
