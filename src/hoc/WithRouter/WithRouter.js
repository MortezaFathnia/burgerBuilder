import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        const [searchParams, setSearchParams] = useSearchParams()
        return (
            <Component
                {...props}
                location={location}
                navigate={navigate}
                params={params}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
        );
    }

    return ComponentWithRouterProp;
}
export default withRouter;