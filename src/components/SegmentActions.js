import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilFolderOpen, cilTrash } from '@coreui/icons'

const SegmentActions = (props) => {
  const { id } = props
  const dispatch = useDispatch()
  const roadSegments = useSelector((state) => state.roadSegments)
  // const showModal = useSelector((state) => state.showModal)
  // console.log('info', props.id)

  // const toggleModal = () => {
  //   setCState(Object.assign(cState, { showModal: !cState.showModal }))
  // }

  const viewSegment = () => {
    const segment = roadSegments.filter((segment) => segment.id === id)[0]
    if (segment !== undefined) {
      console.log(segment)
      dispatch({ type: 'set', selectedSegment: segment })
      dispatch({ type: 'set', showModal: true })
      // setSelectedSegment(segment)
      // setCState(
      //   Object.assign(cState, {
      //     showModal: true,
      //     segment: segment,
      //   }),
      // )
      // setCState({
      //   showModal: true,
      //   segment: segment,
      // })
    }
  }

  return (
    <>
      <CButton color="secondary" variant="ghost" onClick={viewSegment}>
        <CIcon icon={cilPencil} size="sm" />
      </CButton>
      <CButton color="info" variant="ghost" onClick={viewSegment}>
        <CIcon icon={cilFolderOpen} size="sm" />
      </CButton>
      <CButton color="danger" variant="ghost" onClick={viewSegment}>
        <CIcon icon={cilTrash} size="sm" />
      </CButton>
    </>
  )
}

SegmentActions.propTypes = {
  id: PropTypes.string,
  // selectedSegment: PropTypes.func,
  // cState: PropTypes.object,
  // setCState: PropTypes.func,
}

export default SegmentActions
