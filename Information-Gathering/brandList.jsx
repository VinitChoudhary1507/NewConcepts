import React from "react";

function BrandList({ brands, onDeleteBrand }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Brands</h3>
      {brands.length === 0 ? (
        <p>No Brand Added</p>
      ) : (
        brands.map((brand, index) => (
          <div key={index} className="flex justify-between items-center p-4 border rounded-md mt-2">
            <div>
              <p className="font-semibold">{brand.brandName}</p>
              {brand.logoPreview && <img src={brand.logoPreview} alt="Brand Logo" className="w-24 h-24 mt-2" />}
            </div>
            <button onClick={() => onDeleteBrand(index)} className="bg-red-500 text-white px-3 py-2 rounded-md">
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BrandList;
