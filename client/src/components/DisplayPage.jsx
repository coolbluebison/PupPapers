// import React, { useEffect, useState } from "react";

// function DisplayPage() {
//     const [pdfUrl, setPdfUrl] = useState("");
//     const [check, setCheck] = useState(undefined)

 
//     while (pdfUrl==="") {
//         useEffect(() => {
//             fetch('http://127.0.0.1:5555/cert')
//             .then(response => response.blob())
//             .then(blob => {
//                 const url = window.URL.createObjectURL(blob);
//                 setPdfUrl(url);
//             });
//         }, []);
//     }

//     return (
//         <>
//             <h2>Now we have generated the certificate, you can download it!</h2>
//             {pdfUrl && (
//                 <>
//                     <iframe src={pdfUrl} width="100%" height="600px" title="Certificate"></iframe>
//                     <br />
//                     <a href={pdfUrl} download="certificate.pdf">Download Certificate</a>
//                 </>
//             )}
//         </>
//     );
// }

// export default DisplayPage;



import React, { useEffect, useState } from "react";

function DisplayPage() {
    const [pdfUrl, setPdfUrl] = useState("");

    useEffect(() => {
        // Fetch the PDF only if pdfUrl is empty
        if (pdfUrl === "") {
            fetch('http://127.0.0.1:5555/cert')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                setPdfUrl(url);
            })
            .catch(error => console.error('Error fetching PDF:', error));
        }
    }, [pdfUrl]); // Dependency on pdfUrl

    return (
        <>
            <h2>Now we have generated the certificate, you can download it!</h2>
            {pdfUrl && (
                <>
                    <iframe src={pdfUrl} width="100%" height="600px" title="Certificate"></iframe>
                    <br />
                    <a href={pdfUrl} download="certificate.pdf">Download Certificate</a>
                </>
            )}
        </>
    );
}

export default DisplayPage;


