import React, { useEffect, useState} from 'react'
import { employeeList } from '../services/EmployeeService';

const EmployeeListComponent = () => {
   
    const [employees, setEmloyees] = useState([]);
    
    useEffect(() => {
        employeeList().then((response) => {
            setEmloyees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);

  return (
    <div className='d-flex justify-content-center'>
        <table className='table table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employe =>
                        <tr key={employe.id}>
                            <td>{employe.id}</td>
                            <td>{employe.firstName}</td>
                            <td>{employe.lastName}</td>
                            <td>{employe.email}</td>
                        </tr>
                    )
                }  
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeListComponent