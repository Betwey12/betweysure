"use client";
import { FaPencil } from "react-icons/fa6";
import avatar from "@/assets/images/avatar.webp";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";
import Link from "next/link";

export default function UserInfo() {
  const { user: fetchedUser } = useGetUser();
  const joined = new Date(fetchedUser?.createdAt ?? 0).toDateString();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Image
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-4"
            src={avatar}
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">{fetchedUser?.fullName}</h2>
          </div>
        </div>
        <Link
          href="/dashboard/edit-profile"
          className="text-white rounded bg-cyan px-4 py-3 items-center flex gap-2"
        >
          <FaPencil />
          <span className="hidden lg:block">Edit Profile</span>
        </Link>
      </div>

      {/* User Information */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-one">
          User Information
        </h3>
        <p>Email: {fetchedUser?.email}</p>
        <p>Joined: {joined}</p>
      </div>
    </div>
  );
}
