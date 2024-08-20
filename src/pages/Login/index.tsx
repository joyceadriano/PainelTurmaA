import { SyntheticEvent, useCallback, useRef, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.css'

export default function Login() {

    const refForm = useRef<any>();

    const submitForm = useCallback((event: SyntheticEvent) => {

        event.preventDefault();

        if (refForm.current.checkValidity()) {

            const target = event.target as typeof event.target & {
                email: { value: string },
                senha: { value: string }
            }


            axios.post('http://localhost:3001/login',
                {
                    email: target.email.value,
                    password: target.senha.value,
                }
            ).then((resposta) => {
                console.log('deu bao')
                console.log(resposta.data)
            }).catch((erro) => {
                console.log('deu ruim')
                console.log(erro)
            })
        

            console.log(target.email.value)

        } else {
            refForm.current.classList.add('was-validated')
        }

    }, [])

    return (
        <>
            <div
                className={styles.main}
            >
                <div
                    className={styles.border}
                >
                    <div
                        className='d-flex flex-column align-items-center'
                    >
                        <h1 className='text-primary'>Login</h1>
                        <p
                            className='text-secondary'
                        >
                            Preencha os campos para logar
                        </p>
                    </div>

                    <hr />

                    <form
                        className='needs-validation align-items-center'
                        noValidate
                        onSubmit={submitForm}
                        ref={refForm}
                    >
                        <div
                            className='col-md-12'
                        >
                            <label
                                htmlFor='email'
                                className='form-label'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Digite seu email'
                                id='email'
                                required
                            />
                            <div
                                className='invalid-feedback'
                            >
                                Por favor digite seu email
                            </div>
                        </div>

                        <div className='col-md-12 mt-1'>
                            {/* comentario */}
                            <label
                                htmlFor='senha'
                                className='form-label'
                            >
                                Senha
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Digite sua senha'
                                id='senha'
                                required
                            />
                            <div
                                className='invalid-feedback'
                            >
                                Por favor digite sua senha
                            </div>
                        </div>

                        <div
                            className='col-md-12 mt-3'
                        >
                            <button
                                className='btn btn-primary w-100'
                                type='submit'
                                id='botao'
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}