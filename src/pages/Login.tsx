import Auth from "../components/Auth";
import Quote from "../components/Quote";

export default function Login () {
    return (
        <div className="  grid grid-cols-1 lg:grid-cols-2" >
            <Auth type="login" />
            <Quote/>
        </div>
    )
}