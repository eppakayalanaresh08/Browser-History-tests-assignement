import './index.css'

const EachHistoryList = props => {
  const {EachList, onDeleteEach} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = EachList

  const onClickDelete = () => {
    onDeleteEach(id)
  }

  return (
    <li className="list-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="container-title">
        <div className="image-container">
          <img src={logoUrl} alt="domain logo" className="image-url" />
          <div className="title-domain">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="button-delete"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default EachHistoryList
