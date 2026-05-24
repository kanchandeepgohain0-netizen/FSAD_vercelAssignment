function Education(){
    const education = [
        {
            year: "2021-2022",
            Passed: "Matric",
            institute: "XY"
        },
        {
            year: "2022-2024",
            Passed: "HS",
            institute: "YZ"
        },
        {
            year: "2024-2028",
            Passed: "BSCS",
            institute: "XZ"
        }
    ];
    return(
        <div className="card">
            <h1>Education</h1>
            {education.map((edu,index)=>{
                return(
                    <div key={index}>
                        <h2>{edu.year}</h2>
                        <p><b>Passed: </b>{edu.Passed}</p>
                        <p><b>Institute: </b>{edu.institute}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Education;
