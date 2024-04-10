import React from 'react';

export const InputComponent = ({onChange}:{onChange:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void}) => {
    return (
        <div>
            <form>
                {/* Change border-gray-200 to border-orange-500 for orange border */}
                <div className="w-full mb-4 border rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white rounded-t-lg">
                        {/* Remove text-black as it's redundant with text-gray-900, and remove border-red-400 to eliminate the inner border */}
                        <textarea 
                            id="comment" 
                            rows={15} 
                            className="outline-none w-full px-0 text-lg text-gray-900 bg border-0 focus:ring-0" // Removed border class here
                            placeholder="Write your blog here..." 
                            required
                            onChange={onChange}
                        ></textarea>
                    </div>
                    
                </div>
            </form>
          
        </div>
    );
};

export default InputComponent;
