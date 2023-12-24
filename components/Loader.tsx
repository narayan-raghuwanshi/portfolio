import React from 'react'

type PropsType={
    text: string
}

const Loader = (props:PropsType) => {
    return (
        <div className="flex items-center space-x-2 z-50">
            <div aria-label="Loading..." role="status">
                <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="animate-spin w-4 h-4 stroke-white">
                    <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
                    </path>
                </svg>
            </div>
            <span className="text-md text-white">{props.text}</span>
        </div>
    )
}

export default Loader