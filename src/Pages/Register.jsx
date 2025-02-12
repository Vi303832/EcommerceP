import React, { useState } from 'react'
import Loginimg from "../Assets/Registe.jpg"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

function Register() {
    let navigate = useNavigate();




    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Geçersiz email adresi')
            .required('Email zorunludur'),
        password: Yup.string()
            .min(6, 'Şifre en az 6 karakter olmalıdır')
            .required('Şifre zorunludur'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
            .required('Şifre tekrarı zorunludur'),
    });

    const onSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);

            toast("Kayıt Başarılı");
        } catch (error) {
            setFieldError('email', error.message);
            error.message === "Firebase: Error (auth/email-already-in-use)." ? toast.error('Bu hesap zaten kullanımda') : toast.error(error.message);



        } finally {
            setSubmitting(false);
        }
    };



    return (
        <div className='font-arial text-bordo bg-kahve'>
            <div className='w-[100%] flex'>
                <div className='w-[50%] '>
                    <img src={Loginimg} className='h-[110vh] w-[100%] cover'></img>



                </div>

                <div className='w-[50%] h-[100%] '>
                    <div className='bg-ten w-[80%] mx-auto my-30 flex flex-col gap-8 rounded-2xl'>
                        <div className='h-[30vh] flex flex-col justify-end items-center'>
                            <div className='text-5xl p-5 '>Kayıt Ol</div>
                        </div>


                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='flex flex-col gap-3 justify-center items-center w-[100%] '>
                                        <div className='w-[70%]'>
                                            <Field type="email" id="email" name="email" className='border-2 w-[100%] py-1 rounded-2xl px-2 text-black ' placeholder='Email' />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className='w-[70%]'>

                                            <Field type="password" id="password" name="password" className='border-2  w-[100%] py-1 rounded-2xl px-2 text-black' placeholder='Şifre' />
                                            <ErrorMessage name="password" component="div" />
                                        </div>
                                        <div className='w-[70%]'>

                                            <Field type="password" id="password" name="confirmpassword" className='border-2  w-[100%] py-1 rounded-2xl px-2 text-black' placeholder='Şifre' />
                                            <ErrorMessage name="confirmpassword" component="div" />
                                        </div>

                                    </div>
                                    <div className='py-10'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <button className='px-6 text-2xl rounded-3xl py-1 border-2 cursor-pointer hover:text-black hover:border-3' type="submit" disabled={isSubmitting}>Kayıt Ol</button>
                                            <div className='flex gap-1 text-md'>
                                                <span>Zaten hesabın var mı?</span>
                                                <span className='underline text-aclacivert cursor-pointer hover:underline-offset-0' onClick={() => navigate("/Giriş")}>Giriş Yap</span>

                                            </div>

                                        </div>

                                    </div>

                                </Form>
                            )}
                        </Formik>
                        <div>

                        </div>
                    </div>

                </div>


            </div>





        </div >
    )
}


{/* 
    <div>
                                        <label>Email</label>
                                        <Field type="email" name="email" />
                                        <ErrorMessage name="email" component="div" />
                                    </div>

                                    <div>
                                        <label>Şifre</label>
                                        <Field type="password" name="password" />
                                        <ErrorMessage name="password" component="div" />
                                    </div>

                                    <div>
                                        <label>Şifre Tekrar</label>
                                        <Field type="password" name="confirmPassword" />
                                        <ErrorMessage name="confirmPassword" component="div" />
                                    </div>

                                    
    
    
    */ }
export default Register