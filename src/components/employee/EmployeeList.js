import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: [],
  }

  componentDidMount() {
    console.log("Employee LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAllEmployees()
      .then((employees) => {
        this.setState({
          employees: employees
        })
      })
  }

  deleteEmployee = id => {
    EmployeeManager.deleteEmployee(id)
      .then(() => {
        EmployeeManager.getAllEmployees()
          .then((newEmployees) => {
            this.setState({
              employees: newEmployees
            })
          })
      })
  }

  render() {
    console.log("EmployeeList: Render");

    return (
      <React.Fragment>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/employees/new") }}>
            Add New Employee
        </button>
        </section>
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard
              key={employee.id}
              employee={employee}
              deleteEmployee={this.deleteEmployee}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default EmployeeList;
