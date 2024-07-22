import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const QrCode = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput('');
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setQrCode('');
    }

    return (
        
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">QR Code Generator</h1>
            <div className="mb-6 w-full max-w-md">
                <input 
                    onChange={handleInputChange}
                    value={input}
                    type="text"
                    name='qr-code'
                    placeholder='Paste Link Here'
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    disabled={!input.trim()}
                    onClick={handleGenerateQrCode}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Generate
                </button>
            </div>
            {qrCode && (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <QRCode
                        id='qr-code-value'
                        value={qrCode}
                        size={300}
                        className="mx-auto"
                    />
                </div>
            )}
            <div className="flex justify-center mt-4">
                <a href="https://github.com/developer-khadim" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
                </a>
                <a href="https://www.linkedin.com/in/khadim-ali12/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900" />
                </a>
            </div>
            <p className="text-center text-gray-600 mt-2">Please like and follow on GitHub & Linkedin.</p>
        </div>

    )
}

export default QrCode