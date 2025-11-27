import Auth from "../components/Auth";
import Quote from "../components/Quote";

export default function () {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <Auth type="create" />
            <Quote />
        </div>
    )
}