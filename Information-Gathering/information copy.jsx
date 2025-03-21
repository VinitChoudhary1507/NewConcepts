import React, { use } from "react";
import { useState } from "react";
import './test.css'

function Information() {
    const [FormData, setFormData] = useState({
      address2: "",
      companyName: "",
      address1:"",
      state:"",
      postalCode:"",
      district:"",
      warehouseaddress:"",
      gst:"",
      operatorEmail:"",
      operatorName:"",
      companycontact:"",
      Companyemail:"", 
      operatorcontact:"",
    });

    const [isOpen, setIsOpen] = useState(false);
    // State for the brand name input
    const [brandName, setBrandName] = useState('');
    // State to store the selected logo file
    const [logo, setLogo] = useState(null);
    // State to store a preview URL for the uploaded logo
    const [logoPreview, setLogoPreview] = useState(null);
    const [brands, setBrands] = useState([]);
    // Open the popup
    const openPopup = () => {
      setIsOpen(true);
    };
  
    // Close the popup and optionally reset form values
    const closePopup = () => {
      setIsOpen(false);
      setBrandName('');
      setLogo(null);
      setLogoPreview(null);
    };
  
    // const emailValidation = () => {
    //   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    //   if (regEx.test(FormData.operatorEmail)) {
    //     // setMessage("Email is Valid");
    //   } else if (!regEx.test(FormData.operatorEmail) && FormData.operatorEmail !== "") {
    //     // setMessage("Email is Not Valid");
    //   } else {
    //     // setMessage("");
    //   }
    // };
    // Handle file input changes to upload a logo
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setLogo(file);
        // Create a temporary URL for preview purposes
        setLogoPreview(URL.createObjectURL(file));
      }
    };
  
    // Handle the save action
    const handleSave = () => {
       
      if (brandName.trim() === '' || !logoPreview) {
        // Optionally show an error or simply return
        closePopup();
        return;
        // closePopup();
      }

      const newBrand = { brandName, logo, logoPreview };
      setBrands(prevBrands => [...prevBrands, newBrand]);
      
      // For example purposes, we just log the details
      console.log('Brand Name:', brandName);
      console.log('Logo File:', logo);
  
      // Here you could implement your API call or further processing
  
      // Close the popup after saving
      closePopup();
    };
   const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData(all => ({
        ...all,
        [id]: value
      }));
    }
    const submithandler=(e)=>{
      e.preventDefault();
      console.log('Form submitted',FormData)
    }
    

  return(
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-2xl font-bold mb-6 text-gray-800">Information Component</h4>
      
      {/* Company Name */}
      <div className="mb-6">
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
       
        <input 
          type="text" 
          id="companyName"
          name="companyName"
          value={FormData.companyName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Registered Address */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2 ">
          Registered Address
        </label>
        <div className="space-y-3">
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Address line 1.."
            id="address1"
            
            value={FormData.address1}
            onChange={handleInputChange}
         />
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Address line 2.."
            id="address2"
            value={FormData.address2}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Location Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
      </div>

      {/* Warehouse Address */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1 ">
          Warehouse Address
        </label>
        <input 
          name="warehouseaddress"
          id="warehouseaddress"
          value={FormData.warehouseaddress}
          onChange={handleInputChange}
          type="text" 
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Warehouse Address"
        />
      </div>

      {/* GST Number */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1 ">
          GST Number
        </label>
        <input 
        id="gst"
          value={FormData.gst}
          onChange={handleInputChange}
          type="text" 
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="GST Number"
        />
      </div>

      {/* Company Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email ID
            </label>
            <input 
              type="email" 
              id="Companyemail"
            
              value={FormData.Companyemail}
              onChange={handleInputChange}
             
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="companycontact" className="block text-sm font-medium text-gray-700 mb-1">
              Company Number
            </label>
            <input 
              type="tel" 
              id="companycontact"
              value={FormData.companycontact}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        </div>
      </div>

      {/* Operator Details */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Operator Details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="operatorName" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input 
              type="text" 
              id="operatorName"
              value={FormData.operatorName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="operatorEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email ID
            </label>
            <input 
              type="email" 
              id="operatorEmail"
              
              value={FormData.operatorEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="operatorcontact" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input 
              type="text"  
              id="operatorcontact"
              value={FormData.operatorcontact}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
      
        </div>
        
        
      </div>
        {brands.length > 0 ? (
        <div className="flex flex-col items-center border pt-4  rounded-md mt-8">
         <h3 className="text-lg font-semibold text-gray-800   mb-4">Brands</h3>
        
        {brands.map((brand, index) => (
  <div key={index} className="flex items-center justify-between w-11/12 p-6  m-4 mb-11 bg-white rounded-md shadow">
    <div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-lg  text-gray-700">Brand Name:</span>
        <span className="font-light text-3xl pl-32 text-gray-900">{brand.brandName}</span>
      </div>
      {brand.logoPreview && (
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-semibold text-lg text-gray-700">Brand Logo:</span>
          <img
            src={brand.logoPreview}
            alt={`${brand.brandName} logo`}
            className="w-72 h-32 pl-14  object-cover"
          />
        </div>
      )}
    </div>
    <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
      Delete
    </button>
  </div>
))}


      

      </div>
      
        ): <div className="border m-4 ml-0 mr-0  rounded-md p-10 mt-8">
        <p className="ml-72">No Brand Added</p></div>}
       <button onClick={openPopup} className="w-1/4 mt-10  bg-teal-500 text-white py-3 ml-24 px-6 hover:bg-teal-700 rounded-md transition-colors font-medium">
        Add Brand
        </button>
      <button onClick={submithandler} className="w-1/4 mt-10 bg-slate-600 text-white py-3 ml-24 px-6 rounded-md transition-colors font-medium">
       Submit
      </button>
      
      

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Enter Brand Details</h2>

            <div className=" flex form-group">
              <label className="mt-4" htmlFor="brandName">Brand Name :</label>
              <input
                id="brandName "
                className="ml-3 mt-4"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your brand name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="logoUpload">Upload Logo:</label>
              <input
                id="logoUpload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
 
            {logoPreview && (
              <div className="logo-preview-container">
                <img src={logoPreview} alt="Logo Preview" className="logo-preview" />
              </div>
            )}

            <div className="button-group">
              <button onClick={handleSave}>Save</button>
              <button onClick={closePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  
   
  )
}

export default Information;