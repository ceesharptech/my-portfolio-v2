import React from 'react'

const FolderSvg = ({classes, title, count}: {classes?: string, title: string, count: string}) => {
  return (
    <div className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="238.59" height="169.847" fill="none" overflow="visible"><path d="M 68.403 0.005 C 71.871 -0.074 75.339 0.842 78.389 2.637 L 89.977 9.451 L 103.079 18.256 L 107.004 20.785 C 107.839 21.212 108.837 21.664 109.992 22.085 C 111.692 22.703 113.566 23.077 115.221 23.308 L 223.24 23.308 C 228.129 23.308 232.265 25.216 235.004 28.276 C 237.743 31.336 239.085 35.548 238.384 40.157 L 238.59 157.046 C 237.562 163.55 230.33 169.847 222.339 169.847 L 16.393 169.847 C 8.402 169.847 2.436 163.792 1.456 157.288 L 0.179 18.958 C -1.201 9.396 5.542 1.415 15.397 1.192 Z" fill="rgb(30, 30, 30)" stroke="rgb(33, 33, 33)" stroke-miterlimit="10"></path></svg>
       <div className="relative flex flex-col justify-start gap-1.5">
                <span className="absolute left-0 z-10 text-[17px] font-semibold">
                {title}
              </span> 
              <small
                className={`absulute-left-0 top-4 z-10 text-[15px]`}
              >
                {count}
              </small>
            </div>
    </div>
  )
}

export default FolderSvg