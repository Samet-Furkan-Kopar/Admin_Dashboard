"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    userName: z
        .string()
        .min(3, { message: "UserName must be at least 3 characters long!" })
        .max(20, { message: "Must be less than 20 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long!" }),
    firstName: z
        .string()
        .min(3, { message: "First Name must be at least 3 characters long!" })
        .max(20, { message: "Must be less than 20 characters" }),
    lastName: z
        .string()
        .min(3, { message: "Last Name must be at least 3 characters long!" })
        .max(20, { message: "Must be less than 20 characters" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters long!" }),
    address: z.string().min(10, { message: "Address must be at least 10 characters long!" }),
    birthday: z.date({ message: "Birthday must be at least 10 characters long!" }),
    sex: z.enum(["male", "female"], { message: "Sex is required" }),
    img: z.instanceof(File, { message: "Image is required" }),
});

const TeacherForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <form className="flex flex-col gap-8">
            <h1 className="text-xl font-semibold">Create a new Teacher</h1>
            <span className="text-xs text-gray-400 font-semibold">Authentication Information</span>
            <input
                type="text"
                placeholder="Kullanıcı Adı"
                {...register("userName")}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
            />
            {errors.userName?.message && <p>{errors.userName?.message}</p>}
            <span className="text-xs text-gray-400 font-semibold">Personal Information</span>
            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    );
};

export default TeacherForm;
