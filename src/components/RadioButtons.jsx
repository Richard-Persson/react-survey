

// eslint-disable-next-line react/prop-types
function RadioButtons({setUserData, userData}){


    const handleChange = (event) =>{

        const value = event.target.value;

        switch(value){
            case"1":
                setUserData({...userData, rating: "1"})
            break;
            case"2":
                setUserData({...userData, rating: "2"})
            break;
            case"3":
                setUserData({...userData, rating: "3"})
            break;
            case"4":
                setUserData({...userData, rating: "4"})
            break;
        }
        
    }




    return(<>
    
    
<ul>
  <li>
    <input id="color-one" type="radio" name="color" value="1" checked={userData.rating ==="1"} onChange={handleChange} /><label htmlFor="color-one">1</label>
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