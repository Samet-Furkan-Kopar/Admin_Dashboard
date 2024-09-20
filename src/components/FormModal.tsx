"use client";
import Image from "next/image";
import React, { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({
    table,
    type,
    data,
    id,
}: {
    table:
        | "teacher"
        | "student"
        | "class"
        | "parent"
        | "subject"
        | "lesson"
        | "exam"
        | "assignment"
        | "result"
        | "attendance"
        | "event"
        | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) => {
    const [open, setOpen] = useState(false);
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-colorYellow" : type === "update" ? "bg-colorSky" : "bg-colorPurple";
const Form = () => {
    return type === "delete" && id ? (
        <form action="" className="p-4 flex flex-col gap-4">
            <span className="text-center font-medium"> {table}ı silmek istediğinizden emin misiniz ? </span>
            <button className="bg-red-700 text-white py-2 px-4 rounded-sm border-none w-max self-center">Sil</button>
        </form>
    )
    : (
        <TeacherForm type="create" />
    )
}


    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <Image src={`/icons/${type}.png`} width={16} height={16} alt="" />
            </button>
            {open && (
                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div className="absolute top-4 right-4 cursor-pointer">
                            <Image
                                src="/icons/close.png"
                                width={14}
                                height={14}
                                alt=""
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;
