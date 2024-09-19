import { useState } from "react"

export const LearnFormHandler = () => {
        // handle individually
    // const [firstname, setFirstname] = useState('Rayhan')
    // const [lastname, setLastname] = useState('Kabir')

    // const handlefirstname = (e)=>{
    //     setFirstname(e.target.value)
    // }
    // const handlelastname = (e)=>{
    //     setLastname(e.target.value)
    // }

        // handle as a whole
    const [formdata, setFormData] = useState({
        firstname: "",
        lastname: "",
    });

    const handleChange = (e)=>{
        setFormData({...formdata, [e.target.name]:e.target.value,})
    }

    const handledata = (e)=>{
        e.preventDefault()
        console.log("Formdata ",formdata);
    }

  return (
    <>
            {/* handle individually */}
        {/* <form action="">
            First Name: <input type="text" name="firstname" value={firstname} onChange={handlefirstname}/><br /><br />
            Last Name: <input type="text" name="latsname" value={lastname} onChange={handlelastname}/><br /><br />
        </form> */}

            {/* handle as a whole */}
            <form action="" onSubmit={handledata}>
                First Name: <input type="text" name="firstname" value={formdata.firstname} onChange={handleChange}/><br /><br />
                Last Name: <input type="text" name="lastname" value={formdata.lastname} onChange={handleChange}/><br /><br />
                <button type="submit">Submit</button>
            </form>
    </>
  )
}
