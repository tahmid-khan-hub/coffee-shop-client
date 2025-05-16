import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {


  const handleAddCoffee = e =>{
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries())
    console.log(newCoffee);

    // send coffee data to db
    fetch('https://coffee-store-server-woad-seven.vercel.app/coffees', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
     .then(res => res.json())
     .then(data =>{
        if(data.insertedId){
          Swal.fire({
          title: "coffee added successfully!",
          icon: "success",
          draggable: true
        });
        }
     })

  }

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="coffee name"
            />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="quantity name"
            />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier name"
            />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste"
            />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="coffee price"
            />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="coffee Details"
            />

          </fieldset>

          
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">

            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photoURl"
            />

          </fieldset>

          <input type="submit" value="Add Coffee" className="btn w-full" />

      </form>
    </div>
  );
};

export default AddCoffee;
