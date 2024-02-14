import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneCP {
    title?: string,
    onChange?: Function
}

const Dropzone = ({ title, onChange } : DropzoneCP) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        onChange ? onChange(acceptedFiles) : null
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div {...getRootProps()} className="dropzone__Wrapper">
            <input {...getInputProps()} />
            <h6>{title}</h6>
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
}

export default Dropzone