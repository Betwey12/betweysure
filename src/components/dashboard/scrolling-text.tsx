"use client";
import { HTTPRequest } from "@/api";
import { DotIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

export default function ScrollingText() {
  const { data: announcementData, isPending } = useQuery({
    queryKey: ["announcements"],
    queryFn: (): Promise<TAnnouncementResponse> =>
      HTTPRequest.Get("announcement"),
  });
  const announcements = announcementData?.data ?? [];

  return (
    <div className="px-4 py-3 bg-yellow-one mt-6 rounded">
      <div className="w-full overflow-hidden flex items-center justify-center">
        <p className="animate_scroll px-4 flex items-center gap-8">
          {isPending || announcements?.length === 0 ? (
            <span>
              Share your winning tickets and get rewarded by betweysure
            </span>
          ) : (
            announcements?.map((announcement, index) => (
              <Fragment key={announcement._id}>
                <span>{announcement.announcement}</span>
                {index < announcements?.length - 1 && (
                  <DotIcon className="bg-white rounded-full w-2 h-2" />
                )}
              </Fragment>
            ))
          )}
        </p>
      </div>
    </div>
  );
}
