import type { Metadata } from 'next'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import Link from 'next/link'

export const metadata : Metadata = {
    title: "ChasTrackr - Olvidé mi Password",
    description: "ChasTrackr - Crear Cuenta"
}

export default function ForgotPasswordPage() {

    return (
        <>
            <h1 className=" font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
            <p className=" text-3xl font-bold">aquí puedes<span className=" text-amber-500">reestablecerla</span></p>
            <ForgotPasswordForm />

            <nav className=" mt-10 flex flex-col space-y-4">
                <Link 
                    href='/auth/register'
                    className=" text-center text-gray-500"
                >
                    ¿Aún no tienes una cuenta? Crea una
                </Link>
                <Link 
                    href='/auth/login'
                    className=" text-center text-gray-500"
                >
                    ¿Ya tienes una cuenta? Iniciar Sesión
                </Link>
            </nav>

        </>
    )
}
