

// eslint-disable-next-line react/prop-types
function RadioButtons({setUserData, userData}){


    const handleChange = (event) =>{

        const value = event.target.value;

        switch(value){
            case"1":
                setUserData({...userData, colour: "1"})
            break;
            case"2":
                setUserData({...userData, colour: "2"})
            break;
            case"3":
                setUserData({...userData, colour: "3"})
            break;
            case"4":
                setUserData({...userData, colour: "4"})
            break;
        }
        
    }




    return(<>
    
    
<ul>
  <li>
    <input id="color-one" type="radio" name="color" value="1" checked={userData.colour ==="1"} onChange={handleChange} /><label htmlFor="color-one">1</label>
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2"  onChange={handleChange} /><label
      htmlFor="color-two"
      >2</label
    >
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3"  onChange={handleChange} /><label
      htmlFor="color-three"
      >3</label
    >
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4"  onChange={handleChange}/><label
      htmlFor="color-four"
      >4</label
    >
  </li>
</ul>

    
    </>)

}

export default RadioButtons;