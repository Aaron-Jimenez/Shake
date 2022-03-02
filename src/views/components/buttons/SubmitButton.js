import React from 'react'

function SubmitButton({submitCallback}) {

    return (
        <div className="flex w-full items-center justify-center bg-grey-lighter">
                <button
                    className="rounded ring-1 ring-cyan-600 hover:ring-cyan-400 text-center text-slate-600 bg-slate-100 px-4 my-2"
                    type="button" onClick={submitCallback}>Submit
                </button>
        </div>
    )

}

export default SubmitButton;