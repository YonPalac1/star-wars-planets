import {useState} from 'react'

function useForm(initialState = {}) {
    const [state, setState] = useState(initialState);

    const handleInputChange = ({target}) => {
        setState({
          ...state,
          [target.name] : target.value
        })
      }

      const reset = () => {
          setState(initialState)
      }
    return [state, handleInputChange, reset]
}

export default useForm
