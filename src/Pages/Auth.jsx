import React, { useState } from 'react'
import Loginimg from "../Assets/Login.jpg"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

function Auth() {
    let navigate = useNavigate();

    const valid = Yup.object({
        email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta gerekli'),

    });

    const handleSubmit = async (values) => {
        try {
            let userbilgi = await signInWithEmailAndPassword(auth, values.email, values.password)
            toast("Giriş Yapıldı")
            console.log(userbilgi.user)
        } catch (error) {
            error.message === "Firebase: Error (auth/invalid-credential)." ? toast.error('Mailiniz veya şifreniz yanlış') : toast.error(error.message);
        }


    };



    return (
        <div className='font-arial text-bordo bg-kahve'>
            <div className='w-[100%] flex'>
                <div className='w-[50%] '>
                    <img src={Loginimg} className='h-[110vh]'></img>



                </div>

                <div className='w-[50%] h-[100%] '>
                    <div className='bg-ten w-[80%] mx-auto my-30 flex flex-col gap-8 rounded-2xl'>
                        <div className='h-[30vh] flex flex-col justify-end items-center'>
                            <div className='text-5xl p-5 '>Giriş Yap</div>
                        </div>


                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={valid}
                            onSubmit={handleSubmit}
                        >
                            <Form>

                                <div className='flex flex-col gap-6 justify-center items-center w-[100%] '>
                                    <div className='w-[70%]'>
                                        <Field type="email" id="email" name="email" className='border-2 w-[100%] py-1 rounded-2xl px-2 text-black ' placeholder='Email' />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                    <div className='w-[70%]'>

                                        <Field type="password" id="password" name="password" className='border-2  w-[100%] py-1 rounded-2xl px-2 text-black' placeholder='Şifre' />

                                    </div>

                                </div>
                                <div className='py-10'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <button className='px-6 text-2xl rounded-3xl py-1 border-2 cursor-pointer hover:text-black hover:border-3' type='submit'>Giriş Yap</button>
                                        <div className='flex gap-1 text-md'>
                                            <span>Hesabın yok mu?</span>
                                            <span className='underline text-aclacivert cursor-pointer hover:underline-offset-0' onClick={() => navigate("/Kaydol")}>Kaydol</span>

                                        </div>

                                    </div>

                                </div>


                            </Form>


                        </Formik>
                        <div>

                        </div>
                    </div>

                </div>


            </div>





        </div >
    )
}

export default Auth