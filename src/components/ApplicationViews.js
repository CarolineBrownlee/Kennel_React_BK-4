// import { Route } from 'react-router-dom'
import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './authentication/Login'

class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    // Check if credentials are in local storage
    //returns true/false
    // isAuthenticated = () => localStorage.getItem("credentials") !== null
    return (
      <React.Fragment>
        {/* Once a user logs in, redirect them to the home route. You will need to refactor the login route. With routes, consider when you will need to use component vs render and the use of {...props}. */}
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <Home {...props}/>
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/login" component={Login} />
      
        {/* <Route exact path="/" render={(props) => {
          return <Home /> */}
        {/* }} /> */}
        {/* <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} /> */}
        {/* Make sure you add the `exact` attribute here */}
        {/* <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} /> */}
        {/* REFACTORED ROUTE FOR AUTHENTICATION */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        {/* // Our shiny new route. */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route exact path="/locations" render={props => {
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        {/* <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
        }} /> */}
        {/* // Our shiny new route. */}
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route exact path="/owners" render={props => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />

        {/* }} */}
      </React.Fragment>
    )
  }
}

// Once a user logs in, redirect them to the home route. You will need to refactor the login route. With routes, consider when you will need to use component vs render and the use of {...props}.




export default ApplicationViews

