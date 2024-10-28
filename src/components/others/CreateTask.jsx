import React from 'react'

const CreateTask = () => {
  return (
   
    <>
    <div>
          <form action="" className=" flex justify-between items-start gap-10">
            <div className="w-1/2">
              <div>
                <h3 className="text-xl">Task title</h3>
                <input
                  className="p-3 border-2 w-full border-black"
                  type="text"
                  placeholder="make a ui design"
                />
              </div>

              <div>
                <h3 className="text-xl">date</h3>
                <input
                  type="date"
                  className="p-3 border-2 w-full border-black"
                />
              </div>
              <div>
                <h3 className="text-xl">Asign To</h3>
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="p-3 border-2 w-full border-black"
                />
              </div>
              <div>
                <h3 className="text-xl">Category</h3>
                <input
                  type="text"
                  placeholder="design, dev, etc"
                  className="p-3 border-2 w-full border-black"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-xl">Description</h3>
              <textarea
                name=""
                id=""
                cols="30"
                rows="11"
                className="p-3 border-2 w-full border-black"
              ></textarea>
              <button className="text-xl bg-red-400 w-full py-3 text-white uppercase">
                Create Task
              </button>
            </div>
          </form>
        </div>
    </>
  )
}

export default CreateTask