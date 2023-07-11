// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    dateInput: '',
    appointmentsList: [],
    isTrue: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, dateInput} = this.state
    const newList = {
      id: uuidv4(),
      title,
      dateInput: format(new Date(dateInput), 'dd MMMM yyyy, EEEE'),
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newList],
      title: '',
      dateInput: '',
    }))
  }

  onTitleValue = event => {
    this.setState({title: event.target.value})
  }

  onDateValue = event => {
    this.setState({dateInput: event.target.value})
  }

  isStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStar: !each.isStar}
        }
        return each
      }),
    }))
  }

  onSelect = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
  }

  getFiltered = () => {
    const {appointmentsList, isTrue} = this.state

    if (isTrue) {
      return appointmentsList.filter(each => each.isStar === true)
    }
    return appointmentsList
  }

  render() {
    const {title, isTrue} = this.state
    const isOk = isTrue ? 'btn4' : 'btn1'
    const filteringData = this.getFiltered()
    return (
      <div className="bg">
        <div className="bg1">
          <h1 className="heading">Add Appointment</h1>
          <div className="bg2">
            <div>
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="input" className="title">
                  TITLE
                </label>
                <br />
                <input
                  id="input"
                  className="input-item"
                  placeholder="Title"
                  onChange={this.onTitleValue}
                  value={title}
                />
                <br />
                <label htmlFor="date" className="date">
                  DATE
                </label>
                <br />
                <input
                  id="date"
                  type="date"
                  className="input-item"
                  onChange={this.onDateValue}
                />
                <br />
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="bg3">
            <div>
              <h1 className="heading">Appointments</h1>
            </div>
            <div>
              <button type="button" className={isOk} onClick={this.onSelect}>
                Starred
              </button>
            </div>
          </div>
          <ul className="bg4">
            {filteringData.map(each => (
              <AppointmentItem
                listDetails={each}
                key={each.id}
                isStarred={this.isStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
