import { connect } from 'react-redux';
import UserSelect from '../components/UserSelect';
import SelectPostUser from '../actions/SelectPostUser';

//Posts is referring to the state object Posts which we create in reducers/Posts.
const getUsers = (Users) => {
    return Users;
};

const mapStateToProps = (state) => {
    return {
        Users: getUsers(state.Users)
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onChange:(name)=>{
            dispatch(SelectPostUser(name));
        }
    }
};

const UserSelectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSelect);

export default UserSelectContainer;