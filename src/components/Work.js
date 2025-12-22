import "./WorkCardStyles.css"
import WworkCard from "./WworkCard"
import WorkCardData from "./WorkCardData"

const work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val,ind) =>{
            return(
              <WworkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
              />
            )
          })}  
        </div>
    </div>
  )
}

export default work