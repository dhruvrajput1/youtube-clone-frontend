import { PiAlien } from "react-icons/pi";
import { Link } from "react-router-dom";

function Logo({size="30"}) {
    return (
        <>
            <Link to={"/"} className="flex gap-2 items-center">
                <PiAlien
                    size={size}
                    color="#A855F7"
                    />
                    <span className="text-3xl font-bold text-purple-500">Youtube</span>
            </Link>
            
        </>
    )
}

export default Logo;