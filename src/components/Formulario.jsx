import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"

export const Formulario = () => {
    const focusRef = useRef()
    const inicialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const { formState, userName, email, password, onInputChange } = useForm(inicialForm)


    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    useEffect(() => {
        focusRef.current.focus()
    }, [])


    return (

        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" >User Name</label>
                <input

                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your UserName"
                    value={userName}
                    onChange={onInputChange}>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={onInputChange}>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                    ref={focusRef}
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}>
                </input>
            </div>

            <button
                type="submit"
                className="btn btn-primary">
                Submit
            </button>

        </form>
    )
}
