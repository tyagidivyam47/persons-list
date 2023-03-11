/* eslint-disable */

import { Avatar, Card } from "antd";
import {
  DeleteFilled,
  EditOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./App.css";
import EditModal from "./EditModal";

const Home = ({ uData }) => {
  //   const[load, setLoad] = useState(true);
  const [data, setData] = useState(uData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProdIndex, setEditProdIndex] = useState();
  // console.log("uyffuy", data);

  useEffect(() => {
    uData.map((user) => {
      user.isLiked = false;
    });
    setData(uData);
    // console.log(data);
  }, []);

  const handleOk = (info, id) => {
    console.log(info);
    let arr = [];
    const index = data.findIndex((d) => d.id === id);

    for (let i = 0; i < data.length; i++) {
      if (i === index) {
        arr.push(info);
      } else {
        arr.push(data[i]);
      }
    }
    setData(arr);
    setIsModalOpen(false);
  };

  const likeClickHandler = (id) => {
    let arr = [];
    data.map((user) => {
      if (user.id === id) {
        user.isLiked = true;
      }
      arr.push(user);
    });
    // console.log("uData: ", arr);
    setData(arr);
  };

  const unlikeClickHandler = (id) => {
    let arr = [];
    data.map((user) => {
      if (user.id === id) {
        user.isLiked = false;
      }
      arr.push(user);
    });
    // console.log("uData: ", arr);
    setData(arr);
  };

  const deleteClickHandler = (id) => {
    let arr = [];
    data.map((user) => {
      if (user.id !== id) {
        arr.push(user);
      }
    });
    // console.log("uData: ", arr);
    setData(arr);
  };

  const modalHandler = (id) => {
    // alert(index)
    if (id) {
      const index = data.findIndex((d) => d.id === id);
      setEditProdIndex(index);
    }
    setIsModalOpen(!isModalOpen);
    // console.log(data[editProdIndex]);
  };

  return (
    <div className="homePage">
      {data &&
        data.map((user) => (
          <div className="card" id={user.id}>
            <Card
              id={user.id}
              cover={
                <div
                  id={user.id}
                  style={{
                    height: "180px",
                    width: "99%",
                    backgroundColor: "#FAFAFA",
                    margin: "2px auto",
                  }}
                >
                  <Avatar
                    src={`https://avatars.dicebear.com/v2/avataaars/${
                      user.id + 1
                    }ass.svg?options[mood][]=happy`}
                    size={150}
                    style={{ height: "100%", borderRadius: "0" }}
                  />
                </div>
              }
              actions={
                user.isLiked
                  ? [
                      <HeartFilled
                        onClick={() => unlikeClickHandler(user.id)}
                        style={{ color: "red", fontSize: "17px" }}
                      />,
                      <EditOutlined
                        onClick={() => modalHandler(user.id)}
                        style={{ fontSize: "17px" }}
                      />,
                      <DeleteFilled
                        onClick={() => deleteClickHandler(user.id)}
                        style={{ fontSize: "17px" }}
                      />,
                    ]
                  : [
                      <HeartOutlined
                        onClick={() => likeClickHandler(user.id)}
                        style={{ color: "red", fontSize: "17px" }}
                      />,
                      <EditOutlined
                        onClick={() => modalHandler(user.id)}
                        style={{ fontSize: "17px" }}
                      />,
                      <DeleteFilled
                        onClick={() => deleteClickHandler(user.id)}
                        style={{ fontSize: "17px" }}
                      />,
                    ]
              }
            >
              <div className="info" id={user.id}>
                <p style={{ fontWeight: "600" }}>{user.name}</p>
                <div
                  id={user.id}
                  style={{ fontSize: "13px", fontWeight: "350" }}
                >
                  <p>
                    <MailOutlined />
                    <span style={{ paddingLeft: "9px" }}>{user.email}</span>
                  </p>
                  <p style={{ marginTop: "-13px" }}>
                    <PhoneOutlined />
                    <span style={{ paddingLeft: "9px" }}>{user.phone}</span>
                  </p>
                  <p style={{ marginTop: "-13px" }}>
                    <GlobalOutlined />
                    <span style={{ paddingLeft: "9px" }}>
                      http://{user.website}
                    </span>
                  </p>
                </div>
              </div>
              {isModalOpen && (
                <EditModal
                  isOpen={isModalOpen}
                  user={data[editProdIndex]}
                  onCancel={modalHandler}
                  onOk={handleOk}
                />
              )}
            </Card>
          </div>
        ))}
    </div>
  );
};

export default Home;
