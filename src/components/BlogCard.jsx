"use client";
import { TbQrcode, TbShare } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { QRCode, Modal, Popover, Tag } from "antd";
import { useState } from "react";
// import absoluteUrl from "next-absolute-url";
import Link from "next/link";

export default function BlogCard({ data }) {

  const [qr, setQr] = useState(false);

  const handleQr = () => {
    setQr(!qr);
  };

  // const origin = absoluteUrl();
  const websiteUrl = "https://portfolio-next-dilkhush-raj.vercel.app";
  const slug = data?.slug || null;
  
  const shareData = {
    title: data.title,
    text: data.description,
    url: websiteUrl + "/blog/" + data.slug,
  };

  const handleShareClick = async () => {
    try {
      await navigator.share(shareData);
      console.log("Page shared successfully");
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  return (
    <div className="border-b border-[#333] flex flex-col gap-4 pb-10">
      <img
        src={data?.thumbnail || "/blog.jpg"}
        className="w-full object-cover "
        alt=""
      />
      <Modal
        open={qr}
        onOk={handleQr}
        onCancel={handleQr}
        closable={false}
        // closeIcon={<GrFormClose />}
        width={"max-content"}
        footer={null}
        bgColor="#000"
        style={{ padding: 0 }}
      >
        <QRCode
          value={websiteUrl + " /blog/" + slug}
          className={qr ? "block" : "hidden"}
          bgColor="#fff"
          icon="/logo.svg"
          errorLevel="H"
        />
      </Modal>

      <div className="flex gap-4 justify-between">
        <div>
          <h2 className="text-2xl">{data?.title}</h2>
          <h3 className="text-sm text-gray-400 ">{data?.author}</h3>
        </div>
        <div className="flex gap-4 text-xl cursor-pointer ">
          <AiOutlineLike />
          <MdOutlineFavoriteBorder />
          {/* <Popover
            overlayInnerStyle={{ padding: 0 }}
            content={<QRCode value={websiteUrl + " /blog/" + slug} bordered={false} />}
          > */}
          <TbQrcode onClick={handleQr} />
          {/* </Popover> */}
          <TbShare onClick={handleShareClick} />
        </div>
      </div>
      <div>{data?.description}</div>
      <Link href={`/blog/${slug}`}>
        <button className="w-max text-[#f60] underline-offset-8 underline ">
          Read More
        </button>
      </Link>
      <div className="flex gap-2 ">
        {data?.tags.map((tag, index) => (
          <Tag key={index} color="#111" colortext="#fff">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}
