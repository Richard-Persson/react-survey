/* eslint-disable react/prop-types */
function Checkboxes({setUserData, userData}){

    

    const handleChange = (event) =>{

        const value = event.target.value
        
        switch(value){

            case"bathing":
                if(userData.timeSpent[0]===value){
                    userData.timeSpent[0] = ""
                    break
                }
                userData.timeSpent[0] = value
            break;

            case"swimming":
                if(userData.timeSpent[1]===value){
                    userData.timeSpent[1] = ""
                    break
                }
                userData.timeSpent[1] = value
            break;
            
            case"chatting":
                if(userData.timeSpent[2]===value){
                    userData.timeSpent[2] = ""
                    break
                }
                userData.timeSpent[2] = value
            break;

            case"noTime":
                if(userData.timeSpent[3]===value){
                    userData.timeSpent[3] = ""
                    break
                }
                userData.timeSpent[3] = value
            break;
        }

        
    } 

    
    return(<>
    
<ul>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="swimming"
        onChange={handleChange}
      />Swimming</label>
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="bathing" onChange={handleChange}/>Bathing</label
    >
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
        onChange={handleChange}
      />Chatting</label>
  </li>
  <li>
    <label><input name="spend-time" type="checkbox" value="noTime" onChange={handleChange}/>No time</label>
  </li>
</ul>

    </>)
}


export default Checkboxes;