import React, {useState} from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideos } from '../services/allAPI';

function VideoCard({ displayData, setdeleteStatus, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //  get time stamp for playing the video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: "numeric", month: '2-digit', day: '2-digit', hour: '2-digit'
      , minute: '2-digit', second: '2-digit'
    }).format(today)
    const { caption, embbedLink } = displayData
    //video histostory
    const videoHistory = {
      caption, embbedLink, timeStamp
    }
    // make api call 
    await addToHistory(videoHistory)
  }
  // delete a video
  const removeVideo = async (id) => {
    // make api call
    const response = await deleteAVideos(id)
    setdeleteStatus(true)
  }

  const dragStarted = (e, id) => {
    console.log('Drag started');
    console.log(id);
    e.dataTransfer.setData('cardId', id)
  }

  return (
    <>
      {
        displayData &&
        <Card style={{height:'290px', overflow:'hidden'}} className='mb-3 ' draggable onDragStart={(e) => dragStarted(e, displayData?.id)}>
          <Card.Img  onClick={handleShow} variant="top" style={{ width: "100%", height: '180px' }} src={displayData?.url} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
              <h5>{displayData?.caption}</h5>
              {insideCategory ? "" : <button onClick={() => removeVideo(displayData?.id)} className='btn text-danger'>
                <i className='fa-solid fa-trash fs-5'></i></button>
              }
            </Card.Title>

          </Card.Body>
        </Card>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height={"400px"} src={`${displayData?.embbedLink}?autoplay=1`}
            title={displayData?.caption} allow='accelerometer; autoplay;' allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard