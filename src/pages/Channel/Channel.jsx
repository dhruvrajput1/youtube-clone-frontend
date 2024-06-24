import { useEffect } from "react";
import { ChannelHeader, ChannelNavigate } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUserCurrentProfile } from "../../store/Slices/userSlice";
import { Outlet, useParams } from "react-router-dom";

export default function Channel() {
    const dispatch = useDispatch();

    const { username } = useParams();
    
    const channel = useSelector((state) => state.user?.userProfile);

    useEffect(() => {
        dispatch(getUserCurrentProfile(username));
    }, [dispatch, username]);

    window.scrollTo(0, 0);

    return (
        <>
            {channel && (
                <ChannelHeader
                    username={username}
                    coverImage={channel?.coverImage.url}
                    avatar={channel?.avatar.url}
                    subscribedCount={channel?.channelsSubscribedToCount}
                    fullName={channel?.fullName}
                    subscribersCount={channel?.subscribersCount}
                    isSubscribed={channel?.isSubscribed}
                    channelId={channel?._id}
                />
            )}
            <ChannelNavigate username={username} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
                <Outlet />
            </div>
        </>
    );
    
}