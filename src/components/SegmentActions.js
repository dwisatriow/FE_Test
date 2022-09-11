import React from 'react'
import PropTypes from 'prop-types'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilFolderOpen, cilTrash } from '@coreui/icons'

const SegmentActions = (props) => {
  const { id } = props
  // console.log('info', props.id)

  return (
    <>
      <CButton color="secondary" variant="ghost" onClick={() => console.log('clicked')}>
        <CIcon icon={cilPencil} size="sm" />
      </CButton>
      <CButton color="info" variant="ghost" onClick={() => console.log('clicked')}>
        <CIcon icon={cilFolderOpen} size="sm" />
      </CButton>
      <CButton color="danger" variant="ghost" onClick={() => console.log('clicked')}>
        <CIcon icon={cilTrash} size="sm" />
      </CButton>
    </>
  )
}

SegmentActions.propTypes = {
  id: PropTypes.string,
}

export default SegmentActions
