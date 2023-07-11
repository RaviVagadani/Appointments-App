// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {listDetails, isStarred} = props
  const {id, title, dateInput, isStar} = listDetails
  const trueOrFalse = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onChangingStar = () => {
    isStarred(id)
  }

  return (
    <li>
      <div className="bg5">
        <div className="bg6">
          <div>
            <p className="title-para">{title}</p>
          </div>
          <div>
            <button
              type="button"
              className="btn2"
              onClick={onChangingStar}
              data-testid="star"
            >
              <img src={trueOrFalse} alt="star" />
            </button>
          </div>
        </div>
        <p className="date-para">Date: {dateInput}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
