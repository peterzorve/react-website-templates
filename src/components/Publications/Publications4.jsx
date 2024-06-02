import React from 'react'
import "./Publications.css"

// import program_1 from "../../assets/program-1.png"
// import program_2 from "../../assets/program-2.png"
// import program_3 from "../../assets/program-3.png"

import program_1 from "../../assets/images/publication/abst1.png"
import program_2 from "../../assets/images/publication/abst2.png"
import program_3 from "../../assets/images/publication/abst3.png"


import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"


const Publications4 = () => {
  return (
    <div className='programs'>

        <div className="program">
            <img src={program_1} alt="" />

            <h1>ACS Omega, 2018, 3</h1>
            <h4>Adsorption of Titanium Tetrachloride on Magnesium Dichloride Clusters</h4>
            <h2>Abstract</h2>
            <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p>

            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={program_2} alt="" />

            <h1>ACS Omega, 2018, 3</h1>
            <h4>Adsorption of Titanium Tetrachloride on Magnesium Dichloride Clusters</h4>
            <h2>Abstract</h2>
            <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p>

            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={program_3} alt="" />

            <h1>ACS Omega, 2018, 3</h1>
            <h4>Adsorption of Titanium Tetrachloride on Magnesium Dichloride Clusters</h4>
            <h2>Abstract</h2>
            <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p>

            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>

    </div>
  )
}

export default Publications4



