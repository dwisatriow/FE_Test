import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { CButton } from '@coreui/react'

const PreviewPicture = (props) => {
  const { id } = props
  const dispatch = useDispatch()
  const roadSegments = useSelector((state) => state.roadSegments)

  const previewImage = () => {
    const segment = roadSegments.filter((segment) => segment.id === id)[0]
    if (segment !== undefined) {
      console.log(segment)
      dispatch({ type: 'set', selectedSegment: segment, showModalPreview: true })
    }
  }

  return (
    <CButton color="primary" className="text-white" size="sm" onClick={previewImage}>
      {'Preview Gambar'}
    </CButton>
  )
}

PreviewPicture.propTypes = {
  id: PropTypes.string,
}

export default PreviewPicture
