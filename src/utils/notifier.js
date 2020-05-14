import { toast } from 'react-toastify'

export const triggerNotifier = ({ type, message }) => {
  toast[type](message, {
    hideProgressBar: true,
    className: 'notifier-custom',
    // position: toast.POSITION.TOP_LEFT,
    pauseOnFocusLoss: true,
    autoClose: 5000
  })
}
