import React,{useState} from 'react'

const getDatafromLS=()=>{
    const data=localStorage.getItem('Users');
    if(data){
        return JSON.parse(data)
    }
    else {
        return []
    }
}

const Home = () => {
    const[Users,setUsers]=useState(getDatafromLS())
    const deleteHandle=(password)=>{
        const filterUsers=Users.filter((ele,index)=>{
            return ele.password !==password
        })
        setUsers(filterUsers)
    }
  return (
    <div class="container">


  <div class="row">
  {
            Users.length > 0 && 
    <div class="col-md-12">
      
       
      <table class="table table-bordered" id="editableTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Dob</th>
          </tr>
        </thead>
        <tbody>
        {Users.map((name,index) => (
            <tr key={index}>

            <td data-field="name">{name.name}</td>
            <td data-field="birthday">{name.email}</td>
            <td data-field="age">{name.Dob}</td>
            <td>
             
              
              <a class="button button-small edit" title="Delete" onClick={()=>deleteHandle(name.password)}>
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>))}
      
        </tbody>
      </table>
    </div>
      }
      {Users.length < 1 && <div>No Users</div>}
  </div>
</div>
  )
}

export default Home