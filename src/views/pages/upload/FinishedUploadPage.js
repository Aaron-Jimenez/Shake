import React, {useState} from 'react';

function FinishedUploadPage({uploadedFilename}) {

    return (
        <div class="text-center items-center bg-slate-100">
            <div>
                <h1 className="py-10 text-center text-xl font-mono">Your lesson is uploaded!</h1>
                <h2>{uploadedFilename}</h2>
            </div>

        </div>
    );
}

export default FinishedUploadPage;