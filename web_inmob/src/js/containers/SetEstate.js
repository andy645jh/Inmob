import { SET_ESTATE } from "../actions/ActionsDetailPage";


const mapStateToProps = state => ({
    estate: state.estate
});

const mapDispatchToProps = dispatch => ({
    setEstate(estate)
    {
        dispatch({
            type: SET_ESTATE,
            estate
        });
    }
});

const SetEstate = connect(mapStateToProps, mapDispatchToProps)(DetailPage);

export default SetEstate