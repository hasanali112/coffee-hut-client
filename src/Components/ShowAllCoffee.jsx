import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowAllCoffee = ({coffee}) => {
    const{_id, name, supplier, teste, categories, detail, photo}= coffee;


    const handleDelete = _id =>{
        console.log(_id) 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
             fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
             })
             .then(res=> res.json())
             .then(data =>{
                console.log(data)
                if(data.deletedCount> 0){
                    Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                }
             })
            }
          })
    }



    return (
        <div>
        <div className="card card-side bg-base-100 shadow">
            <figure><img src={photo} alt="Coffee" className='p-3'/></figure>
            <div className='flex justify-between w-full items-center px-4'>
               <div>
               <h2 className="card-title">{name}</h2>
               <p>{teste}</p>
               <p>{categories}</p>
               <p>{supplier}</p>
               </div>
                    <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn rounded-none btn-xs">Preview</button>
                    <Link to={`updatecoffee/${_id}`}>
                        <button className="btn btn-xs">Update</button>
                    </Link>
                    <button onClick={()=> handleDelete(_id)}
                     className="btn rounded-none btn-xs">Delate</button>
                    </div>
            </div>
          </div>
        </div>
    );
};

export default ShowAllCoffee;