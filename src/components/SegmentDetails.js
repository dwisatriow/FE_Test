import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const SegmentDetails = (props) => {
  const apiUrl = useSelector((state) => state.apiUrl)
  const [cState, setCState] = useState({
    loading: true,
    showModal: false,
  })

  useEffect(() => {
    requestSegment()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestSegment() {
    const res = await fetch(`${apiUrl}/ruas/${props.match.params.id}`)
    const json = await res.json()

    // console.log(json)
    setCState({
      loading: false,
      segment: json,
    })
  }

  // async componentDidMount() {
  //   // eslint-disable-next-line no-undef
  //   const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
  //   const json = await res.json()
  //   this.setState(
  //     Object.assign(
  //       {
  //         loading: false,
  //       },
  //       json.pets[0],
  //     ),
  //   )
  // }

  const toggleModal = () => {
    setCState((state) => {
      Object.assign(cState, { showModal: !cState.showModal })
    })
  }

  if (cState.loading) {
    return <h4>Loading...</h4>
  }

  const { unit, ruas, picture, create_date } = cState.segment

  return (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal}, ${breed} - ${city}, ${state}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adpot {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default SegmentDetails
