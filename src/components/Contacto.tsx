import MFContacto from "@assets/MFContacto.webp"
import { useForm } from "react-hook-form"
import type SubmitHandler from "react-hook-form"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"
import { useState } from "react"
import Loader from "@assets/Loader.svg"

type Inputs = {
    nombre: string,
    email: string,
    tel: string,
    identificacion: string,
    causa_nombre: string,
    en_que_consiste: string,
    utilizacion: string,
    monto: string,
    apoyo_externo: string,
    documentacion: FileList,
    extra: string
}

const Contacto = () => {
    const [showH3, setShowH3] = useState(false)
    const [emailSended, setEmailSended] = useState(null)
    const [sending, setSending] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(null); // Track reCAPTCHA verification

    const URL = "https://mikeflores.mx/sendEmail.php"
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm<Inputs>()
    const file = watch("documentacion")?.[0]
    const onSubmit: SubmitHandler<Inputs> = async data => {
        data.documentacion = data.documentacion[0]
        if (captchaVerified !== null) {
            setSending(true)
            const formData = new FormData()
            formData.append("nombre", data.nombre)
            formData.append('email', data.email);
            formData.append('tel', data.tel);
            formData.append('identificacion', data.identificacion);
            formData.append('causa_nombre', data.causa_nombre);
            formData.append('en_que_consiste', data.en_que_consiste);
            formData.append('utilizacion', data.utilizacion);
            formData.append('monto', data.monto);
            formData.append('apoyo_externo', data.apoyo_externo);
            formData.append('extra', data.extra);
            formData.append('documentacion', data.documentacion);
            const response = await axios.post(`${URL}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
            if (response.status === 200) {
                setEmailSended(true)
                setSending(false)
                reset()
            } else {
                setEmailSended(false)
                setSending(false)
            }
        } else {
            setEmailSended(false)
        }
    }

    const points = [
        "Educación y desarrollo de la ciencia",
        "Salud y atención médica",
        "Protección del medio ambiente",
        "Cultura, arte y deporte",
        "Apoyo a comunidades vulnerables",
        "Emprendimientos sociales",
        "Desarrollos del campo",
        "Movilidad sustentable",
    ]

    const validationFile = () => {
        if (!file) return true
        const maxSize = 15 * 1024 * 1024
        if (file.size > maxSize) {
            return "Archivo excede el tamaño*"
        }
        return true
    }

    return (
        <>
            <section id="contacto" className="relative bg-orange-50 max-[680px]:px-6">
                <div className="relative max-w-[1000px] mx-auto font-montserrat overflow-hidden max-[680px]:flex max-[680px]:flex-col-reverse">
                    <img className="relative w-full max-w-[450px] max-[768px]:max-w-[350px] -bottom-8 -z-0 max-[680px]:mx-auto" src={MFContacto.src} />
                    <div className="flex flex-col gap-1 items-center absolute max-[680px]:relative top-[100px] max-[680px]:top-0 uppercase font-black right-[100px] max-[680px]:right-0  max-[768px]:right-[50px] text-4xl max-[920px]:text-2xl text-center text-orange-500">
                        <p>¿necesitas ayuda</p>
                        <p>con alguna gestión?</p>
                        <p className="bg-orange-500 text-white w-fit py-3 px-9 rounded-2xl">¡escríbeme!</p>
                        <p>estoy para ayudarte</p>
                        <button className="relative mt-20 max-[920px]:mt-10 max-[680px]:mt-6 bg-orange-500 text-white font-medium text-2xl max-[920px]:text-sm px-16 py-2 rounded-2xl cursor-pointer" onClick={() => setShowH3(!showH3)}>
                            Quiero saber más
                            {
                                showH3 ?
                                    <svg class="absolute top-1/2 -translate-1/2 right-0 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                                    </svg>
                                    :
                                    <svg class="absolute top-1/2 -translate-1/2 right-0 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                    </svg>
                            }
                        </button>
                    </div>
                </div>
            </section>
            <section
                className={`transition-all duration-700 ease-in-out overflow-hidden bg-orange-500 ${showH3 ? "max-h-[2400px]" : "max-h-0"}`}
            >
                <div className="max-w-[1000px] mx-auto p-6 font-montserrat text-orange-50 flex flex-col gap-3 text-md">
                    <h2 className="uppercase text-center font-black text-2xl mx-14 max-[768px]:mx-0 max-[768px]:text-xl">¿necesitas ayuda con alguna gestión? ¡contáctame! estoy para servirte</h2>
                    <p>Como diputado de Nuevo León he decidido donar el 100% de mi sueldo a causas que generen un impacto positivo en nuestro estado. Mi compromiso es apoyar iniciativas y personas que trabajen por el bienestar de Nuevo León. Busco apoyar a asociaciones civiles, colectivos, proyectos y personas que necesiten ayuda para desarrollar actividades en áreas como:</p>
                    <ul className="list-disc list-inside">
                        {
                            points.map(point => <li>{point}.</li>)
                        }
                    </ul>
                    <p>Si consideras que tu causa o proyecto puede ser beneficiado, llena el siguiente formulario con información detallada.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <h3 className="uppercase font-black text-xl">datos de contacto</h3>
                        {
                            // Nombre
                        }
                        <div className="flex flex-col max-w-[300px]">
                            <label for="nombre">Nombre completo</label>
                            <input {...register("nombre", {
                                required: "Este campo es necesario*",
                                pattern: {
                                    value: /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:[\s'-][A-ZÁÉÍÓÚÑa-záéíóúñ]+)+$/,
                                    message: "Error en el campo*"
                                },
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full" type="text" id="nombre" name="nombre" placeholder="Mike Flores" />
                            {errors.nombre && <p className="text-xs mt-1">{errors.nombre.message}</p>}
                        </div>
                        {
                            // Email
                        }
                        <div className="flex flex-col max-w-[300px]">
                            <label for="email">Correo</label>
                            <input {...register("email", {
                                required: "Este campo es obligatorio*",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full" type="email" id="email" name="email" placeholder="mike.flores@gmail.com" />
                            {errors.email && <p className="text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        {
                            // Tel
                        }
                        <div className="flex flex-col max-w-[300px]">
                            <label for="tel">Teléfono</label>
                            <input {...register("tel", {
                                required: "Este campo es obligatorio*",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full" type="tel" id="tel" name="tel" placeholder="3387609645" />
                            {errors.tel && <p className="text-xs mt-1">{errors.tel.message}</p>}
                        </div>
                        <h3 className="uppercase font-black text-xl">sobre la solicitud</h3>
                        {
                            // identificacion
                        }
                        <div className="flex flex-col">
                            <label for="identificacion">¿Eres una persona, colectivo o asociación civil registrada?</label>
                            <select {...register("identificacion", {
                                required: "Este campo es obligatorio*"
                            })} className="w-fit bg-orange-50 rounded-xs text-black p-2 cursor-pointer" id="identificacion" name="identificacion">
                                <option className="cursor-pointer" value="">Seleccione la opción</option>
                                <option className="cursor-pointer" value="persona">Persona</option>
                                <option className="cursor-pointer" value="colectivo">Colectivo</option>
                                <option className="cursor-pointer" value="asociacion civil">Asociación Civil</option>
                            </select>
                            {errors.identificacion && <p className="text-xs mt-1">{errors.identificacion.message}</p>}
                        </div>
                        {
                            // Nombre causa
                        }
                        <div className="flex flex-col max-w-[500px]">
                            <label for="causa_nombre">Nombre de la causa, colectivo o asociación (si aplica):</label>
                            <input {...register("causa_nombre", {
                                pattern: {
                                    value: /^(?!\s*$)(?!\s).*$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full " type="text" id="causa_nombre" name="causa_nombre" />
                            {errors.causa_nombre && <p className="text-xs mt-1">{errors.causa_nombre.message}</p>}
                        </div>
                        {
                            // En que consiste
                        }
                        <div className="flex flex-col">
                            <label for="en_que_consiste">Explica en qué consiste la causa o proyecto que requiere apoyo:</label>
                            <textarea {...register("en_que_consiste", {
                                required: "Este campo es obligatorio*",
                                pattern: {
                                    value: /^(?!\s*$)(?!\s).*$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full " rows="4" id="en_que_consiste" name="en_que_consiste"></textarea>
                            {errors.en_que_consiste && <p className="text-xs mt-1">{errors.en_que_consiste.message}</p>}
                        </div>
                        {
                            // Utilizacion
                        }
                        <div className="flex flex-col">
                            <label for="utilizacion" className="flex flex-col">
                                <p>¿Para qué se utilizaría la donación?</p>
                                <p>(Especificar en qué se invertirá el apoyo y su impacto)</p>
                            </label>
                            <textarea {...register("utilizacion", {
                                required: "Este campo es obligatorio*",
                                pattern: {
                                    value: /^(?!\s*$)(?!\s).*$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full " rows="4" id="utilizacion" name="utilizacion"></textarea>
                            {errors.utilizacion && <p className="text-xs mt-1">{errors.utilizacion.message}</p>}
                        </div>
                        {
                            // Monto
                        }
                        <div className="flex flex-col">
                            <label for="monto">Monto aproximado que se necesita y cómo se invertirá dicho dinero:</label>
                            <textarea {...register("monto", {
                                required: "Este campo es obligatorio*",
                                pattern: {
                                    value: /^(?!\s*$)(?!\s).*$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full " rows="4" id="monto" name="monto"></textarea>
                            {errors.monto && <p className="text-xs mt-1">{errors.monto.message}</p>}
                        </div>
                        {
                            // Apoyo externo
                        }
                        <div className="flex flex-col">
                            <label for="apoyo_externo">¿Has recibido apoyo de otras fuentes? Si sí, ¿cuáles y de qué manera?</label>
                            <textarea {...register("apoyo_externo", {
                                pattern: {
                                    value: /^(?!\s*$)(?!\s).*$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full " rows="4" id="apoyo_externo" name="apoyo_externo"></textarea>
                            {errors.apoyo_externo && <p className="text-xs mt-1">{errors.apoyo_externo.message}</p>}
                        </div>
                        {
                            // Documentacion
                        }
                        <div className="flex flex-col gap-4">
                            <label htmlFor="documentacion" className="mb-1">
                                <p>Documentación Oficial (si aplica)</p>
                                <p className="text-xs font-bold">Máximo 15 MB</p>
                            </label>
                            <div className="relative w-fit">
                                <label
                                    htmlFor="documentacion"
                                    className="cursor-pointer text-white p-2 border-2 rounded-xs transition-colors hover:bg-orange-50 hover:text-orange-500"
                                >
                                    {
                                        file ? "Click para editar el archivo" : "Click para subir archivo"
                                    }
                                </label>
                                <input
                                    type="file"
                                    id="documentacion"
                                    name="documentacion"
                                    {...register("documentacion", {
                                        required: "Este campo es obligatorio*",
                                        validate: validationFile
                                    })}
                                    className="absolute left-0 top-0 w-full h-full cursor-pointer invisible"
                                />
                            </div>
                            {errors.documentacion && <p className="text-xs mt-1">{errors.documentacion.message}</p>}
                            {file && !errors.documentacion && (
                                <p className="text-sm text-orange-50">
                                    Archivo seleccionado: <span className="font-medium text-orange-50">{file.name}</span>
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label for="extra">¿Algo más que debamos saber sobre tu solicitud?</label>
                            <textarea {...register("extra", {
                                pattern: {
                                    value: /^(?!\s*$)(?!\s).*$/,
                                    message: "Error en el campo*"
                                }
                            })} className="bg-orange-50 rounded-xs text-black p-1 w-full " rows="4" id="extra" name="extra"></textarea>
                            {errors.extra && <p className="text-xs mt-1">{errors.extra.message}</p>}
                        </div>
                        <ReCAPTCHA sitekey="6LfoMBsrAAAAAPseK7K0ul-q-TEMGgVHw-BZ4ppX" hl="es-419" onChange={(value) => setCaptchaVerified(value)} />
                        {
                            emailSended === true ?
                                <p className="w-full bg-green-600 p-2 text-md rounded-sm">Datos enviados correctamente!</p>
                                :
                                emailSended === false ?
                                    <p className="w-full bg-red-600 p-2 text-md rounded-sm">Error enviando los datos</p>
                                    : ""
                        }
                        <div className="flex justify-end">
                            {
                                !sending ?
                                    <button className="cursor-pointer bg-transparent border-2 rounded-xs text-xl px-9 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors" type="submit">Enviar</button>
                                    :
                                    <button disabled className="border-2 rounded-xs text-xl px-9 py-2" type="submit">Enviando...</button>
                            }
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacto
