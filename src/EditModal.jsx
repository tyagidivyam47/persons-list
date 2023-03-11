import { Form, Input, Modal } from "antd";
import React, { useState } from "react";
// import { Modal } from "antd";

const EditModal = (props) => {
  const [user, setUser] = useState(props.user);
  // console.log("User is : ",user);

  const handleCancel = () => {
    props.onCancel();
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleOk = () => {
    props.onOk(user, user.id);
  };

  return (
    <Modal
      title="Basic Modal"
      open={props.isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ fontWeight: "350" }}
            defaultValue={user.name}
            name="name"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ fontWeight: "350" }}
            defaultValue={user.email}
            name="email"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        {/* Phone */}

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ fontWeight: "350" }}
            defaultValue={user.phone}
            name="phone"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        {/* Website */}

        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ fontWeight: "350" }}
            defaultValue={user.website}
            name="website"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        {/* <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item> */}
      </Form>
    </Modal>
  );
};

export default EditModal;
