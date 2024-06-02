import React from 'react'
import "./Publications.css"

// import program_1 from "../../assets/program-1.png"
// import program_2 from "../../assets/program-2.png"
// import program_3 from "../../assets/program-3.png"

import program_1 from "../../assets/images/publication/abst1.png"
import program_2 from "../../assets/images/publication/abst2.png"
import program_6 from "../../assets/images/publication/abst6.png"


import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"


const Publications3 = () => {
  return (
    <div className='programs'>

        <div className="program">
            <img src={program_6} alt="" />

            <h1>Master's Thesis (Balqees Salami)</h1>
            <h4>Effect of Methanol as a Model Internal Elctron Donor on the Stability of Magnesium Dichloride Surfaces in the Heterogeneous Ziegler-Natta Catalyst System: a DFT Study</h4>
            {/* <h2>Balqees Salami</h2> */}
            {/* <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p> */}

            <div className="caption">
                {/* <img src={program_icon_1} alt="" /> */}
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={program_6} alt="" />

            <h1>Master's Thesis (Anand Chekkottu Parambil)</h1>
            <h4>Two Coordinate Coinage Metal Complexes for OLEDs: Effects of Substitution on the Amide Ligand</h4>
            {/* <h2>Anand Chekkottu Parambil</h2> */}
            {/* <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p> */}

            <div className="caption">
                {/* <img src={program_icon_2} alt="" /> */}
                <p>Masters Degree</p>
            </div>
        </div>


        <div className="program">
            <img src={program_6} alt="" />

            <h1>Master's Thesis (Yang Li)</h1>
            <h4>Interaction Between Triethylaluminum and Titanium Tetrachloride on Magnesium Dichloride Clusters</h4>
            {/* <h2>Yang Li</h2> */}
            {/* <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p> */}

            <div className="caption">
                {/* <img src={program_icon_2} alt="" /> */}
                <p>Masters Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={program_6} alt="" />

            <h1>Master's Thesis (Aku Lempelto)</h1>
            <h4>OLED-Laitteet ja Niissä Käytettävät Karbeeni-Metalli-Amidi-Yhdisteet</h4>
            {/* <h2>Aku Lempelto</h2> */}
            {/* <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p> */}

            <div className="caption">
                {/* <img src={program_icon_3} alt="" /> */}
                <p>Post Graduation</p>
            </div>
        </div>

    </div>
  )
}

export default Publications3




