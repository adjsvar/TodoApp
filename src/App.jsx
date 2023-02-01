
import './App.css'

function App() { 

  return (
    <>
      <div className='startDiv'>
        <div>
          <h2>Today's Task</h2>
          <p className='date'>Thuesday, 31 Jan</p>
        </div>
        <button className='principalButtom'> + New Task </button>
      </div>
      <div className='taskCategories'>
        <p className='categorySelected'> All <span className='taskNumber'>35</span></p>
        <p>Open <span className='taskNumber'>14</span></p>
        <p>Closed <span className='taskNumber'>19</span></p>
        <p>Archived <span className='taskNumber'>2</span></p>
      </div>

      <div className="taskGrid">
        <div className="task">
          <div className="taskInfo">
            <h3 className="taskTitle">
              Review with Client
            </h3>
            <p className="taskDescription">
              Product Team
            </p> 
          </div>
          <div className="taskSelection">            
          </div>         
          <div className="taskDate">
            <p className='taskDay'>Today</p>
            <p className="taskTime"> 01:00 PM - 03:00 PM</p>
          </div>
        </div>
        <div className="task">
          <div className="taskInfo">
            <h3 className="taskTitle">
              Review with Client
            </h3>
            <p className="taskDescription">
              Product Team
            </p> 
          </div>
          <div className="taskSelection">            
          </div>         
          <div className="taskDate">
            <p className='taskDay'>Today</p>
            <p className="taskTime"> 01:00 PM - 03:00 PM</p>
          </div>
        </div>
        <div className="task">
          <div className="taskInfo">
            <h3 className="taskTitle">
              Review with Client
            </h3>
            <p className="taskDescription">
              Product Team
            </p> 
          </div>
          <div className="taskSelection">            
          </div>         
          <div className="taskDate">
            <p className='taskDay'>Today</p>
            <p className="taskTime"> 01:00 PM - 03:00 PM</p>
          </div>
        </div>
      </div>      

    </>
  )
}

export default App
