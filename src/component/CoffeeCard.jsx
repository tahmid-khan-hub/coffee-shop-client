import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees, setCoffees}) => {
  const { _id, photo, name, quantity, price } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {


        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
                    icon: "success",
                });

                // remove coffee from state
                const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                setCoffees(remainingCoffees);
                }
            })


        //   swalWithBootstrapButtons.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success",
        //   });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-around mt-8">
        <div>
          <h2 className="">{name}</h2>
          <p>Price: {price}</p>
          <p>Qunatity: {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">view</button>
            <Link to={`updateCoffee/${_id}`}><button className="btn join-item">edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
