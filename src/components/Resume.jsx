"use client"
import { BiDownload } from "react-icons/bi";
import Link from "next/link";
import { notification } from 'antd';

export default function Resume() {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
      api.info({
        message: `Notification`,
        description:
          'Resume has started downloading...',
        placement,
        colorBgElevated: "#222",
        colorText: "#fff"
      });
    };
  
    return(
        <>
        {contextHolder}
          <Link
            href={"/resume.pdf"}
            target="_blank"
            download
            onClick={() => openNotification("bottomRight")}
            className="flex items-center gap-4 bg-[#f60] w-max px-4 py-2 rounded-sm cursor-pointer "
          >
            Download Resume
            <BiDownload />
          </Link>
        </>
    )
}