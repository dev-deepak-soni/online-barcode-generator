import { useState } from 'react';
import Barcode from 'react-barcode';

export default function Home() {
  const [value, setValue] = useState('Barcode example');
  return (
    <div className="flex justify-center items-center h-screen">
            {/* Input Section */}
            <div className="w-1/2 p-6 border-r">
                <h1 className="text-2xl mb-4">BarCode Generator</h1>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Value of BAR CODE"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                 
            </div>

            {/* Preview Section */}
            <div className="w-1/2 p-6">
                {value && (
                    <Barcode value={value} />
                )}
            </div>
        </div>
  )
}
