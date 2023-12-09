import React, { useEffect, useState } from "react";

function DisplayPage() {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // tracking loading status

    useEffect(() => {
        // Introduce a delay if needed
        const timer = setTimeout(() => {
            fetch('http://127.0.0.1:5555/cert')
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    setPdfUrl(url);
                    setIsLoading(false); 
                })
                .catch(error => {
                    console.error('Error fetching PDF:', error);
                    setIsLoading(false); // Update loading status in case of an error
                });
        }, 9000); 

        return () => clearTimeout(timer); 
    }, []); 
    return (
        <>
            <h2>Now we have generated the certificate, you can download it!</h2>
            {isLoading ? (
                <p>Loading...</p> // Display a loading message while fetching
            ) : pdfUrl ? (
                <>
                    <iframe src={pdfUrl} width="100%" height="600px" title="Certificate"></iframe>
                    <br />
                    <a href={pdfUrl} download="certificate.pdf">Download Certificate</a>
                </>
            ) : (
                <p>Failed to load the certificate.</p> // In case pdfUrl is null and not loading
            )}
        </>
    );
}

export default DisplayPage;
