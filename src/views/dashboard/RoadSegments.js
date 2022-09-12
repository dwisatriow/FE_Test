import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  // CAvatar,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CCol,
  CFormLabel,
  CFormInput,
  CSpinner,
  CImage,
  CFormSelect,
} from '@coreui/react'
// import { CChartLine } from '@coreui/react-chartjs'
// import { getStyle, hexToRgba } from '@coreui/utils'
// import CIcon from '@coreui/icons-react'
// import {
//   cibCcAmex,
//   cibCcApplePay,
//   cibCcMastercard,
//   cibCcPaypal,
//   cibCcStripe,
//   cibCcVisa,
//   cibGoogle,
//   cibFacebook,
//   cibLinkedin,
//   cifBr,
//   cifEs,
//   cifFr,
//   cifIn,
//   cifPl,
//   cifUs,
//   cibTwitter,
//   cilCloudDownload,
//   cilPeople,
//   cilUser,
//   cilUserFemale,
// } from '@coreui/icons'

// import avatar1 from 'src/assets/images/avatars/1.jpg'
// import avatar2 from 'src/assets/images/avatars/2.jpg'
// import avatar3 from 'src/assets/images/avatars/3.jpg'
// import avatar4 from 'src/assets/images/avatars/4.jpg'
// import avatar5 from 'src/assets/images/avatars/5.jpg'
// import avatar6 from 'src/assets/images/avatars/6.jpg'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { PreviewPicture, SegmentActions } from '../../components/index'

// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
// }

// const defaultData = [
//   {
//     firstName: 'tanner',
//     lastName: 'linsley',
//     age: 24,
//     visits: 100,
//     status: 'In Relationship',
//     progress: 50,
//   },
//   {
//     firstName: 'tandy',
//     lastName: 'miller',
//     age: 40,
//     visits: 40,
//     status: 'Single',
//     progress: 80,
//   },
//   {
//     firstName: 'joe',
//     lastName: 'dirte',
//     age: 45,
//     visits: 20,
//     status: 'Complicated',
//     progress: 10,
//   },
// ]

