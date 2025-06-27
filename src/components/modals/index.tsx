import { useReduxSelector } from '../../hooks/useRedux'
import AuthorizationModal from './authorization'

const Modals = () => {
    const {openAuthorizationModalVisibility}=useReduxSelector((state)=>state.modalSice)
  return (
    <>
      {openAuthorizationModalVisibility && <AuthorizationModal/>}

    </>
  )
}

export default Modals
