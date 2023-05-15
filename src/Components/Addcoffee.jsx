import React from "react";
import Swal from 'sweetalert2'

const Addcoffee = () => {
   const handleAddCoffee =event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const teste = form.teste.value;
    const categories = form.categories.value;
    const detail = form.detail.value;
    const photo = form.photo.value;
    const addCoffee= {name, supplier, teste, categories, detail, photo, quantity}
    console.log(addCoffee)

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(addCoffee)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Your coffee is added',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        form.reset();
      }
    })
   }



  return (
    <div className="bg-[#F4F3F0] p-20">
      <h1 className="text-center text-3xl font-extrabold mb-4">Add your coffee</h1>
      <p className="text-center md:text-2xl text-base text-gray-500 tracking-tight font-semibold mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <form  onSubmit={handleAddCoffee}>
          {/* row-1  */}
           <div className="md:flex">
             <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Name</span>
                </label>
               <label >
                 <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" />
               </label>
             </div>
             <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text text-base font-bold">Available quantity</span>
                </label>
               <label >
                 <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
               </label>
             </div>
           </div>
           {/* row-2 suplier and teste  */}
           <div className="md:flex">
             <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Supplier</span>
                </label>
               <label >
                 <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
               </label>
             </div>
             <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text text-base font-bold">Teste</span>
                </label>
               <label >
                 <input type="text" name="teste" placeholder="Teste" className="input input-bordered w-full" />
               </label>
             </div>
           </div>
           {/* row-3 -----categories and detail */}
           <div className="md:flex">
             <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Categories</span>
                </label>
               <label >
                 <input type="text" name="categories" placeholder="Categories" className="input input-bordered w-full" />
               </label>
             </div>
             <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text text-base font-bold">Detail</span>
                </label>
               <label >
                 <input type="text" name="detail" placeholder="Detail" className="input input-bordered w-full" />
               </label>
             </div>
           </div>
           {/* row-4  */}
           <div className="md:flex">
             <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text text-base font-bold">Photo Url</span>
                </label>
               <label >
                 <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered w-full" />
               </label>
             </div>
           </div>
            <input type="submit" value="Add coffee" className="btn btn-block mt-10 bg-[#D2B48C] text-black hover:bg-[#D2B48C]"/>
        </form>
    </div>
  );
};

export default Addcoffee;
