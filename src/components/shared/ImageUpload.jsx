import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_MB = 5;

/**
 * File picker for use inside a plain <form>. The real <input type="file">
 * keeps the given `name`, so FormData(form).get(name) returns the chosen file.
 * `currentUrl` shows the already-saved image when editing.
 */
const ImageUpload = ({ name = 'image', currentUrl = '' }) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [fileName, setFileName] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    // Release the blob URL when it changes or on unmount
    useEffect(() => () => { if (previewUrl) URL.revokeObjectURL(previewUrl); }, [previewUrl]);

    const clear = () => {
        if (inputRef.current) inputRef.current.value = '';
        setPreviewUrl('');
        setFileName('');
    };

    const acceptFile = (file) => {
        if (!file) return clear();
        if (!ALLOWED_TYPES.includes(file.type)) {
            toast.error('Only JPG, PNG or WEBP images are allowed');
            return clear();
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            toast.error(`Image must be smaller than ${MAX_SIZE_MB} MB`);
            return clear();
        }
        setFileName(file.name);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleChange = (e) => acceptFile(e.target.files?.[0]);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (!file) return;
        // Put the dropped file into the real input so it is submitted with the form
        const dt = new DataTransfer();
        dt.items.add(file);
        inputRef.current.files = dt.files;
        acceptFile(file);
    };

    const shown = previewUrl || currentUrl;

    return (
        <div>
            <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`flex items-center gap-4 p-3 border border-dashed rounded-md cursor-pointer transition-colors ${
                    isDragging ? 'border-primary bg-primary/10' : 'border-white/20 hover:border-primary/60'
                }`}
            >
                {shown ? (
                    <img src={shown} alt="Preview" className="w-20 h-20 rounded object-cover shrink-0" />
                ) : (
                    <div className="w-20 h-20 rounded bg-white/5 flex items-center justify-center text-gray-500 shrink-0">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4-4a3 3 0 014 0l4 4m-2-2l1-1a3 3 0 014 0l2 2M14 8h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
                <div className="min-w-0 text-xs">
                    <p className="text-gray-200 font-medium">
                        {fileName ? fileName : 'Click to choose from your computer, or drag & drop'}
                    </p>
                    <p className="text-gray-500 mt-0.5">
                        JPG, PNG or WEBP, up to {MAX_SIZE_MB} MB
                        {currentUrl && !previewUrl ? ' · leave empty to keep current image' : ''}
                    </p>
                </div>
                {previewUrl && (
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); clear(); }}
                        className="ml-auto btn btn-ghost btn-xs text-red-400"
                    >
                        Remove
                    </button>
                )}
            </div>
            <input
                ref={inputRef}
                type="file"
                name={name}
                accept="image/jpeg,image/png,image/webp"
                onChange={handleChange}
                className="hidden"
            />
        </div>
    );
};

export default ImageUpload;
