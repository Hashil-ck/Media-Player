import React, { useEffect, useState } from "react";
import VideoCard from "./VedioCard";
import { Col, Row } from "react-bootstrap";
import { getAllVideos } from "../services/allAPI";


function View({uploadVideoServerResponse}) {
  const [deleteStatus,setdeleteStatus]=useState(false)

  const [allVideos, setAllVideos] = useState([])
  const getAllUploadedVideos = async () => {
    const { data } = await getAllVideos()
    setAllVideos(data)
  }
  useEffect(() => {
    setdeleteStatus(false)
    getAllUploadedVideos()
  }, [uploadVideoServerResponse,deleteStatus])
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos.map(video => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard setdeleteStatus={setdeleteStatus} displayData={video}/>
              </Col>
            ))
            :<p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display!!!</p>

          }
      </Row>

    </>
  )
}

export default View