import React from 'react'

function CommonInput({inputHandler, placeHolderText}) {

    const callInputHandler = (event) => {inputHandler(event)}

    return (
        <div>
            <input className="text-center my-4 rounded border-2 border-cyan-600 hover:border-cyan-400 focus:shadow-md w-48"
                   placeholder={placeHolderText} type="text" type="text" name="file" onChange={callInputHandler}/>
        </div>
    )

}

export default CommonInput;