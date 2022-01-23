import './accountsettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal } from '../../redux/modalRedux'

function AccountSettings() {
    const dispatch = useDispatch()
    const handleModal = (type) => dispatch(openModal(type))

    return (
    <div className='accountContainer'>
        <div className="accountItem">
            <div className="accountItemH">
                <h1>Username</h1>
            </div>
            <div className="accountItemB">
                <h1>admin</h1>
                <button onClick={() => handleModal("username")}>Change Username</button>
            </div>
        </div>
        <div className="accountItem">
            <div className="accountItemH">
                <h1>Email</h1>
            </div>
            <div className="accountItemB">
                <h1>admin@gmail.com</h1>
                <button onClick={() => handleModal("email")}>Change Email</button>
            </div>
        </div>
        <div className="accountItem">
            <div className="accountItemH">
                <h1>Password</h1>
            </div>
            <div className="accountItemB">
                <h1>************</h1>
                <button onClick={() => handleModal("password")}>Change Password</button>
            </div>
        </div>
        <Modal/>
    </div>
    )
}

function Modal() {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const handleModal = () => dispatch(closeModal())

    console.log(modal.type)
    return (
    <div style={modal.open ? null : {display: "none"}} className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={handleModal}>X</button>
            </div>
            <div className="title">
                <h1>Are You Sure You Want to Continue?</h1>
            </div>
            <div className="body">
                <p>The next page looks amazing. Hope you want to go there!</p>
            </div>
            <div className="footer">
                <button onClick={() => handleModal()} id="cancelBtn">Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
    )
}

export default AccountSettings
