"use client";
import { Drawer } from "antd";
import { useState, useEffect } from "react";
import { Tag } from "antd";
import { GrFormClose } from "react-icons/gr";

export default function ProjectDetails({ data }) {
  const [isScreenWide, setIsScreenWide] = useState(false);
  let img = data?.properties?.Image?.files[0]?.file.url;
  let description = data?.properties?.Description?.rich_text[0]?.plain_text;
  let tags = data?.properties?.Tags?.multi_select;
  let github = data?.properties?.GitHub?.url;
  let deplyoed = data?.properties?.Deployed?.url;

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 750);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={showDrawer}>Details</button>
      <Drawer
        closable={false}
        destroyOnClose={true}
        footer={null}
        open={open}
        maskClosable={true}
        onClose={onClose}
        className="bg-[#222]"
        size={isScreenWide ? "large" : "default"}
        bodyStyle={{
          backgroundColor: "#111",
          backgroundImage: "linear-gradient(to right, #111, #1c1c1c, #111)",
          padding: "0",
        }}
        placement={"left"}
      >
        <div className=" bg-gray-200 cursor-pointer flex items-center min-h-[60px] px-2 justify-between ">
          <h2 className="text-xl text-black font-bold py-2">
            {data?.properties.Name.title[0].plain_text}
          </h2>
          <div className="w-[40px]">
            <GrFormClose
              onClick={onClose}
              className=" text-3xl right-10 rounded-full"
            />
          </div>
        </div>
        <div className="p-2 pb-0">
          <img
            src={img}
            className="aspect-video object-cover rounded-sm"
            alt=""
          />
        </div>
        <div className="p-2 mx-2 flex gap-10 justify-center items-center bg-[#222] ">
          {github && (
            <a href={github} target="_blank">
              GitHub
            </a>
          )}
          {deplyoed && (
            <a href={deplyoed} target="_blank">
              Deployed
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-2 p-2">
          Tech:
          {tags.map((tags, index) => (
            <Tag color="#333" key={index}>
              {tags.name}
            </Tag>
          ))}
        </div>
        <h2 className="px-2 pt-2 text-xl">Description</h2>
        <p className="px-2 pb-5">{description}</p>
      </Drawer>
    </div>
  );
}
