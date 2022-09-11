import React from 'react'
import PropTypes from 'prop-types'
import { CButton } from '@coreui/react'

const PreviewPicture = (props) => {
  const { id } = props

  return (
    <CButton color="info" className="text-white" size="sm" onClick={() => console.log('clicked')}>
      {`Preview Gambar ${id}`}
    </CButton>
  )
}

PreviewPicture.propTypes = {
  id: PropTypes.string,
}

export default PreviewPicture
