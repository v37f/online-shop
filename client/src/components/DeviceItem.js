import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/constants';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
      style={{ cursor: 'pointer' }}
    >
      <Card style={{ width: 150, cursor: 'ponter' }} border={'light'}>
        <CardImg width={150} height={150} src={device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star}></Image>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
