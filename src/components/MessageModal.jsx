"use client";
import { Button, Modal } from "antd";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";

export default function MessageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const inputStyle = "p-2 mb-2 bg-slate-200  rounded-md "

  return (
    <>
      <button onClick={showModal} className=" bg-gray-950 text-base p-2 rounded-sm " >Contact Me</button>
      <Modal
        title="Write Message To Me"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // closable={false}
        maskClosable={false}
        closeIcon={<GrFormClose />}
        footer={null}
        bgColor="#000"
      >
        <form action="" className="grid gap-2 ">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter Your Full Name" className={inputStyle} />
          <label htmlFor="">Email</label>
          <input type="text"  placeholder="Enter Your Email Address" className={inputStyle} />
          <label htmlFor="">Message</label>
          <textarea name="" placeholder="Enter Your Message Here" className={inputStyle} id="" cols="30" rows="10"></textarea>
        </form>
      </Modal>
    </>
  );
}
