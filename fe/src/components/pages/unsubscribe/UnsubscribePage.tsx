import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import { deleteSubscribers, getSubscribers } from "../../../store/actions/subscribersTypes";
import { RootState } from "../../../store/store";

const UnsubscribePage = () => {
    let { email } = useParams();
    const dispatch = useDispatch();

    const subscribers = useSelector((state: RootState) => state.subscribers.subscribers);

    useEffect(() => {
        dispatch(getSubscribers());
    }, []);

    useEffect(() => {
        let subscriber = subscribers?.find((subscriber) => subscriber?.email == email);

        if(subscriber?.id) {
            dispatch(deleteSubscribers(subscriber?.id!));
        }
    }, [subscribers]);

    return (
        <div className={globalClasses["page-wrapper"]} style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h4>Odjava sa obaveštenja: {email}</h4>
        </div>
    );
};

export default UnsubscribePage;