const formatDate = (date) => {
  const today = new Date(date)
  const yyyy = today.getFullYear()
  let mm = today.getMonth() + 1
  let dd = today.getDate()

  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm

  const formattedDate = `${dd}/${mm}/${yyyy}`
  return formattedDate
}

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('id', {
    header: () => 'No',
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor('ruas', {
    header: () => 'Ruas',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('unit', {
    header: () => 'Unit Kerja',
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    header: 'Gambar',
    cell: (info) => <PreviewPicture id={info.row.original.id} />,
  }),
  columnHelper.accessor('date_create', {
    header: 'Tanggal',
    cell: (info) => formatDate(new Date(info.getValue())),
  }),
  columnHelper.display({
    header: 'Aksi',
    cell: (info) => <SegmentActions id={info.row.original.id} />,
  }),
]

// const editSchema = Yup.object().shape({
//   unit: Yup.string()
//     .min(6, 'Minimum 6 karakter')
//     .max(50, 'Maksimum 50 karakter')
//     .required('Required'),
//   ruas: Yup.string()
//     .min(6, 'Minimum 6 karakter')
//     .max(50, 'Maksimum 50 karakter')
//     .required('Required'),
//   // picture: Yup.string().email('Invalid email').required('Required'),
//   date_create: Yup.string().email('Invalid email').required('Required'),
// })

const RoadSegments = () => {
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: cilUser, value: 53 },
  //   { title: 'Female', icon: cilUserFemale, value: 43 },
  // ]

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  // ]

  // const tableExample = [
  //   {
  //     avatar: { src: avatar1, status: 'success' },
  //     user: {
  //       name: 'Yiorgos Avraamu',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'USA', flag: cifUs },
  //     usage: {
  //       value: 50,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'success',
  //     },
  //     payment: { name: 'Mastercard', icon: cibCcMastercard },
  //     activity: '10 sec ago',
  //   },
  //   {
  //     avatar: { src: avatar2, status: 'danger' },
  //     user: {
  //       name: 'Avram Tarasios',
  //       new: false,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Brazil', flag: cifBr },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'info',
  //     },
  //     payment: { name: 'Visa', icon: cibCcVisa },
  //     activity: '5 minutes ago',
  //   },
  //   {
  //     avatar: { src: avatar3, status: 'warning' },
  //     user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
  //     country: { name: 'India', flag: cifIn },
  //     usage: {
  //       value: 74,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'warning',
  //     },
  //     payment: { name: 'Stripe', icon: cibCcStripe },
  //     activity: '1 hour ago',
  //   },
  //   {
  //     avatar: { src: avatar4, status: 'secondary' },
  //     user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
  //     country: { name: 'France', flag: cifFr },
  //     usage: {
  //       value: 98,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'danger',
  //     },
  //     payment: { name: 'PayPal', icon: cibCcPaypal },
  //     activity: 'Last month',
  //   },
  //   {
  //     avatar: { src: avatar5, status: 'success' },
  //     user: {
  //       name: 'Agapetus Tadeáš',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Spain', flag: cifEs },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'primary',
  //     },
  //     payment: { name: 'Google Wallet', icon: cibCcApplePay },
  //     activity: 'Last week',
  //   },
  //   {
  //     avatar: { src: avatar6, status: 'danger' },
  //     user: {
  //       name: 'Friderik Dávid',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Poland', flag: cifPl },
  //     usage: {
  //       value: 43,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'success',
  //     },
  //     payment: { name: 'Amex', icon: cibCcAmex },
  //     activity: 'Last week',
  //   },
  // ]

  const dispatch = useDispatch()
  const roadSegments = useSelector((state) => state.roadSegments)
  const apiUrl = useSelector((state) => state.apiUrl)

  const showModalView = useSelector((state) => state.showModalView)
  const showModalEdit = useSelector((state) => state.showModalEdit)
  const showModalDelete = useSelector((state) => state.showModalDelete)
  const showModalPreview = useSelector((state) => state.showModalPreview)
  const showModalAdd = useSelector((state) => state.showModalAdd)

  const selectedSegment = useSelector((state) => state.selectedSegment)
  const [loadingEdit, setLoadingEdit] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [loadingAdd, setLoadingAdd] = useState(false)

  // const imgEl = useRef(null)

  // const [validated, setValidated] = useState(false)

  // const [unit, setUnit] = useState(null)
  // const [ruas, setRuas] = useState(null)
  // const [picture, setPicture] = useState(null)
  // const [dateCreate, setDateCreate] = useState(null)

  // let unit, ruas, picture, date_create

  // useEffect(() => {
  //   if (selectedSegment) {
  //     // ;({ unit, ruas, picture, date_create } = selectedSegment)
  //     const { newUnit, newRuas, newPicture, newDateCreate } = selectedSegment
  //     setUnit(newUnit)
  //     setRuas(newRuas)
  //     setPicture(newPicture)
  //     setDateCreate(newDateCreate)
  //   }
  // }, [selectedSegment, showModalEdit])

  const handleInput = (e) => {
    e.preventDefault()

    switch (e.target.attributes.id.nodeValue) {
      case 'unit':
        // console.log('unit', JSON.stringify(e.target.value))
        dispatch({
          type: 'set',
          selectedSegment: Object.assign({ ...selectedSegment }, { unit: e.target.value }),
        })
        break
      case 'ruas':
        // console.log('ruas', JSON.stringify(e.target.value))
        dispatch({
          type: 'set',
          selectedSegment: Object.assign({ ...selectedSegment }, { ruas: e.target.value }),
        })
        break
      case 'picture':
        // if (!imgEl.current) {
        //   imgEl.current = document.getElementById('files')
        // }
        // console.log('picture', imgEl.current.files[0])
        dispatch({
          type: 'set',
          selectedSegment: Object.assign({ ...selectedSegment }, { picture: e.target.value }),
        })
        break
      case 'date_create':
        // console.log('date_create', JSON.stringify(e.target.value))
        dispatch({
          type: 'set',
          selectedSegment: Object.assign({ ...selectedSegment }, { date_create: e.target.value }),
        })
        break
      default:
        break
    }
  }

  useEffect(() => {
    requestSegments()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestSegments() {
    const res = await fetch(`${apiUrl}/ruas`)
    const json = await res.json()

    // console.log(json)
    dispatch({ type: 'set', roadSegments: json })
  }

  // const toggleModal = () => {
  //   dispatch({ type: 'set', showModal: !showModal })
  //   // setCState(Object.assign(cState, { showModal: !cState.showModal }))
  //   // console.log('modal toggled to:', showModal)
  // }

  // useEffect(() => {
  //   if (selectedSegment) {
  //     toggleModal()
  //   }
  // }, [selectedSegment]) // eslint-disable-line react-hooks/exhaustive-deps

  // const [data, setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data: roadSegments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  async function editSegment() {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${apiUrl}/ruas/${selectedSegment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedSegment),
    })
    const json = await res.json()
    if (json) {
      setLoadingEdit(false)
      dispatch({ type: 'set', showModalEdit: false })
      requestSegments()
    }
  }

  async function deleteSegment() {
    const res = await fetch(`${apiUrl}/ruas/${selectedSegment.id}`, {
      method: 'DELETE',
    })
    const json = await res.json()
    if (json) {
      setLoadingDelete(false)
      dispatch({ type: 'set', showModalDelete: false })
      requestSegments()
    }
  }

  async function addSegment() {
    const res = await fetch(`${apiUrl}/ruas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedSegment),
    })
    const json = await res.json()
    if (json) {
      setLoadingAdd(false)
      dispatch({ type: 'set', showModalAdd: false })
      requestSegments()
    }
  }

  const handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault()
    setLoadingEdit(true)
    editSegment()
  }

  const handleDelete = (e) => {
    // console.log(e)
    setLoadingDelete(true)
    deleteSegment()
  }

  const handleAdd = (e) => {
    // console.log(e)
    setLoadingAdd(true)
    addSegment()
  }

  console.log('rendered')
  // console.log('showModal', showModal)

  if (!roadSegments.length) {
    return <h4>Loading...</h4>
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol>
              <h4 id="road-segments" className="card-title mb-0">
                Data Ruas
              </h4>
            </CCol>
            <CCol>
              <div className="d-md-flex justify-content-md-end">
                <CButton
                  color="primary"
                  size="sm"
                  className="me-md-2"
                  onClick={() =>
                    dispatch({
                      type: 'set',
                      selectedSegment: {},
                      showModalAdd: true,
                    })
                  }
                >
                  Tambah Ruas
                </CButton>
              </div>
            </CCol>
          </CRow>
          <CRow className="mt-4">
            <CTable align="middle" small striped hover bordered responsive>
              <CTableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <CTableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <CTableHeaderCell key={header.id} className="text-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </CTableHeaderCell>
                    ))}
                  </CTableRow>
                ))}
              </CTableHead>
              <CTableBody>
                {table.getRowModel().rows.map((row) => (
                  <CTableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <CTableDataCell key={cell.id} className="text-center">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </CTableDataCell>
                    ))}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <div className="h-4" />
            <button onClick={() => rerender()} className="border p-2">
              Rerender
            </button>
          </CRow>
        </CCardBody>
      </CCard>

      <CModal
        visible={showModalView}
        alignment="center"
        size="lg"
        backdrop="static"
        onClose={() => dispatch({ type: 'set', showModalView: false })}
      >
        <CModalHeader>
          <CModalTitle>Detail Ruas</CModalTitle>
        </CModalHeader>
        {selectedSegment ? (
          <>
            <CModalBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="unit">Unit</CFormLabel>
                  <CFormInput type="text" id="unit" value={selectedSegment.unit} readOnly />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="ruas">Ruas</CFormLabel>
                  <CFormInput type="text" id="ruas" value={selectedSegment.ruas} readOnly />
                </div>
                <div className="mb-3">
                  <CFormLabel>Gambar</CFormLabel>
                  <figure className="figure d-block">
                    <CImage
                      rounded
                      thumbnail
                      src={selectedSegment.picture}
                      width={200}
                      height={200}
                    />
                    <figcaption className="figure-caption mt-2">
                      {selectedSegment.picture}
                    </figcaption>
                  </figure>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="date_create">Tanggal</CFormLabel>
                  <CFormInput
                    type="date"
                    id="date_create"
                    value={
                      selectedSegment.date_create
                        ? selectedSegment.date_create.substr(0, 10)
                        : selectedSegment.date_create
                    }
                    readOnly
                  />
                </div>
              </CForm>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalView: false })}
              >
                Tutup
              </CButton>
            </CModalFooter>
          </>
        ) : (
          <>
            <CModalBody>
              <p>Data tidak ditemukan</p>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalView: false })}
              >
                Tutup
              </CButton>
              {/* <CButton color="primary">Simpan</CButton> */}
            </CModalFooter>
          </>
        )}
      </CModal>

      <CModal
        visible={showModalEdit}
        alignment="center"
        size="lg"
        backdrop="static"
        onClose={() => dispatch({ type: 'set', showModalEdit: false })}
      >
        <CModalHeader>
          <CModalTitle>Edit Ruas</CModalTitle>
        </CModalHeader>
        {selectedSegment ? (
          <>
            <CForm onSubmit={(e) => handleSubmit(e)}>
              <CModalBody>
                <div className="mb-3">
                  <CFormLabel htmlFor="unit">Unit</CFormLabel>
                  <CFormInput
                    type="text"
                    id="unit"
                    value={selectedSegment.unit}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="ruas">Ruas</CFormLabel>
                  <CFormInput
                    type="text"
                    id="ruas"
                    value={selectedSegment.ruas}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="picture">Gambar</CFormLabel>
                  <CFormInput
                    type="text"
                    id="picture"
                    // ref={imgEl}
                    value={selectedSegment.picture}
                    onChange={(e) => handleInput(e)}
                  />
                  {/* <CFormInput type="file" id="picture" label="Default file input example" /> */}
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="date_create">Tanggal</CFormLabel>
                  <CFormInput
                    type="date"
                    id="date_create"
                    value={
                      selectedSegment.date_create
                        ? selectedSegment.date_create.substr(0, 10)
                        : selectedSegment.date_create
                    }
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </CModalBody>
              <CModalFooter>
                <CButton
                  color="secondary"
                  onClick={() => dispatch({ type: 'set', showModalEdit: false })}
                >
                  Tutup
                </CButton>
                {loadingEdit ? (
                  <CButton disabled>
                    Menyimpan&nbsp;
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                  </CButton>
                ) : (
                  <CButton type="submit" color="primary">
                    Simpan
                  </CButton>
                )}
              </CModalFooter>
            </CForm>
          </>
        ) : (
          <>
            <CModalBody>
              <p>Data tidak ditemukan</p>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalEdit: false })}
              >
                Tutup
              </CButton>
              {/* <CButton color="primary">Simpan</CButton> */}
            </CModalFooter>
          </>
        )}
      </CModal>

      <CModal
        visible={showModalDelete}
        alignment="center"
        backdrop="static"
        onClose={() => dispatch({ type: 'set', showModalDelete: false })}
      >
        <CModalHeader>
          <CModalTitle>Hapus Ruas</CModalTitle>
        </CModalHeader>
        {selectedSegment ? (
          <>
            <CModalBody>
              <dl className="row">
                <dt className="col-sm-2">Unit</dt>
                <dd className="col-sm-10">
                  <dl className="row m-0">
                    <dt className="col-sm-1">:</dt>
                    <dd className="col-sm-10">{selectedSegment.unit}</dd>
                  </dl>
                </dd>
                <dt className="col-sm-2">Ruas</dt>
                <dd className="col-sm-10">
                  <dl className="row m-0">
                    <dt className="col-sm-1">:</dt>
                    <dd className="col-sm-10">{selectedSegment.ruas}</dd>
                  </dl>
                </dd>
              </dl>
              <p>Apakah Anda yakin ingin menghapus data ruas ini?</p>
            </CModalBody>
            <CModalFooter>
              {loadingDelete ? (
                <CButton disabled>
                  Menghapus&nbsp;
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                </CButton>
              ) : (
                <CButton onClick={handleDelete} color="primary">
                  Ya
                </CButton>
              )}
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalDelete: false })}
              >
                Tidak
              </CButton>
            </CModalFooter>
          </>
        ) : (
          <>
            <CModalBody>
              <p>Data tidak ditemukan</p>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalDelete: false })}
              >
                Tutup
              </CButton>
              {/* <CButton color="primary">Simpan</CButton> */}
            </CModalFooter>
          </>
        )}
      </CModal>

      <CModal
        visible={showModalPreview}
        alignment="center"
        // size="lg"
        backdrop="static"
        onClose={() => dispatch({ type: 'set', showModalPreview: false })}
      >
        <CModalHeader>
          <CModalTitle>Preview Gambar - {selectedSegment.ruas}</CModalTitle>
        </CModalHeader>
        {selectedSegment.picture ? (
          <>
            <CModalBody>
              <CImage fluid src={selectedSegment.picture} />
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalPreview: false })}
              >
                Tutup
              </CButton>
            </CModalFooter>
          </>
        ) : (
          <>
            <CModalBody>
              <p>Gambar tidak ditemukan</p>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={() => dispatch({ type: 'set', showModalPreview: false })}
              >
                Tutup
              </CButton>
            </CModalFooter>
          </>
        )}
      </CModal>

      <CModal
        visible={showModalAdd}
        alignment="center"
        size="lg"
        backdrop="static"
        onClose={() => dispatch({ type: 'set', showModalAdd: false })}
      >
        <CModalHeader>
          <CModalTitle>Tambah Ruas</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={(e) => handleAdd(e)}>
          <CModalBody>
            <div className="mb-3">
              <CFormLabel htmlFor="unit">Unit</CFormLabel>
              <CFormSelect
                aria-label="Unit selection"
                id="unit"
                options={[
                  'Pilih Unit',
                  {
                    label: 'Administrator',
                    value: 'Administrator',
                  },
                  {
                    label: 'Assistant',
                    value: 'Assistant',
                  },
                  {
                    label: 'Associate',
                    value: 'Associate',
                  },
                  {
                    label: 'Designer',
                    value: 'Designer',
                  },
                  {
                    label: 'Developer',
                    value: 'Developer',
                  },
                  {
                    label: 'Director',
                    value: 'Director',
                  },
                  {
                    label: 'Engineer',
                    value: 'Engineer',
                  },
                  {
                    label: 'Executive',
                    value: 'Executive',
                  },
                  {
                    label: 'Facilitator',
                    value: 'Facilitator',
                  },
                  {
                    label: 'Liaison',
                    value: 'Liaison',
                  },
                  {
                    label: 'Manager',
                    value: 'Manager',
                  },
                  {
                    label: 'Orchestrator',
                    value: 'Orchestrator',
                  },
                  {
                    label: 'Producer',
                    value: 'Producer',
                  },
                  {
                    label: 'Specialist',
                    value: 'Specialist',
                  },
                  {
                    label: 'Strategist',
                    value: 'Strategist',
                  },
                  {
                    label: 'Supervisor',
                    value: 'Supervisor',
                  },
                  {
                    label: 'Technician',
                    value: 'Technician',
                  },
                ]}
                value={selectedSegment.unit}
                onChange={(e) => handleInput(e)}
              />
              {/* <CFormInput
                type="text"
                id="unit"
                value={selectedSegment.unit}
                onChange={(e) => handleInput(e)}
              /> */}
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ruas">Ruas</CFormLabel>
              <CFormInput
                type="text"
                id="ruas"
                value={selectedSegment.ruas}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="picture">Gambar</CFormLabel>
              <CFormInput
                type="text"
                id="picture"
                // ref={imgEl}
                value={selectedSegment.picture}
                onChange={(e) => handleInput(e)}
              />
              {/* <CFormInput type="file" id="picture" label="Default file input example" /> */}
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="date_create">Tanggal</CFormLabel>
              <CFormInput
                type="date"
                id="date_create"
                value={selectedSegment.date_create}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="secondary"
              onClick={() => dispatch({ type: 'set', showModalAdd: false })}
            >
              Tutup
            </CButton>
            {loadingAdd ? (
              <CButton disabled>
                Menyimpan&nbsp;
                <CSpinner component="span" size="sm" aria-hidden="true" />
              </CButton>
            ) : (
              <CButton type="submit" color="primary">
                Simpan
              </CButton>
            )}
          </CModalFooter>
        </CForm>
      </CModal>

      {/* <CTable small striped hover bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Ruas</CTableHeaderCell>
            <CTableHeaderCell scope="col">Unit Kerja</CTableHeaderCell>
            <CTableHeaderCell scope="col">Gambar</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
            <CTableDataCell>@fat</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
            <CTableDataCell>Larry the Bird</CTableDataCell>
            <CTableDataCell>@twitter</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable> */}
    </>
  )

  // return (
  //   <>
  //     <WidgetsDropdown />
  //     <CCard className="mb-4">
  //       <CCardBody>
  //         <CRow>
  //           <CCol sm={5}>
  //             <h4 id="traffic" className="card-title mb-0">
  //               Traffic
  //             </h4>
  //             <div className="small text-medium-emphasis">January - July 2021</div>
  //           </CCol>
  //           <CCol sm={7} className="d-none d-md-block">
  //             <CButton color="primary" className="float-end">
  //               <CIcon icon={cilCloudDownload} />
  //             </CButton>
  //             <CButtonGroup className="float-end me-3">
  //               {['Day', 'Month', 'Year'].map((value) => (
  //                 <CButton
  //                   color="outline-secondary"
  //                   key={value}
  //                   className="mx-0"
  //                   active={value === 'Month'}
  //                 >
  //                   {value}
  //                 </CButton>
  //               ))}
  //             </CButtonGroup>
  //           </CCol>
  //         </CRow>
  //         <CChartLine
  //           style={{ height: '300px', marginTop: '40px' }}
  //           data={{
  //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //             datasets: [
  //               {
  //                 label: 'My First dataset',
  //                 backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
  //                 borderColor: getStyle('--cui-info'),
  //                 pointHoverBackgroundColor: getStyle('--cui-info'),
  //                 borderWidth: 2,
  //                 data: [
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                 ],
  //                 fill: true,
  //               },
  //               {
  //                 label: 'My Second dataset',
  //                 backgroundColor: 'transparent',
  //                 borderColor: getStyle('--cui-success'),
  //                 pointHoverBackgroundColor: getStyle('--cui-success'),
  //                 borderWidth: 2,
  //                 data: [
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                   random(50, 200),
  //                 ],
  //               },
  //               {
  //                 label: 'My Third dataset',
  //                 backgroundColor: 'transparent',
  //                 borderColor: getStyle('--cui-danger'),
  //                 pointHoverBackgroundColor: getStyle('--cui-danger'),
  //                 borderWidth: 1,
  //                 borderDash: [8, 5],
  //                 data: [65, 65, 65, 65, 65, 65, 65],
  //               },
  //             ],
  //           }}
  //           options={{
  //             maintainAspectRatio: false,
  //             plugins: {
  //               legend: {
  //                 display: false,
  //               },
  //             },
  //             scales: {
  //               x: {
  //                 grid: {
  //                   drawOnChartArea: false,
  //                 },
  //               },
  //               y: {
  //                 ticks: {
  //                   beginAtZero: true,
  //                   maxTicksLimit: 5,
  //                   stepSize: Math.ceil(250 / 5),
  //                   max: 250,
  //                 },
  //               },
  //             },
  //             elements: {
  //               line: {
  //                 tension: 0.4,
  //               },
  //               point: {
  //                 radius: 0,
  //                 hitRadius: 10,
  //                 hoverRadius: 4,
  //                 hoverBorderWidth: 3,
  //               },
  //             },
  //           }}
  //         />
  //       </CCardBody>
  //       <CCardFooter>
  //         <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
  //           {progressExample.map((item, index) => (
  //             <CCol className="mb-sm-2 mb-0" key={index}>
  //               <div className="text-medium-emphasis">{item.title}</div>
  //               <strong>
  //                 {item.value} ({item.percent}%)
  //               </strong>
  //               <CProgress thin className="mt-2" color={item.color} value={item.percent} />
  //             </CCol>
  //           ))}
  //         </CRow>
  //       </CCardFooter>
  //     </CCard>

  //     <WidgetsBrand withCharts />

  //     <CRow>
  //       <CCol xs>
  //         <CCard className="mb-4">
  //           <CCardHeader>Traffic {' & '} Sales</CCardHeader>
  //           <CCardBody>
  //             <CRow>
  //               <CCol xs={12} md={6} xl={6}>
  //                 <CRow>
  //                   <CCol sm={6}>
  //                     <div className="border-start border-start-4 border-start-info py-1 px-3">
  //                       <div className="text-medium-emphasis small">New Clients</div>
  //                       <div className="fs-5 fw-semibold">9,123</div>
  //                     </div>
  //                   </CCol>
  //                   <CCol sm={6}>
  //                     <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
  //                       <div className="text-medium-emphasis small">Recurring Clients</div>
  //                       <div className="fs-5 fw-semibold">22,643</div>
  //                     </div>
  //                   </CCol>
  //                 </CRow>

  //                 <hr className="mt-0" />
  //                 {progressGroupExample1.map((item, index) => (
  //                   <div className="progress-group mb-4" key={index}>
  //                     <div className="progress-group-prepend">
  //                       <span className="text-medium-emphasis small">{item.title}</span>
  //                     </div>
  //                     <div className="progress-group-bars">
  //                       <CProgress thin color="info" value={item.value1} />
  //                       <CProgress thin color="danger" value={item.value2} />
  //                     </div>
  //                   </div>
  //                 ))}
  //               </CCol>

  //               <CCol xs={12} md={6} xl={6}>
  //                 <CRow>
  //                   <CCol sm={6}>
  //                     <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
  //                       <div className="text-medium-emphasis small">Pageviews</div>
  //                       <div className="fs-5 fw-semibold">78,623</div>
  //                     </div>
  //                   </CCol>
  //                   <CCol sm={6}>
  //                     <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
  //                       <div className="text-medium-emphasis small">Organic</div>
  //                       <div className="fs-5 fw-semibold">49,123</div>
  //                     </div>
  //                   </CCol>
  //                 </CRow>

  //                 <hr className="mt-0" />

  //                 {progressGroupExample2.map((item, index) => (
  //                   <div className="progress-group mb-4" key={index}>
  //                     <div className="progress-group-header">
  //                       <CIcon className="me-2" icon={item.icon} size="lg" />
  //                       <span>{item.title}</span>
  //                       <span className="ms-auto fw-semibold">{item.value}%</span>
  //                     </div>
  //                     <div className="progress-group-bars">
  //                       <CProgress thin color="warning" value={item.value} />
  //                     </div>
  //                   </div>
  //                 ))}

  //                 <div className="mb-5"></div>

  //                 {progressGroupExample3.map((item, index) => (
  //                   <div className="progress-group" key={index}>
  //                     <div className="progress-group-header">
  //                       <CIcon className="me-2" icon={item.icon} size="lg" />
  //                       <span>{item.title}</span>
  //                       <span className="ms-auto fw-semibold">
  //                         {item.value}{' '}
  //                         <span className="text-medium-emphasis small">({item.percent}%)</span>
  //                       </span>
  //                     </div>
  //                     <div className="progress-group-bars">
  //                       <CProgress thin color="success" value={item.percent} />
  //                     </div>
  //                   </div>
  //                 ))}
  //               </CCol>
  //             </CRow>

  //             <br />

  //             <CTable align="middle" className="mb-0 border" hover responsive>
  //               <CTableHead color="light">
  //                 <CTableRow>
  //                   <CTableHeaderCell className="text-center">
  //                     <CIcon icon={cilPeople} />
  //                   </CTableHeaderCell>
  //                   <CTableHeaderCell>User</CTableHeaderCell>
  //                   <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
  //                   <CTableHeaderCell>Usage</CTableHeaderCell>
  //                   <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
  //                   <CTableHeaderCell>Activity</CTableHeaderCell>
  //                 </CTableRow>
  //               </CTableHead>
  //               <CTableBody>
  //                 {tableExample.map((item, index) => (
  //                   <CTableRow v-for="item in tableItems" key={index}>
  //                     <CTableDataCell className="text-center">
  //                       <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
  //                     </CTableDataCell>
  //                     <CTableDataCell>
  //                       <div>{item.user.name}</div>
  //                       <div className="small text-medium-emphasis">
  //                         <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
  //                         {item.user.registered}
  //                       </div>
  //                     </CTableDataCell>
  //                     <CTableDataCell className="text-center">
  //                       <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
  //                     </CTableDataCell>
  //                     <CTableDataCell>
  //                       <div className="clearfix">
  //                         <div className="float-start">
  //                           <strong>{item.usage.value}%</strong>
  //                         </div>
  //                         <div className="float-end">
  //                           <small className="text-medium-emphasis">{item.usage.period}</small>
  //                         </div>
  //                       </div>
  //                       <CProgress thin color={item.usage.color} value={item.usage.value} />
  //                     </CTableDataCell>
  //                     <CTableDataCell className="text-center">
  //                       <CIcon size="xl" icon={item.payment.icon} />
  //                     </CTableDataCell>
  //                     <CTableDataCell>
  //                       <div className="small text-medium-emphasis">Last login</div>
  //                       <strong>{item.activity}</strong>
  //                     </CTableDataCell>
  //                   </CTableRow>
  //                 ))}
  //               </CTableBody>
  //             </CTable>
  //           </CCardBody>
  //         </CCard>
  //       </CCol>
  //     </CRow>
  //   </>
  // )
}

export default RoadSegments
